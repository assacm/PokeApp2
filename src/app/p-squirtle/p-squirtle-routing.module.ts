import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PSquirtlePage } from './p-squirtle.page';

const routes: Routes = [
  {
    path: '',
    component: PSquirtlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PSquirtlePageRoutingModule {}
