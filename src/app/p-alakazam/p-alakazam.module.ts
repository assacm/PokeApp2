import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PAlakazamPageRoutingModule } from './p-alakazam-routing.module';

import { PAlakazamPage } from './p-alakazam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PAlakazamPageRoutingModule
  ],
  declarations: [PAlakazamPage]
})
export class PAlakazamPageModule {}
