import { App } from "../../../application/application";

describe("Contact us form", function () {
  it("must send messages to shop administration", function () {
    const app = new App();

    app.contactUs.open();
    app.contactUs.fillContactForm({
      name: "Test",
      email: `test+${Date.now()}@test.com`,
      enquiry: "Your shop is brilliant!!!",
    });
    app.contactUs.submit();
    app.contactUs.checkPresenceOfContinueButton();
  });
});
