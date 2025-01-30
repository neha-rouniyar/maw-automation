import LoginElements from "../Elements/LoginElements.cy.js"
import { emptyFieldAssertion , emailFieldAssertionOnly,passwordFieldAssertionOnly,invalidCredentialsAssertion,validCredentialsAssertion} from "../Assertions/LoginAssertion.cy.js";
export default  class LoginPage extends LoginElements{

    navigate(url){
        cy.visit(url, { failOnStatusCode: false });
    }
    loginWithEmptyFields(){
        cy.contains('button','Sign in').click();
        emptyFieldAssertion()        
    }
    loginWithEmailFieldOnly(data){
        this.username().type(data.username).type('{enter}')
        emailFieldAssertionOnly()
    }
    loginWithPasswordFieldOnly(data){
        this.password().type(data.password).type('{enter}')
        passwordFieldAssertionOnly()
    }
 
    loginWithValidCredentials(data){
        this.username().type(data.username)
        this.password().type(data.password).type('{enter}')
        cy.contains('button','Sign in').click();
        validCredentialsAssertion()
    }
    loginWithInvalidCredentials(data){
        this.username().type(data.username)
        this.password().type(data.password)
        cy.contains('button','Sign in').click();
        invalidCredentialsAssertion()
    }
}
