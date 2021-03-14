export class LoginPage {
    open() {
        browser.url('/index.php?route=account/login')
    }

    fillCredentials(data: { email, password }) {
        const email = $('#input-email')
        expect(email).toBeDisplayed({ wait: 4000, message: 'Fields are not loaded' })
        email.setValue(data.email)

        const password = $('#input-password')
        password.setValue(data.password)
    }

    login() {
        const login = $('input[value="Login"]')
        expect(login).toBeDisplayed({ wait: 4000, message: 'Load button is invisible' })
        login.click()
    }
}