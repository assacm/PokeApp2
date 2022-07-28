import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PMeowthPage } from './p-meowth.page';

const routes: Routes = [
  {
    path: '',
    component: PMeowthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PMeowthPageRoutingModule {}
