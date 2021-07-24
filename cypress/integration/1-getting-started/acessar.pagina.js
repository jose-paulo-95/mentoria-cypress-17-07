/// <reference types="cypress" />

// cy.visit('https://www.acme.com/', {

it('Acessar Pagina', function() {
    cy.visit(`?id_category=3&controller=category`, {})
})