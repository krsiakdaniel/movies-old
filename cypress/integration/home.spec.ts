import { elements } from '../support';

const statusSuccess = 200;

describe('Homepage', () => {
  it('Page status = 200', () => {
    cy.request('/').then((response) => {
      expect(response.status).to.eq(statusSuccess);
    });
  });

  it('Search bar', () => {
    cy.visit('/');
    cy.get(elements.attribute.searchBar)
      .should('be.visible')
      .click()
      .type(elements.text.searchBar);
    cy.get(elements.attribute.pageHeading)
      .should('be.visible')
      .contains(elements.text.searchResults);
  });
});
