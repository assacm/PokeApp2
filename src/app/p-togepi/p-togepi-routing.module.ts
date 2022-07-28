import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PTogepiPage } from './p-togepi.page';

const routes: Routes = [
  {
    path: '',
    component: PTogepiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PTogepiPageRoutingModule {}
