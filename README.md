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

## Notes

We're using the [Materialize](http://materializecss.com/) frontend framework.

To remove jquery typings, run `typings remove jquery --global`.
