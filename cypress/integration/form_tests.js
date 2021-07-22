describe('Tests form for Error messages and successful submition', function() {
    it('Ensures submit button is disabled if inadequate data is provided.  Ensure form submision with adequate data succeeds', function() {
        cy.visit('http://localhost:3000/')

        cy.get('#name')
            .type('a')
            .clear()

        cy.contains('Name field is required.')

        cy.contains('Submit')
            .should('be.disabled')

        cy.get('#name')
            .type('FakeName')

        cy.get('#email')
            .type('a')
            .clear()

        cy.contains('Email field is required.')

        cy.contains('Submit')
            .should('be.disabled')

        cy.get('#email')
            .type('dummyemail@email.com')

        cy.get('#password')
            .type('a')
            .clear()
            
        cy.contains('Password field is required')

        cy.get('#password')
            .type('fake')
        
        cy.contains('Password must be at least 6 characters.')

        cy.contains('Submit')
            .should('be.disabled')

        cy.get('#password')
            .clear()
            .type('fakepassword')
        
        cy.contains('Submit')
            .should('be.disabled')

        cy.get('#termsOfService')
            .dblclick()

        cy.contains('You must agree to Terms of Service')

        cy.get('#termsOfService')
            .click()

        cy.contains('Submit')
            .should('be.enabled')
            .click()

        cy.contains('My name is FakeName. My email is dummyemail@email.com my password is: fakepassword.')

    })
})