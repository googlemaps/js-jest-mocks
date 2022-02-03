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
import { MVCObject } from "../../maps/event/mvcobject";
import { Map_ } from "../../maps/maps/map";

export class Circle extends MVCObject implements google.maps.Circle {
  constructor(opt?: google.maps.CircleOptions) {
    super();
  }
  public getBounds = jest
    .fn()
    .mockImplementation(
      (): google.maps.LatLngBounds | null | undefined => null
    );
  public getCenter = jest
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new LatLng({ lat: 0, lng: 0 })
    );
  public getDraggable = jest.fn().mockImplementation((): boolean => true);
  public getEditable = jest.fn().mockImplementation((): boolean => true);
  public getMap = jest
    .fn()
    .mockImplementation((): google.maps.Map => new Map_(null));
  public getRadius = jest.fn().mockImplementation((): number => 0);
  public getVisible = jest.fn().mockImplementation((): boolean => true);
  public setCenter = jest
    .fn()
    .mockImplementation(
      (center: google.maps.LatLng | google.maps.LatLngLiteral) => {}
    );
  public setDraggable = jest
    .fn()
    .mockImplementation((draggable: boolean) => {});
  public setEditable = jest.fn().mockImplementation((editable: boolean) => {});
  public setMap = jest.fn().mockImplementation((map: google.maps.Map) => {});
  public setOptions = jest
    .fn()
    .mockImplementation((options: google.maps.CircleOptions) => {});
  public setRadius = jest.fn().mockImplementation((radius: number) => {});
  public setVisible = jest.fn().mockImplementation((visible: boolean) => {});
}
