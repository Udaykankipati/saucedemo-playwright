exports.login=
class login{
    constructor(page){
        this.page=page;
        this.username='#user-name';
        this.password='#password';
        this.loginbtn='#login-button';
    }
    async gotoPage(){
        await this.page.goto('/')
    }


    async loginPage(username,password){
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginbtn).click()
    }
}