import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeinfoPageRoutingModule } from './pokeinfo-routing.module';

import { PokeinfoPage } from './pokeinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeinfoPageRoutingModule
  ],
  declarations: [PokeinfoPage]
})
export class PokeinfoPageModule {}
