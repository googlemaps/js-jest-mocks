import { MapsEventListener } from "../event/event";

export class FeatureLayer implements google.maps.FeatureLayer {
  featureType: google.maps.FeatureType =
    google.maps.FeatureType.ADMINISTRATIVE_AREA_LEVEL_1;
  isAvailable = false;
  style:
    | google.maps.FeatureStyleOptions
    | google.maps.FeatureStyleFunction
    | null = null;

  addListener = jest.fn(
    (eventName: string, handler: Function): google.maps.MapsEventListener =>
      MapsEventListener
  );
}
