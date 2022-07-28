import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PChikoritaPageRoutingModule } from './p-chikorita-routing.module';

import { PChikoritaPage } from './p-chikorita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PChikoritaPageRoutingModule
  ],
  declarations: [PChikoritaPage]
})
export class PChikoritaPageModule {}
