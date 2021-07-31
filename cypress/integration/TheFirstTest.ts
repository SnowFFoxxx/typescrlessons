describe('SignUp form tests', () => {
    it('Test', () => {
        cy.visit('https://ita-social-projects.github.io/GreenCityClient/#/');
        cy.url().should('include', 'https://ita-social-projects.github.io/GreenCityClient');
        cy.get(`[class="header_sign-up-btn secondary-global-button"]`)
            .click();
        cy.get( `[class="primary-global-button"]` )
            .should('be.visible');
        cy.get( `[id="email"]` )
            .type('afaa@adasfaf.afasf')
            .should('have.value','afaa@adasfaf.afasf');
        cy.get(`[id='firstName']`)
            .type('JohnDoe')
            .should('have.value','JohnDoe');
        cy.get(`[id='password']`)
            .type('Egirjfhfde!4')
            .should('have.value','Egirjfhfde!4');
        cy.get( `[id = "repeatPassword"]` )
            .type('Egirjfhfde!4')
            .should('have.value','Egirjfhfde!4');
        cy.get('[type = "submit"]')
            .click();
    })
})