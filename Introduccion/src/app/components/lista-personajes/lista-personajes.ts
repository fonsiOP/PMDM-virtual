import { Component } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { TarjetaPersonaje } from "../tarjeta-personaje/tarjeta-personaje";

@Component({
  selector: 'app-lista-personajes',
  imports: [TarjetaPersonaje],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})
export class ListaPersonajes {
  personajes: Personaje[] = [ 
    { nombre: 'juan', clase: 'guerrero', nivel: 25, imagen:'/images/brujo.jpg' },
    { nombre: 'Jalinda', clase: 'arquero', nivel: 30, imagen:'/images/jennefer.png' },
    { nombre: 'Jenifer', clase: 'mago', nivel: 50, imagen:'/images/jennefer.png' },
    { nombre: 'Gerald', clase: 'brujo', nivel: 51, imagen:'/images/brujo.jpg' },  
  
  ];

}
