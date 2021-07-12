const { Section1 } = require('../objects/section-1')

describe('Problem 1 Tables', () => {
  it('Visits page section-1', () => {
    cy.visit(Section1.literals.URL)
    cy.get(Section1.elements.table).should('not.be.visible')
    cy.get(Section1.elements.showTableButton).click()
    cy.get(Section1.elements.tableHeader).children().its('length').should('be.eq', 5)
    cy.get(Section1.elements.table).children().children().its('length').should('be.eq', 11)
})
