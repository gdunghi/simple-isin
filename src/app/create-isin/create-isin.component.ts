import { Component, OnInit } from '@angular/core';

import { IsinService } from '../isin.service';

@Component({
  selector: 'isin-create-isin',
  templateUrl: './create-isin.component.html',
  styleUrls: ['./create-isin.component.css']
})
export class CreateIsinComponent implements OnInit {
  securitiesSymbol: string;
  companyCode: string;
  isinCode: string;

  constructor(private isinService: IsinService) { }

  ngOnInit() {
  }

  create() {
    this.isinService.create(
      this.securitiesSymbol,
      this.companyCode,
      this.isinCode
    );
  }

}
