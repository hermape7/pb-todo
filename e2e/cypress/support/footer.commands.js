import { FOOTER_DOM } from "../../shared/footer.dom";

export const clickFilter = filter => {
  switch (filter) {
    case "all":
      cy.dataCy(FOOTER_DOM.filters.all).as("filter");
      break;
    case "active":
      cy.dataCy(FOOTER_DOM.filters.active).as("filter");
      break;
    case "completed":
      cy.dataCy(FOOTER_DOM.filters.completed).as("filter");
      break;

    default:
      throw Error(`${filter} filter is not defined`);
  }
  cy.get("@filter").click();
};

export const clickClearCompleted = () => {
  cy.dataCy(FOOTER_DOM.buttons.clearCompleted).click();
};

export const verifyItemCount = count => {
  cy.dataCy(FOOTER_DOM.count).should(
    "contain",
    `${count} ${count === 1 ? "item" : "items"} left`
  );
};
