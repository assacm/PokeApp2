import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PBulbasaurPage } from './p-bulbasaur.page';

const routes: Routes = [
  {
    path: '',
    component: PBulbasaurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PBulbasaurPageRoutingModule {}
