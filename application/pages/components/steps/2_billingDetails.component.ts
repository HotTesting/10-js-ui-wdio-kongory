export class BillingDetailsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-payment-address').parentElement()
    }

    fillBillingDetails(data: {
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
    }) {
        console.log('[BillingDetailsComponent] Filling biling details step', JSON.stringify(data, null, 2))
        this.root.$('#input-payment-firstname').setValue(data.firstName)
        this.root.$('#input-payment-lastname').setValue(data.lastName)
        this.root.$('#input-payment-email').setValue(data.email)
        this.root.$('#input-payment-telephone').setValue(data.telephone)
        this.root.$('#input-payment-address-1').setValue(data.address1)
        this.root.$('#input-payment-city').setValue(data.city)
        this.root.$('#input-payment-postcode').setValue(data.postCode)
        this.root.$('#input-payment-country').selectByVisibleText(data.country)
        this.root.$('#input-payment-zone').selectByVisibleText(data.region)
    }

    chooseDifferentAddresses() {
        const checkbox = $('input[name="shipping_address"]')
        checkbox.click()
    }

    continue() {
        const continueButton = this.root.$('input[type="button"][value="Continue"]#button-guest')
        expect(continueButton).toBeVisible({ message: 'Expected Continue button to be visible' })
        continueButton.click()
    }
}