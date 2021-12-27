import { MVCObject } from '../../mvcobject';

export class StreetViewCoverageLayer
  extends MVCObject
  implements google.maps.StreetViewCoverageLayer
{
  getMap = jest.fn().mockImplementation((): google.maps.Map | null => null);
  setMap = jest
    .fn()
    .mockImplementation((map: google.maps.Map | null): void => null);
}
