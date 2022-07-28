import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionJohtoPageRoutingModule } from './region-johto-routing.module';

import { RegionJohtoPage } from './region-johto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionJohtoPageRoutingModule
  ],
  declarations: [RegionJohtoPage]
})
export class RegionJohtoPageModule {}
