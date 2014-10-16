# Angular Mobile generator 

> Yeoman generator for creating cordova applications, using [AngularJS] and [ngCordova]. End to end testing is now possible thanks to [ngCordovaMocks]. Have Fun!

## Prerequisites

[Yeoman] - `sudo npm install -g yo`

[Cordova CLI] - `sudo npm install -g cordova`

## Usage

Install `generator-angular-mobile`:
```
npm install -g generator-angular-mobile
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo angular-mobile`, optionally passing an app name:
```
yo angular-mobile [app-name]
```

Run `grunt serve` for preview of the app in browser. `TODO: grunt serve:dist`

## Injection

A grunt task looks for new files in your `www/app` and `www/components` folder and automatically injects them in the appropriate places based on an injection block.

## Generators

Available generators:

* App
    - [angular-mobile](#app) (aka [angular-mobile:app](#app))
    - [angular-mobile:route](#route)
    - [angular-mobile:controller](#controller)
    - [angular-mobile:filter](#filter)
    - [angular-mobile:directive](#directive)
    - [angular-mobile:service](#service)
    - [angular-mobile:provider](#service)
    - [angular-mobile:factory](#service)
    - [angular-mobile:decorator](#decorator)

### App
Sets up a new AngularJS + Express app, generating all the boilerplate you need to get started.

Example:
```bash
yo angular-mobile
```

### Route
Generates a new route.

Example:
```bash
yo angular-mobile:route myroute
[?] Where would you like to create this route? www/app/
[?] What will the url of your route be? /myroute
```

Produces:

    www/app/myroute/myroute.js
    www/app/myroute/myroute.controller.js
    www/app/myroute/myroute.controller.spec.js
    www/app/myroute/myroute.html
    www/app/myroute/myroute.css


### Controller
Generates a controller.

Example:
```bash
yo angular-mobile:controller user
[?] Where would you like to create this controller? www/app/
```

Produces:

    www/app/user/user.controller.js
    www/app/user/user.controller.spec.js

### Directive
Generates a directive.

Example:
```bash
yo angular-mobile:directive myDirective
[?] Where would you like to create this directive? www/app/
[?] Does this directive need an external html file? Yes
```

Produces:

    www/app/myDirective/myDirective.directive.js
    www/app/myDirective/myDirective.directive.spec.js
    www/app/myDirective/myDirective.html
    www/app/myDirective/myDirective.css

**Simple directive without an html file**

Example:
```bash
yo angular-mobile:directive simple
[?] Where would you like to create this directive? www/app/
[?] Does this directive need an external html file? No
```

Produces:

    www/app/simple/simple.directive.js
    www/app/simple/simple.directive.spec.js

### Filter
Generates a filter.

Example:
```bash
yo angular-mobile:filter myFilter
[?] Where would you like to create this filter? www/app/
```

Produces:

    www/app/myFilter/myFilter.filter.js
    www/app/myFilter/myFilter.filter.spec.js

### Service
Generates an AngularJS service.

Example:
```bash
yo angular-mobile:service myService
[?] Where would you like to create this service? www/app/
```

Produces:

    www/app/myService/myService.service.js
    www/app/myService/myService.service.spec.js


You can also do `yo angular-mobile:factory` and `yo angular-mobile:provider` for other types of services.

### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo angular-mobile:decorator serviceName
[?] Where would you like to create this decorator? www/app/
```

Produces

    www/app/serviceName/serviceName.decorator.js

## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-cookies
* angular-mocks
* angular-resource
* angular-sanitize
* angular-scenario
* es5-shim
* json3
* jquery
* lodash

These packages are installed optionally depending on your configuration:

* angular-route
* angular-ui-router

All of these can be updated with `bower update` as new versions are released.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

A `.yo-rc` file is generated for helping you copy configuration across projects, and to allow you to keep track of your settings. You can change this as you see fit.

## Testing

Running `grunt test` will run the unit and e2e unit tests with karma and jasmine.

Use `grunt test:e2e` to only run e2e tests.

Use `grunt test:unit` to only run unit tests.

**Protractor tests**

To setup protractor e2e tests, you must first run

`npm run update-webdriver`

## License

[MIT license](http://opensource.org/licenses/MIT)

[AngularJS]:https://angularjs.org/
[ngCordova]:http://ngcordova.com/
[ngCordovaMocks]:https://github.com/ecofic/ngCordovaMocks
[Cordova CLI]:http://cordova.apache.org/docs/en/3.5.0/guide_cli_index.md.html
[Yeoman]:http://yeoman.io/