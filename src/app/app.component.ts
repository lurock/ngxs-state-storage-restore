import { Component, OnInit, VERSION } from '@angular/core';
import {
  Select,
  Store,
  UpdateState,
  Actions,
  ofActionCompleted,
} from '@ngxs/store';
import { Observable } from 'rxjs';
import { CustomerActions } from './customer-actions';
import { CustomerState } from './customer-state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Select(CustomerState.getName) name: Observable<string>;

  state: string;

  constructor(private store: Store, actions: Actions) {
    actions.pipe(ofActionCompleted(UpdateState)).subscribe(() => {
      console.log('update state fired');
      this.state = JSON.stringify(this.store.snapshot());
    });
  }

  save() {
    this.store.dispatch(new CustomerActions.SetCustomerName('jami'));
  }
}
