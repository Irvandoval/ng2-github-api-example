import { GithubApiNg2Page } from './app.po';

describe('github-api-ng2 App', function() {
  let page: GithubApiNg2Page;

  beforeEach(() => {
    page = new GithubApiNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
