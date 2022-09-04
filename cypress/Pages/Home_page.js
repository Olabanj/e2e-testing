export const UsernameInput = () => cy.xpath("(//input[@id='user-name'])[1]")

export const passwordInput = () => cy.xpath("(//input[@id='password'])[1]")

export const loginBtn = () => cy.xpath("(//input[@id='login-button'])[1]")

export const errorMessage = () => cy.xpath("//h3[@data-test='error']")