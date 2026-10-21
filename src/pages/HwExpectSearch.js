export class ExpSearch {
constructor (page) {    
// техническое описание страницы браузером
// описываем браузер
    this.page = page;
    // todo посмотреть тип элемента
    this.exsearch = page.getByRole('heading', { name: 'Azat Article' })
}
 exprctsearch() {
          return this.exsearch;
}
}