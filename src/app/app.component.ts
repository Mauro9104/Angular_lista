import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  producto = [
    { id: 1, nombre: 'Manzana', precio: "$ 500" },
    { id: 2, nombre: 'Pera', precio:"$ 1000"},
    { id: 3, nombre: 'Banano', precio: "$ 2000" },
    { id: 4, nombre: 'Papaya', precio: "$ 5000" },
    { id: 5, nombre: 'Nuez', precio: "$ 8000" },
    { id: 6, nombre: 'Cilantro', precio: "$ 700" }
  ];
}

