import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
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
    path: 'p-bulbasaur',
    loadChildren: () => import('./p-bulbasaur/p-bulbasaur.module').then( m => m.PBulbasaurPageModule)
  },
  {
    path: 'p-charmander',
    loadChildren: () => import('./p-charmander/p-charmander.module').then( m => m.PCharmanderPageModule)
  },
  {
    path: 'p-squirtle',
    loadChildren: () => import('./p-squirtle/p-squirtle.module').then( m => m.PSquirtlePageModule)
  },
  {
    path: 'p-butterfree',
    loadChildren: () => import('./p-butterfree/p-butterfree.module').then( m => m.PButterfreePageModule)
  },
  {
    path: 'p-pikachu',
    loadChildren: () => import('./p-pikachu/p-pikachu.module').then( m => m.PPikachuPageModule)
  },
  {
    path: 'p-clefairy',
    loadChildren: () => import('./p-clefairy/p-clefairy.module').then( m => m.PClefairyPageModule)
  },
  {
    path: 'p-meowth',
    loadChildren: () => import('./p-meowth/p-meowth.module').then( m => m.PMeowthPageModule)
  },
  {
    path: 'p-alakazam',
    loadChildren: () => import('./p-alakazam/p-alakazam.module').then( m => m.PAlakazamPageModule)
  },
  {
    path: 'p-onix',
    loadChildren: () => import('./p-onix/p-onix.module').then( m => m.POnixPageModule)
  },
  {
    path: 'p-magnemite',
    loadChildren: () => import('./p-magnemite/p-magnemite.module').then( m => m.PMagnemitePageModule)
  },
  {
    path: 'p-gengar',
    loadChildren: () => import('./p-gengar/p-gengar.module').then( m => m.PGengarPageModule)
  },
  {
    path: 'p-dragonair',
    loadChildren: () => import('./p-dragonair/p-dragonair.module').then( m => m.PDragonairPageModule)
  },
  {
    path: 'p-snorlax',
    loadChildren: () => import('./p-snorlax/p-snorlax.module').then( m => m.PSnorlaxPageModule)
  },
  {
    path: 'p-togepi',
    loadChildren: () => import('./p-togepi/p-togepi.module').then( m => m.PTogepiPageModule)
  },
  {
    path: 'p-ditto',
    loadChildren: () => import('./p-ditto/p-ditto.module').then( m => m.PDittoPageModule)
  },
  {
    path: 'p-chikorita',
    loadChildren: () => import('./p-chikorita/p-chikorita.module').then( m => m.PChikoritaPageModule)
  },
  {
    path: 'region-kanto',
    loadChildren: () => import('./region-kanto/region-kanto.module').then( m => m.RegionKantoPageModule)
  },
  {
    path: 'region-islas',
    loadChildren: () => import('./region-islas/region-islas.module').then( m => m.RegionIslasPageModule)
  },
  {
    path: 'region-johto',
    loadChildren: () => import('./region-johto/region-johto.module').then( m => m.RegionJohtoPageModule)
  },
  {
    path: 'region-hoenn',
    loadChildren: () => import('./region-hoenn/region-hoenn.module').then( m => m.RegionHoennPageModule)
  },
  {
    path: 'region-teselia',
    loadChildren: () => import('./region-teselia/region-teselia.module').then( m => m.RegionTeseliaPageModule)
  },
  {
    path: 'region-kalos',
    loadChildren: () => import('./region-kalos/region-kalos.module').then( m => m.RegionKalosPageModule)
  },
  {
    path: 'region-alola',
    loadChildren: () => import('./region-alola/region-alola.module').then( m => m.RegionAlolaPageModule)
  },
  {
    path: 'region-galar',
    loadChildren: () => import('./region-galar/region-galar.module').then( m => m.RegionGalarPageModule)
  },
  {
    path: 'region-hisui',
    loadChildren: () => import('./region-hisui/region-hisui.module').then( m => m.RegionHisuiPageModule)
  },
  {
    path: 'region-archi-naranja',
    loadChildren: () => import('./region-archi-naranja/region-archi-naranja.module').then( m => m.RegionArchiNaranjaPageModule)
  },
  {
    path: 'region-islas-decolora',
    loadChildren: () => import('./region-islas-decolora/region-islas-decolora.module').then( m => m.RegionIslasDecoloraPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
