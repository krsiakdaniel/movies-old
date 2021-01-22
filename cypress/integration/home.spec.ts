import { attributes, texts } from '../support'

const statusSuccess = 200

describe('Homepage', () => {
  it('Page status: 200', () => {
    cy.request('/').then((response) => {
      expect(response.status).to.eq(statusSuccess)
    })
  })

  it('Test: Search query', () => {
    cy.visit('/')
    cy.get(attributes.searchBar)
      .should('be.visible')
      .click()
      .type(texts.searchQuery)
    cy.get(attributes.pageHeading)
      .should('be.visible')
      .contains(texts.searchResultsTitle)
  })
})
