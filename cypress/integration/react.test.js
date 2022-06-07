describe('renders learn react link', () => {
    it('Should load the react landing page', () => {
        cy.visit('/')
        cy.get('#root > div').should('contain', Landing);
    })
});