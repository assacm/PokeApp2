import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PSnorlaxPageRoutingModule } from './p-snorlax-routing.module';

import { PSnorlaxPage } from './p-snorlax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PSnorlaxPageRoutingModule
  ],
  declarations: [PSnorlaxPage]
})
export class PSnorlaxPageModule {}
