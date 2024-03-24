
describe("json-placeholder", {
  env: {
    API_URL: "https://jsonplaceholder.typicode.com/",
    schema:  {
      title: 'Test schema v1',
      type: 'array',
      items: {
        type: 'object',
        required: ['userId', 'id', 'title', 'body'],
        properties: {
          userId: {
            type: 'number',
            minimum: 1,
          },
          id: {
            type: 'number',
            minimum: 1,
          },
          title: {
            type: 'string',
          },
          body: {
            type: 'string',
          }
        }
      }
    }
  }
}, () => {
  it("Should get post by id", () => {
    cy.api({
      url: `${Cypress.env("API_URL")}posts/1`
    }).as("getPost")

    cy.get("@getPost").its("status").should("eq", 200)

    cy.get("@getPost").its("body.id").should("eq", 1)

  })

  it("Should get posts list", () => {

    cy.api({
      url: `${Cypress.env("API_URL")}posts`
    }).then((response) => {
      expect(response.body).to.be.jsonSchema(Cypress.env("schema"))
    })
  })

  it("Should create new post", () => {

    const requestBody = {
      id: 101,
      title: 'test title',
      body: 'test text',
      userId: 11
    }

    cy.api({
      method: 'POST',
      url: `${Cypress.env("API_URL")}posts`,
      body: requestBody
    }).as("createPost")

      cy.get("@createPost").its("status").should("eq", 201)
      cy.get("@createPost").its("body").should("contain", requestBody)
  })

  it("Should update post by id", () => {

    const requestBodyUpdated = {
      id: 100,
      title: 'test title updated',
      body: 'test text updated',
      userId: 11
    }

    cy.api({
      method: 'PUT',
      url: `${Cypress.env("API_URL")}posts/100`,
      body: requestBodyUpdated
    }).as("updatePost")

    cy.get("@updatePost").its("status").should("eq", 200)
    cy.get("@updatePost").its("body").should("contain", requestBodyUpdated)
  })

  it("Should delete post", () => {
    cy.api({
      method: 'DELETE',
      url: `${Cypress.env("API_URL")}posts/100`
    }).as("deletePost")

    cy.get("@deletePost").its("status").should("eq", 200)
  })

  //end of description
})
