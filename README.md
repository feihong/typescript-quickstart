# TypeScript Quickstart

A very simple TypeScript example project, for Python developers.

# Installation

## Node

```
npm install -g typescript typings webpack
npm link typescript
typings install dt~jquery dt~webspeechapi --global --save
```

## Python

```
mkvirtualenv -p python3 typescript
pip install Invoke
```

## Installing type definitions

```
typings install dt~jquery --global --save
```

## Running the server

The following command will run the web server and webpack watcher at the same time.

```
inv serve
```

Run `inv -l` to list all available tasks.

## Notes

We're using the [Materialize](http://materializecss.com/) frontend framework.

To remove jquery typings, run `typings remove jquery --global`.

Debugging with source maps seems to only work in Chrome.
