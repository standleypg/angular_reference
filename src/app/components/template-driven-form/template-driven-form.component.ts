import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  species = ['fish', 'cat', 'dog'];
  model = new Pet(1, 'Goldie', this.species[0]);
  submited = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submited = true;
  }

  editForm() {
    this.submited = !this.submited;
  }
}
