import * as faker from 'faker';

function addToComparison() {
    let players = ['iPod Classic', 'iPod Nano']

    const ipodClassicCompareButton = $(`//a[text()='${players[0]}']/ancestor::div[@class='product-thumb']//button[@data-original-title='Compare this Product']`)
    ipodClassicCompareButton.click()

    const ipodNanoCompareButton = $(`//a[text()='${players[1]}']/ancestor::div[@class='product-thumb']//button[@data-original-title='Compare this Product']`)
    ipodNanoCompareButton.click()

    const productCompare = $('a=Product Compare (2)')
    expect(productCompare).toBeDisplayed({ wait: 3000 })
}

function addToCart(price: number) {
    const ipodShuffleAddToCart = $("//a[text()='iPod Shuffle']/ancestor::div[@class='product-thumb']//button[i[@class='fa fa-shopping-cart']]")
    ipodShuffleAddToCart.click()

    expect($('#cart-total')).toHaveTextContaining(`1 item(s) - $${price}`)
}

describe('Items for unregistered user', function () {
    beforeEach(function () {
        browser.url('/mp3-players')
        browser.pause(3000)
    });

    it('can be selected for comparison by guest', function () {
        addToComparison()
    })

    it('can be added to cart by guest', function () {
        addToCart(122.00)
    })
})

describe('Items for registered user', function () {
    let userEmail: string
    let userPassword: string

    before(function () {
        browser.url('/index.php?route=account/register')
        browser.pause(4000)

        let firstNameValue = faker.name.firstName()
        const firstName = $('#input-firstname')
        firstName.setValue(firstNameValue)

        const lastName = $('#input-lastname')
        lastName.setValue(faker.name.lastName())

        userEmail = faker.internet.email()
        const email = $('#input-email')
        email.setValue(userEmail)

        const telephone = $('#input-telephone')
        telephone.setValue(faker.phone.phoneNumber())

        userPassword = faker.internet.password()
        const password = $('#input-password')
        password.setValue(userPassword)

        const passwordConfirm = $('#input-confirm')
        passwordConfirm.setValue(userPassword)

        const agreeCheckbox = $('input[name="agree"]')
        agreeCheckbox.click()

        const continueButton = $('input[type="submit"]')
        continueButton.click()
    })

    beforeEach(function () {
        browser.reloadSession()
        browser.url('/index.php?route=account/login')
        browser.pause(3000)

        const email = $('#input-email')
        email.setValue(userEmail)

        const password = $('#input-password')
        password.setValue(userPassword)

        const login = $('input[value="Login"]')
        login.click()

        browser.url('/mp3-players')
        browser.pause(3000)

        if (browser.isAlertOpen())
            browser.acceptAlert()
    })

    it('can be added to cart by registered user', function () {
        addToCart(100.00)
    })

    let dataCollection = ['iPod Classic', 'iPod Nano', 'iPod Touch'];
    dataCollection.map(data => {
        it(`can be added to wishlist`, function () {
            const playerWhishlist = $(`//a[text()='${data}']/ancestor::div[@class='product-thumb']//button[@data-original-title='Add to Wish List']`)
            playerWhishlist.click()

            expect($('.alert-success')).toHaveTextContaining(`Success: You have added ${data} to your wish list!`)
        });
    });

    it('can be selected for comparison by registered user', function () {
        addToComparison()
    })
})