/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurIntructorComponent } from './our-intructor.component';

describe('OurIntructorComponent', () => {
  let component: OurIntructorComponent;
  let fixture: ComponentFixture<OurIntructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurIntructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurIntructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
