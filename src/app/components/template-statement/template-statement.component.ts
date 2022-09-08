import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-statement',
  templateUrl: './template-statement.component.html',
  styleUrls: ['./template-statement.component.scss'],
})
export class TemplateStatementComponent implements OnInit {
  showText = false;

  constructor() {}

  ngOnInit(): void {}

  toggleText(e: MouseEvent): void {
    e.preventDefault();
    this.showText = !this.showText;
    console.log(e);
  }
}
