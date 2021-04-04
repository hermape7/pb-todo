import * as ItemTests from "./items";
import faker from "faker";

describe("Item Tests", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  ItemTests.createTodoItemTest(faker.name.findName());
  ItemTests.editTodoItemClearInputTest();
  ItemTests.editTodoItemConcatTest();
  ItemTests.completeTodoTest();
});
