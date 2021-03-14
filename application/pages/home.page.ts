export class HomePage {

    openAllForCategory(categoryName: string) {
        expect($(`a=${categoryName}`)).toBeDisplayed({
            wait: 4000
        })
        $(`a=${categoryName}`).click()

        const openedSeeAllLink = $('.dropdown.open .see-all')
        expect(openedSeeAllLink).toBeVisible()

        openedSeeAllLink.click()
    }

    searchItem(item: string) {
        const searchInput = $('[name="search"]')
        expect(searchInput).toBeDisplayed({ wait: 3000 })
        searchInput.setValue(item)

        const searchButton = $('#search button')
        searchButton.click()
    }
}