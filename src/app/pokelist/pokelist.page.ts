import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.page.html',
  styleUrls: ['./pokelist.page.scss'],
})
export class PokelistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pikapage(){
    this.router.navigate(['/p-pikachu'])
  }
  alakazamp(){
    this.router.navigate(['/p-alakazam'])
  }
  bulbasaur(){
    this.router.navigate(['/p-bulbasaur'])
  }
  Squirtle(){
    this.router.navigate(['/p-squirtle'])
  }
  butterfree(){
    this.router.navigate(['/p-butterfree'])

  }
  clefairy(){
    this.router.navigate(['/p-clefairy'])

  }
  meowth(){
    this.router.navigate(['/p-meowth'])

  }
  charmander(){
    this.router.navigate(['/p-charmander'])
  }
  onix(){
    this.router.navigate(['/p-onix'])
  }
  magnamite(){this.router.navigate(['/p-magnamite'])}
  gengar(){this.router.navigate(['/p-gengar'])}
  dragonair(){this.router.navigate(['/p-dragonair'])}
  snorlax(){this.router.navigate(['/p-snorlax'])}
  togepi(){this.router.navigate(['/p-togepi'])}
  ditto(){this.router.navigate(['/p-ditto'])}
  chikorita(){this.router.navigate(['/p-chikorita'])}
}
