import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionIslasDecoloraPageRoutingModule } from './region-islas-decolora-routing.module';

import { RegionIslasDecoloraPage } from './region-islas-decolora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionIslasDecoloraPageRoutingModule
  ],
  declarations: [RegionIslasDecoloraPage]
})
export class RegionIslasDecoloraPageModule {}
