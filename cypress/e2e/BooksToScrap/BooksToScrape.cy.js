import {Metodos} from '../../pages/Funcoes'

const f = new Metodos()
// beforeEach() roda para cada teste o método de visitar página
beforeEach(() => {cy.visit('http://books.toscrape.com/index.html')})
describe('Biblioteca', () => {
    it('Verificar se tem livros', () => {
        //cy.visit('http://books.toscrape.com/index.html') 
        
        cy.get('.product_pod')
            .should('have.length.at.least', 1)

    })
    it('Verificar se tem Steve Jobs', () => {
        //cy.visit('http://books.toscrape.com/index.html') 
        f.buscarLivro('Steve Jobs')
    })
    it('Verificar se tem ficçao em estoque', ()=> {
        //cy.visit('http://books.toscrape.com/index.html')
        cy.get('li:nth-child(9) > a')
            .should('exist')
            .click()
        cy.url()
            .should('include', 'http://books.toscrape.com/catalogue/category/books/fiction_10/index.html')
       
        f.verificaEstoque()

    })
  })