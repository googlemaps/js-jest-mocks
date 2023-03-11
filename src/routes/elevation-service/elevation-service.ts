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

/* eslint-disable @typescript-eslint/no-unused-vars */

import { __registerMockInstance } from "../../registry";

export class ElevationsService implements google.maps.ElevationService {
  public getElevationAlongPath = jest.fn().mockImplementation(
    (
      request: google.maps.PathElevationRequest,
      callback?: (
        elevationResults?: Array<google.maps.ElevationResult>,
        // @ts-expect-error
        elevationStatus: google.maps.ElevationStatus
      ) => void
    ): Promise<google.maps.PathElevationResponse> =>
      Promise.resolve({
        results: [] satisfies Array<google.maps.ElevationResult>,
      })
  );

  public getElevationForLocations = jest.fn().mockImplementation(
    (
      request: google.maps.LocationElevationRequest,
      callback?: (
        elevationResults?: Array<google.maps.ElevationResult>,
        // @ts-expect-error
        elevationStatus: google.maps.ElevationStatus
      ) => void
    ): Promise<google.maps.LocationElevationResponse> =>
      Promise.resolve({
        results: [] satisfies Array<google.maps.ElevationResult>,
      })
  );

  constructor() {
    __registerMockInstance(this.constructor, this);
  }
}
