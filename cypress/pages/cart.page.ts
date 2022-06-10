
export class CartPage{
    removeBackpackLocator = '#remove-sauce-labs-backpack';
    onesieLocator = '#item_2_title_link > .inventory_item_name';
    checkoutButtonLocator = '#checkout';
    backpackLocator = '#item_4_title_link > .inventory_item_name'

    removeItemByName(){
        cy.get(this.removeBackpackLocator).click();
    }

    clickCheckout(){
        cy.get(this.checkoutButtonLocator).click();
    }
}

