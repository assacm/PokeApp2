import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionKantoPageRoutingModule } from './region-kanto-routing.module';

import { RegionKantoPage } from './region-kanto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionKantoPageRoutingModule
  ],
  declarations: [RegionKantoPage]
})
export class RegionKantoPageModule {}
