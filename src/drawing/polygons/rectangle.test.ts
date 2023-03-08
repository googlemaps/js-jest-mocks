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
import { Map_ } from "../../maps/maps/map";

beforeEach(() => {
  initialize();
});

test("Rectangle constructor is mocked", () => {
  expect(new google.maps.Rectangle(null)).toBeTruthy();
});

test("getBounds returns null", () => {
  expect(new google.maps.Rectangle(null).getBounds()).toBeNull();
});

test("getDraggable returns true", () => {
  expect(new google.maps.Rectangle(null).getDraggable()).toBe(true);
});

test("getEditable returns true", () => {
  expect(new google.maps.Rectangle(null).getEditable()).toBe(true);
});

test("getMap returns map", () => {
  expect(new google.maps.Rectangle(null).getMap()).toBeInstanceOf(Map_);
});

test("getVisible returns true", () => {
  expect(new google.maps.Rectangle(null).getVisible()).toBe(true);
});

test("setBounds is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  const bounds = { north: 1, east: 2, west: 3, south: 4 };
  rect.setBounds(bounds);
  expect(rect.setBounds).toHaveBeenCalledWith(bounds);
});

test("setDraggable is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  rect.setDraggable(false);
  expect(rect.setDraggable).toHaveBeenCalledWith(false);
});

test("setEditable is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  rect.setEditable(false);
  expect(rect.setEditable).toHaveBeenCalledWith(false);
});

test("setMap is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  const myMap = {} as any;
  rect.setMap(myMap);
  expect(rect.setMap).toHaveBeenCalledWith({});
});

test("setOptions is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  rect.setOptions({ editable: true });
  expect(rect.setOptions).toHaveBeenCalledWith({ editable: true });
});

test("setVisible is mocked", () => {
  const rect = new google.maps.Rectangle(null);
  rect.setVisible(false);
  expect(rect.setVisible).toHaveBeenCalledWith(false);
});
