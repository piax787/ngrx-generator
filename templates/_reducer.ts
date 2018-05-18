import { Action } from '@ngrx/store';
import * as {{ camelCase name }} from '{{position "actions"}}/{{ lowerCase name }}.actions';

export interface State {
  status: string;
  result: any[];
}

export const initialState: State = {
  status: '',
  result: []
}

export function reducer(
  state: State = initialState,
  action: {{ camelCase name }}.ActionsUnion
): State {
  switch (action.type) {
    case {{ camelCase name }}.ActionTypes.Fetch: {
      return {
        ...state,
        status: 'loading'
      }
    }
    case {{ camelCase name }}.ActionTypes.FetchSuccess: {
      return {
        ...state,
        status: 'success',
        result: action.payload
      };
    }
    case {{ camelCase name }}.ActionTypes.FetchFailure: {
      return {
        ...state,
        status: 'error',
        result: []
      };
    }
    default: {
      return state;
    }
  }
}