import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.page.html',
  styleUrls: ['./pokeinfo.page.scss'],
})
export class PokeinfoPage implements OnInit {
  id:any;
  numero:string;
  nombre:string;
  especie:string;
  tipo:any=[];
  habilidad:string;
  oculta:string;
  region:String;
  descripcion:string;
  ruta:any=[];
  icono:string;
  pokemons:any=[]; 
  idRegion:any;
  constructor(private activatedRoute : ActivatedRoute,  private http: HttpClient) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id", this.id)
    this.getPokemons().subscribe( 
      res =>{ console.log("res: ", res) 
      this.pokemons = res;
      this.numero= this.pokemons[this.id].numero;
      this.nombre= this.pokemons[this.id].nombre;
      this.especie= this.pokemons[this.id].especie;
      this.tipo= this.pokemons[this.id].tipo;
      this.habilidad= this.pokemons[this.id].habilidad;
      this.oculta= this.pokemons[this.id].oculta;
      this.region= this.pokemons[this.id].region;
      this.descripcion=this.pokemons[this.id].descripcion;
      this.ruta=this.pokemons[this.id].ruta;
      this.icono= this.pokemons[this.id].icono;
      this.idRegion=this.selectedRegion(this.region);
            })
  }
  getPokemons(){
    return this.http.get("assets/pokeinfo/pokemons.json")
    .pipe( 
      map((res : any) => {return res.poke;})
         )

  }
  selectedRegion(region:String){
    switch(region){
      case "Kanto":{this.idRegion=0; break;}
      case "Johto":{this.idRegion=1; break;}
      case "Hoenn":{this.idRegion=2; break;}
      case "Sinnoh":{this.idRegion=3; break;}
      case "Teselia":{this.idRegion=4; break;}
      case "Kalos":{this.idRegion=5; break;}
      case "Alola":{this.idRegion=6; break;}
      case "Galar":{this.idRegion=7; break;}
    }
    return this.idRegion;
  }
}
