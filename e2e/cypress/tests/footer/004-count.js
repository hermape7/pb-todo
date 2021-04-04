import { verifyItemCount } from "../../support/footer.commands";
import { completeItem } from "../../support/items.commands";

export const countTest = () => {
  return it("E2E_footer_004 - user should see decreasing number when completing the tasks", function () {
    verifyItemCount(3);
    completeItem("first item");
    verifyItemCount(2);
    completeItem("second item");
    verifyItemCount(1);
    completeItem("third item");
  });
};
