export const productBtn = () => cy.xpath("(//span[@class='title'])[1]")

export const drpdownBtn = () => cy.xpath("//select[@class='product_sort_container']")

export const cartbtn = () => cy.xpath("(//button[@id='add-to-cart-sauce-labs-backpack'])[1]")

export const shopBtn = () =>   cy.xpath("(//a[@class='shopping_cart_link'])[1]")