/// <reference types="cypress" />


//Essa biblioteca nos ajuda criando varios dados fake aleatorios para testes como formularios
//https://www.npmjs.com/package/faker
let faker = require('faker');


//https://docs.cypress.io/api/commands/type#Syntax


it('Acesso a pagina de Autenticação', function () {

    cy.visit(`s?controller=authentication&back=my-account`)

})

it('Digito um email para ser cadastrado', function () {

    cy.get('#email_create')
        .type(faker.internet.email())

})



describe('Digitando teclas do teclado', () => {


    // Podemos usar {} para solicitar que o cypress simule teclas do Teclado
    // Como por exemplo digitar um texto e apertar enter no final
    // Teclas disponiveis: {backspace} {del} {downarrow} {end} {enter} {esc} {home} {insert} {leftarrow} {movetoend} {movetostart} {pagedown} {pageup} {rightarrow} 
    // {selectall}	{uparrow} {alt} {ctrl} {meta} {shift}

    it('Digitando e apertando enter depois no campo de email', function() {

        cy.get('#email_create')
            .type(`${faker.internet.email()}{enter}`)


    })


it('Clicando com posição Pré-definidas', function () {

    cy.get('#SubmitCreate')
        // Com base em posição prédefinida
        // topLeft, top, topRight, left, center, right, bottomLeft, bottom, and bottomRight.
        .click('top')

})

})















