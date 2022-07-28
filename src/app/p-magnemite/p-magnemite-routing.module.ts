import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PMagnemitePage } from './p-magnemite.page';

const routes: Routes = [
  {
    path: '',
    component: PMagnemitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PMagnemitePageRoutingModule {}
