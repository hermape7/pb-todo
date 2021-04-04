import { createTodoItemTest } from "../tests/items";
import faker from "faker";

describe("Item Tests", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  createTodoItemTest(faker.name.findName());
});
