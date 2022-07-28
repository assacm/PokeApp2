import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PAlakazamPage } from './p-alakazam.page';

const routes: Routes = [
  {
    path: '',
    component: PAlakazamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PAlakazamPageRoutingModule {}
