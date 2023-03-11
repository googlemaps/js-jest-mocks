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

export const MapsEventListener: google.maps.MapsEventListener = {
  remove: jest.fn(),
};

export const event: google.maps.event = {
  addDomListener: jest
    .fn()
    .mockImplementation(
      (
        instance: object,
        eventName: string,
        handler: Function,
        capture?: boolean
      ): google.maps.MapsEventListener => MapsEventListener
    ),
  addDomListenerOnce: jest
    .fn()
    .mockImplementation(
      (
        instance: object,
        eventName: string,
        handler: Function,
        capture?: boolean
      ): google.maps.MapsEventListener => MapsEventListener
    ),
  addListener: jest
    .fn()
    .mockImplementation(
      (
        instance: object,
        eventName: string,
        handler: Function
      ): google.maps.MapsEventListener => MapsEventListener
    ),
  addListenerOnce: jest
    .fn()
    .mockImplementation(
      (
        instance: object,
        eventName: string,
        handler: Function
      ): google.maps.MapsEventListener => MapsEventListener
    ),
  clearInstanceListeners: jest
    .fn()
    .mockImplementation((instance: object): void => null),
  clearListeners: jest
    .fn()
    .mockImplementation((instance: object, eventName: string): void => null),
  hasListeners: jest
    .fn()
    .mockImplementation(
      (instance: object, eventName: string): boolean => false
    ),
  removeListener: jest
    .fn()
    .mockImplementation(
      (listener: google.maps.MapsEventListener): void => null
    ),
  trigger: jest
    .fn()
    .mockImplementation(
      (instance: object, eventName: string, ...eventArgs: any[]): void => null
    ),
};
