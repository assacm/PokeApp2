import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PDittoPageRoutingModule } from './p-ditto-routing.module';

import { PDittoPage } from './p-ditto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PDittoPageRoutingModule
  ],
  declarations: [PDittoPage]
})
export class PDittoPageModule {}
