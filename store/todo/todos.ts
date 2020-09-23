export const ADD_ITEM = "ADD_ITEM";
export const DONE_ITEM = "DONE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export interface TodoItemData {
  id: number;
  value: string;
  done: boolean;
}

export interface ListState {
  todoItems: TodoItemData[];
  input: string;
}

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: TodoItemData;
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  meta: {
    id: number;
  };
}

interface DoneItemAction {
  type: typeof DONE_ITEM;
  meta: {
    id: number;
  };
}

export type TodoActionTypes = AddItemAction | RemoveItemAction | DoneItemAction;

let autoIncreamentId = 0;

export function addItem(text: string) {
  return {
    type: ADD_ITEM,
    payload: {
      id: autoIncreamentId++,
      value: text,
      done: false,
    },
  };
}

export function removeItem(id: number) {
  return {
    type: REMOVE_ITEM,
    meta: {
      id,
    },
  };
}

export function doneItem(id: number) {
  return {
    type: DONE_ITEM,
    meta: {
      id,
    },
  };
}

export const actionCreators = {
  addItem,
  removeItem,
  doneItem,
};

const initalState: ListState = {
  todoItems: [],
  input: "",
};

export function todoReducer(state = initalState, action: TodoActionTypes) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        input: "",
        todoItems: [...state.todoItems, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        todoItems: state.todoItems.filter((item) => item.id !== action.meta.id),
      };
    case DONE_ITEM:
      return {
        ...state,
        todoItems: state.todoItems.map((item) => {
          if (item.id === action.meta.id) {
            item.done = !item.done;
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
