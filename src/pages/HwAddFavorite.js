export class Add {
    constructor (page) {
this.page = page;
this.addfav = page.getByRole('button', { name: ' ( 0 )' });



}

  async favoriteclick (page) {
    await this.addfav.click();
    
  }
  
  
};