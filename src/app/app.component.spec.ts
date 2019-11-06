import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularFormTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AngularFormTest');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('AngularFormTest');
  });

  it('debería llamar al método onSubmit', async(() => {
    fixture.detectChanges();
    spyOn(app, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(app.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it('el formulario deberia ser invalido', async(() => {
    app.contactForm.controls['email'].setValue('');
    app.contactForm.controls['nombre'].setValue('');
    app.contactForm.controls['texto'].setValue('');
    expect(app.contactForm.valid).toBeFalsy();
  }));

  it('el formulario deberia ser valido', async(() => {
    app.contactForm.controls['email'].setValue('andres@gmail.com');
    app.contactForm.controls['nombre'].setValue('Andres');
    app.contactForm.controls['texto'].setValue('texto');
    expect(app.contactForm.valid).toBeTruthy();
  }));


});
