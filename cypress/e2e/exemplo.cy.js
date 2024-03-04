// arquivo teste

// método do cypress que recebe 2 param
describe('NEWSLETTER', ()=> {

    // it são cenarios que eu vou criar
    it('Cadastrar email com sucessso', () => {
        // acessar a minha aplicação
        cy.visit('https://automationpratice.com.br/')
            .get('#top_header')    
        
        // criar steps/ações
        // selecionar elemento
        // preencher um campo
        cy.get('.form-control')
            .type('Hello@World')

        // click no elemento
        cy.get('#mc_embed_signup > form > div > div > button')
            .click()
        
        // validando infos
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Success')
    })

    it('Cadastrar email com ENTER', () => {
        // acessar a minha aplicação
        cy.visit('https://automationpratice.com.br/')
            .get('#top_header')    

        cy.get('.form-control')
            .type('Hello@World{enter}')
        
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Success')
    })
    
}) 