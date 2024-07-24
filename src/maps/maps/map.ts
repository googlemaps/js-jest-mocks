/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { StreetViewPanorama } from "../../street-view/rendering/panorama";
import { LatLng, LatLngBounds } from "../coordinates/latlng";
import { MapsEventListener } from "../event/event";
import { MVCObject } from "../event/mvcobject";
import { FeatureLayer } from "./featurelayer";
import { ControlPosition } from "../controls/controlposition";

export class Map_ extends MVCObject implements google.maps.Map {
  public controls: Array<google.maps.MVCArray<HTMLElement>>;
  public data: google.maps.Data;
  public mapTypes: google.maps.MapTypeRegistry;
  public overlayMapTypes: google.maps.MVCArray<google.maps.MapType>;

  public getDatasetFeatureLayer = jest.fn(
    (datasetId: string) => new FeatureLayer()
  );

  public getFeatureLayer = jest.fn(
    (featureType: google.maps.FeatureType) => new FeatureLayer()
  );

  public getMapCapabilities = jest.fn(() => {
    return {
      isAdvancedMarkersAvailable: false,
      isDataDrivenStylingAvailable: false,
    };
  });

  public fitBounds = jest
    .fn()
    .mockImplementation(
      (
        bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral,
        padding?: number | google.maps.Padding
      ): void => {
        return null;
      }
    );
  public getBounds = jest.fn().mockImplementation(() => new LatLngBounds());
  public getCenter = jest
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new LatLng({ lat: 0, lng: 0 })
    );
  public getClickableIcons = jest.fn().mockImplementation((): boolean => false);
  public getDiv = jest.fn().mockImplementation((): Element => {
    return jest.fn() as unknown as Element;
  });
  public getHeading = jest.fn().mockImplementation((): number => 0);
  public getHeadingInteractionEnabled = jest
    .fn()
    .mockImplementation((): boolean | null => null);
  public getMapTypeId = jest
    .fn()
    .mockImplementation(
      (): google.maps.MapTypeId => google.maps.MapTypeId.ROADMAP
    );
  public getProjection = jest
    .fn()
    .mockImplementation((): google.maps.Projection | null => jest.fn() as null);
  public getRenderingType = jest
    .fn()
    .mockImplementation(
      (): google.maps.RenderingType => google.maps.RenderingType.RASTER
    );
  public getStreetView = jest
    .fn()
    .mockImplementation(() => new StreetViewPanorama());
  public getTilt = jest.fn().mockImplementation((): number => 0);
  public getTiltInteractionEnabled = jest
    .fn()
    .mockImplementation((): boolean | null => null);
  public getZoom = jest.fn().mockImplementation((): number => 0);
  public moveCamera = jest
    .fn()
    .mockImplementation((cameraOptions: google.maps.CameraOptions): void => {
      return null;
    });
  public panBy = jest.fn().mockImplementation((x: number, y: number): void => {
    return null;
  });
  public panTo = jest
    .fn()
    .mockImplementation(
      (latLng: google.maps.LatLng | google.maps.LatLngLiteral): void => {
        return null;
      }
    );
  public panToBounds = jest
    .fn()
    .mockImplementation(
      (
        latLngBounds:
          | google.maps.LatLngBounds
          | google.maps.LatLngBoundsLiteral,
        padding?: number | google.maps.Padding
      ): void => {
        return null;
      }
    );
  public setCenter = jest
    .fn()
    .mockImplementation(
      (latlng: google.maps.LatLng | google.maps.LatLngLiteral): void => {
        return null;
      }
    );
  public setHeading = jest.fn().mockImplementation((heading: number): void => {
    return null;
  });
  public setHeadingInteractionEnabled = jest
    .fn()
    .mockImplementation((headingInteractionEnabled: boolean) => {});
  public setMapTypeId = jest
    .fn()
    .mockImplementation((mapTypeId: google.maps.MapTypeId | string): void => {
      return null;
    });
  public setOptions = jest
    .fn()
    .mockImplementation((options: google.maps.MapOptions): void => {
      return null;
    });
  public setRenderingType = jest
    .fn()
    .mockImplementation((renderingType: google.maps.RenderingType) => {});
  public setStreetView = jest
    .fn()
    .mockImplementation((panorama: google.maps.StreetViewPanorama): void => {
      return null;
    });
  public setTilt = jest.fn().mockImplementation((tilt: number): void => {
    return null;
  });
  public setTiltInteractionEnabled = jest
    .fn()
    .mockImplementation((tiltInteractionEnabled: boolean) => {});
  public setZoom = jest.fn().mockImplementation((zoom: number): void => {
    return null;
  });
  public setClickableIcons = jest
    .fn()
    .mockImplementation((clickable: boolean): void => {
      return null;
    });

  constructor(mapDiv: Element | null, opts?: google.maps.MapOptions) {
    super();
    this.data = new google.maps.Data();

    this.controls = [];

    for (const [_, value] of Object.entries(ControlPosition)) {
      this.controls[value] = new google.maps.MVCArray<HTMLElement>();
    }

    this.mapTypes = new google.maps.MVCObject();
    this.overlayMapTypes = new google.maps.MVCArray();
  }
}
