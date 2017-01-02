import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { AboutYouComponent } from '../about-you/about-you.component';
import { BlogComponent } from '../blog/blog.component';
@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css'],
  providers: [AboutYouComponent, BlogComponent, ProjectComponent]
})
export class MainBodyComponent {
}
