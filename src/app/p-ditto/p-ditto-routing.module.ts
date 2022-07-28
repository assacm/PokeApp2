import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PDittoPage } from './p-ditto.page';

const routes: Routes = [
  {
    path: '',
    component: PDittoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PDittoPageRoutingModule {}
