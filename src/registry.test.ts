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

import { initialize, Marker } from ".";
import { MVCObject, Map } from ".";
import { mockInstances, MOCKS_REGISTRY } from "./registry";

beforeEach(() => {
  initialize();
});

test("mocks registry", () => {
  expect(MOCKS_REGISTRY.size).toBe(0);
  const mvc1 = new google.maps.MVCObject();
  const mvc2 = new google.maps.MVCObject();
  expect(MOCKS_REGISTRY.size).toBe(1);
  expect(mockInstances.get(MVCObject)).toStrictEqual([mvc1, mvc2]);
  const map = new google.maps.Map(null);
  mockInstances.clear(MVCObject);
  expect(mockInstances.get(MVCObject)).toStrictEqual([]);
  expect(mockInstances.get(Map)).toStrictEqual([map]);
  mockInstances.clearAll();
  expect(MOCKS_REGISTRY.size).toBe(0);
});

test("readme example 1", () => {
  const map = new google.maps.Map(null);
  const markerOne = new google.maps.Marker();
  const markerTwo = new google.maps.Marker();

  map.setHeading(8);
  markerOne.setMap(map);
  markerTwo.setLabel("My marker");

  const mapMocks = mockInstances.get(Map);
  const markerMocks = mockInstances.get(Marker);

  expect(mapMocks.length).toBe(1);
  expect(markerMocks.length).toBe(2);
  expect(mapMocks[0].setHeading).toHaveBeenCalledWith(8);
  expect(markerMocks[0].setMap).toHaveBeenCalledTimes(1);
  expect(markerMocks[1].setLabel).toHaveBeenCalledWith("My marker");
});
