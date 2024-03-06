/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Testes para DemoQA', ()=>{
    beforeEach('Entrando no site', ()=>{
        cy.visit('https://demoqa.com/')
    })
    it('Navegando pelos formulários', ()=>{
        cy.get('div[class="card-body"]:contains(Forms)').click()
        cy.url().should('include', 'https://demoqa.com/forms')
        cy.get('span:contains(Practice Form)').click()

        cy.get('#firstName').as('name').click().type('Adriano')
        cy.get('#lastName').click().type('Imperador')
        cy.get('#userEmail').click().type('teste@gmail.com')
        cy.get('input[type="radio"]').first().check({force:true})
        cy.get('#userNumber').type('2199300512')    
        cy.get('#dateOfBirth').click()
        cy.get('.react-datepicker__month-select').select('April')
        cy.get('.react-datepicker__year-select').select('2019')
        cy.get('[aria-label="Choose Tuesday, April 2nd, 2019"]').click()
        cy.get('#hobbies-checkbox-3').first().check({force:true})
        cy.get('#submit').click()

        // validações
        cy.get('.modal-body').should('be.visible')
        cy.get('td:contains("Adriano Imperador")').should('exist')
        cy.get('td:contains("teste@gmail.com")').should('exist')
        cy.get('td:contains("Male")').should('exist')
        cy.get('td:contains("2199300512")').should('exist')
        cy.get('td:contains("02 April,2019")').should('exist')
        cy.get('td:contains("Music")').should('exist')
    })
    it('Validando erro no email', ()=>{
        cy.get('div[class="card-body"]:contains(Forms)').click()
        cy.url().should('include', 'https://demoqa.com/forms')
        cy.get('span:contains(Practice Form)').click()

        cy.get('#firstName').as('name').click().type('Adriano')
        cy.get('#lastName').click().type('Imperador')
        cy.get('#userEmail').click().type('teste@gmai.comsa.rf')
        cy.get('input[type="radio"]').first().check({force:true})
        cy.get('#userNumber').type('2199300512')    
        cy.get('#dateOfBirth').click()
        cy.get('.react-datepicker__month-select').select('April')
        cy.get('.react-datepicker__year-select').select('2019')
        cy.get('[aria-label="Choose Tuesday, April 2nd, 2019"]').click()
        cy.get('#hobbies-checkbox-3').first().check({force:true})
        cy.get('#submit').click()

        // validações
        cy.get('td:contains("teste@gmai.comsa.rf")').should('exist')
    })
    

})