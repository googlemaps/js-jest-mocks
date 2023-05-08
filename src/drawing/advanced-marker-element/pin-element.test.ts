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

import { PinElement, initialize, mockInstances } from "../../index";

beforeEach(() => {
  initialize();
});

test("pin Element is mocked", async () => {
  const pinElement = new google.maps.marker.PinElement();

  expect(pinElement).toBeTruthy();
});

test("registers mocks", () => {
  const pinElement = new google.maps.marker.PinElement();

  pinElement.background = "red";
  pinElement.borderColor = "blue";
  pinElement.scale = 2;

  const mocks = mockInstances.get(PinElement);

  expect(mocks).toHaveLength(1);

  expect(mockInstances.get(PinElement)[0].background).toBe("red");
  expect(mockInstances.get(PinElement)[0].borderColor).toBe("blue");
  expect(mockInstances.get(PinElement)[0].scale).toBe(2);
});
