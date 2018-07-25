import { TestBed, inject } from '@angular/core/testing';

import { PilotResolver } from './pilot-resolver.service';

describe('PilotResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotResolver]
    });
  });

  it('should be created', inject([PilotResolver], (service: PilotResolver) => {
    expect(service).toBeTruthy();
  }));
});
