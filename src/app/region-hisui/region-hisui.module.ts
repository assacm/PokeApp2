import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionHisuiPageRoutingModule } from './region-hisui-routing.module';

import { RegionHisuiPage } from './region-hisui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionHisuiPageRoutingModule
  ],
  declarations: [RegionHisuiPage]
})
export class RegionHisuiPageModule {}
