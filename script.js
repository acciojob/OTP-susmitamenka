//your JS code here. If required.
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

const baseUrl = "http://localhost:3000";

describe("example to-do app", () => {
    
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // test cases u have to change is these all 'it' below
  it("Checking rendering", () => {
    cy.visit(baseUrl + "/main.html"); //always check this "visit" in your test case that it is set to -  baseUrl + "/main.html"
    cy.get("#verification_heading").should("have.text","Verify Your Account");
    cy.get("#verification_subtext").should("exist");
    cy.get(".code-container").find("input.code").eq(5).should("exist")
  });
 
  it("Checking Forward Typing", () => {
    cy.visit(baseUrl + "/main.html"); //always check this "visit" in your test case that it is set to -  baseUrl + "/main.html"
    cy.focused().should("id","code-1")

    cy.get(".code-container").find("input.code").eq(0).type(5);
    cy.focused().should("id","code-2")
    cy.get(".code").eq(1).type(1)
    cy.focused().should("id","code-3")
    cy.get(".code").eq(2).type(7)
    cy.focused().should("id","code-4")
    cy.get(".code").eq(3).type(2)
    cy.focused().should("id","code-5")
    cy.get(".code").eq(4).type(9)
    cy.focused().should("id","code-6")
    cy.get(".code").eq(5).type(6)
   



  });

  it("Checking Deletion", () => {
    cy.visit(baseUrl + "/main.html"); //always check this "visit" in your test case that it is set to -  baseUrl + "/main.html"
    
    cy.get(".code-container").find("input.code").eq(5).type("{backspace}");
    cy.focused().should("id","code-5")
    cy.get(".code").eq(4).type("{backspace}")
    cy.focused().should("id","code-4")
    cy.get(".code").eq(3).type("{backspace}")
    cy.focused().should("id","code-3")
    cy.get(".code").eq(2).type("{backspace}")
    cy.focused().should("id","code-2")
    cy.get(".code").eq(1).type("{backspace}")
    cy.focused().should("id","code-1")
    cy.get(".code").eq(0).type("{backspace}")
   
   
   
   


  });


    

  
    
    
});