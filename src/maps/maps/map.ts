/**
 * Copyright 2019 Google LLC. All Rights Reserved.
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

import { Data } from "../../drawing/data/data";
import { LatLng, LatLngBounds } from "../coordinates/latlng";
import { MVCObject } from "../event/mvcobject";

export class Map_ extends MVCObject implements google.maps.Map {
  public controls: Array<google.maps.MVCArray<Node>>;
  public data: google.maps.Data;
  public mapTypes: google.maps.MapTypeRegistry;
  public overlayMapTypes: google.maps.MVCArray<google.maps.MapType>;

  constructor(mapDiv: Element | null, opts?: google.maps.MapOptions) {
    super();
    this.data = new Data();
    this.controls = [
      new google.maps.MVCArray<Node>(), // BOTTOM_CENTER
      new google.maps.MVCArray<Node>(), // BOTTOM_LEFT
      new google.maps.MVCArray<Node>(), // BOTTOM_RIGHT
      new google.maps.MVCArray<Node>(), // LEFT_BOTTOM
      new google.maps.MVCArray<Node>(), // LEFT_CENTER
      new google.maps.MVCArray<Node>(), // LEFT_TOP
      new google.maps.MVCArray<Node>(), // RIGHT_BOTTOM
      new google.maps.MVCArray<Node>(), // RIGHT_CENTER
      new google.maps.MVCArray<Node>(), // RIGHT_TOP
      new google.maps.MVCArray<Node>(), // TOP_CENTER
      new google.maps.MVCArray<Node>(), // TOP_LEFT
      new google.maps.MVCArray<Node>(), // TOP_RIGHT
    ];
  }
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
    .mockImplementation(
      (): google.maps.StreetViewPanorama =>
        jest.fn() as unknown as google.maps.StreetViewPanorama
    );
  public getTilt = jest.fn().mockImplementation((): number => 0);
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
  public setStreetView = jest
    .fn()
    .mockImplementation((panorama: google.maps.StreetViewPanorama): void => {
      return null;
    });
  public setTilt = jest.fn().mockImplementation((tilt: number): void => {
    return null;
  });
  public setZoom = jest.fn().mockImplementation((zoom: number): void => {
    return null;
  });
  public setClickableIcons = jest
    .fn()
    .mockImplementation((clickable: boolean): void => {
      return null;
    });
}
