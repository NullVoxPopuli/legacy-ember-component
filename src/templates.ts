import { precompileTemplate } from '@ember/template-compilation';
import { on } from '@ember/modifier/on';

// https://github.com/emberjs/ember.js/blob/99304ca2b3456b9463a21ebc20d3657c47ee8676/packages/%40ember/-internals/glimmer/lib/templates/textarea.ts
export const TextareaTemplate = precompileTemplate(
  `<textarea
  {{!-- for compatibility --}}
  id={{this.id}}
  class={{this.class}}

  ...attributes

  value={{this.value}}

  {{on "change" this.change}}
  {{on "input" this.input}}
  {{on "keyup" this.keyUp}}
  {{on "paste" this.valueDidChange}}
  {{on "cut" this.valueDidChange}}
/>`,
  {
    moduleName: '@nullvoxpopuli/legacy-ember-component/templates#textarea',
    strictMode: true,
    scope() {
      return { on };
    },
  },
);

// https://github.com/emberjs/ember.js/blob/99304ca2b3456b9463a21ebc20d3657c47ee8676/packages/%40ember/-internals/glimmer/lib/templates/input.ts
export const InputTemplate = precompileTemplate(
  `<input
  {{!-- for compatibility --}}
  id={{this.id}}
  class={{this.class}}

  ...attributes

  type={{this.type}}
  checked={{this.checked}}
  value={{this.value}}

  {{on "change" this.change}}
  {{on "input" this.input}}
  {{on "keyup" this.keyUp}}
  {{on "paste" this.valueDidChange}}
  {{on "cut" this.valueDidChange}}
/>`,
  {
    moduleName: '@nullvoxpopuli/legacy-ember-component/templates#input',
    strictMode: true,
    scope() {
      return { on };
    },
  },
);
