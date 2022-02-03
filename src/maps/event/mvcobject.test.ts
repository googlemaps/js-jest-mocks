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
import { Map_ } from "../maps/map";
import { MVCObject } from "./mvcobject";

test("instances are stored", () => {
  const mvcObject = new MVCObject();
  expect(MVCObject.mockInstances).toStrictEqual([mvcObject]);
  expect(MVCObject.mockInstances[0].addListener).toBeTruthy();
  expect(mvcObject.addListener()).toBeTruthy();
});

test("setup child class", () => {
  initialize();
  new google.maps.Map(null);
  expect(Map_.mockInstances).toBeTruthy();
});

test("auto cleanup after each test from above", () => {
  expect(MVCObject.mockInstances).toBeUndefined();
  expect(Map_.mockInstances).toBeUndefined();
  expect(MVCObject._mockClasses).toBeUndefined();
});
