import { PropListingsPage } from './app.po';

describe('prop-listings App', () => {
  let page: PropListingsPage;

  beforeEach(() => {
    page = new PropListingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
