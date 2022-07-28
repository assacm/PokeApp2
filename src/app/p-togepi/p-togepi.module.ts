import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PTogepiPageRoutingModule } from './p-togepi-routing.module';

import { PTogepiPage } from './p-togepi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PTogepiPageRoutingModule
  ],
  declarations: [PTogepiPage]
})
export class PTogepiPageModule {}
