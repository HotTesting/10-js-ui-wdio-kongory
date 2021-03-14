import { threadId } from "node:worker_threads";
import { ConfirmationPage } from "./pages/checkout/confirmation.page";
import { CheckoutPage } from "./pages/checkout/index";
import { ContactUsPage } from "./pages/contactUs.page";
import { GiftCertificatePage } from "./pages/gift/giftCertificate.page";
import { GiftPurchasePage } from "./pages/gift/giftPurchase.page";
import { HomePage } from "./pages/home.page";
import { LoginPage } from "./pages/login.page";
import { ProductCategoryPage } from "./pages/productCategory.page";
import { ProductReturnPage } from "./pages/productReturn.page";
import { RegistrationPage } from "./pages/registration.page";
import { SearchPage } from "./pages/search.page";


export class App {
    home: HomePage
    productCategory: ProductCategoryPage
    checkout: CheckoutPage
    confirmation: ConfirmationPage
    search: SearchPage
    giftCertificate: GiftCertificatePage
    giftPurchase: GiftPurchasePage
    productReturn: ProductReturnPage
    contactUs: ContactUsPage
    registration: RegistrationPage
    login: LoginPage

    constructor() {
        this.home = new HomePage()
        this.productCategory = new ProductCategoryPage()
        this.checkout = new CheckoutPage()
        this.confirmation = new ConfirmationPage()
        this.search = new SearchPage()
        this.giftCertificate = new GiftCertificatePage()
        this.giftPurchase = new GiftPurchasePage()
        this.productReturn = new ProductReturnPage()
        this.contactUs = new ContactUsPage()
        this.registration = new RegistrationPage()
        this.login = new LoginPage()
    }
}