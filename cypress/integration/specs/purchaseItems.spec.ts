/// <reference types="cypress" />

import data from "../../fixtures/data.json";
import { NavigateToURL } from '../../pages/navigateToURL.page';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import { InventoryItemPage } from '../../pages/inventoryItem.page';
import { CartPage } from '../../pages/cart.page';
import { CheckoutStepOnePage } from '../../pages/checkoutStepOne.page';
import { CheckoutStepTwoPage } from '../../pages/checkoutStepTwo.page';
import { CheckoutComletePage } from '../../pages/checkoutComplete.page';

const navigateToURL = new NavigateToURL();
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const inventoryItemPage = new InventoryItemPage();
const cartPage = new CartPage();
const checkoutStepOnePage = new CheckoutStepOnePage();
const checkoutStepTwoPage = new CheckoutStepTwoPage();
const checkoutComletePage = new CheckoutComletePage();

describe('Purchase Items', () => {
    beforeEach(() => {
        navigateToURL.goToURL(data.URL);
    });

    it('should allow users to purchase items',() => {
        // Step1. Log in as a `standard user`
        loginPage.login(data.username_standardUser, data.password);
        
        // Step2. Find an item by name, then add it to the cart
        inventoryPage.findItemByName(data.item1_Name);
        inventoryItemPage.clickAddItemToCart(inventoryItemPage.addToCartBackpackLocator);
        inventoryItemPage.clickbackToProducts();
        
        // Step3. Find a second item by name, and add it to the cart as well
        inventoryPage.findItemByName(data.item2_Name);
        inventoryItemPage.clickAddItemToCart(inventoryItemPage.addToCartOnesieLocator);
        inventoryItemPage.clickbackToProducts();
        
        // Step4. Go to the cart
        inventoryPage.clickCart();
        
        // Step5. Find an item by name, then remove it from the cart
        cartPage.removeItemByName();
        
        // Step6.a. Validate in the Checkout Overview that: It only contains the items that you want to purchase
        cy.get(cartPage.onesieLocator).invoke('text').then((text) => {
            expect(text).equal(data.item2_Name);
        });
        cy.contains(cartPage.backpackLocator).should('not.exist');
        
        // Step6.b. Validate in the Checkout Overview that: The Item Total is right
        cartPage.clickCheckout();
        checkoutStepOnePage.enterPersonalInformation(data.firstName, data.lastName, data.zipCode);
        cy.get(checkoutStepTwoPage.itemSubTotalLocator).invoke('text').then((text) => {
            expect(text).equal(data.itemSubTotal);
        });
        cy.get(checkoutStepTwoPage.itemTotalLocator).invoke('text').then((text) => {
            expect(text).equal(data.itemTotal);
        });
        
        // Step7. Finish the purchase
        checkoutStepTwoPage.clickFinishButton();
        
        // Step8. Validate that the website confirms the order
        cy.get(checkoutComletePage.checkoutCompleteTitleLocator).invoke('text').then((text) => {
            expect(text).equal(data.checkoutCompleteTitle);
        });
        cy.get(checkoutComletePage.successMessageLocator).invoke('text').then((text) => {
            expect(text).equal(data.successOrderingMessage);
        });
    });
});