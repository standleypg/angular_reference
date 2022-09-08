import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsBindingComponent } from './props-binding.component';

describe('PropsBindingComponent', () => {
  let component: PropsBindingComponent;
  let fixture: ComponentFixture<PropsBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropsBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropsBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
