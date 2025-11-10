import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-tarjeta-personaje',
  imports: [],
  templateUrl: './tarjeta-personaje.html',
  styleUrl: './tarjeta-personaje.css'
})
export class TarjetaPersonaje {

  @Input() personajeEnviado!:Personaje;

}
