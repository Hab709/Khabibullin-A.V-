export class AddComment {
    constructor (page) {
this.page = page;
this.wrightcom = page.getByRole('textbox', { name: 'Write a comment...' });
this.postcom = page.getByRole('button', { name: 'Post Comment' });



}

  async addnewcom (page) {
    await this.wrightcom.fill('Мой комментарий');
    await this.postcom.click();
  }
  
  
};