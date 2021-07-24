// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('realizaCadastro', (cadastro) => {


    cy.iniciarCadastro(cadastro.email)

    cy.preencherFormulario(cadastro)

    // cy.finalizaFormulario(cadastro)

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


    cy.get('#email_create').as('input-email')
        .type(email).blur()

        .get("#create-account_form > div > div")
        .then((element) => {

            expect(element).class('form-ok')

        })
        .get('@input-email').type('{enter}')

        .url().should('contain', '#account-creation')
        .wait('@rota-formulario').its('response.statusCode').should('equal', 200)


        // O invoke ele chama uma funcao jquery no elmento que foi capturado anteriomente
        // 'text'  : Ele pega o valor do  texto entre tags HTML
        // 'val'    : Pega o valor do atributo value da tag HTML
        .get('#email').invoke('val').should('be.equal', email)




 })


 Cypress.Commands.add('preencherFormulario', (cadastro ={}) => { 

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




//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
