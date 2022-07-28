import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PSquirtlePageRoutingModule } from './p-squirtle-routing.module';

import { PSquirtlePage } from './p-squirtle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PSquirtlePageRoutingModule
  ],
  declarations: [PSquirtlePage]
})
export class PSquirtlePageModule {}
