// Access nested elements
import { fromJS } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  const value = fromJS(object);

  return value.getIn(array);
}
