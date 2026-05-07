"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=t(function(B,a){
var c=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),N=require('@stdlib/math-base-special-factorialln/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-exp/dist'),g=require('@stdlib/math-base-special-ln/dist'),y=require('@stdlib/constants-float64-pinf/dist');function I(r,e){var i;return u(r)||u(e)||e<0?NaN:e===0?r===0?1:0:c(r)&&r!==y?(i=r*g(e)-e-N(r),p(i)):0}a.exports=I
});var o=t(function(C,q){
var l=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),F=require('@stdlib/utils-constant-function/dist'),P=require('@stdlib/math-base-special-factorialln/dist'),O=require('@stdlib/stats-base-dists-degenerate-pmf/dist').factory,f=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-special-exp/dist'),h=require('@stdlib/math-base-special-ln/dist'),j=require('@stdlib/constants-float64-pinf/dist');function k(r){if(f(r)||r<0)return F(NaN);if(r===0)return O(0);return e;function e(i){var n;return f(i)?NaN:l(i)&&i!==j?(n=i*h(r)-r-P(i),R(n)):0}}q.exports=k
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=v(),z=o();w(s,"factory",z);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
