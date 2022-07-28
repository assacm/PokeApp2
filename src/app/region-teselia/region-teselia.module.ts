import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionTeseliaPageRoutingModule } from './region-teselia-routing.module';

import { RegionTeseliaPage } from './region-teselia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionTeseliaPageRoutingModule
  ],
  declarations: [RegionTeseliaPage]
})
export class RegionTeseliaPageModule {}
