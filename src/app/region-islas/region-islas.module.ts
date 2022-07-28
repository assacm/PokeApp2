import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionIslasPageRoutingModule } from './region-islas-routing.module';

import { RegionIslasPage } from './region-islas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionIslasPageRoutingModule
  ],
  declarations: [RegionIslasPage]
})
export class RegionIslasPageModule {}
