import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PClefairyPage } from './p-clefairy.page';

const routes: Routes = [
  {
    path: '',
    component: PClefairyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PClefairyPageRoutingModule {}
