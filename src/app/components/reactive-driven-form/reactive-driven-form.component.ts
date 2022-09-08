import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.scss'],
})
export class ReactiveDrivenFormComponent implements OnInit {
  // name = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() {}
  ngOnInit(): void {}

  // updateName() {
  //   this.name.setValue('yoshi');
  // }

  onSubmitGroup() {
    console.log(this.profileForm.value);
  }

  // form validation
  nameInput = '';

  validationForm = new FormGroup({
    name: new FormControl(this.nameInput, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  get name() {
    return this.validationForm.get('name');
  }
}
