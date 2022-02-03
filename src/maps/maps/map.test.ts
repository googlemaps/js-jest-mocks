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

import { initialize } from "../../index";
import { ControlPosition } from "../controls/controlposition";
import { Map_ } from "./map";
import { mockInstances } from "../../registry";

test("can initialize", () => {
  initialize();
  expect(new google.maps.Map(null)).toBeTruthy();
});

test("controls initialized", () => {
  initialize();
  const map = new google.maps.Map(null);
  expect(map.controls[ControlPosition.BOTTOM_CENTER]).toBeTruthy();
});

test("mockInstances available", () => {
  initialize();
  new google.maps.MVCObject();
  const map = new google.maps.Map(null);
  expect(Map_.mockInstances).toMatchObject([map]);
});

test("registers mocks", () => {
  initialize();
  const map = new google.maps.Map(null);
  expect(Map_.mockInstances).toMatchObject([map]);
  map.fitBounds(null);
  map.data.get(null);
  expect(mockInstances.get(Map_)).toHaveLength(1);
  expect(mockInstances.get(Map_)[0].fitBounds).toHaveBeenCalledWith(null);
  expect(mockInstances.get(Map_)[0].data.get).toHaveBeenCalledWith(null);
});
