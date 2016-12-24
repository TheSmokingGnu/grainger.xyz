import { browser, element, by } from 'protractor';

export class PersonalSitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('#md-tab-content-0-0 > div > app-project > div > div:nth-child(1) > md-card')).getText();
  }
}
