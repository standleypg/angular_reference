import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientGetComponent } from './http-client-get.component';

describe('HttpClientGetComponent', () => {
  let component: HttpClientGetComponent;
  let fixture: ComponentFixture<HttpClientGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpClientGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpClientGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
