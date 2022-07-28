import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PCharmanderPageRoutingModule } from './p-charmander-routing.module';

import { PCharmanderPage } from './p-charmander.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PCharmanderPageRoutingModule
  ],
  declarations: [PCharmanderPage]
})
export class PCharmanderPageModule {}
