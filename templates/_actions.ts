import { Action } from '@ngrx/store';

/**
 * {{ titleCase name }} Action Types
 */
export const enum ActionTypes {
  Fetch = '[{{ titleCase name }}] Fetch',
  FetchSuccess = '[{{ titleCase name }}] Fetch Success',
  FetchFailure = '[{{ titleCase name }}] Fetch Failure'
}

/**
 * {{ titleCase name }} Actions
 */
export class Fetch implements Action {
  readonly type = ActionTypes.Fetch;
  constructor(public payload: any) {}
}

export class FetchSuccess implements Action {
  readonly type = ActionTypes.FetchSuccess;
  constructor(public payload: any) {}
}

export class FetchFailure implements Action {
  readonly type = ActionTypes.FetchFailure;
  constructor(public payload: any) {}
}

export type ActionsUnion = Fetch | FetchSuccess | FetchFailure;
