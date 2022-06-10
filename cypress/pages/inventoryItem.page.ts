import { InventoryPage } from "./inventory.page";

export class InventoryItemPage{
    addToCartBackpackLocator = '#add-to-cart-sauce-labs-backpack';
    backToProductsLocator = '[data-test="back-to-products"]';
    addToCartOnesieLocator = '#add-to-cart-sauce-labs-onesie';

    clickAddItemToCart(addToCartButtonLocator:string){
        cy.get(addToCartButtonLocator).click();
    }

    clickbackToProducts(){
        cy.get(this.backToProductsLocator).click();
        return new InventoryPage();
    }
}