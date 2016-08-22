# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> 3rd party libraries bundle

![](https://img.shields.io/badge/license-MIT-blue.svg)

This module provides a convenient package that bundles 3rd party libraries used by Pip.WebUI framework. 
It greatly simplifies management of dependencies in applications and ensures that all required libraries with correct versions are included. 
However, it is still possible to include 3rd party libraries using other methods.

3rd party libraries included into the bundle:
* Core JavaScript libraries
  - [lodash](https://lodash.com/): Javascript utilities
  - [async](https://github.com/caolan/async): asynchronous programming
  - [jquery](https://jquery.com/): DOM manipulation library
* [Angular 1.5 framework](https://angularjs.org/): web application framework
  - [angular-animate](https://github.com/angular/bower-angular-animate): support for CSS-based animations
  - [angular-aria](https://github.com/angular/bower-angular-aria): support for common ARIA attributes
  - [angular-cookies](https://github.com/angular/bower-angular-cookies): wrapper for reading and writing browser cookies
  - [angular-resource](https://github.com/angular/bower-angular-resource): resources to call server REST APIs
  - [angular-sanitize](https://github.com/angular/bower-angular-sanitize): functionality to sanitize HTML
  - [angular-messages](https://github.com/angular/bower-angular-messages): enhanced support for displaying messages within templates
* [Angular-Material controls](https://material.angularjs.org/latest/): controls to implement Google material Look&Feel
* [Angular UI library](https://github.com/angular-ui): extensions to Angular framework
  - [angular-ui-router](https://github.com/angular-ui/ui-router): flexible router with nested views
  - [angular-ui-utils](https://github.com/angular-ui/ui-utils): companion suite for angular
* Other angular libraries
  - [angular-local-storage](https://github.com/grevory/angular-local-storage): angular service to read and write to local storage
  - [ng-file-upload](https://github.com/danialfarid/ng-file-upload): angular directive to upload files
  - [angular-masonry](https://github.com/passy/angular-masonry): angular wrapper for masonry to create tile views
  - [angular-chart](https://github.com/jtblin/angular-chart.js): charting library for angular 
* Additional libraries
  - [D3.js](https://d3js.org/): data visualization library
  - [webcamjs](https://github.com/jhuckaby/webcamjs): portable access to webcam
  - [marked](https://github.com/chjj/marked): markdown parser and compiler
  - [jquery.transit](http://ricostacruz.com/jquery.transit/): smooth CSS transitions and animations (??)
  - [hammerjs](http://hammerjs.github.io/): support for touch gestures (used by Angular-Material ?)
  - [bourbon](http://bourbon.io/): mixim library for SASS (??)
  - [neat](http://neat.bourbon.io/): semantic grid framework (??)
  - [velocity](http://velocityjs.org/): accelerated Javascript animations (??)
* Testing libraries
  - [chance](http://chancejs.com): random data generators
  - [angular-mocks](https://github.com/angular/bower-angular-mocks): mocks for angular components

## Usage

3rd party libraries are included into complete [Pip.WebUI bundle](https://github.com/pip-webui/pip-webui-all). 
It is recommended to use it in your applications. However, if you decide to use the module directly, follow the instructions below.

Add dependency to pip-webui-lib module into your **bower.json** or **package.json** file depending what you use.
```javascript
"dependencies": {
  ...
  "pip-webui-lib": "*"
  ...
}
```

Alternatively you can install the module manually using bower:
```bash
bower install pip-webui-test
```

or install it using npm:
```bash
npm install pip-webui-test
```

Add references to module artifacts into your web application.
```html
<link rel="stylesheet" href=".../pip-webui-lib.min.css"/>
<script src=".../pip-webui-lib.min.js"></script>
```

Optionally, if you use testing libraries, add the reference below.
```html
<script src=".../pip-webui-lib-test.min.js"></script>
```

## Learn more about the module

- [Developer's guide](https://github.com/pip-webui/pip-webui-lib/blob/master/doc/DevelopersGuide.md)
- [Changelog](https://github.com/pip-webui/pip-webui-lib/blob/master/CHANGELOG.md)
- [Pip.WebUI project website](http://www.pipwebui.org)
- [Pip.WebUI project wiki](https://github.com/pip-webui/pip-webui/wiki)
- [Pip.WebUI discussion forum](https://groups.google.com/forum/#!forum/pip-webui)
- [Pip.WebUI team blog](https://pip-webui.blogspot.com/)

## <a name="dependencies"></a>Module dependencies

This module has no dependencies to other Pip.WebUI modules.

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.
