import LoginPage from "../../src/Pages/LoginPage.cy";

describe('uyfgd',function(){
  // the below code works for intentionally using invalid credentials and expecting the error comes. It Prevent Cypress from failing the test
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Request failed with status code 401')) {
            return false; 
        }
    });
    const login= new LoginPage()
    beforeEach(function(){
        cy.fixture('login').then(function(data){
          this.data = data
        })
      })
      it('Verify if we are able to login with empty fields',function(){
              login.navigate(this.data.url)
              login.loginWithEmptyFields()
      })
      it('Verify if we are able to login with email field only',function(){
              login.navigate(this.data.url)
              login.loginWithEmailFieldOnly(this.data.login.validAdmin)        
      })
      it('Verify if we are able to login with password field only',function(){
              login.navigate(this.data.url)
              login.loginWithPasswordFieldOnly(this.data.login.invalidAdmin)        
      })
    it('Verify if we are able to login with valid credentials',function(){
      login.navigate(this.data.url)
      login.loginWithValidCredentials(this.data.login.validAdmin)
    })
    it('Verify if we are able to login with invalid credentials',function(){
            login.navigate(this.data.url)
            login.loginWithInvalidCredentials(this.data.login.invalidAdmin)
    })
})