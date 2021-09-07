import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from './animal';
import { AnimalService } from './animal.service';

@Injectable()
export class AnimalResolver implements Resolve<Animal> {

  constructor(private animalService: AnimalService) { }

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Animal> {
    const id = +route.params.id;
    return this.animalService.get(id);
  }
}
