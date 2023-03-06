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

import { initialize, mockInstances } from "../../index";
import { MaxZoomService } from "../../drawing/max-zoom/max-zoom";

beforeEach(() => {
  initialize();
});

test("max zoom service is mocked", async () => {
  const service = new google.maps.MaxZoomService();

  expect(await service.getMaxZoomAtLatLng(null)).toBeTruthy();
});

test("registers mocks", () => {
  const latLng = new google.maps.LatLng({ lat: 0, lng: 0 });

  const service = new google.maps.MaxZoomService();
  service.getMaxZoomAtLatLng(latLng);

  const mocks = mockInstances.get(MaxZoomService);

  expect(mocks).toHaveLength(1);
  expect(
    mockInstances.get(MaxZoomService)[0].getMaxZoomAtLatLng
  ).toHaveBeenCalledWith(latLng);
});
