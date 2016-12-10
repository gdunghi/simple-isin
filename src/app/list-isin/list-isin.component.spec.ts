/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListIsinComponent } from './list-isin.component';

describe('ListIsinComponent', () => {
  let component: ListIsinComponent;
  let fixture: ComponentFixture<ListIsinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIsinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
