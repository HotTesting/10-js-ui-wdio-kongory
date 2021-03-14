import { ProductCardComponent } from "./components/productCard.component"


export class ProductCategoryPage {
    open(url: string) {
        browser.url(url)
    }

    get products(): ProductCardComponent[] {
        const products = $$('div.product-layout')
        expect($('div.product-layout')).toBeDisplayed({ wait: 4000, message: 'There are no products on the page' })
        return products.map(elem => {
            return new ProductCardComponent(elem)
        })
    }

    checkCountOfProductsForComparison(count: number) {
        const productCompare = $(`a=Product Compare (${count})`)
        expect(productCompare).toBeDisplayed({ wait: 8000, message: 'Wrong count of products for comparison or this component is invisible' })
    }

    checkCardDetails(text: string) {
        const card = $('#cart-total')
        expect(card).toHaveTextContaining(text)
    }

    checkConfirmationMessage(message) {
        const alert = $('.alert-success')
        expect(alert).toHaveTextContaining(message)
    }
}