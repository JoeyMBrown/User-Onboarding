describe('Tests form for Error messages and successful submition', function() {

        beforeEach(() => { //Before each test run this.
            cy.visit('http://localhost:3000/');
        });

        const nameInput = () => cy.get('input[name="name"]');
        const emailInput = () => cy.get('input[name="email"]');
        const passwordInput = () => cy.get('input[name="password"]');
        const termsOfServiceInput = () => cy.get('input[name="termsOfService"]');
        const submitBtn = () => cy.contains('Submit');

        it('sanity test ensure cypress is working', () => {
            expect(1 + 2).to.equal(3);
            expect(2 + 2).not.to.equal(5);
        })

        it('Checks that input fields are empty on page load', function() {
            submitBtn()
                .should('be.disabled')

            nameInput()
                .should('have.value', "");

            emailInput()
                .should('have.value', "")

            passwordInput()
                .should('have.value', "");
            
            termsOfServiceInput()
                .should('have.value', 'false')
        })

        it('Ensures submit button is disabled if inadequate data is provided.  Ensure form submision with adequate data succeeds', function() {

            cy.contains("My name is FakeName. My email is dummyemail@email.com my password is: fakepassword.").should("not.exist")

            submitBtn()
                .should('be.disabled')

            nameInput()
                .type('a')
                .clear()

            cy.contains('Name field is required.')

            submitBtn()
                .should('be.disabled')

            nameInput()
                .type('FakeName')

            emailInput()
                .type('a')
                .clear()

            cy.contains('Email field is required.')

            submitBtn()
                .should('be.disabled')

            emailInput()
                .type('dummyemail@email.com')

            passwordInput()
                .type('a')
                .clear()
                
            cy.contains('Password field is required')

            passwordInput()
                .type('fake')
            
            cy.contains('Password must be at least 6 characters.')

            submitBtn()
                .should('be.disabled')

            passwordInput()
                .clear()
                .type('fakepassword')
            
            submitBtn()
                .should('be.disabled')

            termsOfServiceInput()
                .dblclick()

            cy.contains('You must agree to Terms of Service')

            termsOfServiceInput()
                .click()

            submitBtn()
                .should('be.enabled')
                .click()

            cy.contains('My name is FakeName. My email is dummyemail@email.com my password is: fakepassword.')

    })
})