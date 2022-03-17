import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
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
