///<reference types = "Cypress"/>
import * as loginPage from '../Pages/Home_page'

import  * as InventoryPage from '../Pages/Inventory_page'

describe("sauce demo ",function(){
   
    beforeEach(() => {

        cy.visit("https://www.saucedemo.com/")

    })
   
    it.only("login to the inventory page succesfully",function(){
        cy.fixture("example").then(function(data){

            this.data = data
        
    

        loginPage.UsernameInput().type(this.data.name);

        loginPage.passwordInput().type(this.data.email);

        loginPage.loginBtn().click()

        InventoryPage.productBtn().should("have.text","Products")
        })

        


    })

    it("user locked out of the system",function(){

        cy.xpath("(//input[@id='user-name'])[1]").type("locked_out_user");

        cy.xpath("(//input[@id='password'])[1]").type("secret_sauce");

        cy.xpath("(//input[@id='login-button'])[1]").click()

        cy.xpath("(//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out')])[1]").should("have.text","Epic sadface: Sorry, this user has been locked out.")

        


    })

    it("unable to login with dummy value",function(){

        cy.xpath("(//input[@id='user-name'])[1]").type("dummy");

        cy.xpath("(//input[@id='password'])[1]").type("secret_sauce");

        cy.xpath("(//input[@id='login-button'])[1]").click()

        cy.xpath("//h3[@data-test='error']").should("have.text","Epic sadface: Username and password do not match any user in this service")

        


    })





})