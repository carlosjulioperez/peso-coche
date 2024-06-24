import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'salida-limpieza',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/salida-limpieza/master/master.module').then( m => m.MasterPageModule),
      },
      {
        path: 'detail',
        loadChildren: () => import('./pages/salida-limpieza/detail/detail.module').then( m => m.DetailPageModule)
      },
    ]
  },
  {
    path: 'transferencia',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/transferencia/master/master.module').then( m => m.MasterPageModule),
      },
      {
        path: 'detail',
        loadChildren: () => import('./pages/transferencia/detail/detail.module').then( m => m.DetailPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
