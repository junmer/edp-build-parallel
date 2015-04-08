# edp-build-parallel

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Dependencies][dep-image]][dep-url]

[downloads-image]: http://img.shields.io/npm/dm/edp-build-parallel.svg
[npm-url]: https://npmjs.org/package/edp-build-parallel
[npm-image]: http://img.shields.io/npm/v/edp-build-parallel.svg
[dep-url]: https://david-dm.org/junmer/edp-build-parallel
[dep-image]: http://img.shields.io/david/junmer/edp-build-parallel.svg

> edp-build parallelly

## Usage

edp-build-config.js:

```
var ParallelProcessor = require('edp-build-parallel');

exports.getProcessors = function () {

    var jsProcessor = new JsCompressor();

    var addCopyright = new AddCopyright();
    var outputCleaner = new OutputCleaner();

    var afterProcessor = new ParallelProcessor([
        addCopyright, outputCleaner
    ]); // 并行处理

    return [ jsProcessor, afterProcessor ];     // 串行处理

});
```

## Related

- [edp-build](https://github.com/junmer/edp-build)

