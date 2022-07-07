import { Injectable } from "@angular/core";
import {
    Select,
    Store,
    UpdateState,
    InitState,
    Actions,
    ofActionCompleted,
  } from '@ngxs/store';

@Injectable({
    providedIn: 'root'
})
export class ActionsListenerService {
    constructor(store: Store, actions: Actions) {
        console.log('constructed');
        actions.pipe(ofActionCompleted(UpdateState)).subscribe(() => {
          console.log('update state fired');
          console.log(JSON.stringify(store.snapshot()));
        });
      }
}