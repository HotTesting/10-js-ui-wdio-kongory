export class ProductCardComponent {
    constructor(private root: WebdriverIO.Element) {

    }

    title(): string {
        return this.root.$('h4').getText();
    }

    addToCart() {
        const addToCartButton = this.root.$('button[onclick*="cart.add"] i.fa-shopping-cart')
        expect(addToCartButton).toBeVisible({ message: 'Expected add to cart button to be visible' })
        addToCartButton.click()
    }

    addToWishList() {
        const addToWishListButton = this.root.$('button[data-original-title="Add to Wish List"] i')
        expect(addToWishListButton).toBeVisible({ message: 'Expected Add to whishlist button to be visible' })
        addToWishListButton.click()
    }

    compareThisProduct() {
        const compareButton = this.root.$('[data-original-title="Compare this Product"]')
        expect(compareButton).toBeVisible({ wait: 4000, message: 'Expected Compare button to be visible' })
        compareButton.click()
    }
}