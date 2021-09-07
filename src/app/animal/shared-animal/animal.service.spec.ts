import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AnimalService } from './animal.service';
import { MaterialSharedModule } from 'src/app/material-shared/material-shared.module';

describe('AnimalService', () => {
  let service: AnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialSharedModule,
        TranslateModule.forRoot()
      ],
      providers: [AnimalService]
    });
    service = TestBed.inject(AnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
