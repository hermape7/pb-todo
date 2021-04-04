import { ITEMS_DOM } from "../../../shared/items.dom";

export const fillInNewTodoItem = itemTitle => {
  return cy
    .dataCy(ITEMS_DOM.inputs.newItem) //
    .clear()
    .type(itemTitle);
};
