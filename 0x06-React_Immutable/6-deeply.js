// Return a deeply merged Map
import { Map } from './node_modules/immutable/dist/immutable';

export default function mergeDeeplyElements(page1, page2) {
  const one = Map(page1);
  const two = Map(page2);

  return one.mergeDeep(two);
}
