import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  imports: [],
  templateUrl: './semaforo.html',
  styleUrl: './semaforo.css'
})
export class Semaforo {

  numero:number=0;



  incrementar(){
    this.numero++;
  }





}
