import { clickFilter } from "../../support/footer.commands";
import {
  isItemVisible,
  verifyNumberOfItems
} from "../../support/items.commands";

export const filterAllTest = () => {
  return it("E2E_footer_001 - [all filter] - user should see three todos in the list", function () {
    verifyNumberOfItems(3);
    isItemVisible("first item").should("have.class", "completed");
    isItemVisible("second item");
    isItemVisible("third item");
  });
};

export const filterActiveTest = () => {
  return it("E2E_footer_002 - [active filter] - user should see two active todos in the list", function () {
    clickFilter("active");
    verifyNumberOfItems(2);
    isItemVisible("first item", false);
    isItemVisible("second item");
    isItemVisible("third item");
  });
};

export const filterCompletedTest = () => {
  return it("E2E_footer_003 - [completed filter] - user should see one completed todo in the list", function () {
    clickFilter("completed");
    verifyNumberOfItems(1);
    isItemVisible("first item").should("have.class", "completed");
    isItemVisible("second item", false);
    isItemVisible("third item", false);
  });
};
