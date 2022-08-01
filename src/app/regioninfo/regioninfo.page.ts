import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-regioninfo',
  templateUrl: './regioninfo.page.html',
  styleUrls: ['./regioninfo.page.scss'],
})
export class RegioninfoPage implements OnInit {
  id:any 
  regiones:any =[];
  nombre: string;
   descripcion: string;
   ruta:string;
  constructor(private activatedRoute : ActivatedRoute,  private http: HttpClient) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id", this.id)
    this.getRegiones().subscribe( 
      res =>{ console.log("res: ", res) 
      this.regiones = res;
      this.nombre= this.regiones[this.id].nombre;
      this.descripcion=this.regiones[this.id].descripcion;
      this.ruta=this.regiones[this.id].ruta;
            })
  }

  getRegiones(){
    return this.http.get("assets/pokeinfo/regiones.json")
    .pipe( 
      map((res : any) => {return res.region;})
         )
    
  }

}
