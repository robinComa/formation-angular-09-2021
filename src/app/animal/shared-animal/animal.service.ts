import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from './animal';

const endpoint = `${environment.api}/animals`;

@Injectable()
export class AnimalService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${endpoint}/${id}`);
  }

  findAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(endpoint);
  }

  create(animal: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>(endpoint, animal);
  }

  update(animal: Animal): Observable<Animal> {
    return this.httpClient.put<Animal>(`${endpoint}/${animal.id}`, animal);
  }

  delete(animal: Animal): Observable<void> {
    return this.httpClient.delete<void>(`${endpoint}/${animal.id}`);
  }
}
