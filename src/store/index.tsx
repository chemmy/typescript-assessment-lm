import { createStore, combineReducers } from "redux";
import { reducer as AppReducer, IUserState } from "../reducers";

export interface IAppState {
  app: IUserState;
}

const reducers = combineReducers({
  app: AppReducer,
});

const store = createStore(reducers);
export { store };
