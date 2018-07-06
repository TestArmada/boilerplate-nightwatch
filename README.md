# Testarmada magellan and nightwatch-extra Example Project

[![Sauce Test Status](https://saucelabs.com/browser-matrix/testarmada_boilerplate.svg)](https://saucelabs.com/u/testarmada_boilerplate)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

This is an example project demonstrating how to run `magellan` with various executors to trigger test run using `nightwatch-extra` for desktop browsers and mobile browsers (`Nightwatch-extra` does support native app test via `appium` at this point, we're still working on the demo test with it right now).

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

Also please map `dev.walmart.com` to `127.0.0.1` in your host file.

# Install and Run

## Installation
**1.** Clone `boilerplate-nightwatch` into an isolated place outside of your project:
```console
cd ~
git clone git@github.com:TestArmada/boilerplate-nightwatch.git
cd boilerplate-nightwatch
```

**2.** Install npm modules

```console
npm install

npm install --global --production windows-build-tools # extra npm for windows only
npm install cross-env                                 # extra npm for windows only
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
DPRO=local ./node_modules/.bin/magellan --local_browser chrome --test tests/demo-simple.js --serial
```
 
 2. Firefox
```console
DPRO=local ./node_modules/.bin/magellan --local_browser firefox --test tests/demo-web.js --serial
```

 3. Appium
  
   iOS

   **PLEASE NOTE** To run test with iOS, Xcode and correct version of iOS simulator have to be installed.
  ```console
  DPRO=local ./node_modules/.bin/magellan --local_browser appiummweb --test tests/demo-mobile-web.js --serial
  ```

   Android

   **PLEASE NOTE** To run test with Android, Android SDK, AVD and currect version of emulator have to be installed and created.
  ```console
  ANDROID_OPEN_URL=http://10.0.2.2 DPRO=local ./node_modules/.bin/magellan --local_browser appiumandroidmweb --test tests/demo-mobile-web.js --serial
  ```

### Saucelabs
This is to run magellan with [Magellan-saucelabs-executor](https://github.com/TestArmada/magellan-saucelabs-executor) (which is already configured in `magellan.json`). 

All tests have to run with Sauce Connect. 

 1. **`Chrome` and `IE11`**
 ```console
 DPRO=local ./node_modules/.bin/magellan --sauce_browsers chrome_latest_Windows_10_Desktop,IE_11_Windows_10_Desktop --sauce_create_tunnels --test tests/demo-web.js --serial
 ```

 2. **iOS simulator with `iphone6` and `iOS@10.0`**
 ```console
 DPRO=local ./node_modules/.bin/magellan --sauce_browser iphone_10_0_iOS_iPhone_6_Simulator --sauce_create_tunnels --test tests/demo-mobile-web.js --serial
 ```

 3. **Android emulator with `Google Nexus 7 HD Emulator` and `android@4.4`**

 You need to disable SSL bumping for `android@4.4` or higher, please refer to [here](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+FAQS#SauceConnectProxyFAQS-WhyDoMyTestsonAndroidFailWithCertificationErrorsorFailtoLogin?) for explanation. 

 `magellan-saucelabs-executor@1.0.3` supports customized sauce connect flags, please see [tunnel.json](./tunnel.json) for reference.
    
```console

DPRO=local ./node_modules/.bin/magellan --sauce_browsers android_4_4_Android_Google_Nexus_7_HD_Emulator --sauce_tunnel_id ${SAUCE_TUNNEL_ID} --sauce_tunnel_config ./tunnel.json --test tests/demo-mobile-web.js --serial
```

 
### Browserstack
This is to run magellan with [Magellan-browserstack-executor](https://github.com/TestArmada/magellan-browserstack-executor) 

Please Note: Browserstack executor is still in **early beta**. We'll add the content when it is ready.

# Install and Run (Windows only)

## Installation
**1.** Clone `boilerplate-nightwatch` into an isolated place outside of your project:
```console
cd ~
git clone git@github.com:TestArmada/boilerplate-nightwatch.git
cd boilerplate-nightwatch
```

**2.** Install npm modules

Run your terminal in administrator mode
```console
npm install

npm install --global --production windows-build-tools # extra npm for windows only
npm install cross-env                                 # extra npm for windows only
```

## Configuration

**1.** Change chromedriver location

In `nightwatch.json`, change
```json
"webdriver.chrome.driver": "./node_modules/chromedriver/lib/chromedriver/chromedriver"
```

to

```json
"webdriver.chrome.driver": "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
```

## Run

We use `cross-env` to read environment variables in windows. All commands provided above are available in windows with `./node_modules/.bin/cross-env` in front. For example

```bash
./node_modules/.bin/cross-env DPRO=local ./node_modules/.bin/magellan --local_browser chrome --test tests/demo-simple.js --serial
```

# Help

### 1. Magellan help
All magellan command line arguments, together with its plugin's and executors', can be found by.
```console
./node_modules/.bin/magellan --help
```

### 2. Plugin help
Command line arguments for plugin could be found by scanning `Framework-specific` keyword in magellan help output. 

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
Command line arguments for executor could be found by scanning `Executor-specific` keyword in magellan help output.

Help from [testarmada-magellan-sauce-executor](https://github.com/TestArmada/magellan-saucelabs-executor)
```console
Executor-specific (testarmada-magellan-sauce-executor)
   --sauce_browser=browsername          Run tests in chrome, firefox, etc (default: phantomjs).
   --sauce_browsers=b1,b2,..            Run multiple browsers in parallel.
   --sauce_list_browsers                List the available browsers configured (Guacamole integrated).
```

You can also implement your own executor in order to execute magellan test in more environment. Find more [here](https://github.com/TestArmada/magellan-executor) to implement your own magellan executor.

### 4. Strategy help
Command line arguments for strategy could be found by scanning `Strategy-specific` keyword in magellan help output.

Help from [testarmada-magellan-early-bail-strategy](https://github.com/TestArmada/magellan-early-bail-strategy)
```console
Strategy-specific (testarmada-magellan-early-bail-strategy)
   --early_bail_threshold=0.1           Ratio of tests that need to fail before we abandon the build
   --early_bail_min_attempts=10         Minimum number of tests that need to run before we apply the bail strategy
```


# Configuration
Magellan reads from both command line arguments and `magellan.json`. Please refer to help section to get the full list of magellan command line arguments.

Please use `./magellan.json` as example to customize your `magellan.json`.

## License
Documentation in this project is licensed under Creative Commons Attribution 4.0 International License. Full details available at https://creativecommons.org/licenses/by/4.0
