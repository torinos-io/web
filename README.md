web
===

[![CircleCI](https://circleci.com/gh/torinos-io/web.svg?style=svg&circle-token=fd8303e17809d0dc90c7fe7aecb516a096803905)](https://circleci.com/gh/torinos-io/web)

Web frontend of torinos


Setup
-----

Install Docker, docker-compose and https://github.com/creasty/rid.

```sh-session
$ rid compose pull
```


Run
---

``` sh-session
# install dependencies
$ rid yarn

# serve with hot reload at localhost:8080
$ rid yarn dev

# build for production with minification
$ rid yarn build

# build for production and view the bundle analyzer report
$ rid yarn build -- --report

# run unit tests
$ rid yarn unit

# run all tests
$ rid npm test
```
