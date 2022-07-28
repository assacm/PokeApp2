import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PMagnemitePageRoutingModule } from './p-magnemite-routing.module';

import { PMagnemitePage } from './p-magnemite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PMagnemitePageRoutingModule
  ],
  declarations: [PMagnemitePage]
})
export class PMagnemitePageModule {}
