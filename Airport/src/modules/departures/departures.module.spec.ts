import { DeparturesModule } from './departures.module';

describe('DeparturesModule', () => {
  let departuresModule: DeparturesModule;

  beforeEach(() => {
    departuresModule = new DeparturesModule();
  });

  it('should create an instance', () => {
    expect(departuresModule).toBeTruthy();
  });
});
