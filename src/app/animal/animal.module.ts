import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { SharedAnimalModule } from './shared-animal/shared-animal.module';
import { AnimalsPageComponent } from './animals-page/animals-page.component';
import { AnimalPageComponent } from './animal-page/animal-page.component';
import { HttpPerformanceInterceptor } from './shared-animal/http-performance.interceptor';
import { AnimalLayoutComponent } from './animal-layout/animal-layout.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { DeleteConfirmationDialogComponent } from './animal-item/delete-confirmation-dialog/delete-confirmation-dialog.component';

@NgModule({
  declarations: [
    AnimalItemComponent,
    AnimalsPageComponent,
    AnimalPageComponent,
    AnimalLayoutComponent,
    AnimalFormComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AnimalRoutingModule,
    MaterialSharedModule,
    SharedAnimalModule
  ],
  exports: [],
  providers: [
    DatePipe, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpPerformanceInterceptor,
      multi: true
    }
  ]
})
export class AnimalModule { }
