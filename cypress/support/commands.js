Cypress.Commands.add('login', (email, password)=>{
    cy.visit('https://todoist.com/pt-BR')
    cy.get('h1').contains('Finalmente organize seu trabalho e sua vida.').should('be.visible')
    cy.get('span').contains('Login').click()

    cy.url().should('include', 'https://app.todoist.com/auth/login')
    cy.get('#todoist_app > div > div > div.eae3d34f._0703e67f.fb8d74bb._14423c92._1d226e27.c6eb8f43._5f8879d9._7cc6458c.a65d9c55._43e5f8e9._168a8ff8._56a651f6 > div._9dd31975.fb8d74bb._68ab48ca.c3b69d70._75ca308a > div > div > form > div:nth-child(1) > div')
        .type(email, {delay: 100})
    cy.get('#todoist_app > div > div > div.eae3d34f._0703e67f.fb8d74bb._14423c92._1d226e27.c6eb8f43._5f8879d9._7cc6458c.a65d9c55._43e5f8e9._168a8ff8._56a651f6 > div._9dd31975.fb8d74bb._68ab48ca.c3b69d70._75ca308a > div > div > form > div:nth-child(2) > div')
        .type(password, {delay:100})
    cy.get('button').contains('Login').click({ force: true })
    cy.get('span').contains('Hugo').should('be.visible')
})


