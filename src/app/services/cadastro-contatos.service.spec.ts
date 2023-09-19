import { TestBed } from '@angular/core/testing';

import { CadastroContatosService } from './cadastro-contatos.service';

describe('CadastroContatosService', () => {
  let service: CadastroContatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroContatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
