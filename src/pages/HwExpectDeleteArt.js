export class ExpDel {
    constructor (page) {
        this.page = page;
        this.expectdelete = page.locator('.article-preview');


    }
    checkdell () {
        return this.expectdelete;
    }
}