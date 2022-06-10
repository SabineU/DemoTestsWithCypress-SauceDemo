import { CartPage } from "./cart.page";
import { InventoryItemPage } from "./inventoryItem.page";

export class InventoryPage{
    cartLinkLocator = '.shopping_cart_link';

    findItemByName(itemName:string){
        cy.contains(itemName).click();
        return new InventoryItemPage();
    }

    clickCart(){
        cy.get(this.cartLinkLocator).click();
        return new CartPage();
    }
} 