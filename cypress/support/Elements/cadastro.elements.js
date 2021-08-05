module.exports = class CadastroElements {

    static inputEmail() {
        return cy.get('#email_create')
    }

    static validEmail() {
        return cy.get('#create-account_form > div > div')
    }

    static urlIniciarCadastro() { return '#account-creation'}

    static inputEmailForm() {
        return cy.get('#email')
    }


}