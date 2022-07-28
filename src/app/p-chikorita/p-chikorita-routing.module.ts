import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PChikoritaPage } from './p-chikorita.page';

const routes: Routes = [
  {
    path: '',
    component: PChikoritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PChikoritaPageRoutingModule {}
