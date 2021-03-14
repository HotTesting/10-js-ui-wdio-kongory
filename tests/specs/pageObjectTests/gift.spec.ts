import { App } from "../../../application/application";

describe("Gift Certificate", function () {
  it("can be purchased", function () {
    const app = new App();
    app.giftCertificate.open();
    app.giftCertificate.fillBirthdayCertificateDetails({
      recName: "Test",
      email: `test+${Date.now()}@test.com`,
      buyerName: "Test1",
      buyerEmail: `test+${Date.now()}@test.com`,
    });
    app.giftCertificate.agreeWithRules();
    app.giftCertificate.continue();

    app.giftPurchase.checkConfirmationMessage();
  });
});
