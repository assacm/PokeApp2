import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PMeowthPageRoutingModule } from './p-meowth-routing.module';

import { PMeowthPage } from './p-meowth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PMeowthPageRoutingModule
  ],
  declarations: [PMeowthPage]
})
export class PMeowthPageModule {}
