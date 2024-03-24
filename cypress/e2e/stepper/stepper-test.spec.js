describe.skip("Stepper", () => {
  it("must be functioning", () => {
    const titleSelector = 'nb-stepper[orientation = "horizontal"]'

    cy.visit("/pages/layout/stepper")

    cy.get(`${titleSelector} h3`).should("include.text", "Step content #1")

    cy.get(`${titleSelector} button`).contains("prev").should("be.disabled")
    cy.get(`${titleSelector} button`).contains("next").should("be.enabled")

    cy.get(`${titleSelector} button`).contains("next").click()
    cy.get(`${titleSelector} h3`).should("include.text", "Step content #2")

    cy.get(`${titleSelector} button`).contains("prev").should("be.enabled")
    cy.get(`${titleSelector} button`).contains("next").should("be.enabled")

    cy.get(`${titleSelector} button`).contains("next").click()
    cy.get(`${titleSelector} h3`).should("include.text", "Step content #3")

    cy.get(`${titleSelector} button`).contains("prev").should("be.enabled")
    cy.get(`${titleSelector} button`).contains("next").should("be.enabled")

    cy.get(`${titleSelector} button`).contains("next").click()
    cy.get(`${titleSelector} h3`).should("include.text", "Step content #4")

    cy.get(`${titleSelector} button`).contains("prev").should("be.enabled")
    cy.get(`${titleSelector} button`).contains("next").should("be.disabled")
  })
})
