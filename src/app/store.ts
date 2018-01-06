import { USER } from "./actions";
import { User } from "./models/user";

export interface IAppState {
  user: User;
}

export const INITIAL_STATE: IAppState = {
  user: new User()
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case USER: return { user: action.body }
  }

  return state;
}