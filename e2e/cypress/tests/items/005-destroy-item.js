import { ITEMS_DOM } from "../../../shared/items.dom";
import { getItemRow, isItemVisible } from "../../support/items.commands";
import { seedData } from "../../support/utils";

const threeTodoItems = require("../../fixtures/three-todo-items.json");

export const destroyItemTest = () => {
  const firstItemTitle = threeTodoItems[0].title;
  const secondItemTitle = threeTodoItems[1].title;
  const thirdItemTitle = threeTodoItems[2].title;

  return it("E2E_item_005 - user can destroy the item from the list", function () {
    seedData(threeTodoItems);
    getItemRow(firstItemTitle)
      .realHover()
      .within(() => {
        cy.dataCy(ITEMS_DOM.buttons.destroy) //
          .should("be.visible")
          .click();
      });
    isItemVisible(firstItemTitle, false);
    isItemVisible(secondItemTitle);
    isItemVisible(thirdItemTitle);
  });
};
