import { TalonMaterialPage } from './app.po';

describe('talon-material App', () => {
  let page: TalonMaterialPage;

  beforeEach(() => {
    page = new TalonMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
