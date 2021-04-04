const { seedData } = require("../support/utils");
const oneCompleteTwoActive = require("../fixtures/three-todo-items-one-complete.json");
const threeTodoItems = require("../fixtures/three-todo-items.json");
const threeCompletedTodoItems = require("../fixtures/three-completed-todo-items.json");
import * as FooterTests from "./footer";

describe("Footer Tests", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  describe("filters", function () {
    beforeEach(function () {
      seedData(oneCompleteTwoActive);
    });

    FooterTests.filterAllTest();
    FooterTests.filterActiveTest();
    FooterTests.filterCompletedTest();
  });

  describe("count", function () {
    beforeEach(function () {
      seedData(threeTodoItems);
    });

    FooterTests.countTest();
  });

  describe("clear completed", function () {
    beforeEach(function () {
      seedData(threeCompletedTodoItems);
    });

    FooterTests.clearCompletedTest();
  });
});
