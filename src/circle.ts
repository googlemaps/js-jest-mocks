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

import {LatLng} from './index';
import {Map_} from './map';
import {MVCObject} from './mvcobject';

export class Circle extends MVCObject implements google.maps.Circle {
  constructor(opt?: google.maps.CircleOptions) {
    super();
  }
  getBounds = jest
    .fn()
    .mockImplementation(
      (): google.maps.LatLngBounds | null | undefined => null
    );
  getCenter = jest
    .fn()
    .mockImplementation((): google.maps.LatLng => new LatLng({lat: 0, lng: 0}));
  getDraggable = jest.fn().mockImplementation((): boolean => true);
  getEditable = jest.fn().mockImplementation((): boolean => true);
  getMap = jest.fn().mockImplementation((): google.maps.Map => new Map_(null));
  getRadius = jest.fn().mockImplementation((): number => 0);
  getVisible = jest.fn().mockImplementation((): boolean => true);
  setCenter = jest
    .fn()
    .mockImplementation(
      (center: google.maps.LatLng | google.maps.LatLngLiteral) => {}
    );
  setDraggable = jest.fn().mockImplementation((draggable: boolean) => {});
  setEditable = jest.fn().mockImplementation((editable: boolean) => {});
  setMap = jest.fn().mockImplementation((map: google.maps.Map) => {});
  setOptions = jest
    .fn()
    .mockImplementation((options: google.maps.CircleOptions) => {});
  setRadius = jest.fn().mockImplementation((radius: number) => {});
  setVisible = jest.fn().mockImplementation((visible: boolean) => {});
}
