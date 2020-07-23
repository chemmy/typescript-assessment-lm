import { ActionCreatorsMapObject } from "redux";
import { AppEvents } from "../events";

export interface Action<T extends string> {
  type: T;
}
export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

export const SetName = (name: string) => createAction(AppEvents.SET_NAME, name);
export const SetAge = (age: number) => createAction(AppEvents.SET_AGE, age);

const Actions = { SetAge, SetName };

export type IActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;

export type IAction = IActionsUnion<typeof Actions>;
