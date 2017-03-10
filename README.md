# Testarmada magellan and nightwatch-extra Example Project

[![Build Status](https://api.travis-ci.org/TestArmada/boilerplate-nightwatch.svg?branch=master)](https://travis-ci.org/TestArmada/boilerplate-nightwatch)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

This is an example project demonstrating how to run magellan with various executors to trigger test run using nightwatch-extra.

The contents of this project's root directory should become the root directory of your Magellan test suite folder (for example a `./automation` folder in your project).

------------------BREAKING CHANGE in magellan@10.0.0------------------

If you recently bump magellan to 10.0.0, please follow the [Migration Guide](./migration.md) here.

# What's in the Box

Included in this boilerplate:

  - Example base class for tests (`lib/example-base-test-class.js`)
  - Example tests which use the example base class (`tests/*`)
  - A `.gitignore` file which ignores Magellan-generated artifacts (logs, etc)
  - Stock configuration (`conf/nightwatch.json`)
  - A place to put custom commands (`lib/custom_commands`)
  - A place to put custom page objects (`lib/pages`)

In order to speed up the execution of this boilerplate, all tests are mocked with [Drydock](https://github.com/divmain/drydock).

# Prerequisites

Check that you have at least `npm` version 3 or above (required by `appium@1.6.x`):

```bash
npm --version
```

If not, run:

```bash
npm install -g npm@3
```

Also please map `travis.dev` to `127.0.0.1` in your host file.

# Install and Run

## Installation
**1.** Clone `boilerplate-nightwatch` into an isolated place outside of your project:
```console
cd ~
git clone git@github.com:TestArmada/boilerplate-nightwatch.git
```

**3.** Install npm modules

```console
npm install
```

## Run with npm
```console
npm test
```

## Run with more options

### Local
This is to run magellan with [Magellan-local-executor](https://github.com/TestArmada/magellan-local-executor) (which is already configured in `magellan.json`)
 
 1. Chrome
```console
DPRO=local ./node_modules/.bin/magellan --local_browser chrome --test tests/demo-first.js --serial
```
 
 2. Firefox
```console
DPRO=local ./node_modules/.bin/magellan --local_browser firefox --test tests/demo-page-object.js --serial
```

 3. Appium
 
    To run test with Appium, Xcode and correct version of iOS simulator have to be installed.
```console
DPRO=local ./node_modules/.bin/magellan --local_browser appiummweb --test tests/demo-page-object.js --serial
```

### Saucelabs
This is to run magellan with [Magellan-saucelabs-executor](https://github.com/TestArmada/magellan-saucelabs-executor) (which is already configured in `magellan.json`). 

All tests have to run with Sauce Connect. 

 1. Chrome and IE11
 ```console
 DPRO=local ./node_modules/.bin/magellan --sauce_browsers chrome_latest_Windows_10_Desktop,IE_11_Windows_10_Desktop --sauce_create_tunnels --test tests/demo-page-object.js --serial
 ```

 2. iOS simulator with iphone6 and iOS 10.0
 ```console
 DPRO=local ./node_modules/.bin/magellan --sauce_browser iphone_10_0_iOS_iPhone_6_Simulator --sauce_create_tunnels --test tests/demo-page-object.js --serial
 ```
 
### Browserstack
This is to run magellan with [Magellan-browserstack-executor](https://github.com/TestArmada/magellan-browserstack-executor) 

Please Note: Browserstack executor is still in **early beta**. We'll add the content when it is ready.

# Help

### 1. Magellan help
All magellan command line arguments, together with its plugin's and executors', can be found by.
```console
./node_modules/.bin/magellan --help
```

### 2. Plugin help
Command line arguments for plugin could be found by scanning `Framework-specific` keyward in magellan help output. 

Help from [testarmada-magellan-nightwatch-plugin](https://github.com/TestArmada/magellan-nightwatch-plugin)
```console
Framework-specific (testarmada-magellan-nightwatch-plugin)
   --tags=tag1,tag2                     Run all tests that match a list of comma-delimited tags (eg: tag1,tag2)
   --group=prefix/path                  Run all tests that match a path prefix like ./tests/smoke
   --test=path/to/test.js               Run one test with a path like ./tests/smoke/test2.js
   --nightwatch_config=path             Specify nightwatch.json location (magellan-nightwatch)
   --sync_browsers=safari:10,chrome:54  Specify which browser will run in sync mode for javascript execution
```

You can also implement your own plugin in order to make magellan talk to more test frameworks. Find more [here]() to implement your own magellan plugin

### 3. Executor help
Command line arguments for executor could be found by scanning `Executor-specific` keyward in magellan help output.

Help from [testarmada-magellan-sauce-executor](https://github.com/TestArmada/magellan-saucelabs-executor)
```console
Executor-specific (testarmada-magellan-sauce-executor)
   --sauce_browser=browsername          Run tests in chrome, firefox, etc (default: phantomjs).
   --sauce_browsers=b1,b2,..            Run multiple browsers in parallel.
   --sauce_list_browsers                List the available browsers configured (Guacamole integrated).
```

You can also implement your own executor in order to execute magellan test in more environment. Find more [here](https://github.com/TestArmada/magellan-executor) to implement your own magellan executor.

# Configuration
Magellan reads from both command line arguments and `magellan.json`. Please refer to help section to get the full list of magellan command line arguments.

Please use `./magellan.json` as example to customize your `magellan.json`.
