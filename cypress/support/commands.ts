// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {LoremIpsum} from "lorem-ipsum";

const lorem = new LoremIpsum({

    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});
declare global {
    namespace Cypress {
        type SignUp = {
            email?:string,
            pseudonym?:string,
            password?:string
        }
        interface Chainable {
            setEmail: typeof setEmail
            setName: typeof setName
            setPassword: typeof setPassword
            setConfirmPassword: typeof setConfirmPassword
            openSignUpForm: typeof openSignUpFrom
            isSignUpFormVisible: typeof isSignUpFormVisible
            isSignUpButtonVisible: typeof isSignUpButtonVisible
            signUp: typeof signUp
        }
    }
}
export const email = 'greencitypavel+' +  getRandomNumber() + '@gmail.com';
export const pseudonym = lorem.generateWords(1); //generate User name
export const password = 'Tempm#001';

export function getRandomNumber():number{
    const rndInt = Math.floor(Math.random() * 60000) + 1
    console.log(rndInt)
    return rndInt;
}

export function  setEmail(mail?:string, baseConfig:boolean = true){
    cy.get('#email').type(mail);
}
export function  setName(pass?:string, baseConfig:boolean = true) {
    cy.get('#firstName')
}

export function setPassword(pass?:string, baseConfig:boolean = true) {
    cy.get('#password').type(pass);
}

export function setConfirmPassword(passConfirmation: string, baseConfig:boolean = true) {
    cy.get('#repeatPassword').type(passConfirmation);
}

export function openSignUpFrom() {
    cy.get('.header_sign-up-btn > span').click()
    cy.get('.form-content-container > .primary-global-button').should('be.visible')
}

export function isSignUpButtonVisible() {
     cy.get( '[type="submit"]' ).should( 'be.visible' ) ;
}

export function isSignUpFormVisible() {
    cy.get( ('app-auth-modal app-sign-up h1') ).should( 'be.visible' )

    cy.get( ('app-auth-modal app-sign-up h2') ).should( 'be.visible' )

    cy.get( ('app-auth-modal app-sign-up [id="email"]') ).should( 'be.visible' )

    cy.get( ('app-auth-modal app-sign-up [id="firstName"]') ).should( 'be.visible' )

    cy.get( ('app-auth-modal app-sign-up [id="password"]') ).should( 'be.visible' )

    cy.get( ('app-auth-modal app-sign-up [id="repeatPassword"]') ).should( 'be.visible' )
}

export function signUp(mail ?:string,name?:string,pass?:string,passConfirm?:string,baseConfig:boolean =true){
    openSignUpFrom();
    if(baseConfig){
        setEmail(email);
        setName(pseudonym);
        setPassword(password);
        setConfirmPassword(password);
    } else{
        setEmail(mail);
        setName(name);
        setPassword(pass);
        setConfirmPassword(passConfirm);
    }
}

Cypress.Commands.add( 'signUp', signUp )
Cypress.Commands.add( 'isSignUpButtonVisible', isSignUpButtonVisible )
Cypress.Commands.add( 'isSignUpFormVisible', isSignUpFormVisible )
