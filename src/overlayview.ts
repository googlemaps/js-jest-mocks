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
import { MapCanvasProjection } from "./mapcanvasprojection";
import { MapPanes } from "./mappanes";
import { Map_ } from "./map";

export class OverlayView extends MVCObject implements google.maps.OverlayView {
  public draw = jest.fn();
  public getMap = jest.fn().mockImplementation(() => new Map_(null, {}));
  public getPanes = jest.fn().mockImplementation(() => new MapPanes());
  public getProjection = jest
    .fn()
    .mockImplementation(() => new MapCanvasProjection());
  public onAdd = jest.fn();
  public onRemove = jest.fn();
  public setMap = jest.fn();
}
