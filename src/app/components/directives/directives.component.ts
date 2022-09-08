import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  // Att directives
  isSpecial = true;
  currentClass = {};
  currentStyle = {};
  name = 'mario';

  constructor() {}

  ngOnInit() {
    this.setCurrentClass();
  }

  setCurrentClass() {
    this.currentClass = {
      a: false,
      b: true,
      c: true,
    };
  }
  setCurrentStyle() {
    this.currentStyle = {
      'font-style': 'italic',
      'font-weight': 'bold',
    };
  }

  // Structure directives
  // *ngIf
  isActive = false;

  togglePTagStatus() {
    this.isActive = !this.isActive;
  }

  // *ngFor
  ninjas = [{ name: 'mario' }, { name: 'yoshi' }, { name: 'kanura' }];

  // *ngSwitch
  ninja = { name: 'mario' };

  toogleNinjaToYoshi(name: string) {
    this.ninja = name === 'yoshi' ? { name: 'mario' } : { name: 'yoshi' };
  }
}
