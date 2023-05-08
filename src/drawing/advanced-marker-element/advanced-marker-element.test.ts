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

import { AdvancedMarkerElement, initialize } from "../../index";
import { mockInstances } from "../../registry";

beforeEach(() => {
  initialize();
});

test("advanced marker can initialize", async () => {
  const marker = new google.maps.marker.AdvancedMarkerElement(null);
  expect(marker).toBeTruthy();
});

test("registers mocks", () => {
  const advancedMarkerElement = new google.maps.marker.AdvancedMarkerElement(
    null
  );

  advancedMarkerElement.position = { lat: 0, lng: 0 };
  advancedMarkerElement.title = "Howdy";

  expect(mockInstances.get(AdvancedMarkerElement)).toHaveLength(1);

  expect(mockInstances.get(AdvancedMarkerElement)[0].position).toEqual({
    lat: 0,
    lng: 0,
  });

  expect(mockInstances.get(AdvancedMarkerElement)[0].title).toBe("Howdy");
});
