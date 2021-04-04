import { fillInEditItem, isItemVisible } from "../../support/items.commands";
import { seedData } from "../../support/utils";
const todoToEdit = require("../../fixtures/todo-to-edit.json");
const ITEM_TITLE = todoToEdit[0].title;

export const editTodoItemClearInputTest = () => {
  const EDITED_ITEM = "edited item";
  return it("E2E_item_002 - user should be able to edit todo item by clearing the input", function () {
    seedData(todoToEdit);
    isItemVisible(ITEM_TITLE) //
      .dblclick();
    fillInEditItem(EDITED_ITEM, true) //
      .should("have.value", EDITED_ITEM);
  });
};

export const editTodoItemConcatTest = () => {
  const CONCAT_TO_ITEM = " - edited item";

  return it("E2E_item_003 - user should be able to edit todo item with appending to the original text", function () {
    seedData(todoToEdit);
    isItemVisible(ITEM_TITLE) //
      .dblclick();
    fillInEditItem(CONCAT_TO_ITEM, false) //
      .should("have.value", `${ITEM_TITLE}${CONCAT_TO_ITEM}`);
  });
};
