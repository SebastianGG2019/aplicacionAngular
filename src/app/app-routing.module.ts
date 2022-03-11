import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'estadisticas',
    loadChildren: () => import('../app/estadisticas/estadisticas.module').then(m => m.EstadisticasModule)
  },
  {
    path: 'twitter',
    loadChildren: () => import('../app/twitter/twitter.module').then(m => m.TwitterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
