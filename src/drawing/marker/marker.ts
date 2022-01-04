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

import { LatLng } from "../../maps/coordinates/latlng";
import { MVCObject } from "../../maps/event/mvcobject";

export class Marker extends MVCObject implements google.maps.Marker {
  static readonly MAX_ZINDEX: number;
  constructor(opts?: google.maps.MarkerOptions | null) {
    super();
  }
  public getAnimation = jest
    .fn()
    .mockImplementation((): Animation | null | undefined => null);
  public getClickable = jest.fn().mockImplementation((): boolean => null);
  public getCursor = jest
    .fn()
    .mockImplementation((): string | null | undefined => null);
  public getDraggable = jest
    .fn()
    .mockImplementation((): boolean | null | undefined => null);
  public getIcon = jest
    .fn()
    .mockImplementation(
      (): string | google.maps.Icon | google.maps.Symbol | null | undefined =>
        null
    );
  public getLabel = jest
    .fn()
    .mockImplementation((): google.maps.MarkerLabel | null | undefined => null);
  public getMap = jest
    .fn()
    .mockImplementation(
      (): google.maps.Map | google.maps.StreetViewPanorama | null | undefined =>
        null
    );
  public getOpacity = jest
    .fn()
    .mockImplementation((): number | null | undefined => null);
  public getPosition = jest
    .fn()
    .mockImplementation(
      (): google.maps.LatLng | null | undefined =>
        new LatLng({ lat: 0, lng: 0 })
    );
  public getShape = jest
    .fn()
    .mockImplementation((): google.maps.MarkerShape | null | undefined => null);
  public getTitle = jest
    .fn()
    .mockImplementation((): string | null | undefined => null);
  public getVisible = jest.fn().mockImplementation((): boolean => null);
  public getZIndex = jest
    .fn()
    .mockImplementation((): number | null | undefined => null);
  public setAnimation = jest
    .fn()
    .mockImplementation((animation: Animation | null): void => {});
  public setClickable = jest
    .fn()
    .mockImplementation((flag: boolean): void => {});
  public setCursor = jest
    .fn()
    .mockImplementation((cursor: string | null): void => {});
  public setDraggable = jest
    .fn()
    .mockImplementation((flag: boolean | null): void => {});
  public setIcon = jest
    .fn()
    .mockImplementation(
      (icon: string | google.maps.Icon | google.maps.Symbol | null): void => {}
    );
  public setLabel = jest
    .fn()
    .mockImplementation(
      (label: string | google.maps.MarkerLabel | null): void => {}
    );
  public setMap = jest
    .fn()
    .mockImplementation(
      (map: google.maps.Map | google.maps.StreetViewPanorama | null): void => {}
    );
  public setOpacity = jest
    .fn()
    .mockImplementation((opacity: number | null): void => {});
  public setOptions = jest
    .fn()
    .mockImplementation((options: google.maps.MarkerOptions): void => {});
  public setPosition = jest
    .fn()
    .mockImplementation(
      (
        latlng: google.maps.LatLng | google.maps.LatLngLiteral | null
      ): void => {}
    );
  public setShape = jest
    .fn()
    .mockImplementation((shape: google.maps.MarkerShape | null): void => {});
  public setTitle = jest
    .fn()
    .mockImplementation((title: string | null): void => {});
  public setVisible = jest
    .fn()
    .mockImplementation((visible: boolean): void => {});
  public setZIndex = jest
    .fn()
    .mockImplementation((zIndex: number | null): void => {});
  public addListener = jest
    .fn()
    .mockImplementation(
      (
        eventName: string,
        handler: (this: Marker, event: MouseEvent) => void
      ): google.maps.MapsEventListener =>
        jest.fn() as unknown as google.maps.MapsEventListener
    );
}
