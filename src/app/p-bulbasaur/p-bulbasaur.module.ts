import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PBulbasaurPageRoutingModule } from './p-bulbasaur-routing.module';

import { PBulbasaurPage } from './p-bulbasaur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PBulbasaurPageRoutingModule
  ],
  declarations: [PBulbasaurPage]
})
export class PBulbasaurPageModule {}
