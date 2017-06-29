import { Component, OnInit } from '@angular/core';

/**
 * Component shows all of the in progress projects
 *
 * @export
 * @class ProjectComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {

  /**
   * External links to all of the user pages
   *
   * @type {Object}
   */
  pageLinks: Object;
  /**
   * Links to the source code
   *
   * @type {Object}
   */
  codeLinks: Object;

  /**
   *
   */
  ngOnInit() {
    // Holds a list of all of the pages.
    // @todo put this in a service
    this.pageLinks = {
      whatZone: 'https://thesmokinggnu.github.io/what-zone/',
      randomQuote: 'https://codepen.io/petergrainger/full/NbVgEp/',
      milkKitty: 'https://grainger.xyz/milk-kitty/'
    };

    // Holds link to the source code.
    this.codeLinks = {
      whatZone: 'https://github.com/TheSmokingGnu/what-zone',
      randomQuote: 'https://codepen.io/petergrainger/pen/NbVgEp',
      milkKitty: 'https://github.com/TheSmokingGnu/milk-kitty'
    };
  }

  /**
   * Go to the user visible pages
   *
   * @param {any} type
   */
  goToPage(type) {
    window.open(this.pageLinks[type]);
  }

  /**
   * Go to the source code
   *
   * @param {any} type
   */
  goToCode(type) {
    window.open(this.codeLinks[type]);
  }


}
