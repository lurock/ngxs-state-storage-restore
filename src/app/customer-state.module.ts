import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { CustomerState } from './customer-state';
import { ActionsListenerService } from './actions-listener.service';

export function noop() {
    return function () {
    };
  }

@NgModule({
    imports: [
        CommonModule,
        NgxsModule.forFeature([
            CustomerState
        ])
    ],
    providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: noop,
          deps: [ActionsListenerService],
          multi: true,
        },
      ]
})
export class CustomerStateModule {
}
