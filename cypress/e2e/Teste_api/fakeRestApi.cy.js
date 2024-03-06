/// <reference types="Cypress"/>

import * as DELETEBooks from './DELETEBooks.request'
import * as PUTBooks from './PUTBooks.request'

describe('Api - Teste funcional de login', () => {
    it('Listar todos os livros', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://fakerestapi.azurewebsites.net//api/v1/Books',
            failOnStatusCode: false,
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null      
        })
    })
    it('Adicionar livros', ()=>{
        cy.request({
            method: "POST",
            url: 'https://fakerestapi.azurewebsites.net//api/v1/Books',
            body: {
                "id": 1,
                "title": "Culpa das estrelas",
                "description": "Drama",
                "pageCount" : 200,
                "excerpt": "string",
                "publishDate": "2024-03-06T05:59:48.116Z"
            },
            failOnStatusCode: false,
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.equal('Culpa das estrelas')
        })
    })
    it('Deletar livro com funcao importada', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://fakerestapi.azurewebsites.net//api/v1/Books',
            failOnStatusCode: false,
        }).then((resAllBooks) => {
            DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) =>{
                expect(resDeleteBook.status).to.equal(200)
            })
        })
    })
    it('Uptade em livros com funcao', ()=>{
        cy.request({
            method:"GET", 
            url: 'https://fakerestapi.azurewebsites.net//api/v1/Books',
            failOnStatusCode: false,
        }).then((resAllBooks)=>{
            PUTBooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) =>{
                expect(resChangeBook.status).to.equal(200)
                expect(resChangeBook.body.title).to.equal('Batman')
            })
        })
    })
})