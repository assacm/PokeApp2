import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Inicio', url: '/p-squirtle', icon: 'home' },
    { title: 'Regiones', url: '/regiones', icon: 'map' },
  ];
  
  constructor() {}
}
