export class GiftCertificatePage {
    open() {
        browser.url('index.php?route=account/voucher')
    }

    fillBirthdayCertificateDetails(data: {
        recName: string,
        email: string,
        buyerName: string,
        buyerEmail: string
    }) {
        console.log('[Purchase a Gift Certificate] Filling details', JSON.stringify(data, null, 2))
        const recepientsName = $('#input-to-name')
        expect(recepientsName).toBeDisplayed({ wait: 4000, message: 'Fields are not loaded' })
        recepientsName.setValue(data.recName)

        const recepientsEmail = $('#input-to-email')
        recepientsEmail.setValue(data.email)

        const yourName = $('#input-from-name')
        yourName.setValue(data.buyerName)

        const yourEmail = $('#input-from-email')
        yourEmail.setValue(data.buyerEmail)

        const giftCertificateThemeBirthday = $('[name="voucher_theme_id"][value="7"]')
        giftCertificateThemeBirthday.click()
    }

    agreeWithRules() {
        const agreenment = $('[name="agree"]')
        expect(agreenment).toBeVisible({ message: '"I understand that gift certificates are non-refundable." checkbox is visible' })
        agreenment.click()
    }

    continue() {
        const continueButton = $('[value="Continue"]')
        expect(continueButton).toBeVisible({ message: 'Expected Continue button to be visible' })
        continueButton.click()
    }
}