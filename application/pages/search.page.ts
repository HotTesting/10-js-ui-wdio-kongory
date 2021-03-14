export class SearchPage {
  checkSearchResultIsCorrect(item: string) {
    expect($$(".product-thumb h4")).toHaveTextContaining(item, { wait: 4000 });
  }

  checkSearchResultIsEmpty() {
    const noResultsMsg = $(
      "p=There is no product that matches the search criteria."
    );
    expect(noResultsMsg).toBeDisplayed();
  }
}
