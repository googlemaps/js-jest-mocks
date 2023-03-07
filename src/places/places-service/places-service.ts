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

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { __registerMockInstance } from "../../registry";

export class PlacesService implements google.maps.places.PlacesService {
  public findPlaceFromPhoneNumber = jest.fn().mockImplementation(
    (
      request: google.maps.places.FindPlaceFromPhoneNumberRequest,
      callback: (
        placesResult?: Array<google.maps.places.PlaceResult>,
        // @ts-expect-error
        placeServiceStatus: google.maps.places.PlacesServiceStatus
      ) => void
    ): void => {}
  );

  public findPlaceFromQuery = jest.fn().mockImplementation(
    (
      request: google.maps.places.FindPlaceFromQueryRequest,
      callback: (
        placeResult?: Array<google.maps.places.PlaceResult>,
        // @ts-expect-error
        placeServiceStatus: google.maps.places.PlacesServiceStatus
      ) => void
    ): void => {}
  );

  public getDetails = jest.fn().mockImplementation(
    (
      request: google.maps.places.PlaceDetailsRequest,
      callback: (
        placeResult?: Array<google.maps.places.PlaceResult>,
        // @ts-expect-error
        placeServiceStatus: google.maps.places.PlacesServiceStatus
      ) => void
    ): void => {}
  );

  public nearbySearch = jest.fn().mockImplementation(
    (
      request: google.maps.places.PlaceSearchRequest,
      callback: (
        placeResult?: Array<google.maps.places.PlaceResult>,
        // @ts-expect-error
        placesServiceStatus: google.maps.places.PlacesServiceStatus,
        pagination?: google.maps.places.PlaceSearchPagination
      ) => void
    ): void => {}
  );

  public textSearch = jest.fn().mockImplementation(
    (
      request: google.maps.places.TextSearchRequest,
      callback: (
        placeResult?: Array<google.maps.places.PlaceResult>,
        // @ts-expect-error
        placesServiceStatus: google.maps.places.PlacesServiceStatus,
        pagination?: google.maps.places.PlaceSearchPagination
      ) => void
    ): void => {}
  );

  constructor(attrContainer: HTMLDivElement | null) {
    __registerMockInstance(this.constructor, this);
  }
}
