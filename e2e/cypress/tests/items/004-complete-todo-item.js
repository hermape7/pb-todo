import { ITEMS_DOM } from "../../../shared/items.dom";
import { getItemRow } from "../../support/items.commands";
import { seedData } from "../../support/utils";
const itemToComplete = require("../../fixtures/item-to-complete.json");

export const completeTodoTest = () => {
  return it("E2E_item_004 - user should be able to mark the todo item as complete with checkbox", function () {
    const itemTitle = itemToComplete[0].title;
    seedData(itemToComplete);
    getItemRow(itemTitle).within(row => {
      cy.dataCy(ITEMS_DOM.checkboxes.item) //
        .check();
      cy.wrap(row) //
        .should("have.class", "completed");
    });
  });
};
