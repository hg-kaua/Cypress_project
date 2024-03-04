

describe('Automação de Testes na Wikipedia com Cypress', ()=>{
    beforeEach('Visitar site', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.url().should('include', 'https://www.wikipedia.org/')

    })
    it('Validação de pesquisa', ()=>{
        cy.get('#jsLangLabel').click({force:true})
        cy.get('#searchLanguage').select('pt')
        
        cy.get('#searchInput').type('Engenharia de software{enter}')
        cy.get('#firstHeading')
            .should('have.text', 'Engenharia de software')

    })
    it('Validação de conteúdos chaves', ()=>{

        cy.get('#jsLangLabel').click({force:true})
        cy.get('#searchLanguage').select('en')
        
        cy.get('#searchInput').type('Artificial intelligence{enter}')
        cy.get('#firstHeading')
            .should('have.text', 'Artificial intelligence')
        
        cy.get('#toc-History').should('exist')
        cy.get('#toc-Future').should('exist')
        cy.get('#toc-Ethics').should('exist')
        cy.get('#toc-References').should('exist')
        cy.get('#toc-Explanatory_notes').should('exist')
    })
    it('Validação linguagem do conteúdo', ()=>{
        cy.url().should('include', 'https://www.wikipedia.org/')

        cy.get('#jsLangLabel').click({force:true})
        cy.get('#searchLanguage').select('en')
        
        cy.get('#searchInput').type('Artificial intelligence{enter}')
        cy.get('#firstHeading')
            .should('have.text', 'Artificial intelligence')
        
        cy.get('#p-lang-btn').should('be.visible').click()

        cy.get('body').then(($body)=>{
            if($body.find('input[placeholder="Search for a language"]').length === 0){
                cy.get('#p-lang-btn').click();
            }
        })
        cy.get('input[placeholder="Search for a language"]')
            .should('be.visible')
            .type('italiano', {delay:100})
        cy.get('a[href="https://it.wikipedia.org/wiki/Intelligenza_artificiale"]')
            .first()
            .click({force:true})
        cy.url().should('include', 'https://it.wikipedia.org/wiki/Intelligenza_artificiale')
    })
    it('Validação de login', ()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.url().should('include', 'https://en.wikipedia.org/wiki/Main_Page')
        
        cy.get('span:contains("Log in")').first().click()

        cy.get('#wpName1')
            .type('Hugoteste')
        cy.get('#wpPassword1').type('teste123')
        cy.get('#wpRemember').check()
        cy.get('#wpLoginAttempt').click()
    })
})