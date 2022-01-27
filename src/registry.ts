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

/* eslint-disable @typescript-eslint/no-explicit-any */
export const MOCKS_REGISTRY = new Map<string, any[]>();

type Constructable = { new (...args: any[]): unknown };

function get<T extends Constructable>(item: T): InstanceType<T>[] {
  return MOCKS_REGISTRY.get(item.name) || [];
}

function clearAll(): void {
  MOCKS_REGISTRY.clear();
}

// Signature to require at least one item
function clear<T extends Constructable, K extends Constructable[]>(
  item: T,
  ...rest: K
): void {
  for (const ctr of [item, ...rest]) {
    MOCKS_REGISTRY.delete(ctr.name);
  }
}

export const mapMocks = {
  get,
  clear,
  clearAll,
};

/* Internal */
export function __registerMockInstance(ctr: Function, instance: any): void {
  const existing = MOCKS_REGISTRY.get(ctr.name) || [];
  MOCKS_REGISTRY.set(ctr.name, [...existing, instance]);
}
