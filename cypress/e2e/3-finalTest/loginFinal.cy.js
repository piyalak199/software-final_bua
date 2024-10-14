describe("loginFinal", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it.only("tc-01", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").contains("You logged into a secure area!");
  });
  it("tc-02", () => {
    cy.get(".fa").click();
    cy.get("#flash").contains("Your username is invalid!");
  });
  it("tc-03", () => {
    cy.get("#username").type("tom");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").contains("Your username is invalid!");
  });
  it("tc-04", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("Password");
    cy.get(".fa").click();
    cy.get("#flash").contains("Your password is invalid!");
  });
  it("tc-05", () => {
    cy.get("#username").type("tom");
    cy.get("#password").type("Password");
    cy.get(".fa").click();
    cy.get("#flash").contains("Your username is invalid!");
  });
  it("tc-06", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").contains("You logged into a secure area!");
    cy.get(".button").click();
    cy.url().should("include", "https://the-internet.herokuapp.com/login");
  });
});
