import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  formulario: FormGroup;

  constructor(private fb: FormBuilder){
    this.formulario= this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)] ],
        email:['', [Validators.required, Validators.email]]
      });
  }

  enviar(){
    if(this.formulario.invalid){
      console.log("El formulario contiene errores.")
    }else{
      console.log(this.formulario.value);
    }
    
  }

  resetear(){
    this.formulario.reset({
      nombre: '',
      email: ''
    });
  }


}
