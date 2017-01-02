import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { AboutYouComponent } from '../about-you/about-you.component';
import { BlogComponent } from '../blog/blog.component';
import { MaterialModule } from '@angular/material';
@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css'],
  providers: [MaterialModule, AboutYouComponent, BlogComponent, ProjectComponent]
})
export class MainBodyComponent {
}
