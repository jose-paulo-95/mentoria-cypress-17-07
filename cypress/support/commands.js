/// <reference types="cypress" />

const CadastroElements = require('../support/elements/cadastro.elements')

Cypress.Commands.add('realizaCadastro', (cadastro) => {


    cy.iniciarCadastro(cadastro.email)

    cy.preencherFormulario(cadastro)

    cy.finalizaFormulario(cadastro)

    //@todo criar o comando personalizado finalizar o formulari
    // Salvar o formulario
    // Verificar a mudança de URL
    // Verificar o status code da requisição de cadastro
    // Capturar o nome do usuario logado no canto superior direito e verificar se é o do usuario
}

)
// -- This is a parent command --
Cypress.Commands.add('iniciarCadastro', (email) => {
    cy.intercept('**index.php')
        .as('rota-formulario')

        CadastroElements.inputEmail().as('input-email').type(email).blur()
        CadastroElements.validEmail().then((element) => {
            expect(element).class('form-ok')
        })
        .get('@input-email').type('{enter}')
        .url().should('contain', CadastroElements.urlIniciarCadastro())
        .wait('@rota-formulario').its('response.statusCode').should('equal', 200)
        // O invoke ele chama uma funcao jquery no elmento que foi capturado anteriomente
        // 'text'  : Ele pega o valor do  texto entre tags HTML
        // 'val'    : Pega o valor do atributo value da tag HTML
        CadastroElements.inputEmailForm().invoke('val').should('be.equal', email)
 })

 Cypress.Commands.add('preencherFormulario', (cadastro) => { 

    //@todo colocar uma validação se o eelemento está visivel

     cy.get('#id_gender1').check()
     cy.get('#customer_firstname').type(cadastro.firstName)
     cy.get('#customer_lastname').type(cadastro.lastName)
     cy.get('#passwd').type(cadastro.password)
     cy.get('#address1').type(cadastro.streetName)
     cy.get('#city').type(cadastro.city)
     cy.get('#id_state').select('Arizona')
     cy.get('#postcode').type(cadastro.zipcode)
     cy.get('#phone_mobile').type(cadastro.mobilePhone)

 })

 Cypress.Commands.add('finalizaFormulario', (cadastro) => {
    cy.intercept('**index.php?controller=my-account')
    .as('rota-finaliza-cadastro')

    cy.get('#submitAccount').click()
      .wait('@rota-finaliza-cadastro').its('response.statusCode').should('equal',200)
      .get('.account > span').invoke('text').should('equal',`${cadastro.firstName} ${cadastro.lastName}`)
      .url().should('equal','http://automationpractice.com/index.php?controller=my-account')

 })




