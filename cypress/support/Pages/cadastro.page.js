const CadastroElements = require('../Elements/cadastro.elements')

module.exports = class CadastroPage {

    static checkGender(sex = "M"){
        if(sex.toUpperCase()== "M"){
            CadastroElements.inputGenderMan().check()
        } else {
            CadastroElements.inputGenderWoman().check()
        }
    }

    static typeFirstName(text){
        CadastroElements.firstName().type(text)
    }

}