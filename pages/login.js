exports.LoginPage = class LoginPage {
    constructor(page) {

        this.page = page;
        this.email_textbox = page.getByPlaceholder('email@example.com')
        this.password_textbox = page.getByPlaceholder('enter your passsword')
        this.login_button = page.getByRole('button', { name: 'Login' })

    }
    async gotoLoginPage() {
        await this.page.goto('https://rahulshettyacademy.com/client/')
    }
    async login(email, password) {

        await this.email_textbox.fill(email)
        await this.password_textbox.fill(password)
        await this.login_button.click()


    }

}