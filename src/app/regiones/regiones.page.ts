import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.page.html',
  styleUrls: ['./regiones.page.scss'],
})
export class RegionesPage implements OnInit {
   regiones : any =[];
   
  constructor( private router: Router, private http: HttpClient) { }

  ngOnInit() {
  this.getRegiones().subscribe( 
    res =>{ console.log("res: ", res) 
    this.regiones = res;
           
  })
  }
  
  getRegiones(){
    return this.http.get("assets/pokeinfo/regiones.json")
    .pipe( 
      map((res : any) => {return res.region;})
         )
    
  }

}
