import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class AnimalGuard implements CanActivate {
  canActivate(): Observable<boolean> {
    return of(true).pipe(
      delay(1000)
    );
  }
  
}
