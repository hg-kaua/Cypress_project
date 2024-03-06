/// <reference types="cypress" />

function changeBook(idBook) {
    return cy.request({
        method: "PUT",
        url: `https://fakerestapi.azurewebsites.net//api/v1/Books/${idBook}`,
        failOnStatusCode: false,
        body: {
            "id": 1,
            "title": "Batman",
            "description": "Suspense",
            "pageCount" : 200,
            "excerpt": "string",
            "publishDate": "2024-03-06T05:59:48.116Z"
        },

    })
}

export { changeBook }