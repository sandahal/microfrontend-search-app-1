describe('renders learn react link', () => {
    it('Should load the react landing page', () => {
        cy.visit('/')
        cy.get('#root > div > header > p').should('contain', 'Edit src/App.js and save to reload.');
    })
});