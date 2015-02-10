# ng.cx.ua
[![Build Status: Linux](http://img.shields.io/travis/ef-ctx/ng.cx.ua/master.svg?style=flat-square)](https://travis-ci.org/ef-ctx/ng.cx.ua)
[![Bower version](http://img.shields.io/bower/v/ng.cx.ua.svg?style=flat-square)](git@github.com:ef-ctx/ng.cx.ua.git)

> AngularJS service(s) for browser detection. Digest friendly.

Patterns were taken from https://github.com/g13n/ua.js/blob/master/src/ua.js but implementation was optimized for minimal
foot-print and overhead:
- RegExps are created only if invoked
- Results cached, only detects once

Unit tests cover 300+ real world UA strings. This exercise proves the point that UA detection has severe limitations
and you should do feature detection instead.

## Getting Started

Add **ng.cx.ua** to you project.

Via bower:

```
$ bower install --save ng.cx.ua
```

Include the following JS in your build.
- dist/ng.cx.ua.js OR dist/ng.cx.ua.min.js


## Contributing

We'd love for you to contribute to our source code and to make it even better than it is today!

Make sure you read the [Contributing Guide](CONTRIBUTING.md) first.


## Developing

Clone this repository, install the dependencies and simply run `grunt develop`.

```
$ npm install -g grunt-cli bower
$ npm install
$ bower install
$ ./bootstrap.sh
$ grunt develop
```

At this point, the source examples included were built into the `build/` directory and a simple webserver is launched so
that you can browse the documentation, the examples and the code coverage.


## Todo

### Feature detection (possibly in a different module)

Implement mininmal feature detection in a different service cxUAFeatures)
- https://github.com/Modernizr/Modernizr/tree/master/feature-detects


## Acknowledgements

Some RegExp patterns originally by [Gopal Venkatesan](https://github.com/g13n/ua.js/blob/master/src/ua.js).


## [MIT License](LICENSE)

Copyright (c) 2012-2014, Gopalarathnam Venkatesan <gv@g13n.me> All rights reserved.

[Copyright (c) 2015 EF CTX](https://raw.githubusercontent.com/EFEducationFirstMobile/oss/master/LICENSE)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

