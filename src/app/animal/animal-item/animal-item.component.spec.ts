import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialSharedModule } from 'src/app/material-shared/material-shared.module';

import { AnimalItemComponent } from './animal-item.component';

describe('AnimalItemComponent', () => {
  let component: AnimalItemComponent;
  let fixture: ComponentFixture<AnimalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialSharedModule,
        TranslateModule.forRoot()
      ],
      declarations: [ AnimalItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
