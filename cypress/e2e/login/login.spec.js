import LoginPage from "../../POM/LoginPage";

describe.skip("Login page", () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.navigate()
  })

  it("should log in", () => {

    const userCredentials = {
      email: "test1@gmail.com",
      password: "Abc12345678!"
    }

    loginPage.emailInput.type(userCredentials.email)

    loginPage.passwordInput.type(userCredentials.password)

    loginPage.rememberMeCheckBox.click()

    loginPage.logInButton.click().then(() => {
      cy.url().should("eq", "http://localhost:4200/pages/dashboard")
    })

  })
})
