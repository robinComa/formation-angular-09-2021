import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialSharedModule } from 'src/app/material-shared/material-shared.module';
import { AnimalService } from '../shared-animal/animal.service';

import { AnimalPageComponent } from './animal-page.component';

describe('AnimalPageComponent', () => {
  let component: AnimalPageComponent;
  let fixture: ComponentFixture<AnimalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialSharedModule
      ],
      declarations: [ AnimalPageComponent ],
      providers: [
        AnimalService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
