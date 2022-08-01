import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeinfoPage } from './pokeinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PokeinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeinfoPageRoutingModule {}
