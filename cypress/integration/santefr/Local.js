describe('Check Lab', function() {
  it('Visits the homepage', function() {
    cy.visit('https://santefr.local')
	//cy.get('.main-footer__').contains('Lab')
	//cy.get('.main-footer__text > :nth-child(1)').contains('Lab')
  })
})

describe('Check log in', function() {
  it('Visits the homepage', function() {
    cy.visit('https://santefr.local')
	cy.wait(200)
	cy.viewport('macbook-13')
	cy.get('#accountPanelOpener').click({ multiple: true, force: true })
	cy.get('#edit-name').type('admin')
	cy.get('#edit-pass--2').type('KLEEsante2018')
	cy.get('#edit-submit').click({ multiple: true })
	//cy.reload(true)
	//cy.visit('lelab.sante.fr/admin')
  })
})
