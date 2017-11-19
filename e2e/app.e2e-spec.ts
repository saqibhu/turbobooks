import { TurbobooksPage } from './app.po';

describe('turbobooks App', () => {
  let page: TurbobooksPage;

  beforeEach(() => {
    page = new TurbobooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
