import { CheckoutComletePage } from "./checkoutComplete.page";


export class CheckoutStepTwoPage{
    finishLocator = '[data-test="finish"]'
    itemSubTotalLocator = '.summary_subtotal_label'
    itemTotalLocator = '.summary_total_label'

    
    clickFinishButton(){
        cy.get(this.finishLocator).click();
        return new CheckoutComletePage();
    }
}
