// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorialln@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import{factory as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-pmf@esm/index.mjs";function o(s,d){var a;return n(s)||n(d)||d<0?NaN:0===d?0===s?1:0:t(s)&&s!==m?(a=s*r(d)-d-e(s),i(a)):0}function l(s){return n(s)||s<0?d(NaN):0===s?a(0):function(d){var a;if(n(d))return NaN;if(t(d)&&d!==m)return a=d*r(s)-s-e(d),i(a);return 0}}s(o,"factory",l);export{o as default,l as factory};
//# sourceMappingURL=index.mjs.map
