import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PButterfreePageRoutingModule } from './p-butterfree-routing.module';

import { PButterfreePage } from './p-butterfree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PButterfreePageRoutingModule
  ],
  declarations: [PButterfreePage]
})
export class PButterfreePageModule {}
