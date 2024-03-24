import SmartTablePage from "../../POM/SmartTablePage";

describe.skip("Smart-Table", () => {
  const smartTablePage = new SmartTablePage()
  beforeEach(() => {
    smartTablePage.navigate()
  })

  it("should add new user", () => {

    smartTablePage.addButton.click()

    const userData = {
      id: "777",
      firstName: "Yevhenii",
      lastName: "Andriichuk",
      username: "Yevand",
      email: "yev-test@gmail.com",
      age: "26"
    }

    smartTablePage.idInput.type(userData.id)
    smartTablePage.firstNameInput.type(userData.firstName)
    smartTablePage.lastNameInput.type(userData.lastName)
    smartTablePage.usernameInput.type(userData.username)
    smartTablePage.emailInput.type(userData.email)
    smartTablePage.ageInput.type(userData.age)

    smartTablePage.confirmNewUserButton.click()

    smartTablePage.newUserId.invoke('text').should('contain', userData.id)
    smartTablePage.newUserFirstName.invoke('text').should('contain', userData.firstName)
    smartTablePage.newUserLastName.invoke('text').should('contain', userData.lastName)
    smartTablePage.newUserUsername.invoke('text').should('contain', userData.username)
    smartTablePage.newUserEmail.invoke('text').should('contain', userData.email)
    smartTablePage.newUserAge.invoke('text').should('contain', userData.age)

    smartTablePage.newUserEditButton.click()

    smartTablePage.idInput.clear()
    smartTablePage.firstNameInput.clear()
    smartTablePage.lastNameInput.clear()
    smartTablePage.usernameInput.clear()
    smartTablePage.emailInput.clear()
    smartTablePage.ageInput.clear()

    const userDataEdited = {
      id: "111",
      firstName: "Alex",
      lastName: "Mercer",
      username: "Zeus",
      email: "blacklight-test@gmail.com",
      age: "45"
    }

    smartTablePage.idInput.type(userDataEdited.id)
    smartTablePage.firstNameInput.type(userDataEdited.firstName)
    smartTablePage.lastNameInput.type(userDataEdited.lastName)
    smartTablePage.usernameInput.type(userDataEdited.username)
    smartTablePage.emailInput.type(userDataEdited.email)
    smartTablePage.ageInput.type(userDataEdited.age)

    smartTablePage.confirmNewUserButton.click()

    smartTablePage.newUserId.invoke('text').should('contain', userDataEdited.id)
    smartTablePage.newUserFirstName.invoke('text').should('contain', userDataEdited.firstName)
    smartTablePage.newUserLastName.invoke('text').should('contain', userDataEdited.lastName)
    smartTablePage.newUserUsername.invoke('text').should('contain', userDataEdited.username)
    smartTablePage.newUserEmail.invoke('text').should('contain', userDataEdited.email)
    smartTablePage.newUserAge.invoke('text').should('contain', userDataEdited.age)

   })
  })
