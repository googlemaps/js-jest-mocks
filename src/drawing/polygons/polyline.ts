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

import { MVCObject } from "../../maps/event/mvcobject";

export class Polyline extends MVCObject implements google.maps.Polyline {
  constructor(opts?: google.maps.PolylineOptions | null) {
    super();
  }

  public getDraggable = jest.fn().mockImplementation((): boolean => false);
  public getEditable = jest.fn().mockImplementation((): boolean => false);
  public getMap = jest
    .fn()
    .mockImplementation((): google.maps.Map => ({}) as google.maps.Map);
  public getPath = jest
    .fn()
    .mockImplementation(
      (): google.maps.MVCArray<google.maps.LatLng> =>
        ({}) as google.maps.MVCArray<google.maps.LatLng>
    );
  public getVisible = jest.fn().mockImplementation((): boolean => false);
  public setDraggable = jest
    .fn()
    .mockImplementation((draggable: boolean): void => {});
  public setEditable = jest
    .fn()
    .mockImplementation((editable: boolean): void => {});
  public setMap = jest
    .fn()
    .mockImplementation((map: google.maps.Map): void => {});
  public setOptions = jest
    .fn()
    .mockImplementation((options: google.maps.PolylineOptions): void => {});
  public setPath = jest
    .fn()
    .mockImplementation(
      (
        path:
          | google.maps.MVCArray<google.maps.LatLng>
          | google.maps.LatLng[]
          | google.maps.LatLngLiteral[]
      ): void => {}
    );
  public setVisible = jest
    .fn()
    .mockImplementation((visible: boolean): void => {});
}
