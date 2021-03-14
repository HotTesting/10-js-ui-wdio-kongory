export class ProductReturnPage {
    open() {
        browser.url("index.php?route=account/return/add");
    }

    fillProductInformation(data: {
        firstName: string;
        lastName: string;
        userEmail: string;
        userPhone: string;
        orderId: string;
        productName: string;
        productModel: string;
        reason: string;
        isOpened: string;
    }) {
        const fName = $("#input-firstname");
        expect(fName).toBeDisplayed({
            wait: 4000,
            message: "Fields are not loaded",
        });
        fName.setValue(data.firstName);

        const lName = $("#input-lastname");
        lName.setValue(data.lastName);

        const email = $("#input-email");
        email.setValue(data.userEmail);

        const phone = $("#input-telephone");
        phone.setValue(data.userPhone);

        const orderId = $("#input-order-id");
        orderId.setValue(data.orderId);

        const productName = $("#input-product");
        productName.setValue(data.productName);

        const productCode = $("#input-model");
        productCode.setValue(data.productModel);

        const reasonForReturnOrderError = $(
            `//label[normalize-space()='${data.reason}']//input[@name='return_reason_id']`
        );
        reasonForReturnOrderError.click();

        const productIsOpened = $(
            `//label[normalize-space()='${data.isOpened}']//input[@name='opened']`
        );
        productIsOpened.click();
    }

    submit() {
        const buttonSubmit = $('input[value="Submit"]');
        expect(buttonSubmit).toBeDisplayed({
            wait: 4000,
            message: "Submit button is not displayed",
        });
        buttonSubmit.click();
    }

    checkIsProductReturnConfirmed() {
        const confirmationMessage = $(
            "p=Thank you for submitting your return request. Your request has been sent to the relevant department for processing."
        );
        expect(confirmationMessage).toBeDisplayed({
            wait: 4000,
            message: "Confirmation message is absent",
        });
    }
}
