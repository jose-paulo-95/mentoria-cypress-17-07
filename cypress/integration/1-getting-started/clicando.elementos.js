/// <reference types="cypress" />

//https://docs.cypress.io/api/commands/click#Syntax


it('Acesso a pagina de Autenticação', function () {

    cy.visit(`s?controller=authentication&back=my-account`)

})

it('Clico para cadastrar', function () {

    cy.get('#SubmitCreate')
        .click()

})



describe('Clicando em posições especificas', () => {


    // Essas opções servem para clicarmos em posições especificas dos elementos
    // Normalmente isto se torna util quando precisamos clicar em posições especificas de imagens por exemplo

    it('Clicando com posição X , Y ', function() {

        cy.get('#SubmitCreate')
            // Com base em posição
            // 15 pixel's da esquerda do elemento e 40 pixel's do topo
            .click(15, 40)

    })


it('Clicando com posição Pré-definidas', function () {

    cy.get('#SubmitCreate')
        // Com base em posição prédefinida
        // topLeft, top, topRight, left, center, right, bottomLeft, bottom, and bottomRight.
        .click('top')

})

})















