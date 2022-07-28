import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionAlolaPageRoutingModule } from './region-alola-routing.module';

import { RegionAlolaPage } from './region-alola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionAlolaPageRoutingModule
  ],
  declarations: [RegionAlolaPage]
})
export class RegionAlolaPageModule {}
