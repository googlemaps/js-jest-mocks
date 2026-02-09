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

import { LatLng, initialize, mockInstances } from "../../index";

beforeEach(() => {
  initialize();
});

test("lat lng can initialize", async () => {
  const latLng = new google.maps.LatLng(0, 0);

  expect(latLng).toBeTruthy();
});

test("lat lng registers mocks", () => {
  const latLng1 = new google.maps.LatLng(0, 0);
  const latLng2 = new google.maps.LatLng(0, 0);

  latLng1.equals(latLng2);

  const mocks = mockInstances.get(LatLng);

  expect(mocks).toHaveLength(2);
  expect(mocks[0].equals).toHaveBeenCalledWith(mocks[1]);
});
