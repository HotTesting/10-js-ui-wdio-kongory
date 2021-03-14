import * as faker from "faker";
import { App } from "../../../application/application";

const app = new App();

function addToComparison() {
  let players = ["iPod Classic", "iPod Nano"];

  const iPodClassic = app.productCategory.products.find(
    (product) => product.title() === players[0]
  );
  expect(iPodClassic).toBeDefined();
  iPodClassic.compareThisProduct();

  const iPodNano = app.productCategory.products.find(
    (product) => product.title() === players[1]
  );
  expect(iPodNano).toBeDefined();
  iPodNano.compareThisProduct();

  app.productCategory.checkCountOfProductsForComparison(players.length);
}

function addToCart(price: number) {
  const iPodClassic = app.productCategory.products.find(
    (product) => product.title() === "iPod Shuffle"
  );
  expect(iPodClassic).toBeDefined();
  iPodClassic.addToCart();

  app.productCategory.checkCardDetails(`1 item(s) - $${price}`);
}

describe("Items for unregistered user", function () {
  beforeEach(function () {
    app.home.openAllForCategory("MP3 Players");
  });

  it("can be selected for comparison by guest", function () {
    addToComparison();
  });

  it("can be added to cart by guest", function () {
    addToCart(122.0);
  });
});

describe("Items for registered user", function () {
  let userEmail: string;
  let userPassword: string;

  before(function () {
    let firstNameValue = faker.name.firstName();
    let lastNameValue = faker.name.lastName();
    userEmail = faker.internet.email();
    userPassword = faker.internet.password();
    let userPhone = faker.phone.phoneNumber();

    app.registration.open();
    app.registration.fillRegistrationDetails({
      firstName: firstNameValue,
      lastName: lastNameValue,
      phone: userPhone,
      email: userEmail,
      password: userPassword,
    });
    app.registration.checkAgreement();
    app.registration.continue();
  });

  beforeEach(function () {
    browser.reloadSession();

    app.login.open();
    app.login.fillCredentials({ email: userEmail, password: userPassword });
    app.login.login();

    app.home.openAllForCategory("MP3 Players");

    if (browser.isAlertOpen()) browser.acceptAlert();
  });

  it("can be added to cart by registered user", function () {
    addToCart(100.0);
  });

  let dataCollection = ["iPod Classic", "iPod Nano", "iPod Touch"];
  dataCollection.map((data) => {
    it(`can be added to wishlist`, function () {
      const iPodClassic = app.productCategory.products.find(
        (product) => product.title() === `${data}`
      );
      expect(iPodClassic).toBeDefined();
      iPodClassic.addToWishList();

      app.productCategory.checkConfirmationMessage(
        `Success: You have added ${data} to your wish list!`
      );
    });
  });

  it("can be selected for comparison by registered user", function () {
    addToComparison();
  });
});
