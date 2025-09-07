import { isUpdatableRef, updateRef, valueForRef } from '@glimmer/reference';
import { MUTABLE_CELL } from '@ember/-internals/views';
import { assert } from '@ember/debug';

import type { CapturedNamedArguments } from '@glimmer/interfaces';
import type { Reference } from '@glimmer/reference';

// ComponentArgs takes EvaluatedNamedArgs and converts them into the
// inputs needed by CurlyComponents (attrs and props, with mutable
// cells, etc).
export function processComponentArgs(namedArgs: CapturedNamedArguments) {
  const attrs = Object.create(null);
  const props = Object.create(null);

  for (const name in namedArgs) {
    const ref = namedArgs[name];

    assert('expected ref', ref);

    const value = valueForRef(ref);

    if (isUpdatableRef(ref)) {
      attrs[name] = new MutableCell(ref, value);
    } else {
      attrs[name] = value;
    }

    props[name] = value;
  }

  props.attrs = attrs;

  return props;
}

const REF = Symbol('REF');

class MutableCell {
  public value: any;
  [MUTABLE_CELL]: boolean;
  [REF]: Reference<unknown>;

  constructor(ref: Reference<unknown>, value: any) {
    this[MUTABLE_CELL] = true;
    this[REF] = ref;
    this.value = value;
  }

  update(val: any) {
    updateRef(this[REF], val);
  }
}
