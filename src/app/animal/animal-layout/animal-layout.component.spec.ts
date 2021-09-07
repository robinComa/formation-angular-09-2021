import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalLayoutComponent } from './animal-layout.component';

describe('AnimalLayoutComponent', () => {
  let component: AnimalLayoutComponent;
  let fixture: ComponentFixture<AnimalLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
