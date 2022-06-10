/// <reference types="cypress" />

import { LoginPage } from "./login.page";

export class NavigateToURL{
    goToURL(path:string){
        cy.visit(path);
        return new LoginPage();
    }
}