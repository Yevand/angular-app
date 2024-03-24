export default class SmartTablePage {
  _url = 'pages/tables/smart-table'
  _addButtonSelector = 'table thead tr:last-child th:nth-child(1)'
  _idInputSelector = 'input[ng-reflect-name="id"]'
  _firstNameSelector = 'input[ng-reflect-name="firstName"]'
  _lastNameSelector = 'input[ng-reflect-name="lastName"]'
  _usernameSelector = 'input[ng-reflect-name="username"]'
  _emailSelector = 'input[ng-reflect-name="email"]'
  _ageSelector = 'input[ng-reflect-name="age"]'
  _confirmNewUserSelector = "i.nb-checkmark"
  _declineNewUserSelector = "i.nb-close"
  _newUserIdSelector = 'table tbody tr:first-child td:nth-child(2)'
  _newUserFirstNameSelector = 'table tbody tr:first-child td:nth-child(3)'
  _newUserLastNameSelector = 'table tbody tr:first-child td:nth-child(4)'
  _newUserUsernameSelector = 'table tbody tr:first-child td:nth-child(5)'
  _newUserEmailSelector = 'table tbody tr:first-child td:nth-child(6)'
  _newUserAgeSelector = 'table tbody tr:first-child td:nth-child(7)'
  _newUserEditSelector = 'table tbody tr:first-child td i.nb-edit'

  navigate() {
    cy.visit(this._url)
  }

  get addButton() {
    return cy.get(this._addButtonSelector)
  }

  get idInput() {
    return cy.get(this._idInputSelector)
  }
  get firstNameInput() {
    return cy.get(this._firstNameSelector)
  }

  get lastNameInput() {
    return cy.get(this._lastNameSelector)
  }

  get usernameInput() {
   return  cy.get(this._usernameSelector)
  }

  get emailInput() {
    return cy.get(this._emailSelector)
  }

  get ageInput() {
    return cy.get(this._ageSelector)
  }

  get confirmNewUserButton() {
    return cy.get(this._confirmNewUserSelector)
  }

  get declineNewUserButton() {
    return cy.get(this._declineNewUserSelector)
  }

  get newUserId() {
    return cy.get(this._newUserIdSelector)
  }

  get newUserFirstName() {
    return cy.get(this._newUserFirstNameSelector)
  }

  get newUserLastName() {
    return cy.get(this._newUserLastNameSelector)
  }

  get newUserUsername() {
    return cy.get(this._newUserUsernameSelector)
  }

  get newUserEmail() {
    return cy.get(this._newUserEmailSelector)
  }

  get newUserAge() {
    return cy.get(this._newUserAgeSelector)
  }

  get newUserEditButton() {
    return cy.get(this._newUserEditSelector)
  }
}
