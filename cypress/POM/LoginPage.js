export default class LoginPage {
  _url = 'auth/login'
  _emailInputSelector = 'input[name="email"]'
  _passwordInputSelector = 'input[name="password"]'
  _rememberMeSelector = 'span.custom-checkbox'
  _logInButtonSelector = 'button[status="primary"]'

  navigate() {
    cy.visit(this._url)
  }

  get emailInput() {
  return  cy.get(this._emailInputSelector)
  }

  get passwordInput() {
  return  cy.get(this._passwordInputSelector)
  }

  get rememberMeCheckBox() {
  return  cy.get(this._rememberMeSelector)
  }

  get logInButton() {
  return  cy.get(this._logInButtonSelector)
  }
}
