
describe('My First Test', function () { //Declaring a test and naming it.
    it('Does not do much', function () {//Describe what the test does, followed by a function to do the actual testing
        expect(true).to.equal(true);//What the test is actually testing for.
    })
})

describe('My First Test', function () { //Declaring a test and naming it.
    it('Finds an element', function () {//Describe what the test does, followed by a function to do the actual testing
        cy.visit('http://localhost:3000/')

        cy.get('#password')
            .type('fakepassword')
            .should('have.value', 'fakepassword')

        cy.get('#email')
            .type('fakeemail@email.com')
            .should('have.value', 'fakeemail@email.com')

        cy.get('#name')
            .type('fakename')
            .should('have.value', 'fakename')

        cy.get('#termsOfService')
            .click()
            .should('have.value', 'true')
        // Arrange - Setup initial app state
        // - visit a web page
        // -query for an element
        // Act - take an action
        // - interact with that element
        // Assert - Make an assertion
        // - make an assertion about page content
    })
})