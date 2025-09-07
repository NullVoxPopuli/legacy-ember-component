# @nullvoxpopuli/legacy-ember-component

`@ember/component` extracted to a separate library, with babel plugin so that you don't have to change your code to migrate off `@ember/component` ot `@nullvoxpopuli/legacy-ember-component`. This library was created in preparation for deprecating most of the contents of `@ember/component` for progressing towards removing all the "classic" or "pre-octane" patterns from Ember.

This library provides a babel plugin in case you have old libraries that are no longer maintained and happen to use `@ember/component`

> [!NOTE]
> This library itself is meant to be deprecation free, but only as far as the private APIs it relies in remain in ember.

## Compatibility

- Ember.js v4.12 or above
- Embroider or ember-auto-import v2

## Installation

```
npm add @nullvoxpopuli/legacy-ember-component
```

## Usage

[Longer description of how to use the addon in apps.]

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
