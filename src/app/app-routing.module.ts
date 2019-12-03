import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cover-page',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('./toc/toc.module').then( m => m.TocPageModule)
  },
  {
    path: 'cover-page',
    loadChildren: () => import('./cover-page/cover-page.module').then( m => m.CoverPagePageModule)
  },
  {
    path: 'chapter1',
    loadChildren: () => import('./chapter1/chapter1.module').then( m => m.Chapter1PageModule)
  },
  {
    path: 'chapter2',
    loadChildren: () => import('./chapter2/chapter2.module').then( m => m.Chapter2PageModule)
  },
  {
    path: 'chapter3',
    loadChildren: () => import('./chapter3/chapter3.module').then( m => m.Chapter3PageModule)
  },
  {
    path: 'chapter4',
    loadChildren: () => import('./chapter4/chapter4.module').then( m => m.Chapter4PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
