# Migration Guide

This is the migration guide for Magellan@10.0.0 bump from any previous release.

## What is changed in Magellan@10

Magellan@10 has an significant architecture change, which not only includes changes in Magellan itself but also its plugins, reporters and the most important part, executors.

Executor is the new concept that we bring into Magellan in version 10.0.0.

### What is an executor

 * Middle layer between magellan and test framework
 * Bridge to connect magellan and plugins

### What can an executor do

 * Resolve profiles (env info, test info, capabilities for selenium test)
 * Patch setup and teardown event on the magellan test runner
 * Patch setup and teardown event on a magellan worker
 * Do some extra work in test's lifecycle
 * Communicate to a specific test env

## What should I update to use Magellan@10

### Dependencies

To update dependencies to correct versions, please follow the table below

| Dependency Name | Description | Readme | Is Required | Minimum Version for Magellan@10 |
|:---------------:|:-----------:|:------:|:-----------:|:-------------------------------:|
|testarmada-magellan-local-executor|run Nightwatch test in local|[link](https://github.com/TestArmada/magellan-local-executor/blob/master/README.md)|Yes|^1.0.0|
|testarmada-magellan-saucelabs-executor|run Nightwatch test on saucelabs|[link](https://github.com/TestArmada/magellan-saucelabs-executor/blob/master/README.md)|Yes|^4.11.0|
|testarmada-magellan-nightwatch-plugin|drive Nightwatch test run in Magellan|[link](https://github.com/TestArmada/magellan-nightwatch-plugin/blob/master/README.md)|Yes|^6.0.0|
|testarmada-nightwatch-extra|Nightwatch addon for extra commands and assertions|[link](https://github.com/TestArmada/nightwatch-extra/blob/master/README.md)|Yes|^4.0.0|
|testarmada-magellan-admiral-plugin|Magellan reporter for Admiral|[link](https://github.com/TestArmada/magellan-admiral-plugin/blob/master/README.md)|No|^3.0.0|
|testarmada-magellan-admiral2-plugin|Magellan reporter for Admiral@2|[link](https://github.com/TestArmada/magellan-admiral2-plugin/blob/master/README.md)|No|^3.0.0|
|testarmada-time-stats-reporter|Magellan test execution time reporter|[link](https://github.com/TestArmada/magellan-time-stats-reporter/blob/master/README.md)|No|^2.0.0|

**Please note**: `Nightwatch-extra@4` also has breaking changes. Please refer to [here](https://github.com/TestArmada/nightwatch-extra/blob/master/README.md#important-migration-notice-for-nightwatch-extra4) for the migration guide of `Nightwatch-extra@4`.

## Configuration files

In Magellan@10 you are free to choose executors (at lease one) per you need. You can tell which executor(s) will be in use by setting it(them) in `magellan.json`

```javascript
"executors": [
    "testarmada-magellan-local-executor",
    "testarmada-magellan-saucelabs-executor"
]
```

## Command line arguments
Since `Magellan@10.0.0` magellan itself no longer read `--browser` or `--browsers` from command line. Instead the executor(s) you configured in `magellan.json` will do it. 

`--browser` and `--browsers` will no longer be available for you to use. You'll need to run the following command to check how to pass the corresponding arguments into the executor(s) that you choose. Please follow the three-step template (We'll use `magellan-local-executor` for example, all executors are implemented in the similar way).

 1. `./node_modules/.bin/magellan --help`

Magellan help gives you the command line arguments that executor wants. 

```console
Executor-specific (testarmada-magellan-local-executor)
   --local_browser=browsername          Run tests in chrome, firefox, etc (default: phantomjs).
   --local_browsers=b1,b2,..            Run multiple browsers in parallel.
   --local_list_browsers                List the available browsers configured.
```

  2. `./node_modules/.bin/magellan --xxx_list_browsers`

```console
./node_modules/.bin/magellan --local_list_browsers

[INFO] [Local Executor] Available browsers from file ./conf/nightwatch.json: phantomjs,safari,firefox,chrome,appiummweb
```
`phantomjs`,`safari`,`firefox`,`chrome` and `appiummweb` are supported

 3. Run it

```console
./node_modules/.bin/magellan --local_browser chrome
```
or
```console
./node_modules/.bin/magellan --local_browsers chrome,firefox
```

