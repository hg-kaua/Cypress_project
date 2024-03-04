/// <reference types="Cypress"/>

describe('Testes para DemoQA', ()=>{
    beforeEach('Entrando no site', ()=>{
        cy.visit('https://demoqa.com/')
    })
    it('Navegando pelos formulários', ()=>{
        cy.get('div[class="card-body"]:contains(Forms)').click()
        cy.url().should('include', 'https://demoqa.com/forms')
        cy.get('span:contains(Practice Form)').click()
    })
})