import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AboutYouComponent } from './about-you/about-you.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    AboutYouComponent,
    BlogComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
