import { ITEMS_DOM } from "../../shared/items.dom";

export const fillInNewTodoItem = itemTitle => {
  return cy
    .dataCy(ITEMS_DOM.inputs.newItem) //
    .clear()
    .type(itemTitle);
};

export const fillInEditItem = (value, clearInput = false) => {
  cy.dataCy(ITEMS_DOM.inputs.editItem).should("be.visible").as("rowItem");
  if (clearInput) {
    return cy
      .get("@rowItem") //
      .clear()
      .type(value)
      .blur();
  } else {
    return cy
      .get("@rowItem") //
      .type(value)
      .blur();
  }
};

export const getItemRow = itemTitle => {
  return cy.dataCy(ITEMS_DOM.getTodoItem(itemTitle));
};

export const completeItem = itemTitle => {
  return getItemRow(itemTitle).within(row => {
    cy.dataCy(ITEMS_DOM.checkboxes.item) //
      .check();
    return cy.wrap(row);
  });
};

export const verifyNumberOfItems = itemsCount => {
  if (itemsCount < 0) {
    throw Error(`items count must be grater then 0. Actual is ${itemsCount}`);
  }
  if (itemsCount === 0) {
    cy.dataCy(ITEMS_DOM.itemList).should("not.exist");
  } else {
    cy.dataCy(ITEMS_DOM.itemList).within(() => {
      cy.get("li").should("have.length", itemsCount);
    });
  }
};

export const isItemVisible = (itemTitle, isVisible = true) => {
  const verificationText = isVisible ? "be.visible" : "not.exist";
  return getItemRow(itemTitle) //
    .should(verificationText);
};
