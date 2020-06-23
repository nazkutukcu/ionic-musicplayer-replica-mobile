import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pop',
    loadChildren: () => import('./pop/pop.module').then( m => m.PopPageModule)
  },
  {
    path: 'pop',
    loadChildren: () => import('./pop/pop.module').then( m => m.PopPageModule)
  },
  {
    path: 'rock',
    loadChildren: () => import('./rock/rock.module').then( m => m.RockPageModule)
  },
  {
    path: 'indie',
    loadChildren: () => import('./indie/indie.module').then( m => m.IndiePageModule)
  },
  {
    path: 'jazz',
    loadChildren: () => import('./jazz/jazz.module').then( m => m.JazzPageModule)
  },
  {
    path: 'hiphop',
    loadChildren: () => import('./hiphop/hiphop.module').then( m => m.HiphopPageModule)
  },
  {
    path: 'uyku',
    loadChildren: () => import('./uyku/uyku.module').then( m => m.UykuPageModule)
  },
  {
    path: 'yeni',
    loadChildren: () => import('./yeni/yeni.module').then( m => m.YeniPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
