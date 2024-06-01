import { gerarUsername } from "../../support/utils"

describe('Register', () => {
  it('registrar usuário da forma correta', () => {

    cy.visit('https://parabank.parasoft.com/parabank/register.htm')

    cy.typeFirstName('Gustavo')
    cy.typeLastName('Reinaldo')
    cy.typeAddressStreet('rua dos bois, 0')
    cy.typeAddressCity('Fortaleza')
    cy.typeAddressState('Ceará')
    cy.typeAddressZipCode('63500000')
    cy.typePhoneNumber('88992433212')
    cy.typeCustomerSsn('07838068339')
    cy.typeCustomerUsername(gerarUsername) //gerarUsername dinamiza o teste, pois antes ele rodava somente uma vez, agora ele cadastra um novo usuário toda vez.
    cy.typeCustomerPassword('teste123')
    cy.typeRepeatedPassword('teste123')
    cy.get('input[type="submit"].button[value="Register"]').click();
    cy.get('.title').should('contain.text', 'Welcome');
  })

  it('Validação de mensagem de usuário já cadastrado anteriormente', () => {

    cy.visit('https://parabank.parasoft.com/parabank/register.htm')

    cy.typeFirstName('Gustavo')
    cy.typeLastName('Reinaldo')
    cy.typeAddressStreet('rua dos bois, 0')
    cy.typeAddressCity('Fortaleza')
    cy.typeAddressState('Ceará')
    cy.typeAddressZipCode('63500000')
    cy.typePhoneNumber('88992433212')
    cy.typeCustomerSsn('07838068339')
    // aqui eu hardocodei para o parametro usar esse customerUsername, e não gerar um username aleatorio, pra poder ter certeza que e uma conta q ja existe mesmo
    cy.typeCustomerUsername1('teste52') 
    cy.typeCustomerPassword('teste123')
    cy.typeRepeatedPassword('teste123')
    cy.get('input[type="submit"].button[value="Register"]').click();
    //aqui eu fiz a validação para a mensagem de erro dizendo que o usuario já existe e não da pra cadastrar ele.
    cy.get('#customer\\.username\\.errors').contains('This username already exists.').should('be.visible');
  })
  it('Registrar usuario com credenciais desiguais', () => {

    cy.visit('https://parabank.parasoft.com/parabank/register.htm')

    cy.typeFirstName('Gustavo')
    cy.typeLastName('Reinaldo')
    cy.typeAddressStreet('rua dos bois, 0')
    cy.typeAddressCity('Fortaleza')
    cy.typeAddressState('Ceará')
    cy.typeAddressZipCode('63500000')
    cy.typePhoneNumber('88992433212')
    cy.typeCustomerSsn('07838068339')
    cy.typeCustomerUsername(gerarUsername)
    cy.typeCustomerPassword('teomerPasswste123')
    cy.typeRepeatedPassword('teste12')
    cy.get('input[type="submit"].button[value="Register"]').click();
    cy.get('span').contains("Passwords did not match").should('be.visible');
  })

  it('Registrar sem username', ()=> {
    
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')

    cy.typeFirstName('Gustavo')
    cy.typeLastName('Reinaldo')
    cy.typeAddressStreet('rua dos bois, 0')
    cy.typeAddressCity('Fortaleza')
    cy.typeAddressState('Ceará')
    cy.typeAddressZipCode('63500000')
    cy.typePhoneNumber('88992433212')
    cy.typeCustomerSsn('07838068339')

    cy.typeCustomerPassword('teste123')
    cy.typeRepeatedPassword('teste123')
    cy.get('input[type="submit"].button[value="Register"]').click();
    cy.get('#customer\\.username\\.errors').contains('Username is required.').should('be.visible');
  })

})
