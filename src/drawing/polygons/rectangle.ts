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
import { Map_ } from "../../maps/maps/map";

export class Rectangle extends MVCObject implements google.maps.Rectangle {
  constructor(opt?: google.maps.RectangleOptions) {
    super();
  }
  public getBounds = jest.fn(() => null);
  public getDraggable = jest.fn(() => true);
  public getEditable = jest.fn(() => true);
  public getMap = jest.fn(() => new Map_(null));
  public getVisible = jest.fn(() => true);
  public setBounds = jest.fn(
    (bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral) => {}
  );
  public setDraggable = jest.fn((draggable: boolean) => {});
  public setEditable = jest.fn((editable: boolean) => {});
  public setMap = jest.fn((map: google.maps.Map | null) => {});
  public setOptions = jest.fn(
    (options: google.maps.RectangleOptions | null) => {}
  );
  public setVisible = jest.fn((visible: boolean) => {});
}
