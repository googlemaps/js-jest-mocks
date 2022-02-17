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

beforeEach(() => {
  initialize();
});

test("polygon constructor is mocked", () => {
  expect(new google.maps.Polygon(null)).toBeTruthy();
});

test("getDraggable returns false", () => {
  expect(new google.maps.Polygon(null).getDraggable()).toBe(false);
});

test("getEditable returns false", () => {
  expect(new google.maps.Polygon(null).getEditable()).toBe(false);
});

test("getMap returns {}", () => {
  expect(new google.maps.Polygon(null).getMap()).toEqual({});
});

test("getPath returns {}", () => {
  expect(new google.maps.Polygon(null).getPath()).toEqual({});
});

test("getPaths returns {}", () => {
  expect(new google.maps.Polygon(null).getPaths()).toEqual({});
});

test("getVisible returns false", () => {
  expect(new google.maps.Polygon(null).getVisible()).toEqual(false);
});

test("setDraggable is mocked", () => {
  new google.maps.Polygon(null).setDraggable(true);
});

test("setEditable is mocked", () => {
  new google.maps.Polygon(null).setEditable(true);
});

test("setMap is mocked", () => {
  new google.maps.Polygon(null).setMap({} as google.maps.Map);
});

test("setOptions is mocked", () => {
  new google.maps.Polygon(null).setOptions({});
});

test("setPath is mocked", () => {
  new google.maps.Polygon(null).setPath([]);
});

test("setPaths is mocked", () => {
  new google.maps.Polygon(null).setPaths([]);
});

test("setVisible is mocked", () => {
  new google.maps.Polygon(null).setVisible(true);
});
