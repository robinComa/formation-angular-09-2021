import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MaterialSharedModule } from 'src/app/material-shared/material-shared.module';

import { AnimalResolver } from './animal.resolver';
import { AnimalService } from './animal.service';

describe('AnimalResolver', () => {
  let resolver: AnimalResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialSharedModule
      ],
      providers: [
        AnimalService,
        AnimalResolver
      ]
    });
    resolver = TestBed.inject(AnimalResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
