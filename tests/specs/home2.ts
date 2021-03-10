describe.skip("Product return", function () {
    it("can be submited", function () {
        browser.url("/index.php?route=account/return/add")
        browser.pause(4000)

        const firstName = $('#input-firstname')
        firstName.setValue("Test")

        const lastName = $('#input-lastname')
        lastName.setValue('User')

        const email = $('#input-email')
        const emailString = `test+${Date.now()}@test.com`
        email.setValue(emailString)

        const phone = $('#input-telephone')
        phone.setValue('0123456789')

        const orderId = $('#input-order-id')
        orderId.setValue('123');

        const productName = $('#input-product')
        productName.setValue('Mobile phone')

        const productCode = $('#input-model')
        productCode.setValue('MP123')

        const reasonForReturnOrderError = $("[name='return_reason_id'][value='3']")
        reasonForReturnOrderError.click()

        const productIsOpenedYes = $("[name='opened'][value='1']")
        productIsOpenedYes.click();

        const buttonSubmit = $('input[value="Submit"]')
        buttonSubmit.click()

        expect($('#content h1')).toHaveText('Product Returns', {
            wait: 4000
        })
    });
});

describe.skip("Gift Certificate", function () {
    it("can be purchased", function () {
        browser.url('/index.php?route=account/voucher')

        const recepientsName = $('#input-to-name')
        recepientsName.setValue('Test')

        const recepientsEmail = $('#input-to-email')
        const emailString = `test+${Date.now()}@test.com`
        recepientsEmail.setValue(emailString)

        const yourName = $('#input-from-name')
        yourName.setValue('Test1')

        const yourEmail = $('#input-to-email')
        const yourEmailString = `test+${Date.now()}@test.com`
        yourEmail.setValue(yourEmailString)

        const giftCertificateThemeBirthday = $('[name="voucher_theme_id"][value="7"]')
        giftCertificateThemeBirthday.click()

        const agreenment = $('[name="agree"]')
        agreenment.click()

        const continueButton = $('[value="Continue"]')
        continueButton.click()

        expect($('#content h1')).toHaveText('Purchase a Gift Certificate', {
            wait: 4000
        })
    });
});

describe.skip("Contact us form", function () {
    it("must send messages to shop administration", function () {
        browser.url('/index.php?route=information/contact')

        const yourName = $('#input-name')
        yourName.setValue('Test User')

        const email = $('#input-email')
        const emailString = `test+${Date.now()}@test.com`
        email.setValue(emailString)

        const enquiry = $('#input-enquiry')
        enquiry.setValue('Your shop is brilliant!!!')

        expect($('#content h1')).toHaveText('Contact Us', {
            wait: 4000
        })
    });
});

describe.skip("Items search", function () {
    it("should show results in case multiple items matches", function () {
        browser.url('/')

        const searchInput = $('[name="search"]')
        searchInput.setValue('Mac')

        const searchButton = $('#search button')
        searchButton.click()

        expect($$('.product-thumb h4')).toHaveTextContaining('Mac', { wait: 4000 })
    });

    it("should redirect to 'no matching results' in case no items matched", function () {
        browser.url('/')

        const searchInput = $('[name="search"]')
        searchInput.setValue('window phone')

        const searchButton = $('#search button')
        searchButton.click()

        const noResultsMsg = $('p=There is no product that matches the search criteria.')
        expect(noResultsMsg).toBeDisplayed()
    });
});