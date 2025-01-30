export default class LoginElements{
    username=()=>cy.get('input[name="username"]')
    password=()=>cy.get('input[name="password"]')
}