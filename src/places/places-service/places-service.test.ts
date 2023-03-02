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

import { PlacesService, initialize, mockInstances } from "../../index";

beforeEach(() => {
  initialize();
});

test("register mocks", () => {
  const placesService = new google.maps.places.PlacesService(null);

  expect(placesService).toBeTruthy();
});

test("places service is mocked", () => {
  const placesService = new google.maps.places.PlacesService(null);

  const callback = jest.fn();

  placesService.findPlaceFromPhoneNumber(null, callback);
  placesService.findPlaceFromQuery(null, callback);
  placesService.getDetails(null, callback);
  placesService.nearbySearch(null, callback);
  placesService.textSearch(null, callback);

  const mocks = mockInstances.get(PlacesService);

  expect(mocks).toHaveLength(1);

  expect(
    mockInstances.get(PlacesService)[0].findPlaceFromPhoneNumber
  ).toHaveBeenCalledWith(null, callback);

  expect(
    mockInstances.get(PlacesService)[0].findPlaceFromQuery
  ).toHaveBeenCalledWith(null, callback);

  expect(mockInstances.get(PlacesService)[0].getDetails).toHaveBeenCalledWith(
    null,
    callback
  );

  expect(mockInstances.get(PlacesService)[0].nearbySearch).toHaveBeenCalledWith(
    null,
    callback
  );

  expect(mockInstances.get(PlacesService)[0].textSearch).toHaveBeenCalledWith(
    null,
    callback
  );
});
