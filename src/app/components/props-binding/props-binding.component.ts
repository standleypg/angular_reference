import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-props-binding',
  templateUrl: './props-binding.component.html',
  styleUrls: ['./props-binding.component.scss'],
})
export class PropsBindingComponent implements OnInit {
  itemImgUrl = '../../assets/sci-fi-car.jpg';
  isUnchanged = true;

  constructor() {}

  ngOnInit(): void {}
}
