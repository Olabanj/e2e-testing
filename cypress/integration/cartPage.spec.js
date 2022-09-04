


///<reference types = "Cypress"/>
import * as loginPage from '../Pages/Home_page'

import  * as InventoryPage from '../Pages/Inventory_page'

import * as CarTPage from '../Pages/cart_page'

describe("sauce demo ",function(){
   
    beforeEach(() => {

        cy.visit("https://www.saucedemo.com/")

    })



   it("verify the functionalty of checkout info",function(){

    cy.fixture("example").then(function(data){

        this.data = data
    


    loginPage.UsernameInput().type(this.data.name);

    loginPage.passwordInput().type(this.data.email);

    loginPage.loginBtn().click()

    InventoryPage.productBtn().should("have.text","Products")
    
InventoryPage.shopBtn().click()

   cy.url().should("include","cart")

   CarTPage.checkOutBtn().should("have.text","Checkout")

    CarTPage.checkOutBtn().click()

    cy.xpath("(//input[@id='first-name'])[1]").type("lukman")

    cy.xpath("(//input[@id='last-name'])[1]").type("olabanjo lukman")

    cy.xpath("(//input[@id='postal-code'])[1]").type("1252")

    cy.xpath("(//input[@id='continue'])[1]").click()
   })
})

   it("verify that error message pop up for empty field",function(){

    cy.fixture("example").then(function(data){

        this.data = data

    loginPage.UsernameInput().type(this.data.name);

    loginPage.passwordInput().type(this.data.email);

    loginPage.loginBtn().click()

    InventoryPage.productBtn().should("have.text","Products")
    
    InventoryPage.shopBtn().click()

   cy.url().should("include","cart")

   CarTPage.checkOutBtn().should("have.text","Checkout")

    CarTPage.checkOutBtn().click()

    cy.xpath("(//input[@id='continue'])[1]").click()

    cy.xpath("(//h3[normalize-space()='Error: First Name is required'])[1]").should("have.text","Error: First Name is required")


   })


   })

   
   it("verify that the product login to other pages",function(){

    cy.fixture("example").then(function(data){

        this.data = data
    
   loginPage.UsernameInput().type(this.data.name);

    loginPage.passwordInput().type(this.data.email);

    loginPage.loginBtn().click()

    InventoryPage.productBtn().should("have.text","Products")
    
InventoryPage.shopBtn().click()

   cy.url().should("include","cart")

   CarTPage.checkOutBtn().should("have.text","Checkout")

    CarTPage.checkOutBtn().click()

    cy.xpath("(//input[@id='first-name'])[1]").type("lukman")

    cy.xpath("(//input[@id='last-name'])[1]").type("olabanjo lukman")

    cy.xpath("(//input[@id='postal-code'])[1]").type("1252")

    cy.xpath("(//input[@id='continue'])[1]").click()

    cy.url().should("include","https://www.saucedemo.com/checkout-step-two.html")

    cy.xpath("(//button[normalize-space()='Finish'])[1]").click()

    


   })
})

it("verify that the product is succussfully checkout complete",function(){

    cy.fixture("example").then(function(data){

        this.data = data
    
   loginPage.UsernameInput().type(this.data.name);

    loginPage.passwordInput().type(this.data.email);

    loginPage.loginBtn().click()

    InventoryPage.productBtn().should("have.text","Products")
    
InventoryPage.shopBtn().click()

   cy.url().should("include","cart")

   CarTPage.checkOutBtn().should("have.text","Checkout")

    CarTPage.checkOutBtn().click()

    cy.xpath("(//input[@id='first-name'])[1]").type("lukman")

    cy.xpath("(//input[@id='last-name'])[1]").type("olabanjo lukman")

    cy.xpath("(//input[@id='postal-code'])[1]").type("1252")

    cy.xpath("(//input[@id='continue'])[1]").click()

    cy.url().should("include","https://www.saucedemo.com/checkout-step-two.html")

    cy.xpath("(//button[normalize-space()='Finish'])[1]").click()

    cy.xpath("(//span[@class='title'])[1]").should("have.text","Checkout: Complete!")


})

})

})

