import { InventoryPage } from "./inventory.page";

export class LoginPage{
    usernameLocator = '#user-name';
    passwordLocator = '#password';
    loginButton = '#login-button';

    login(username:string, password:string){
        cy.get(this.usernameLocator).type(username);
        cy.get(this.passwordLocator).type(password);
        cy.get(this.loginButton).click();
        return new InventoryPage();
    }

}