import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokelist',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pokelist',
    loadChildren: () => import('./pokelist/pokelist.module').then( m => m.PokelistPageModule)
  },
  {
    path: 'regiones',
    loadChildren: () => import('./regiones/regiones.module').then( m => m.RegionesPageModule)
  },
  {
    path: 'p-pikachu',
    loadChildren: () => import('./p-pikachu/p-pikachu.module').then( m => m.PPikachuPageModule)
  },
  {
    path: 'pokeinfo/:id',
    loadChildren: () => import('./pokeinfo/pokeinfo.module').then( m => m.PokeinfoPageModule)
  },
  {
    path: 'regioninfo/:id',
    loadChildren: () => import('./regioninfo/regioninfo.module').then( m => m.RegioninfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
