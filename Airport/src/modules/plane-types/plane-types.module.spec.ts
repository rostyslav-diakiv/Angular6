import { PlaneTypesModule } from './plane-types.module';

describe('PlaneTypesModule', () => {
  let planeTypesModule: PlaneTypesModule;

  beforeEach(() => {
    planeTypesModule = new PlaneTypesModule();
  });

  it('should create an instance', () => {
    expect(planeTypesModule).toBeTruthy();
  });
});
