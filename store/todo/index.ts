import { combineReducers } from "redux";
import { ListState, todoReducer } from "./todos";

export interface StoreState {
  todoReducer: ListState;
}

export default combineReducers<StoreState>({
  todoReducer,
});
