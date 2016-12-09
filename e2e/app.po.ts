import { browser, element, by } from 'protractor';

export class SimpleIsinPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('isin-root h1')).getText();
  }
}
