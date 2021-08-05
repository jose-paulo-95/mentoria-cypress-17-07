module.exports = class CadastroElements {

    static inputEmail() { return cy.get('#email_create') }
    static validEmail() { return cy.get('#create-account_form > div > div') }
    static urlIniciarCadastro() { return '#account-creation' }
    static inputEmailForm() { return cy.get('#email') }
    static inputGenderMan() { return cy.get('#id_gender1') }
    static firstName() { return cy.get('#customer_firstname') }
    static lastName() { return cy.get('#customer_lastname') }
    static password() { return cy.get('#passwd') }
    static address() { return cy.get('#address1') }
    static city() { return cy.get('#city') }
    static state() { return cy.get('#id_state') }
    static postCode() { return cy.get('#postcode') }
    static phoneMobile() { return cy.get('#phone_mobile') }
    static registrar() { return cy.get('#submitAccount') }
}