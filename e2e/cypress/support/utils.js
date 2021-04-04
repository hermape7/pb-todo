export const seedData = data => {
  cy.window()
    .its("model")
    .then(model => {
      model.todos = data;
      model.inform();
    });
};
