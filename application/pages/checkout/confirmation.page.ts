export class ConfirmationPage {

    isOpened(): boolean {
        return $('h1=Your order has been placed!').isDisplayed()
    }

    checkPresenceOfConfirmationMessage() {
        const message = $('h1=Your order has been placed!')
        expect(message).toBeDisplayed({ wait: 4000, message: "'Your order has been placed!' expected to be displayed" })
    }
}