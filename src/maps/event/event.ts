export const MapsEventListener: google.maps.MapsEventListener = {
  remove: jest.fn(),
};

export const event: typeof google.maps.event = {
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
