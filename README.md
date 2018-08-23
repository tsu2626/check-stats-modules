[![npm version](https://badge.fury.io/js/cmd-ranking.svg)](https://badge.fury.io/js/cmd-ranking)
![node](https://img.shields.io/node/v/passport.svg?style=social)
![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

# check-stats-modules

`check-stats-modules (csm)` is is a CLI application that obtains the specified npm module's stats. After specifying the module name and period, the number of downloads during that period is acquired and displayed on the terminal.

# Installation

```cmd
$ npm install -g check-stats-modules
```

# Usage (example)

* one module checking from yesterday

```cmd
$ csm check-stats-modules

  {"downloads":0,"start":"2018-08-22","end":"2018-08-23","package":"cmd-ranking"}
```

* two module checking from 2018-01-01

```cmd
$ csm check-stats-modules cmd-ranking -f 2018-01-01

  {"downloads":399,"start":"2018-01-01","end":"2018-08-23","package":"cmd-ranking"}
```

# Options

```
-f, --from        Specify the from of the period to be counted
```

# Others
Please write a new [issues](https://github.com/k-kuwahara/check-stats-modules/issues)! Please send me [PRs](https://github.com/k-kuwahara/check-stats-modules/pulls)!
