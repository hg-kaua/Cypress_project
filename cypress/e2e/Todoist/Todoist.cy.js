// url: https://todoist.com/pt-BR


/// <reference types="Cypress"/>

import {Metodos} from '../../pages/Funcoes'

const func = new Metodos()

describe('Automaçao site todoist', () => {
    it('Login com sucesso', ()=>{
        cy.visit('https://todoist.com/pt-BR')
        cy.get('h1').contains('Finalmente organize seu trabalho e sua vida.').should('be.visible')

        func.carregarSite()
        // aguardar chamada da api
        cy.intercept('POST', 'https://feat-flags.todoist.net/api/v1/identities/').as('loginRequest')
        cy.get('span').contains('Login').click()
        cy.wait(1000)
        cy.url().should('include', 'https://app.todoist.com/auth/login')
        cy.get('#todoist_app > div > div > div.eae3d34f._0703e67f.fb8d74bb._14423c92._1d226e27.c6eb8f43._5f8879d9._7cc6458c.a65d9c55._43e5f8e9._168a8ff8._56a651f6 > div._9dd31975.fb8d74bb._68ab48ca.c3b69d70._75ca308a > div > div > form > div:nth-child(1) > div')
            .type('hugokaua2002@gmail.com', {delay: 100})
        cy.get('#todoist_app > div > div > div.eae3d34f._0703e67f.fb8d74bb._14423c92._1d226e27.c6eb8f43._5f8879d9._7cc6458c.a65d9c55._43e5f8e9._168a8ff8._56a651f6 > div._9dd31975.fb8d74bb._68ab48ca.c3b69d70._75ca308a > div > div > form > div:nth-child(2) > div')
            .type('Hugo@2323', {delay:100})
        cy.get('button').contains('Login').click({ force: true })
        cy.wait('@loginRequest')
        cy.get('span').contains('Hugo').should('be.visible')
    })
    it('Verificar criação de tarefas', ()=>{
        func.criarTarefa('Automatizar todoist', 1, 'today')
        cy.wait(1000)
        func.criarTarefa('Lavar louça', 3, 'tomorrow')
        cy.wait(1000)
        func.criarTarefa('Cortar cabelo', 2, 'nextWeek')
        
        cy.wait(1000)
        cy.get('li[data-track="navigation|inbox"]').click()
        cy.wait(1000)
    })
    it('Verificar se tem tarefas marcadas', ()=>{
        cy.get('a[href="/app/today"]')
            .should('not.have.text', 'Hoje, 0 tarefas')
        cy.get('a[href="/app/project/entrada-2329545553"]')
            .should('not.have.text', 'Entrada, 0 tarefas')
    })
})