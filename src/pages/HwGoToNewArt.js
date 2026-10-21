export class GoToNewArt {
    constructor (page) {
this.page = page;
this.goToNewArticl = page.getByRole('link', { name: 'New Article' });

}

  async gona (page) {
    await this.goToNewArticl.click();
  }

  

};