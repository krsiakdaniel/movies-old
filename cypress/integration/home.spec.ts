import { elements } from '../support/elements';

const statusSuccess = 200;

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Page status = 200', () => {
    cy.request('/').then((response) => {
      expect(response.status).to.eq(statusSuccess);
    });
  });

  it('Search bar', () => {
    cy.get(elements.attributes.searchBar)
      .should('be.visible')
      .click()
      .type(elements.texts.searchBar);
    cy.get(elements.attributes.pageHeading)
      .should('be.visible')
      .contains(elements.texts.searchResults);
  });
});
