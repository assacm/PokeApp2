import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegioninfoPageRoutingModule } from './regioninfo-routing.module';

import { RegioninfoPage } from './regioninfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegioninfoPageRoutingModule
  ],
  declarations: [RegioninfoPage]
})
export class RegioninfoPageModule {}
