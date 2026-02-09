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
import { __registerMockInstance } from "../../registry";

export class LatLngAltitude implements google.maps.LatLngAltitude {
  public lat = 0;
  public lng = 0;
  public altitude = 0;

  constructor(
    value:
      | google.maps.LatLng
      | google.maps.LatLngLiteral
      | google.maps.LatLngAltitude
      | google.maps.LatLngAltitudeLiteral,
    noClampNoWrap?: boolean
  ) {
    __registerMockInstance(this.constructor, this);
  }

  public equals = jest
    .fn()
    .mockImplementation((other: google.maps.LatLngAltitude): boolean => false);

  public toJSON = jest
    .fn()
    .mockImplementation((): google.maps.LatLngAltitudeLiteral => {
      return { lat: 0, lng: 0, altitude: 0 };
    });
}
