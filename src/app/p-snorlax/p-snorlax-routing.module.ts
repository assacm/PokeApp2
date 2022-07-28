import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PSnorlaxPage } from './p-snorlax.page';

const routes: Routes = [
  {
    path: '',
    component: PSnorlaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PSnorlaxPageRoutingModule {}
