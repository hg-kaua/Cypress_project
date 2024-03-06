/// <reference types="Cypress"/>


describe('Api - Teste funcional de login', () => {
    it('Deve realizar o login com sucesso', ()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulaninho@qa.com",
                "password": "teste"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
        })
    })
    it('Deve validar senha incorreta', ()=>{
        cy.request({
            method: 'Post',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste1"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(401)
        })
    })
    it('Deve cadastrar usuário com sucesso', ()=>{
        cy.request({
            method: "POST",
            url: "http://localhost:3000/usuarios",
            body: {
                "nome": "Hugo Medeiros",
                "email": "hgkaua@gmail.com",
                "password": "1234",
                "administrador": "true",
            }
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    })
})