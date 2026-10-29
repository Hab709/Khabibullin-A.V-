export class CheckDelCom {
    constructor (page) {
        this.page = page;
        this.delcom = page.getByText('Мой комментарий')


    }
    checkdelcom () {
        return this.delcom;
    }
}