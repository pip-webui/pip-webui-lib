# Pip.WebUI Libraries

This module contains a bundle of 3rd party libraries used in Pip.WebUI framework

It contains nex libraries:

* Core JavaScript libraries: [lodash](https://lodash.com/), [async](https://github.com/caolan/async), [jquery](https://jquery.com/)
* [Angular framework](https://angularjs.org/) and another packages based on Angular JS ([animate](https://github.com/angular/bower-angular-animate),
[aria](https://github.com/angular/bower-angular-aria),
[cookies](https://github.com/angular/bower-angular-cookies),
[resource](https://github.com/angular/bower-angular-resource),
[sanitize](https://github.com/angular/bower-angular-sanitize),
[messages](https://github.com/angular/bower-angular-messages),
[masonry](https://github.com/passy/angular-masonry),
[angular-chart.js](https://github.com/jtblin/angular-chart.js)).
* [Angular-Material controls](https://material.angularjs.org/latest/)
* [D3.js](https://d3js.org/) data visualization library
* Portable [webcam](https://github.com/jhuckaby/webcamjs) access
* Touch gesture library (used by Angular-Material)
* Testing libraries

In the version 1.0.0 the implementation was cleaned up and covered with unit tests.
Implementation became fully portable across browser and devices.


### The complete library

 * https://github.com/pip-webui/pip-webui

## Quick links

* [Module dependencies](#dependencies)
* [Community](#community)
* [Contributing](#contributing)
* [License](#license)


## <a name="dependencies"></a>Module dependencies

This module has no dependencies on another Pip.WebIU library.

## <a name="community"></a>Community

* Follow [@pip.webui on Twitter](http://link.com)
* Subscribe to the [PIP.WebUI Newsletter](http://link.com)
* Have a question that's not a feature request or bug report? Discuss on the [PIP Forum](https://groups.google.com/forum/#!forum/pipdevs)
* Have a feature request or find a bug? [Submit an issue](http://link.com)
* Join our Community Slack Group! [PIP Worldwide](http://link.com)


## <a name="contributing"></a>Contributing

Developers interested in contributing should read the following guidelines:

* [Issue Guidelines](http://somelink.com)
* [Contributing Guidelines](http://somelink.com)
* [Coding guidelines](http://somelink.com)

> Please do **not** ask general questions in an issue. Issues are only to report bugs, request
  enhancements, or request new features. For general questions and discussions, use the
  [Pip Devs Forum](https://groups.google.com/forum/#!forum/pipdevs).

It is important to note that for each release, the [ChangeLog](CHANGELOG.md) is a resource that will
itemize all:

- Bug Fixes
- New Features
- Breaking Changes

## <a name="build"></a>Build

Creating vendor bundle is executed via next scripts:

```bash
# Install tools for process libraries
npm install

# Install 3rd party libraries
bower install

# Compile vendor libraries bundle
npm run build

# Clean previus compiled bundle
npm run clean
```

## <a name="license"></a>License

PIP.WebUI is under [MIT licensed](LICENSE).

