> [!WARNING]
> This library is currently untested and unpublished, as I explore the deprecation path for many of `@ember/components` exports in https://github.com/emberjs/ember.js/pull/20972

# @nullvoxpopuli/legacy-ember-component

`@ember/component` extracted to a separate library, with babel plugin so that you don't have to change your code to migrate off `@ember/component` ot `@nullvoxpopuli/legacy-ember-component`. This library was created in preparation for deprecating most of the contents of `@ember/component` for progressing towards removing all the "classic" or "pre-octane" patterns from Ember.

This library provides a babel plugin in case you have old libraries that are no longer maintained and happen to use `@ember/component`

> [!NOTE]
> This library itself is meant to be deprecation free, but only as far as the private APIs it relies in remain in ember.

This library has _copied_ all the supported behaviors directly from `ember-source @ 6.9.0-alpha.0`

Only changes are:
- adding extensions to relative imports for this library's build configuration -- relative imports are compiled away during build/publish.
- some internal types removed because they reach out of their concerns (DynamicScope, RuntimeResolver, etc)

## Compatibility

- Ember.js v4.12 or above
- Embroider or ember-auto-import v2

## Installation

```
npm add @nullvoxpopuli/legacy-ember-component
```

## Usage


Usage remains the same as `@ember/component`;
```js
import Component, { Input, Textarea } from '@ember/component';
import Helper, { helper } from '@ember/component/helper';
```

These imports will be transformed at build time to:
```js
import Component, { Input, Textarea } from '@nullvoxpopuli/legacy-ember-component';
import Helper, { helper } from '@nullvoxpopuli/legacy-ember-component/helper';
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Other compat libraries

- https://github.com/NullVoxPopuli/legacy-prototype-extensions
- https://github.com/emberjs/ember-legacy-built-in-components

