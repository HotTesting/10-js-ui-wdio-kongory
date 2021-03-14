import { App } from "../../../application/application";

describe("Product return", function () {
  it("can be submited", function () {
    const app = new App();

    app.productReturn.open();
    app.productReturn.fillProductInformation({
      firstName: "User",
      lastName: "Test",
      userEmail: `test+${Date.now()}@test.com`,
      userPhone: "0123456789",
      orderId: "123",
      productName: "Mobile phone",
      productModel: "MP123",
      reason: "Order Error",
      isOpened: "Yes",
    });
    app.productReturn.submit();

    app.productReturn.checkIsProductReturnConfirmed();
  });
});
