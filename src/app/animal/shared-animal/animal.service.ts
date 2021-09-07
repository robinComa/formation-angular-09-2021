import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Animal } from './animal';

const endpoint = `${environment.api}/animals`;

@Injectable()
export class AnimalService {

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'fermer', {
      duration: 1000,
    });
  }

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${endpoint}/${id}`);
  }

  findAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(endpoint);
  }

  create(animal: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>(endpoint, animal).pipe(
      finalize(() => this.openSnackBar(`"${animal.name}" vient d'être créé`))
    );
  }

  update(animal: Animal): Observable<Animal> {
    return this.httpClient.put<Animal>(`${endpoint}/${animal.id}`, animal).pipe(
      finalize(() => this.openSnackBar(`"${animal.name}" vient d'être mis à jour`))
    );
  }

  delete(animal: Animal): Observable<void> {
    return this.httpClient.delete<void>(`${endpoint}/${animal.id}`).pipe(
      finalize(() => this.openSnackBar(`"${animal.name}" vient d'être supprimé`))
    );
  }
}
