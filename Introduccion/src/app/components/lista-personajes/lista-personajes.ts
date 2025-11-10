import { Component } from '@angular/core';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-lista-personajes',
  imports: [],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})
export class ListaPersonajes {
  personajes: Personaje[] = [ 
    { nombre: 'juan', clase: 'guerrero', nivel: 25, imagen:'ruta de la imagen' },
    { nombre: 'Jalinda', clase: 'arquero', nivel: 30, imagen:'ruta de la imagen' },
    { nombre: 'Jenifer', clase: 'mago', nivel: 50, imagen:'ruta de la imagen' },
    { nombre: 'Gerald', clase: 'brujo', nivel: 51, imagen:'ruta de la imagen' },  
  
  ];

}
