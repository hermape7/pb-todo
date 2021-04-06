export const ITEMS_DOM = {
  inputs: {
    newItem: "input-new-todo",
    editItem: "input-edit-todo-item"
  },
  checkboxes: {
    all: "checkbox-toggle-all",
    item: "checkbox-item"
  },
  buttons: {
    destroy: "btn-item-destroy"
  },
  itemList: "list-todo-items",
  getTodoItem: itemTitle => `item-${itemTitle}`
};
