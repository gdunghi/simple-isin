import { Component, OnInit } from '@angular/core';

import { IsinService, Stock } from '../isin.service';

@Component({
  selector: 'isin-list-isin',
  templateUrl: './list-isin.component.html',
  styleUrls: ['./list-isin.component.css']
})
export class ListIsinComponent implements OnInit {

  stocks: Stock[];

  constructor(private isinService: IsinService) {
  }

  ngOnInit() {
    this.stocks = [];
    this.isinService.onCreateStock((createdStocks) => {
      this.stocks = createdStocks;
    });
  }

}
