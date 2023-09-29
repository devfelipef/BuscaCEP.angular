import { TestBed } from '@angular/core/testing';

import { CepBuscaService } from './cep-busca.service';

describe('CepBuscaService', () => {
  let service: CepBuscaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepBuscaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
