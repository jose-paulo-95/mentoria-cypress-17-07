/// <reference types="cypress" />


//https://docs.cypress.io/api/commands/click#Syntax

const faker = require('faker-br')


let cadastro = {
    email : faker.internet.email(),
    firstName : faker.name.firstName(),
    lastName : faker.name.lastName(),
    password : faker.internet.password(),
    streetName : faker.address.streetAddress(),
    city : faker.address.city(),
    mobilePhone: faker.phone.phoneNumberFormat(),
    state : faker.address.state(),
    zipcode : '00001'

}

describe('Cadastro de Usuario', () => {


    it('Acesso a Pagina', function() {

        cy.visit('?controller=authentication&back=my-account')


    })

    it('Realizo um cadastro com usuario/email valido',() =>{


        cy.realizaCadastro(cadastro)
        
        // @todo Finalizar o cadastro !


    })


    // Criar um teste para email invalido

    // Verificar a classe do error (Then para pegar o classe)
    // Verificar a menssagem do erro (Usar o invoke('text'))



})
















