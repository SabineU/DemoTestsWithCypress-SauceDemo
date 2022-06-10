import { CheckoutStepTwoPage } from "./checkoutStepTwo.page";

export class CheckoutStepOnePage{
    firstNameLocator = '#first-name';
    lastNameLocator = '#last-name';
    zipCodeLocator = '#postal-code';
    continueLocator = '#continue';

    enterPersonalInformation(firstName:string, lastName:string, zipCode:string){
        cy.get(this.firstNameLocator).type(firstName);
        cy.get(this.lastNameLocator).type(lastName);
        cy.get(this.zipCodeLocator).type(zipCode);
        cy.get(this.continueLocator).click();
        return new CheckoutStepTwoPage();
        
    }
}
