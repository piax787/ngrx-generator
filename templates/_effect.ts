import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { {{properCase name }}Service } from '{{position "services"}}/{{ lowerCase name }}.service';
import * as {{ camelCase name }} from '{{position "actions"}}/{{ lowerCase name }}.actions';

@Injectable()
export class {{ properCase name }}Effects {
  constructor(
    private actions$: Actions,
    private {{ camelCase name }}Service: {{ properCase name }}Service
  ) { }

  @Effect() 
  get$: Observable<Action> = this.actions$
    .ofType <{{ camelCase name }}.Fetch>({{ camelCase name }}.ActionTypes.Fetch)
    .pipe(
      map(action => action.payload),
      switchMap(payload => this.{{ camelCase name }}Service.get(payload),
      map(res => new {{ camelCase name }}.FetchSuccess(res)),
      catch (() => of(new {{ camelCase name }}.FetchFailure)
    );
}