import { TestBed } from '@angular/core/testing';

import { ListadoLSService } from './listado-ls.service';

describe('ListadoLSService', () => {
  let service: ListadoLSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoLSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
