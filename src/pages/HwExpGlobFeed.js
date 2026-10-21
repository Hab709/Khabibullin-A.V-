export class GlobFeedPage {
constructor (page) {    
// техническое описание страницы браузером
// описываем браузер
    this.page = page;
    // todo посмотреть тип элемента
    this.globArticlText = page.getByRole('button', { name: 'Global Feed' });
}
 checkGlobFeed() {
          return this.globArticlText;
}
}