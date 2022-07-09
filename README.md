<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Probability Mass Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Poisson][poisson-distribution] distribution [probability mass function][pmf] (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [Poisson][poisson-distribution] random variable is

<!-- <equation class="equation" label="eq:poisson_pmf" align="center" raw="f(x;\lambda)=P(X=x;\lambda)=\begin{cases} \tfrac{\lambda^x}{x!}e^{-\lambda} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}" alt="Probability mass function (PMF) for a Poisson distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\lambda)=P(X=x;\lambda)=\begin{cases} \tfrac{\lambda^x}{x!}e^{-\lambda} &amp; \text{ for } x = 0,1,2,\ldots \\ 0 &amp; \text{ otherwise} \end{cases}" data-equation="eq:poisson_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/poisson/pmf/docs/img/equation_poisson_pmf.svg" alt="Probability mass function (PMF) for a Poisson distribution.">
    <br>
</div>

<!-- </equation> -->

where `lambda > 0` is the mean parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-poisson-pmf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-poisson-pmf@deno/mod.js';
```

#### pmf( x, lambda )

Evaluates the [probability mass function][pmf] (PMF) of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var y = pmf( 4.0, 3.0 );
// returns ~0.168

y = pmf( 1.0, 3.0 );
// returns ~0.149

y = pmf( -1.0, 2.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pmf( NaN, 2.0 );
// returns NaN

y = pmf( 0.0, NaN );
// returns NaN
```

If provided a negative mean parameter `lambda`, the function returns `NaN`.

```javascript
var y = pmf( 2.0, -1.0 );
// returns NaN

y = pmf( 4.0, -2.0 );
// returns NaN
```

If provided `lambda = 0`, the function evaluates the [PMF][pmf] of a [degenerate distribution][degenerate-distribution] centered at `0.0`.

```javascript
var y = pmf( 2.0, 0.0 );
// returns 0.0

y = pmf( 0.0, 0.0 );
// returns 1.0
```

#### pmf.factory( lambda )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var mypmf = pmf.factory( 1.0 );
var y = mypmf( 3.0 );
// returns ~0.061

y = mypmf( 1.0 );
// returns ~0.368
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import pmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-poisson-pmf@deno/mod.js';

var lambda;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 10.0 );
    lambda = randu() * 10.0;
    y = pmf( x, lambda );
    console.log( 'x: %d, λ: %d, P(X=x;λ): %d', x, lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-poisson-pmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-poisson-pmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-poisson-pmf/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-poisson-pmf/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-poisson-pmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-poisson-pmf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-poisson-pmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-poisson-pmf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-poisson-pmf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-poisson-pmf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-poisson-pmf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-poisson-pmf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-poisson-pmf/main/LICENSE

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
