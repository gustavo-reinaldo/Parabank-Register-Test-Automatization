import { gerarUsername } from "./utils";

Cypress.Commands.add('nomeDoComando', (parameters) => {
    //implementação
});

Cypress.Commands.add('typeFirstName', (firstName) => {
    cy.get('input[id="customer.firstName"]').type(firstName);
});
Cypress.Commands.add('typeLastName', (lastName) => {
    cy.get('input[id="customer.lastName"]').type(lastName);
});

Cypress.Commands.add('typeAddressStreet', (addressStreet) => {
    cy.get('input[id="customer.address.street"]').type(addressStreet);
});

Cypress.Commands.add('typeAddressCity', (addressCity) => {
    cy.get('input[id="customer.address.city"]').type(addressCity);
});

Cypress.Commands.add('typeAddressState', (addressState) => {
    cy.get('input[id="customer.address.state"]').type(addressState);
});

Cypress.Commands.add('typeAddressZipCode', (addressZipCode) => {
    cy.get('input[id="customer.address.zipCode"]').type(addressZipCode);
});

Cypress.Commands.add('typePhoneNumber', (phoneNumber) => {
    cy.get('input[id="customer.phoneNumber"]').type(phoneNumber);
});

Cypress.Commands.add('typeCustomerSsn', (customerSsn) => {
    cy.get('input[id="customer.ssn"]').type(customerSsn);
});
Cypress.Commands.add('typeCustomerUsername', (customerUsername) => {
    cy.get('input[id="customer.username"]').type(gerarUsername());
});
Cypress.Commands.add('typeCustomerUsername1', (customerUsername) => {
    cy.get('input[id="customer.username"]').type(customerUsername);
});
Cypress.Commands.add('typeCustomerPassword', (customerPassword) => {
    cy.get('input[id="customer.password"]').type(customerPassword);
});
Cypress.Commands.add('typeRepeatedPassword', (repeatedPassoword) => {
    cy.get('input[id="repeatedPassword"]').type(repeatedPassoword);
});
Cypress.Commands.add('clickForRegister', () => {
    cy.get('input[type="submit"].button[value="Register"]').click();
});
