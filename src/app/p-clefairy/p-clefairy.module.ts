import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PClefairyPageRoutingModule } from './p-clefairy-routing.module';

import { PClefairyPage } from './p-clefairy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PClefairyPageRoutingModule
  ],
  declarations: [PClefairyPage]
})
export class PClefairyPageModule {}
