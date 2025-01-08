<div align="center">
  <a href="https://postdata.cn">
    <img
      src="https://avatars.githubusercontent.com/u/56705483"
      alt="Postdata Logo"
      height="64"
    />
  </a>
</div>
<div align="center">

# Postdata JavaScript Sandbox <font size=2><sup>ALPHA</sup></font>

</div>

This package deals with providing a JavaScript sandbox for executing various security sensitive external scripts.

## How does this work?

This package makes use of [quickjs-emscripten](https://www.npmjs.com/package/quickjs-emscripten) for building sandboxes for running external code on Postdata.

Currently implemented sandboxes:
- Postdata Test Scripts
- Postdata Pre Request Scripts

## Development

1. Clone the repository

```
git clone https://github.com/mamahuhu-io/postdata
```

2. Install the package dependencies

```
pnpm install
```

3. Navigate to the [package folder](https://github.com/mamahuhu-io/postdata/tree/main/packages/hoppscotch-js-sandbox)
```
cd hoppscotch/packages/hoppscotch-js-sandbox
```


4. Try out the demo [`src/demo.ts`](https://github.com/mamahuhu-io/postdata/blob/main/packages/hoppscotch-js-sandbox/src/demo.ts) using:

```
npm run demo
```

## Versioning
This project follows [Semantic Versioning](https://semver.org/) but as the project is still pre-1.0. The code and the public exposed API should not be considered to be fixed and stable. Things can change at any time!

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see [`LICENSE`](https://github.com/mamahuhu-io/hopp-js-sandbox/blob/main/LICENSE) for more details.

<div align="center">
  <br />
  <br />

  ###### built with ❤︎ by the [Postdata Team](https://github.com/mamahuhu-io) and [contributors](https://github.com/AndrewBastin/hopp-js-sandbox/graphs/contributors).

</div>
