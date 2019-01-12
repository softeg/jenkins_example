describe('My First Test', function() {
  it('Visits the homepage', function() {
    cy.visit('https://sante.fr')
	cy.contains('information')
	cy.get('.main-search').type('doliprane')
	cy.get('#search-form > .form-submit').click()
	cy.get('h2 strong').contains('DOLIPRANE')
  })
})

describe('Check log in', function() {
  it('Visits the homepage', function() {
    cy.visit('https://sante.fr')
	cy.contains('information')
	cy.get('.account-panel-title').click({ multiple: true, force: true })
	cy.get('#user-login #edit-name').type('admin')
	cy.get('#user-login #login-pass').type('KLEEsante2018')
	cy.get('#user-login #edit-submit').click({ multiple: true })
	//cy.visit('https://sante.fr/admin')
  })
})
