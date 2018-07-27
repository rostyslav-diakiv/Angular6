import { CrewsModule } from './crews.module';

describe('CrewsModule', () => {
  let crewsModule: CrewsModule;

  beforeEach(() => {
    crewsModule = new CrewsModule();
  });

  it('should create an instance', () => {
    expect(crewsModule).toBeTruthy();
  });
});
