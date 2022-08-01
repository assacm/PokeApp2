import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.page.html',
  styleUrls: ['./pokelist.page.scss'],
})
export class PokelistPage implements OnInit {
  pokemons:any=[]

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getPokemons().subscribe( 
      res =>{ console.log("res: ", res) 
      this.pokemons = res;
             
    })
  }
  
  getPokemons(){
    return this.http.get("assets/pokeinfo/pokemons.json")
    .pipe( 
      map((res : any) => {return res.poke;})
         )

  }
}
