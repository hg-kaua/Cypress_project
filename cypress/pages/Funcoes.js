export class Metodos {
    // métodos para Books to Scrape
    buscarLivro(titulo) {
        cy.get('body').then(($body) => {
            if ($body.text().includes(titulo)) {
                cy.get('h3').contains(titulo).should('exist')
            } else {
                cy.get('li.next > a').click()
                this.buscarLivro(titulo)
            }
        })
    }
    verificaEstoque(){
        cy.get('body').then(($body) => {
            if($body.find('li.next > a').length > 0){
                cy.get('.product_pod').each(($el) => {
                    cy.wrap($el).find('.instock.availability')
                        .should('contain', 'In stock')
                    })
                cy.get('li.next > a').click()
                this.verificaEstoque()
    
            } else{
                cy.get('.product_pod').each(($el) => {
                    cy.wrap($el).find('.instock.availability')
                        .should('contain', 'In stock')
                })      
            }
        })
    }
    // métodos para Todoist
    carregarSite() {
        cy.get('body').then(($body) => {
            if($body.find('span:contains("Abrir Todoist")').length > 0){
                cy.get('span').contains('Abrir Todoist').click()
                cy.get('span')
                    .contains('Hugo')
                    .should('be.visible')
                    .click({force:true})
                cy.get('span:contains("Sair")').click()
                cy.get('a[aria-label= "Página inicial do Todoist"]').click()
            } else {
                cy.get('span:contains("Login")').should('be.visible')
            }
        })
    }
    criarTarefa(nome, prioridade, data_vencimento){
        cy.url().should('include', 'https://app.todoist.com/app/today')
        cy.get('button[data-add-task-navigation-element="true"]').click({ force:true , multiple:true})

        cy.get('div[aria-label="Nome da tarefa"]')
            .type(nome)
        
        cy.wait(1000)
        cy.get('div[aria-label="Definir prioridade"]').click()
        cy.get(`li[aria-label="Prioridade ${prioridade}"]`).click()
        cy.get(`div[data-priority="${prioridade}"]`).should('be.visible')
        
        cy.wait(1000)
        cy.get('button[aria-label="Remover data de vencimento"').click()
        cy.get('div[aria-label="Defina datas de vencimento"]').click()
        cy.get(`button[data-action-hint="scheduler-suggestion-${data_vencimento}"]`).click()
        
        cy.wait(1000)
        cy.get('button[aria-label="Adicionar tarefa"]').click()

    }           

} 