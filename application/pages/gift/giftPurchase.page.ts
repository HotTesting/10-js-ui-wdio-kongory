export class GiftPurchasePage {
    checkConfirmationMessage() {
        const message = $('p=Thank you for purchasing a gift certificate! Once you have completed your order your gift certificate recipient will be sent an e-mail with details how to redeem their gift certificate.')
        expect(message).toBeDisplayed({
            wait: 4000, message: 'Confirmation message is absent'
        })
    }
}