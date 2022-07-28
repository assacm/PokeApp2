import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { POnixPageRoutingModule } from './p-onix-routing.module';

import { POnixPage } from './p-onix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    POnixPageRoutingModule
  ],
  declarations: [POnixPage]
})
export class POnixPageModule {}
