import { App } from "../../../application/application";

describe("Item", function () {
  it("can be purchased", function () {
    browser.url("/");
    const app = new App();

    app.home.openAllForCategory("MP3 Players");

    const iPodShuffle = app.productCategory.products.find(
      (product) => product.title() === "iPod Shuffle"
    );
    expect(iPodShuffle).toBeDefined();

    iPodShuffle.addToCart();

    app.checkout.open();

    app.checkout.checkoutOptions.selectGuestCheckout();
    app.checkout.checkoutOptions.continue();

    app.checkout.billingDetails.fillBillingDetails({
      firstName: "test",
      lastName: "test",
      email: `test+${Date.now()}@test.com`,
      telephone: "123123123",
      address1: "test",
      city: "test",
      postCode: "123123",
      country: "Ukraine",
      region: "Kyiv",
    });
    app.checkout.billingDetails.chooseDifferentAddresses();
    app.checkout.billingDetails.continue();

    app.checkout.deliveryDetails.fillDeliveryDetails({
      firstName: "test",
      lastName: "test",
      address1: "test",
      city: "Homel",
      postCode: "111000",
      country: "Belarus",
      state: "Homyel'skaya (Homyel')",
    });
    app.checkout.deliveryDetails.continue();

    app.checkout.deliveryMethod.continue();

    app.checkout.paymentMethod.acceptTermsAndConditions();
    app.checkout.paymentMethod.continue();

    app.checkout.confirmOrder.continue();

    app.confirmation.checkPresenceOfConfirmationMessage();
  });
});
