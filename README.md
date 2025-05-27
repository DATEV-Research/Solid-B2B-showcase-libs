# SOLID B2B Showcase - Shared Libraries

[![CI](https://github.com/DATEV-Research/Solid-B2B-showcase-libs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/DATEV-Research/Solid-B2B-showcase-libs/actions/workflows/ci.yml)

In this repo you'll find shared libraries for the SOLID B2B Showcase. You can use the libraries in your own project by
installing them from npmjs.

- **@datev-research/mandat-shared-components:
  ** [![npm version](https://img.shields.io/npm/v/@datev-research/mandat-shared-components)](https://www.npmjs.com/package/@datev-research/mandat-shared-components)
  Vue Components
- **@datev-research/mandat-shared-composables:
  ** [![npm version](https://img.shields.io/npm/v/@datev-research/mandat-shared-composables)](https://www.npmjs.com/package/@datev-research/mandat-shared-composables)
  Vue Composables
- **@datev-research/mandat-shared-solid-interop:
  ** [![npm version](https://img.shields.io/npm/v/@datev-research/mandat-shared-solid-interop)](https://www.npmjs.com/package/@datev-research/mandat-shared-solid-interop)
  SOLID interop helper functions
- **@datev-research/mandat-shared-solid-requests:
  ** [![npm version](https://img.shields.io/npm/v/@datev-research/mandat-shared-solid-requests)](https://www.npmjs.com/package/@datev-research/mandat-shared-solid-requests)
  SOLID request helper functions
- **@datev-research/mandat-shared-solid-oidc:
  ** [![npm version](https://img.shields.io/npm/v/@datev-research/mandat-shared-solid-oidc)](https://www.npmjs.com/package/@datev-research/mandat-shared-solid-oidc)
  SOLID OIDC helper functions
- **@datev-research/mandat-shared-theme:
  ** [![npm version](https://img.shields.io/npm/v/@datev-research/mandat-shared-theme)](https://www.npmjs.com/package/@datev-research/mandat-shared-theme)
  Theme for Showcase Apps
- **@datev-research/mandat-shared-utils:
  ** [![npm version](https://img.shields.io/npm/v/@datev-research/mandat-shared-utils)](https://www.npmjs.com/package/@datev-research/mandat-shared-utils)
  Common Utility Functions

## Install

Run e.g. `npm i @datev-research/mandat-shared-components` to install a package. Keep in mind that the used VueJS must
match the version of the library!

## Publish

If you make changes to the library you need to publish these changes to
the [npm-registry](https://www.npmjs.com/org/datev-research). Use the command `npm run publish`.

Each library defines its own indepenent version. So before publishing any package, you need to bump up the version in
the corresponding librarys `package.json`. Versioning should always follow the [SemVer](https://semver.org/) pattern.

Sample:
```shell
#login in npm einmalig wichtig für publisching
# beachte dass man sich mit benutzername bei npm anmeldet. "NICHT DIE EMAIL !!!!""
npm login

```

```shell
# bump version using command npm version
npm version patch -w @datev-research/mandat-shared-composables
# ensure a clean git working tree
git commit -a -m "chore: bump version of composables"
# lerna detects updated package automatically
npm run publish
```

## Eine neue Lib erstellen

Go to [Solid-B2B-showcase-libs](https://github.com/DATEV-Research/Solid-B2B-showcase-libs)

1. Ordner unter `/libs` anlegen
2. `package.json` anlegen (oder `npm init` aufrufen)
    2. Name gem. Format `@datev-research/NAME_DER_LIB`
3. `tsconfig.json` anlegen
    3. an andere Libs orientieren.
4. `index.ts` anlegen (zur Steuerung, was exportiert wird)
5. Build Skripte einfügen, sodass ein "dist" Folder erstellt und gepublished werden kann.
