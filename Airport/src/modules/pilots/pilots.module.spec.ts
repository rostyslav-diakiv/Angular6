import { PilotsModule } from './pilots.module';

describe('PilotsModule', () => {
  let pilotsModule: PilotsModule;

  beforeEach(() => {
    pilotsModule = new PilotsModule();
  });

  it('should create an instance', () => {
    expect(pilotsModule).toBeTruthy();
  });
});
