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

export class AutocompleteService
  implements google.maps.places.AutocompleteService
{
  public getPlacePredictions = jest.fn().mockImplementation(
    (
      request: google.maps.places.AutocompletionRequest,
      callback?: (
        autocompletePrediction?: Array<google.maps.places.AutocompletePrediction>,
        // @ts-expect-error
        placesServiceStatus: google.maps.places.PlacesServiceStatus
      ) => void
    ): Promise<google.maps.places.AutocompleteResponse> =>
      Promise.resolve({
        predictions: [] as Array<google.maps.places.AutocompletePrediction>,
      })
  );

  public getQueryPredictions = jest
    .fn()
    .mockImplementation(
      (
        request: google.maps.places.QueryAutocompletionRequest,
        callback: (
          placesServiceStatus: google.maps.places.PlacesServiceStatus,
          queryAutocompletePrediction?: Array<google.maps.places.QueryAutocompletePrediction>
        ) => void
      ): void => {}
    );

  constructor() {
    __registerMockInstance(this.constructor, this);
  }
}
