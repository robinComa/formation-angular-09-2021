import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal, Species } from '../shared-animal/animal';
import { AnimalService } from '../shared-animal/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {

  animalForm: FormGroup;
  isSubmitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalService,
    private datePipe: DatePipe,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initAnimal();
    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.animalService.get(id).subscribe(a => this.initAnimal(a));
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;
    console.log(this.animalForm);
    if (this.animalForm.valid) {
      const animal: Animal = this.animalForm.value;
      if (animal.id) {
        this.animalService.update(animal)
          .subscribe((a) => this.router.navigate(['animals', a.id]));
      } else {
        this.animalService.create(animal)
          .subscribe((a) => this.router.navigate(['animals', a.id]));
      }
    }
  }

  private initAnimal(animal: Animal = {
    id: undefined,
    name: '',
    chipped: false,
    comment: '',
    image: '',
    lastVisit: new Date(),
    species: Species.Cat,
    owner: {
      email: '',
      name: '',
      phone: ''
    }
  }): void {
    this.animalForm = new FormGroup({
      id: new FormControl(animal.id),
      name: new FormControl(animal.name, [Validators.required, Validators.minLength(2)]),
      chipped: new FormControl(animal.chipped),
      comment: new FormControl(animal.comment, [Validators.required]),
      image: new FormControl(animal.image, [Validators.required]),
      lastVisit: new FormControl(animal.lastVisit, [Validators.required]),
      species: new FormControl(animal.species, [Validators.required]),
      owner: new FormGroup({
        email: new FormControl(animal.owner.email, [Validators.required, Validators.email]),
        name: new FormControl(animal.owner.name, [Validators.required]),
        phone: new FormControl(animal.owner.phone, [Validators.required]),
      })
    });
  }

}
