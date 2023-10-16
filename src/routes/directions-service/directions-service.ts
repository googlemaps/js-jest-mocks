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

export class DirectionsService implements google.maps.DirectionsService {
  public route = jest.fn().mockImplementation(
    (
      request: google.maps.DirectionsRequest,
      callback?: (
        directionsResult?: Array<google.maps.DirectionsResult>,
        // @ts-expect-error
        directionsStatus: google.maps.DirectionsStatus
      ) => void
    ): Promise<google.maps.DirectionsResult> =>
      Promise.resolve({
        request,
        routes: [] as Array<google.maps.DirectionsRoute>,
        available_travel_modes: [] as Array<google.maps.TravelMode>,
        geocoded_waypoints: [] as Array<google.maps.DirectionsGeocodedWaypoint>,
      })
  );

  constructor() {
    __registerMockInstance(this.constructor, this);
  }
}
