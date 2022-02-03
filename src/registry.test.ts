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

import { initialize } from ".";
import { MVCObject, Map } from ".";
import { mapMocks, MOCKS_REGISTRY } from "./registry";

test("mocks registry", () => {
  initialize();
  expect(MOCKS_REGISTRY.size).toBe(0);
  const mvc1 = new google.maps.MVCObject();
  const mvc2 = new google.maps.MVCObject();
  expect(MOCKS_REGISTRY.size).toBe(1);
  expect(mapMocks.get(MVCObject)).toStrictEqual([mvc1, mvc2]);
  const map = new google.maps.Map(null);
  mapMocks.clear(MVCObject);
  expect(mapMocks.get(MVCObject)).toStrictEqual([]);
  expect(mapMocks.get(Map)).toStrictEqual([map]);
  mapMocks.clearAll();
  expect(MOCKS_REGISTRY.size).toBe(0);
});
