export class DeleteArt {
constructor (page) {    
// техническое описание страницы браузером
// описываем браузер
    this.page = page;
    // todo посмотреть тип элемента
    this.delart = page.getByRole('heading', { name: 'Azat Article' })
    this.presdell = page.getByRole('button', {name: 'Delete Article'}).first()
}
 
  async del (page) {
    await this.delart.click();
    await this.presdell.click();
    await this.page.waitForTimeout(500);

  }

}