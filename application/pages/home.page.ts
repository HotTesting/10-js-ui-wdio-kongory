export class HomePage {

    openAllForCategory(categoryName: string) {
        expect($(`a=${categoryName}`)).toBeDisplayed({
            wait:4000
        })
        $(`a=${categoryName}`).click()

        const openedSeeAllLink = $('.dropdown.open .see-all')
        expect(openedSeeAllLink).toBeVisible()

        openedSeeAllLink.click()
    }
} 