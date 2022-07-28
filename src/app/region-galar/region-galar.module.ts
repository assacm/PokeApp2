import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionGalarPageRoutingModule } from './region-galar-routing.module';

import { RegionGalarPage } from './region-galar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionGalarPageRoutingModule
  ],
  declarations: [RegionGalarPage]
})
export class RegionGalarPageModule {}
