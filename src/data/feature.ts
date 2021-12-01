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

export class Feature implements google.maps.Data.Feature {
  constructor(options?: google.maps.Data.FeatureOptions | null) {}
  public forEachProperty = jest.fn((callback: (a: any, b: string) => void) => {
    return null;
  });
  public getGeometry = jest.fn(() => {
    return null;
  });
  public getId = jest.fn(() => {
    return undefined;
  });
  public getProperty = jest.fn((name: string) => {
    return undefined;
  });
  public removeProperty = jest.fn((name: string) => {
    return null;
  });
  public setGeometry = jest.fn(
    (
      newGeometry:
        | google.maps.Data.Geometry
        | null
        | google.maps.LatLng
        | google.maps.LatLngLiteral
    ) => {
      return null;
    }
  );
  public setProperty = jest.fn((name: string, newValue: any) => {
    return null;
  });
  public toGeoJson = jest.fn((callback: (a: object) => void) => {
    return null;
  });
}
