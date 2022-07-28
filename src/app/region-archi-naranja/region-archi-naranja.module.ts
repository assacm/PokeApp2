import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionArchiNaranjaPageRoutingModule } from './region-archi-naranja-routing.module';

import { RegionArchiNaranjaPage } from './region-archi-naranja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionArchiNaranjaPageRoutingModule
  ],
  declarations: [RegionArchiNaranjaPage]
})
export class RegionArchiNaranjaPageModule {}
