import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Net5ApicallComponent } from './net5-apicall.component';

describe('Net5ApicallComponent', () => {
  let component: Net5ApicallComponent;
  let fixture: ComponentFixture<Net5ApicallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Net5ApicallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Net5ApicallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
