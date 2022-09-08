import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDiComponent } from './log-di.component';

describe('LogDiComponent', () => {
  let component: LogDiComponent;
  let fixture: ComponentFixture<LogDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogDiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
