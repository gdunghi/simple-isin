/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IsinService } from './isin.service';

describe('IsinServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsinService]
    });
  });

  it('should ...', inject([IsinService], (service: IsinService) => {
    expect(service).toBeTruthy();
  }));
});
