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

import { LatLng } from "../../maps/coordinates/latlng";
import { Point } from "../../maps/coordinates/point";
import { MVCObject } from "../../maps/event/mvcobject";
import { VisibleRegion } from "../../maps/maps/visibleregion";

export class MapCanvasProjection
  extends MVCObject
  implements google.maps.MapCanvasProjection
{
  public fromContainerPixelToLatLng = jest
    .fn()
    .mockImplementation(
      (
        pixel: google.maps.Point | null,
        nowrap?: boolean
      ): google.maps.LatLng | null => new LatLng(0, 0)
    );
  public fromDivPixelToLatLng = jest
    .fn()
    .mockImplementation(
      (
        pixel: google.maps.Point | null,
        nowrap?: boolean
      ): google.maps.LatLng | null => new LatLng(0, 0)
    );
  public fromLatLngToContainerPixel = jest
    .fn()
    .mockImplementation(
      (latLng: google.maps.LatLng | null): google.maps.Point | null =>
        new Point(0, 0)
    );
  public fromLatLngToDivPixel = jest
    .fn()
    .mockImplementation(
      (latLng: google.maps.LatLng | null): google.maps.Point => new Point(0, 0)
    );
  public getVisibleRegion = jest
    .fn()
    .mockImplementation(
      (): google.maps.VisibleRegion | null => new VisibleRegion()
    );
  public getWorldWidth = jest.fn().mockImplementation((): number => 0);
}
