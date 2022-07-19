import describeOnBranches from '../utils/describeOnBranches';

describeOnBranches('subreddit-form')('Subreddit Form', () => {
  it('Updates URL with input value on submit', () => {
    cy.visit('/search/javascript');

    cy.get('input#search').clear().type('reactjs');

    cy.contains('button#btn-search', 'Search').click();

    cy.url().should('equal', `${Cypress.config().baseUrl}/search/reactjs`);
  });

  it('Input value updates to "javascript" when header link is clicked', () => {
    cy.visit('/search/reactjs');

    cy.get('input#search').should('have.value', 'reactjs');

    cy.contains('[class=nav-list__item]', 'Search').click();

    cy.get('input#search').should('have.value', 'javascript');
  });
});
