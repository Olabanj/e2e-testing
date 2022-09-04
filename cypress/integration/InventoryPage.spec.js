///<reference types = "Cypress"/>
import * as loginPage from '../Pages/Home_page'

import  * as InventoryPage from '../Pages/Inventory_page'

import * as CarTPage from '../Pages/cart_page'

describe("sauce demo ",function(){
   
    beforeEach(() => {

        cy.visit("https://www.saucedemo.com/")

    })
   
    it("login to the inventory page succesfully",function(){
        cy.fixture("example").then(function(data){

            this.data = data
        
    

        loginPage.UsernameInput().type(this.data.name);

        loginPage.passwordInput().type(this.data.email);

        loginPage.loginBtn().click()

        InventoryPage.productBtn().should("have.text","Products")
        

    })
})

        it("verify the functionalty of the dropdown",function(){

            cy.fixture("example").then(function(data){

                this.data = data

            

        loginPage.UsernameInput().type(this.data.name);

        loginPage.passwordInput().type(this.data.email);

        loginPage.loginBtn().click()


        InventoryPage.drpdownBtn().select("Price (low to high)")

        InventoryPage.drpdownBtn().should("be.enabled")

    

        })
            

    })

    it("the functionalty of add to cart button",function(){

        cy.fixture("example").then(function(data){

            this.data = data
        
    

        loginPage.UsernameInput().type(this.data.name);

        loginPage.passwordInput().type(this.data.email);

        loginPage.loginBtn().click()

        InventoryPage.productBtn().should("have.text","Products")
        

       InventoryPage.cartbtn().click()

        })


    })

    
    it("the functionalty of shop button",function(){

        cy.fixture("example").then(function(data){

            this.data = data
        
    

        loginPage.UsernameInput().type(this.data.name);

        loginPage.passwordInput().type(this.data.email);

        loginPage.loginBtn().click()

        InventoryPage.productBtn().should("have.text","Products")
        

       InventoryPage.shopBtn().click()

       cy.url().should("include","cart")

       



    })

})

it("check if the product is checkout",function(){

    cy.fixture("example").then(function(data){

        this.data = data
    


    loginPage.UsernameInput().type(this.data.name);

    loginPage.passwordInput().type(this.data.email);

    loginPage.loginBtn().click()

    InventoryPage.productBtn().should("have.text","Products")
    
InventoryPage.shopBtn().click()

   cy.url().should("include","cart")

   CarTPage.checkOutBtn().should("have.text","Checkout")
})

})

})