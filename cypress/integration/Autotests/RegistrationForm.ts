import {openSignInForm} from "../../support/commands";

describe ('Sign up', () => {
    it('Is url valid', () => {
    cy.visit('https://ita-social-projects.github.io/GreenCityClient/#/');
    cy.url().should('include', 'https://ita-social-projects.github.io/GreenCityClient');
    cy.get(`[class="header_sign-up-btn secondary-global-button"]`).click();
});
});

describe ('Is email input work', () => {
    it('type doe234@gmail.com into email and check it visible', () => {
        cy.get(`[class="header_sign-up-btn secondary-global-button"]`)
        cy.get('[id="email"]')
            .type('doe234@gmail.com');
        cy.should('have.value','doe234@gmail.com');
    });
});

describe ('Is username input work', () => {
    it('type JohnDoe into username and check it visible', () => {
        cy.get('[id="firstName"]')
            .type('JohnDoe');
        cy.should('have.value', 'JohnDoe');
    });
});

describe ('Is password input work', () => {
    it('type Q1w2e3#34 into password and check it visible', () => {
        cy.get('[id="password"]')
            .type('Q1w2e3#34');
        cy.should('have.value', 'Q1w2e3#34');
        cy.get('[id="repeatPassword"]')
            .type('Q1w2e3#34');
        cy.should('have.value', 'Q1w2e3#34');
    });
});

describe ('Is sign up in button active', () => {
    it('is signUp works', () => {
        cy.visit('/');
        cy.signUp();
        cy.isSignUpButtonVisible();
    });
});

describe ('Sign in', () => {
    it('is sign in button works', () => {

    })
})
/*
 describe ('Can we login in', () => {
    it('Login in', () => {

    })
})