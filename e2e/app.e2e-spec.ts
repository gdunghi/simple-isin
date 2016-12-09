import { SimpleIsinPage } from './app.po';

describe('simple-isin App', function() {
  let page: SimpleIsinPage;

  beforeEach(() => {
    page = new SimpleIsinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('isin works!');
  });
});
