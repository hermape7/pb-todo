import { fillInNewTodoItem } from "../../support/items.commands";

export const createTodoItemTest = item => {
  return it(`E2E_item_001 - user should be able to create new todo item with title ${item}`, function () {
    fillInNewTodoItem(item) //
      .should("be.visible")
      .should("have.value", item);
  });
};
