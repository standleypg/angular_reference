import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child!: ChildComponent;

  constructor() {}

  ngOnInit(): void {}

  receiveFromChild(msg: string) {
    alert(msg);
  }
  displayMessageFromViewChild() {
    alert(this.child.messageUsingViewChild);
  }
}
