import { clickClearCompleted } from "../../support/footer.commands";
import { verifyNumberOfItems } from "../../support/items.commands";

export const clearCompletedTest = () => {
  return it("E2E_footer_005 - user should be able to clear all completed tasks", function () {
    verifyNumberOfItems(3);
    clickClearCompleted();
    verifyNumberOfItems(0);
  });
};
