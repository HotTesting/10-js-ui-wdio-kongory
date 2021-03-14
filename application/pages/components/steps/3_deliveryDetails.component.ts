export class DeliveryDetailsComponent {
    private get root(): WebdriverIO.Element {
        return $('div#collapse-shipping-address').parentElement()
    }

    fillDeliveryDetails(data: { firstName: string, lastName: string, address1: string, city: string, postCode: string, country: string, state: string }) {
        console.log('[DeliveryDetailsComponent] Filling biling details step', JSON.stringify(data, null, 2))
        this.root.$('#input-shipping-firstname').setValue(data.firstName)
        this.root.$('#input-shipping-lastname').setValue(data.lastName)
        this.root.$('#input-shipping-address-1').setValue(data.address1)
        this.root.$('#input-shipping-city').setValue(data.city)
        this.root.$('#input-shipping-postcode').setValue(data.postCode)
        this.root.$('#input-shipping-country').selectByVisibleText(data.country)
        this.root.$('#input-shipping-zone').selectByVisibleText(data.state)
    }

    continue() {
        const continueButton = this.root.$('#button-guest-shipping')
        expect(continueButton).toBeVisible({ message: 'Expected Continue button to be visible' })
        continueButton.click()
    }
}