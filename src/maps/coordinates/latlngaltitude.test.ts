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

import { LatLngAltitude, initialize, mockInstances } from "../../index";

beforeEach(() => {
  initialize();
});

test("can initialize", async () => {
  const latLng = new google.maps.LatLng(0, 0);
  const latLngAltitude = new google.maps.LatLngAltitude(latLng);

  expect(latLngAltitude).toBeTruthy();
});

test("registers mocks", () => {
  const latLng = new google.maps.LatLng(0, 0);
  const latLngAltitude = new google.maps.LatLngAltitude(latLng);

  latLngAltitude.altitude = 100;

  const mocks = mockInstances.get(LatLngAltitude);

  expect(mocks).toHaveLength(1);
  expect(mocks[0].altitude).toBe(100);
});
