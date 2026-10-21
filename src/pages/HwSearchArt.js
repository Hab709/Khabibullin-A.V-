export class Search {
    constructor (page) {
this.page = page;
this.gomyprof = page.getByText('Aza@mail.ru');
this.profile = page.getByRole('link', { name: ' Profile' });
    }

  async mypclick (page) {
    await this.gomyprof.click();
    await this.profile.click();
  }
  
};