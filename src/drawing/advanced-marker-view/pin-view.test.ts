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

import { PinView, initialize, mockInstances } from "../../index";

beforeEach(() => {
  initialize();
});

test("pin view is mocked", async () => {
  const pinView = new google.maps.marker.PinView();

  expect(pinView).toBeTruthy();
});

test("registers mocks", () => {
  const pinView = new google.maps.marker.PinView();

  pinView.background = "red";
  pinView.borderColor = "blue";
  pinView.scale = 2;

  const mocks = mockInstances.get(PinView);

  expect(mocks).toHaveLength(1);

  expect(mockInstances.get(PinView)[0].background).toBe("red");
  expect(mockInstances.get(PinView)[0].borderColor).toBe("blue");
  expect(mockInstances.get(PinView)[0].scale).toBe(2);
});
