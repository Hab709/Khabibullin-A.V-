export class Create {
    constructor (page) {
this.page = page;
this.arttitle = page.getByPlaceholder("Article Title");
this.whats = page.getByPlaceholder("What's this article about?");
this.wrightartic = page.getByPlaceholder("Write your article (in markdown)");
this.tagsart = page.getByPlaceholder("Enter tags");
this.publish = page.getByRole('button', {name: 'Publish Article'});


}

  async creatart (page) {
    await this.arttitle.fill('Azat Article');
    await this.whats.fill('New Azat test');
    await this.wrightartic.fill('New Azat test');
    await this.tagsart.fill('azateg');
    await this.publish.click();
  }
  
  
};