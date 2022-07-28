import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionHoennPageRoutingModule } from './region-hoenn-routing.module';

import { RegionHoennPage } from './region-hoenn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionHoennPageRoutingModule
  ],
  declarations: [RegionHoennPage]
})
export class RegionHoennPageModule {}
