/// <reference types="cypress" />


it('Visito a Pagina', function () {

    cy.visit(`?id_category=3&controller=category`)

})

it('Capturando Elementos', function () {

    cy.get('#layered_id_attribute_group_1')

})

it('Capturando Elementos Multiplies', function () {

    cy.get('#ul_layered_id_attribute_group_3')
        .find('li')
        .each(function (element) {
            cy.get(element).click()

        })

    cy.get('#ul_layered_id_attribute_group_3')
        .find('li')
        .first(function (element) {
            cy.get(element).click()

        })

    cy.get('#ul_layered_id_attribute_group_3')
        .find('li')
        .last(function (element) {
            cy.get(element).click()
        })

    cy.get('#ul_layered_id_attribute_group_3')
        .find('li')
        .eq(3)
        .click()



})



it('Capturando Elementos Contains', function () {

    cy.get('#ul_layered_id_attribute_group_3')
        .contains('Orange')
            .click()

})







