import { fillInNewTodoItem } from "../../support/items/items.commands";

export const createTodoItemTest = item => {
  return it(`create new todo item ${item}`, function () {
    fillInNewTodoItem(item) //
      .should("be.visible")
      .should("have.value", item);
  });
};
