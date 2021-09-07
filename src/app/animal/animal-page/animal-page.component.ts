import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../shared-animal/animal';
import { AnimalService } from '../shared-animal/animal.service';

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.scss']
})
export class AnimalPageComponent implements OnInit {

  a: Animal;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.a = this.activatedRoute.snapshot.data.animal;
  }

  delete(animal: Animal): void {
    this.animalService.delete(animal).subscribe(() => this.router.navigate(['/']));
  }

}
