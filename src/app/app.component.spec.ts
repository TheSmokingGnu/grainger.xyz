/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { AboutYouComponent } from './about-you/about-you.component';
import { ProjectComponent } from './project/project.component';
import { BlogComponent } from './blog/blog.component';
import {MaterialModule} from '@angular/material';




describe('App: PersonalSite', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AboutYouComponent,
        MainBodyComponent,
        ProjectComponent,
        BlogComponent
      ],
      imports:[MaterialModule.forRoot()]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-main-body')).toBeTruthy();
  }));
});
