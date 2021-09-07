import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalLayoutComponent } from './animal-layout/animal-layout.component';
import { AnimalPageComponent } from './animal-page/animal-page.component';
import { AnimalsPageComponent } from './animals-page/animals-page.component';
import { AnimalGuard } from './shared-animal/animal.guard';
import { AnimalResolver } from './shared-animal/animal.resolver';

const routes: Routes = [{
  path: '',
  component: AnimalLayoutComponent,
  children: [{
    path: '',
    component: AnimalsPageComponent
  }, {
    path: 'form',
    children: [{
      path: '',
      component: AnimalFormComponent
    }, {
      path: ':id',
      component: AnimalFormComponent
    }]
  }, {
    path: ':id',
    component: AnimalPageComponent,
    canActivate: [AnimalGuard],
    resolve: {
      animal: AnimalResolver
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
