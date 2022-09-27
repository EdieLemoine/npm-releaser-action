describe('test spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('body').should('contain', 'Hello!');
  });
});
