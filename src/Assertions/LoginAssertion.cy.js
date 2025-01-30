
export function emptyFieldAssertion(){
    cy.get('[data-part="error-text"]')
    .should('contain', 'Email address is required')
    .and('contain', 'Password is required')
}

export function emailFieldAssertionOnly(){
    cy.get('[data-part="error-text"]').should('contain', 'Password is required')
}   

export function passwordFieldAssertionOnly(){
    cy.get('[data-part="error-text"]').should('contain', 'Email address is required')
}

export function invalidCredentialsAssertion(){
    cy.contains('Invalid username or password')
}

export function validCredentialsAssertion(){
    cy.contains('User login successfully.')
}