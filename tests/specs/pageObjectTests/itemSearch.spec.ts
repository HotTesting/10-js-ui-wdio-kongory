import { App } from "../../../application/application"

describe("Items search", function () {
    it("should show results in case multiple items matches", function () {
        const itemName = 'Mac'
        const app = new App()
        app.home.searchItem(itemName)

        app.search.checkSearchResultIsCorrect(itemName)
    });

    it("should redirect to 'no matching results' in case no items matched", function () {
        const itemName = 'windows phone'
        const app = new App()
        app.home.searchItem(itemName)

        app.search.checkSearchResultIsEmpty()
    });
});