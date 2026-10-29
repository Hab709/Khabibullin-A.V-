export class ExpAddFav {
constructor (page) {    
// техническое описание страницы браузером
// описываем браузер
    this.page = page;
    // todo посмотреть тип элемента
    this.expaf = page.locator('button', { hasText: '1' });
}
 checkcaadfav() {
          return this.expaf;
}
}