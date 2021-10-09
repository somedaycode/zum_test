type GlobalStateType = {
  [key: string]: { _state: any; _observers: Map<string, Function> };
};

type InitState<T> = {
  key: string;
  value: T;
};

const globalState: GlobalStateType = {};

const initState = <T>({ key, value }: InitState<T>): string => {
  if (key in globalState) throw Error('key already exists in globalState');
  globalState[key] = {
    _state: value,
    _observers: new Map(),
  };
  return key;
};

export { initState };
