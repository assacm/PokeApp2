import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PDragonairPageRoutingModule } from './p-dragonair-routing.module';

import { PDragonairPage } from './p-dragonair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PDragonairPageRoutingModule
  ],
  declarations: [PDragonairPage]
})
export class PDragonairPageModule {}
