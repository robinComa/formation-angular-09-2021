import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'animals',
  loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule)
}, {
  path: '',
  redirectTo: 'animals',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
