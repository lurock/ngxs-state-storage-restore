export namespace CustomerActions {
  export class SetCustomerName {
    static readonly type = '[Customer] SetCustomerName';

    constructor(public name: string) {}
  }
}
