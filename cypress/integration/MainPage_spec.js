describe('Main Page', () => {
  it('Visits main page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()

    cy.get('.email-field input')
      .type('ocie.nicolas@example.net')
      .should('have.value', 'ocie.nicolas@example.net')

    cy.get('.password-field input')
      .type('userpassword')
      .should('have.value', 'userpassword')

    cy.get('.login-btn').click()

    cy.contains('Logout')

    cy.get('.user-settings').click()
    cy.contains('User Settings')
  })
})
