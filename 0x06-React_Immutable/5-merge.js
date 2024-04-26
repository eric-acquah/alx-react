import { List, Map } from './node_modules/immutable/dist/immutable';

// Merge & concats

export function concatElements(page1, page2) {
  const fisrt = List(page1);
  const second = List(page2);

  return fisrt.concat(second);
}

export function mergeElements(page1, page2) {
  const first = Map(page1);
  const second = Map(page2);

  return first.merge(second);
}
