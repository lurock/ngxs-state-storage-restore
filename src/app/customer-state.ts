import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { CustomerActions } from './customer-actions';

interface CustomerStateModel {
  name: string;
}

@State<CustomerStateModel>({
  name: 'customer',
  defaults: {
    name: '',
  },
})
@Injectable()
export class CustomerState {
  @Selector()
  static getName(state: CustomerStateModel) {
    return state.name;
  }

  @Action(CustomerActions.SetCustomerName)
  setCustomerName(
    { patchState }: StateContext<CustomerStateModel>,
    { name }: CustomerActions.SetCustomerName
  ) {
    patchState({
      name,
    });
  }
}
