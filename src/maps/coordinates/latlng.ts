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

export class LatLng implements google.maps.LatLng {
  constructor(
    a: google.maps.LatLngLiteral | number,
    b?: boolean | number,
    c?: boolean
  ) {}

  public equals = jest
    .fn()
    .mockImplementation((other: google.maps.LatLng): boolean => false);
  public lat = jest.fn().mockImplementation((): number => 0);
  public lng = jest.fn().mockImplementation((): number => 0);
  public toString = jest.fn().mockImplementation((): string => "");
  public toUrlValue = jest
    .fn()
    .mockImplementation((precision?: number): string => "");
  public toJSON = jest
    .fn()
    .mockImplementation((): google.maps.LatLngLiteral => {
      return { lat: 0, lng: 0 };
    });
}

export class LatLngBounds implements google.maps.LatLngBounds {
  constructor(
    sw?: google.maps.LatLng | google.maps.LatLngLiteral,
    ne?: google.maps.LatLng | google.maps.LatLngLiteral
  ) {}
  public contains = jest
    .fn()
    .mockImplementation(
      (latLng: google.maps.LatLng | google.maps.LatLngLiteral): boolean => false
    );
  public equals = jest
    .fn()
    .mockImplementation(
      (
        other: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
      ): boolean => false
    );
  public extend = jest
    .fn()
    .mockImplementation(
      (
        point: google.maps.LatLng | google.maps.LatLngLiteral
      ): google.maps.LatLngBounds => this
    );
  public getCenter = jest
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new google.maps.LatLng({ lat: 0, lng: 0 })
    );
  public getNorthEast = jest
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new google.maps.LatLng({ lat: 0, lng: 0 })
    );
  public getSouthWest = jest
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new google.maps.LatLng({ lat: 0, lng: 0 })
    );
  public intersects = jest
    .fn()
    .mockImplementation(
      (
        other: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
      ): boolean => false
    );
  public isEmpty = jest.fn().mockImplementation((): boolean => false);
  public toJSON = jest
    .fn()
    .mockImplementation((): google.maps.LatLngBoundsLiteral => {
      return { east: 0, north: 0, south: 0, west: 0 };
    });
  public toSpan = jest
    .fn()
    .mockImplementation(
      (): google.maps.LatLng => new google.maps.LatLng({ lat: 0, lng: 0 })
    );
  public toString = jest.fn().mockImplementation((): string => "");
  public toUrlValue = jest
    .fn()
    .mockImplementation((precision?: number): string => "");
  public union = jest
    .fn()
    .mockImplementation(
      (
        other: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
      ): google.maps.LatLngBounds => this
    );
}
