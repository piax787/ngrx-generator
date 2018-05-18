import { provideMockActions } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { {{titleCase name}}Effects } from "{{position "effects"}}/{{lowerCase name}}.effects";
import { {{titleCase name}}Service } from "{{position "services"}}/{{lowerCase name}}.service";
import { Observable } from "rxjs";
import { of, catch } from 'rxjs/operators';

describe('{{titleCase name}}Effects', () => {
  let effects, {{lowerCase name}}Effects, {{lowerCase name}}Service;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      {{titleCase name}}Effects,
      {
        provide: {{titleCase name}}Service,
        useValue: jasmine.createSpyObj('{{lowerCase name}}Service', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    effects = TestBed.get(EffectsRunner);
    {{lowerCase name}}Effects = TestBed.get({{titleCase name}}Effects);
    {{lowerCase name}}Service = TestBed.get({{titleCase name}}Service);
  });

  describe('{{lowerCase name}}$', () => {
    it('should return a FetchSuccess action, on success', () => {
    });

    it('should return a FetchFailure action, on error', () => {
    });

  });

});