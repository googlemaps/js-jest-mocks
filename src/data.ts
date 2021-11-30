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

import { MVCObject } from "./mvcobject";

export class Data extends MVCObject implements google.maps.Data {
  constructor(opt?: google.maps.Data.DataOptions | null) {
    super();
  }
  public add = jest
    .fn()
    .mockImplementation(
      (
        feature?:
          | google.maps.Data.Feature
          | null
          | google.maps.Data.FeatureOptions
      ) => {
        return null;
      }
    );
  public addGeoJson = jest
    .fn()
    .mockImplementation(
      (geoJson: object, options?: google.maps.Data.GeoJsonOptions | null) => {
        return [];
      }
    );
  public contains = jest
    .fn()
    .mockImplementation((feature: google.maps.Data.Feature) => {
      return false;
    });
  public forEach = jest
    .fn()
    .mockImplementation((callback: (a: google.maps.Data.Feature) => void) => {
      return null;
    });
  public getControlPosition = jest.fn().mockImplementation(() => {
    return null;
  });
  public getControls = jest.fn().mockImplementation(() => {
    return null;
  });
  public getDrawingMode = jest.fn().mockImplementation(() => {
    return null;
  });
  public getFeatureById = jest
    .fn()
    .mockImplementation((id: number | string) => {
      return undefined;
    });
  public getMap = jest.fn().mockImplementation(() => {
    return null;
  });
  public getStyle = jest.fn().mockImplementation(() => {
    return null;
  });
  public loadGeoJson = jest
    .fn()
    .mockImplementation(
      (
        url: string,
        options?: google.maps.Data.GeoJsonOptions | null,
        callback?: (a: google.maps.Data.Feature[]) => void
      ) => {
        return null;
      }
    );
  public overrideStyle = jest
    .fn()
    .mockImplementation(
      (
        feature: google.maps.Data.Feature,
        style: google.maps.Data.StyleOptions
      ) => {
        return null;
      }
    );
  public remove = jest
    .fn()
    .mockImplementation((feature: google.maps.Data.Feature) => {
      return null;
    });
  public revertStyle = jest
    .fn()
    .mockImplementation((feature?: google.maps.Data.Feature | null) => {
      return null;
    });
  public setControlPosition = jest
    .fn()
    .mockImplementation((controlPosition: google.maps.ControlPosition) => {
      return null;
    });
  public setControls = jest
    .fn()
    .mockImplementation((controls: string[] | null) => {
      return null;
    });
  public setDrawingMode = jest
    .fn()
    .mockImplementation((drawingMode: string | null) => {
      return null;
    });
  public setMap = jest
    .fn()
    .mockImplementation((map: google.maps.Map | null) => {
      return null;
    });
  public setStyle = jest
    .fn()
    .mockImplementation(
      (
        style:
          | google.maps.Data.StylingFunction
          | google.maps.Data.StyleOptions
          | null
      ) => {
        return null;
      }
    );
  public toGeoJson = jest
    .fn()
    .mockImplementation((callback: (a: object) => void) => {
      return null;
    });
}
