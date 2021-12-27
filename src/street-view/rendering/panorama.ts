import { LatLng } from '../../latlng';
import { MVCArray } from '../../mvcarray';
import { MVCObject } from '../../mvcobject';

export class StreetViewPanorama
  extends MVCObject
  implements google.maps.StreetViewPanorama
{
  controls: MVCArray<HTMLElement>[] = [];
  getLinks = jest
    .fn()
    .mockImplementation(
      (): (google.maps.StreetViewLink | null)[] | null => null
    );
  getLocation = jest
    .fn()
    .mockImplementation((): google.maps.StreetViewLocation | null => ({
      description: null,
      latLng: new LatLng(1, 1),
      pano: 'pano',
      shortDescription: null,
    }));
  getMotionTracking = jest.fn().mockImplementation((): boolean => false);
  getPano = jest.fn().mockImplementation((): string => 'pano');
  getPhotographerPov = jest
    .fn()
    .mockImplementation(
      (): google.maps.StreetViewPov => ({ heading: 0, pitch: 0 })
    );
  getPosition = jest
    .fn()
    .mockImplementation((): google.maps.LatLng | null => new LatLng(1, 1));
  getPov = jest
    .fn()
    .mockImplementation(
      (): google.maps.StreetViewPov => ({ heading: 0, pitch: 0 })
    );
  getStatus = jest
    .fn()
    .mockImplementation(
      (): google.maps.StreetViewStatus => google.maps.StreetViewStatus.OK
    );
  getVisible = jest.fn().mockImplementation((): boolean => true);
  getZoom = jest.fn().mockImplementation((): number => 0);
  registerPanoProvider = jest
    .fn()
    .mockImplementation(
      (
        provider: (a: string) => google.maps.StreetViewPanoramaData | null,
        opt_options?: google.maps.PanoProviderOptions
      ): void => null
    );
  setLinks = jest
    .fn()
    .mockImplementation(
      (inks: (google.maps.StreetViewLink | null)[] | null): void => null
    );
  setMotionTracking = jest
    .fn()
    .mockImplementation((motionTracking: boolean): void => null);
  setOptions = jest
    .fn()
    .mockImplementation(
      (options: google.maps.StreetViewPanoramaOptions | null): void => null
    );
  setPano = jest.fn().mockImplementation((pano: string): void => null);
  setPosition = jest
    .fn()
    .mockImplementation(
      (latLng: google.maps.LatLng | null | google.maps.LatLngLiteral): void =>
        null
    );
  setPov = jest
    .fn()
    .mockImplementation((pov: google.maps.StreetViewPov): void => null);
  setVisible = jest.fn().mockImplementation((flag: boolean): void => null);
  setZoom = jest.fn().mockImplementation((zoom: number): void => null);
}
