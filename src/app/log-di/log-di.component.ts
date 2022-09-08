import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-log-di',
  templateUrl: './log-di.component.html',
  styleUrls: ['./log-di.component.scss'],
})
export class LogDiComponent implements OnInit {
  constructor(
    private log: LogService,
    private renderer: Renderer2,
    private ref: ElementRef
  ) {}

  ngOnInit(): void {}

  toggle() {
    this.log.logMesage(
      'this is message logged from log-di component to service'
    );
    this.renderer.setStyle(this.ref.nativeElement, 'color', 'red');
  }
}
