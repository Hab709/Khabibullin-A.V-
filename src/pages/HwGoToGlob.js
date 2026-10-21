export class GoToGlob {
    constructor (page) {
this.page = page;
this.gotoglobf = page.getByRole('button', { name: 'Global Feed' });

}

  async goto (page) {
    await this.gotoglobf.click();
  }

  

};