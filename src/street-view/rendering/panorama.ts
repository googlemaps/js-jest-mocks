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

import { LatLng } from "../../maps/coordinates/latlng";
import { MVCArray } from "../../maps/event/mvcarray";
import { MVCObject } from "../../maps/event/mvcobject";

export class StreetViewPanorama
  extends MVCObject
  implements google.maps.StreetViewPanorama
{
  public focus = jest.fn().mockImplementation((): void => {});
  public controls: MVCArray<HTMLElement>[] = [];
  public getLinks = jest
    .fn()
    .mockImplementation(
      (): (google.maps.StreetViewLink | null)[] | null => null
    );
  public getLocation = jest
    .fn()
    .mockImplementation((): google.maps.StreetViewLocation | null => ({
      description: null,
      latLng: new LatLng(1, 1),
      pano: "pano",
      shortDescription: null,
    }));
  public getMotionTracking = jest.fn().mockImplementation((): boolean => false);
  public getPano = jest.fn().mockImplementation((): string => "pano");
  public getPhotographerPov = jest
    .fn()
    .mockImplementation(
      (): google.maps.StreetViewPov => ({ heading: 0, pitch: 0 })
    );
  public getPosition = jest
    .fn()
    .mockImplementation((): google.maps.LatLng | null => new LatLng(1, 1));
  public getPov = jest
    .fn()
    .mockImplementation(
      (): google.maps.StreetViewPov => ({ heading: 0, pitch: 0 })
    );
  public getStatus = jest
    .fn()
    .mockImplementation(
      (): google.maps.StreetViewStatus => google.maps.StreetViewStatus.OK
    );
  public getVisible = jest.fn().mockImplementation((): boolean => true);
  public getZoom = jest.fn().mockImplementation((): number => 0);
  public registerPanoProvider = jest
    .fn()
    .mockImplementation(
      (
        provider: (a: string) => google.maps.StreetViewPanoramaData | null,
        opt_options?: google.maps.PanoProviderOptions
      ): void => null
    );
  public setLinks = jest
    .fn()
    .mockImplementation(
      (inks: (google.maps.StreetViewLink | null)[] | null): void => null
    );
  public setMotionTracking = jest
    .fn()
    .mockImplementation((motionTracking: boolean): void => null);
  public setOptions = jest
    .fn()
    .mockImplementation(
      (options: google.maps.StreetViewPanoramaOptions | null): void => null
    );
  public setPano = jest.fn().mockImplementation((pano: string): void => null);
  public setPosition = jest
    .fn()
    .mockImplementation(
      (latLng: google.maps.LatLng | null | google.maps.LatLngLiteral): void =>
        null
    );
  public setPov = jest
    .fn()
    .mockImplementation((pov: google.maps.StreetViewPov): void => null);
  public setVisible = jest
    .fn()
    .mockImplementation((flag: boolean): void => null);
  public setZoom = jest.fn().mockImplementation((zoom: number): void => null);
  public focus = jest.fn();
}
