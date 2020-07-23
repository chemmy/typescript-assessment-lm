import { AppEvents } from "../events";
import { IAction } from "../actions";

export interface IUserState {
  name: string;
  age: number;
}

const initialState: IUserState = { name: "", age: 0 };

const reducer = (state = initialState, action: IAction): IUserState => {
  const { SET_NAME, SET_AGE } = AppEvents;

  switch (action.type) {
    case SET_NAME: {
      return { ...state, name: action.payload };
    }
    case SET_AGE: {
      return { ...state, age: action.payload };
    }
    default:
      return state;
  }
};

export { reducer };
