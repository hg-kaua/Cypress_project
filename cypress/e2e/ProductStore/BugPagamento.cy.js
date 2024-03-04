describe('Compras na ProductStore', () => {
    it('Login', ()=>{
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername')
            .type('hg_kaua')
            .should('have.value', 'hg_kaua')
        cy.get('#loginpassword').type('s3cret')
        cy.get('button').contains('Log in').click()
    })
    it('Apontando bug de pagamento',()=>{
        cy.get('.card-title').contains('Samsung galaxy s6').click()
        cy.url().should('include', 'https://www.demoblaze.com/prod.html?idp_=1')
        cy.get('.btn.btn-success.btn-lg').click()
        cy.get('#cartur').click()
        cy.url().should('include', 'https://www.demoblaze.com/cart.html')
        cy.get('.btn.btn-success').click()

        cy.get('#name').should('be.empty').type('se2.v3')
        cy.get('#country').should('be.empty').type('Planeta Terra')
        cy.get('#city').should('be.empty').type('Harry potter')
        cy.get('#card').should('be.empty').type('@@@@@@@@@')
        cy.get('#month').should('be.empty').type('NovembroEfevereiro')
        cy.get('#year').should('be.empty').type('20013')
        cy.get('#orderModal > div > div').screenshot()
        cy.get('[onclick="purchaseOrder()"]').click()
        cy.screenshot()


        
    })
})