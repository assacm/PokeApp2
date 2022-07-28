import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionKalosPageRoutingModule } from './region-kalos-routing.module';

import { RegionKalosPage } from './region-kalos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionKalosPageRoutingModule
  ],
  declarations: [RegionKalosPage]
})
export class RegionKalosPageModule {}
