Magellan Boilerplate
====================

This is an example Magellan test suite. To create a new Magellan test suite, make a clone of this project into your own by following the installation example instructions below.

The contents of this project's root directory should become the root directory of your Magellan test suite folder (for example a `./automation` folder in your project).

What's in the Box
=================

Included in this boilerplate:

  - Example base class for tests (`lib/example-base-test-class.js`)
  - Example tests which use the example base class (`tests/*`)
  - A `.gitignore` file which ignores Magellan-generated artifacts (logs, etc)
  - Stock configuration (`conf/nightwatch.json`)
  - A place to put custom commands (`lib/custom_commands`)

Prerequisites
====================

Check that you have at least `npm` version 2.7.1:

```
npm --version
```

If not, run:

```
npm install -g npm
```

Installation Example
====================

**1.** Clone `magellan-boilerplate` into an isolated place outside of your project:

```console
cd ~
git clone git@github.com:TestArmada/boilerplate.git
```

**2.** Copy the contents of `boilerplate` into your project test folder, remove `.git`

```console
cd ~/myproject
mkdir automated-tests
cd automated-tests
cp -R ~/boilerplate ./
rm -rf .git
```

**3.** Install npm modules and run example tests

```console
npm install
npm test
```

**4.** Try the testing workflow

To run the tests included in this boiler plate, simply type:
```console
./node_modules/.bin/magellan --serial
```

If you already have `./node_modules/.bin` in your `PATH`, you can simply type this instead:
```console
magellan --serial
```
without `./` or any path prefix.

In the above example, the `--serial` option runs all of your tests one at a time with live output. To get help on command options, type:
```console
magellan --help
```

For more information on how to run tests, including in different browsers, in parallel, and with filters and tags, see: https://github.com/TestArmada/magellan

**5.** Modify example tests and base class

To start developing your own tests, look at `tests/*` and `lib/example-base-test-class.js`.

Notes
=====

  - Magellan may support multiple test frameworks, but this boilerplate is based on Nightwatch.js (by using the `magellan-nightwatch` adapter).
  - This boilerplate project is suitable for use with tests that run against a live server, a QA server, or even a mock (i.e. any use case Magellan supports).