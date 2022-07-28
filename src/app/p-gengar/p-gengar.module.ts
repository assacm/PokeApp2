import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PGengarPageRoutingModule } from './p-gengar-routing.module';

import { PGengarPage } from './p-gengar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PGengarPageRoutingModule
  ],
  declarations: [PGengarPage]
})
export class PGengarPageModule {}
