// seq of immutable.js

import { Seq, Map } from './node_modules/immutable/dist/immutable';

export default function printBestStudents(object) {
  const found = Seq(object);

  const peg = found.filter((val) => val).filter((obj) => obj.score > 70);

  const copy = Map(peg);

  const clone = copy.map((obj) => {
    const clone = { ...obj };

    clone.firstName = clone.firstName.charAt(0).toUpperCase() + clone.firstName.slice(1);
    clone.lastName = clone.lastName.charAt(0).toUpperCase() + clone.lastName.slice(1);
    return clone;
  }).toMap();

  console.log(clone.toObject());
}
