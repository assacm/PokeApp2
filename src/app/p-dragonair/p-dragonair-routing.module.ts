import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PDragonairPage } from './p-dragonair.page';

const routes: Routes = [
  {
    path: '',
    component: PDragonairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PDragonairPageRoutingModule {}
