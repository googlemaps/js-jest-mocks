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

import { LatLng } from "../../maps/coordinates/latlng";
import { Size } from "../../maps/coordinates/size";
import { __registerMockInstance } from "../../registry";

export class StreetViewService implements google.maps.StreetViewService {
  constructor() {
    __registerMockInstance(this.constructor, this);
  }
  public getPanorama = jest
    .fn()
    .mockImplementation(
      (
        request:
          | google.maps.StreetViewLocationRequest
          | google.maps.StreetViewPanoRequest,
        callback?: (
          a: google.maps.StreetViewPanoramaData | null,
          b: google.maps.StreetViewStatus
        ) => void
      ): Promise<google.maps.StreetViewResponse> => {
        return Promise.resolve({
          data: {
            copyright: "copyright",
            imageDate: "imageDate",
            links: [],
            location: {
              description: "description",
              pano: "123",
              shortDescription: null,
              latLng: new LatLng(1, 1),
            },
            tiles: {
              centerHeading: 0,
              getTileUrl: () => "tileUrl",
              tileSize: new Size(1, 1),
              worldSize: new Size(1, 1),
            },
          },
        });
      }
    );
}
