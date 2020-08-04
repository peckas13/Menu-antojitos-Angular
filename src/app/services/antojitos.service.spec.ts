import { TestBed } from '@angular/core/testing';

import { AntojitosService } from './antojitos.service';

describe('AntojitosService', () => {
  let service: AntojitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntojitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
