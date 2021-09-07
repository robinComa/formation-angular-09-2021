import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from './animal.service';
import { MailtoDirective } from './mailto.directive';
import { FormatPhonePipe } from './format-phone.pipe';
import { AnimalResolver } from './animal.resolver';
import { AnimalGuard } from './animal.guard';

@NgModule({
  declarations: [
    MailtoDirective,
    FormatPhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MailtoDirective,
    FormatPhonePipe
  ],
  providers: [
    AnimalService,
    AnimalResolver,
    AnimalGuard
  ]
})
export class SharedAnimalModule { }
