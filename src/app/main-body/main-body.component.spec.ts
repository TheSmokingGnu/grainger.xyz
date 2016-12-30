/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainBodyComponent } from './main-body.component';
import { AboutYouComponent } from '../about-you/about-you.component';
import { ProjectComponent } from '../project/project.component';
import { BlogComponent } from '../blog/blog.component';
import {MaterialModule} from '@angular/material';


describe('MainBodyComponent', () => {
  let component: MainBodyComponent;
  let fixture: ComponentFixture<MainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBodyComponent, AboutYouComponent, BlogComponent, ProjectComponent],
      imports:[MaterialModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
