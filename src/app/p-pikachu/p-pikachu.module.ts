import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PPikachuPageRoutingModule } from './p-pikachu-routing.module';

import { PPikachuPage } from './p-pikachu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PPikachuPageRoutingModule
  ],
  declarations: [PPikachuPage]
})
export class PPikachuPageModule {}
