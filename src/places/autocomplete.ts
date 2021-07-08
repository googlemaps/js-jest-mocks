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

import { MVCObject } from "../mvcobject";

export class Autocomplete
  extends MVCObject
  implements google.maps.places.Autocomplete
{
  constructor(
    inputField: HTMLInputElement,
    opts?: google.maps.places.AutocompleteOptions
  ) {
    super();
  }
  getBounds = jest
    .fn()
    .mockImplementation(
      (): google.maps.LatLngBounds | null | undefined => null
    );
  getFields = jest.fn().mockImplementation((): string[] => []);
  getPlace = jest
    .fn()
    .mockImplementation(
      (): google.maps.places.PlaceResult =>
        ({ name: "" } as google.maps.places.PlaceResult)
    );
  setBounds = jest
    .fn()
    .mockImplementation(
      (
        bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
      ): void => {}
    );
  setComponentRestrictions = jest
    .fn()
    .mockImplementation(
      (restrictions: google.maps.places.ComponentRestrictions): void => {}
    );
  setFields = jest.fn().mockImplementation((fields: string[]): void => {});
  setOptions = jest
    .fn()
    .mockImplementation(
      (options: google.maps.places.AutocompleteOptions): void => {}
    );
  setTypes = jest.fn().mockImplementation((types: string[]): void => {});
}
