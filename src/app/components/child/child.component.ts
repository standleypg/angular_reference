import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() messageFromParent: string = '';
  @Output() messageFromChild: EventEmitter<string> = new EventEmitter();
  messageUsingViewChild: string = 'this message is sent by using ViewChild';

  constructor() {}

  ngOnInit(): void {}

  sendToParent(msg: string) {
    this.messageFromChild.emit(msg);
  }
}
