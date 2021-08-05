/// <reference types="cypress" />

const CadastroElements = require('../support/elements/cadastro.elements')
const CadastroPage = require('../support/Pages/cadastro.page')

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

    CadastroPage.checkGender("M")
    CadastroPage.typeFirstName(cadastro.firstName)
    CadastroElements.lastName().type(cadastro.lastName)
    CadastroElements.password().type(cadastro.password)
    CadastroElements.address().type(cadastro.streetName)
    CadastroElements.city().type(cadastro.city)
    CadastroElements.state().select('Arizona')
    CadastroElements.postCode().type(cadastro.zipcode)
    CadastroElements.phoneMobile().type(cadastro.mobilePhone)

})

Cypress.Commands.add('finalizaFormulario', (cadastro) => {
    cy.intercept('**index.php?controller=my-account')
        .as('rota-finaliza-cadastro')

    CadastroElements.registrar().click()
        .wait('@rota-finaliza-cadastro').its('response.statusCode').should('equal', 200)
        .get('.account > span').invoke('text').should('equal', `${cadastro.firstName} ${cadastro.lastName}`)
        .url().should('equal', 'http://automationpractice.com/index.php?controller=my-account')

})