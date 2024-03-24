describe.skip("Dialog", () => {
  it("must be functioning", () =>{
    const dialogContainerSelector = "nb-dialog-container"

    cy.visit("/pages/modal-overlays/dialog")

    // cy.get("cdk-overlay-container").should("have.property", "display", "none")
    // cy.get(`${dialogContainerSelector}`).should("not.be.visible")

    cy.get("nb-card.form-input-card button").should("be.enabled")
    cy.get("nb-card.form-input-card button").click()

    // cy.get("cdk-overlay-container").should("have.property", "display", "block")
    cy.get(`${dialogContainerSelector}`).should("be.visible")

    cy.get(`${dialogContainerSelector} nb-card-header`).should("include.text", "Enter your name")

    cy.get(`${dialogContainerSelector} nb-card-body input`).should("be.enabled")

    cy.get(`${dialogContainerSelector} nb-card-footer button`).contains("Cancel").should("be.enabled")

    cy.get(`${dialogContainerSelector} nb-card-footer button`).contains("Submit").should("be.enabled")

  })
})
