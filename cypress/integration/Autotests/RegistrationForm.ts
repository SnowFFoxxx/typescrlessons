describe ('Sign in', () => {
    it('Try to sign in', () => {
        cy.visit('https://ita-social-projects.github.io/GreenCityClient/#/') //visit site
        cy.url().should('include', 'https://ita-social-projects.github.io/GreenCityClient');
    });
});

describe ('Is email input work', () => {
    it('type doe234@gmail.com into email and check it visible', () => {
        cy.contains('Sign up').click(); //click on sign up button
        cy.get('[id="email"]')
            .type('doe234@gmail.com');
        cy.should('be.visible', 'doe234@gmail.com');
    });
});

describe ('Is username input work', () => {
    it('type JohnDoe into username and check it visible', () => {
        cy.get('[id="firstName"]')
            .type('JohnDoe');
        cy.should('be.visible', 'JohnDoe');
    });
});

describe ('Is password input work', () => {
    it('type Q1w2e3#34 into password and check it visible', () => {
        cy.get('[id="password"]')
            .type('Q1w2e3#34');
        cy.should('be.visible', 'Q1w2e3#34');
        cy.get('[id="repeatPassword"]')
            .type('Q1w2e3#34');
        cy.should('be.visible', 'Q1w2e3#34');
    });
});

describe ('Is sign in in button active', () => {
    it('Registraion is access', () => {
        cy.get('[type="submit"]').click();


    });
});