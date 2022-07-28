import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PCharmanderPage } from './p-charmander.page';

const routes: Routes = [
  {
    path: '',
    component: PCharmanderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PCharmanderPageRoutingModule {}
