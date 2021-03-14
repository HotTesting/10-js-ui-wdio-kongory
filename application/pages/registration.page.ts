export class RegistrationPage {
  fillRegistrationDetails(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  }) {
    const firstName = $("#input-firstname");
    expect(firstName).toBeDisplayed({
      wait: 4000,
      message: "Fields are not loaded",
    });
    firstName.setValue(data.firstName);

    const lastName = $("#input-lastname");
    lastName.setValue(data.lastName);

    const email = $("#input-email");
    email.setValue(data.email);

    const telephone = $("#input-telephone");
    telephone.setValue(data.phone);

    const password = $("#input-password");
    password.setValue(data.password);

    const passwordConfirm = $("#input-confirm");
    passwordConfirm.setValue(data.password);
  }

  checkAgreement() {
    const agreeCheckbox = $('input[name="agree"]');
    expect(agreeCheckbox).toBeDisplayed();
    agreeCheckbox.click();
  }

  continue() {
    const continueButton = $('input[type="submit"]');
    expect(continueButton).toBeDisplayed();
    continueButton.click();
  }

  open() {
    browser.url("/index.php?route=account/register");
  }
}
