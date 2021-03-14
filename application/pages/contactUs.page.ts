export class ContactUsPage {
    open() {
        browser.url('/index.php?route=information/contact')
    }

    fillContactForm(data: { name: string, email: string, enquiry: string }) {
        const yourName = $('#input-name')
        expect(yourName).toBeDisplayed({ wait: 4000, message: 'Fields are not loaded' })
        yourName.setValue(data.name)

        const email = $('#input-email')
        email.setValue(data.email)

        const enquiry = $('#input-enquiry')
        enquiry.setValue(data.enquiry)
    }

    submit() {
        const submitButton = $("input[type='submit']")
        expect(submitButton).toBeDisplayed({ wait: 1000, message: 'Submit button is not displayed' })
        submitButton.click()
    }

    checkPresenceOfContinueButton() {
        const button = $('a=Continue')
        expect(button).toBeDisplayed({ wait: 4000, message: 'Continue button is not displayed' })
    }
}