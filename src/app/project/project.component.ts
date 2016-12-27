import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  pageLinks: Object;
  codeLinks: Object;
  constructor() { }

  ngOnInit() {
    this.pageLinks = {
      whatZone: 'https://thesmokinggnu.github.io/what-zone/',
      randomQuote: 'https://codepen.io/petergrainger/full/NbVgEp/',
      fanPage: 'https://codepen.io/petergrainger/full/VjwMgv/'
    };

    this.codeLinks = {
      whatZone: 'https://github.com/TheSmokingGnu/what-zone',
      randomQuote: 'https://codepen.io/petergrainger/pen/NbVgEp',
      fanPage: 'https://codepen.io/petergrainger/pen/VjwMgv'
    };
  }

  goToPage(type) {
    window.open(this.pageLinks[type]);
  }

  goToCode(type) {
    window.open(this.codeLinks[type]);
  }


}
