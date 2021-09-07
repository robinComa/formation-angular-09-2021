import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialSharedModule } from 'src/app/material-shared/material-shared.module';
import { AnimalService } from '../shared-animal/animal.service';

import { AnimalsPageComponent } from './animals-page.component';

describe('AnimalsPageComponent', () => {
  let component: AnimalsPageComponent;
  let fixture: ComponentFixture<AnimalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialSharedModule,
        TranslateModule.forRoot()
      ],
      declarations: [ AnimalsPageComponent ],
      providers: [AnimalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
