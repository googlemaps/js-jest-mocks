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

import { AutocompleteService, initialize, mockInstances } from "../../index";

beforeEach(() => {
  initialize();
});

test("autocomplete service is mocked", async () => {
  const autocompleteService = new google.maps.places.AutocompleteService();
  expect(autocompleteService).toBeTruthy();
});

test("register mocks", () => {
  const autocompleteService = new google.maps.places.AutocompleteService();

  const callback = jest.fn();

  autocompleteService.getPlacePredictions(null);
  autocompleteService.getQueryPredictions(null, callback);

  const mocks = mockInstances.get(AutocompleteService);

  expect(mocks).toHaveLength(1);
  expect(
    mockInstances.get(AutocompleteService)[0].getPlacePredictions
  ).toHaveBeenCalledWith(null);
  expect(
    mockInstances.get(AutocompleteService)[0].getQueryPredictions
  ).toHaveBeenCalledWith(null, callback);
});
