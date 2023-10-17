import { MapsEventListener } from "../event/event";

export class FeatureLayer implements google.maps.FeatureLayer {
  public featureType: google.maps.FeatureType =
    google.maps.FeatureType.ADMINISTRATIVE_AREA_LEVEL_1;
  public isAvailable = false;
  public style:
    | google.maps.FeatureStyleOptions
    | google.maps.FeatureStyleFunction
    | null = null;

  public addListener = jest.fn(
    (eventName: string, handler: Function): google.maps.MapsEventListener =>
      MapsEventListener
  );
}
