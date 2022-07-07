import { Component, OnInit, VERSION } from '@angular/core';
import {
  Select,
  Store
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

  constructor(private store: Store) {
  }

  save() {
    this.store.dispatch(new CustomerActions.SetCustomerName('jami'));
  }
}
