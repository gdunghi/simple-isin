import { Injectable } from '@angular/core';

export interface Stock {
  securitiesSymbol: string;
  companyCode: string;
  isinCode: string;
}

@Injectable()
export class IsinService {

  private stocks: Stock[];
  private onCreateStockCallbackFunction: Function;

  constructor() {
    this.stocks = [];
  }

  create(securitiesSymbol: string, companyCode: string, isinCode: string) {
    this.stocks = this.stocks.concat({
      securitiesSymbol: securitiesSymbol,
      companyCode: companyCode,
      isinCode: isinCode
    });

    this.onCreateStockCallbackFunction(this.stocks);
  }

  onCreateStock(onCreateStockCallbackFunction: (stocks: Stock[]) => void) {
    console.log('enter');
    this.onCreateStockCallbackFunction = onCreateStockCallbackFunction;
  }
}
