import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared-animal/animal';
import { AnimalService } from '../shared-animal/animal.service';

@Component({
  selector: 'app-animals-page',
  templateUrl: './animals-page.component.html',
  styleUrls: ['./animals-page.component.scss']
})
export class AnimalsPageComponent implements OnInit {

  animals: Animal[];

  constructor(
    private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    this.animalService.findAll().subscribe(animals => this.animals = animals);
  }

}
