import { StewardessesModule } from './stewardesses.module';

describe('StewardessesModule', () => {
  let stewardessesModule: StewardessesModule;

  beforeEach(() => {
    stewardessesModule = new StewardessesModule();
  });

  it('should create an instance', () => {
    expect(stewardessesModule).toBeTruthy();
  });
});
