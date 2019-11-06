import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFormTest';
  showDiv:boolean = false;
  contactForm: FormGroup;
  contact = {
    nombre: '',
    email: '',
    texto:''
  };
  submitted = false;
  texto: string = "Mostrar elemento";

  constructor() {
    this.createForm();
  }

  createForm(): void{
    this.contactForm = new FormGroup({
      'nombre': new FormControl(this.contact.nombre, [
        Validators.required,
        Validators.minLength(3)
      ]),
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      'texto': new FormControl(this.contact.texto, Validators.required)
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }


  validacion(dato1:number, dato2:number): boolean {
    console.log(dato1);
    console.log(dato2);
    if(this.showDiv == false){
      console.log("SIUUUUUW");
      this.texto = "Ocultar Elemento"
      return this.showDiv= true;
    }else{
      this.texto = "Mostarr Elemento"
      return this.showDiv=false
    }
  }

}
