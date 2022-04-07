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

import { LatLngBounds } from "../../maps/coordinates/latlng";
import { MapsEventListener } from "../../maps/event/event";
import { MVCObject } from "../../maps/event/mvcobject";

export class KmlLayer extends MVCObject implements google.maps.KmlLayer {
  public getDefaultViewport = jest
    .fn()
    .mockImplementation((): LatLngBounds | null => null);
  public getMap = jest
    .fn()
    .mockImplementation(
      (): google.maps.Map | google.maps.StreetViewPanorama | null | undefined =>
        null
    );
  public getMetadata = jest
    .fn()
    .mockImplementation((): google.maps.KmlLayerMetadata | null => null);
  public getStatus = jest
    .fn()
    .mockImplementation((): google.maps.KmlLayerStatus | null => null);
  public getUrl = jest
    .fn()
    .mockImplementation((): string | null | undefined => null);
  public getZIndex = jest
    .fn()
    .mockImplementation((): number | null | undefined => null);
  public setMap = jest
    .fn()
    .mockImplementation((map: google.maps.Map | null): void => {
      return;
    });
  public setOptions = jest
    .fn()
    .mockImplementation((options: google.maps.KmlLayerOptions): void => {
      return;
    });
  public setUrl = jest.fn().mockImplementation((url: string): void => {
    return;
  });
  public setZIndex = jest.fn().mockImplementation((zIndex: number): void => {
    return;
  });
  public addListener = jest
    .fn()
    .mockImplementation(
      (
        eventName: string,
        handler: (this: KmlLayer, event: MouseEvent) => void
      ): google.maps.MapsEventListener => MapsEventListener
    );
  constructor(opts?: google.maps.KmlLayerOptions | null) {
    super();
  }
}
