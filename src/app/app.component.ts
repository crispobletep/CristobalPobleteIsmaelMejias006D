import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {}

  componentes : Componente[] =[
    {
      icon:'book-outline',
      name:'Registro',
      redirecTo:'/registro'
    },
    {
      icon:'server-outline',
      name:'Categorias',
      redirecTo:'/categorias'

    },

  ]
}
