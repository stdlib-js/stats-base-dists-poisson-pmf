// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,d,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function N(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(S(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return x.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var P=Math.floor;function R(r){return P(r)===r&&r>=0}function M(r){return r!=r}var Z=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY;function Y(r){return r===Z||r===X}function z(r){return Math.abs(r)}var q,B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),D=Object.prototype.toString,J=Object.prototype.hasOwnProperty,K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"",rr=B&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return D.call(r);n=r[Q],a=Q,e=null!=(i=r)&&J.call(i,a);try{r[Q]=void 0}catch(e){return D.call(r)}return t=D.call(r),e?r[Q]=n:delete r[Q],t}:function(r){return D.call(r)},er="function"==typeof Uint32Array,nr="function"==typeof Uint32Array?Uint32Array:null,tr="function"==typeof Uint32Array?Uint32Array:void 0;q=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(er&&n instanceof Uint32Array||"[object Uint32Array]"===rr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir,ar=q,or="function"==typeof Float64Array,ur="function"==typeof Float64Array?Float64Array:null,cr="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),n=e,r=(or&&n instanceof Float64Array||"[object Float64Array]"===rr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,sr=ir,lr="function"==typeof Uint8Array,pr="function"==typeof Uint8Array?Uint8Array:null,yr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,256,257]),n=e,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===rr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,gr=fr,vr="function"==typeof Uint16Array,hr="function"==typeof Uint16Array?Uint16Array:null,wr="function"==typeof Uint16Array?Uint16Array:void 0;dr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(vr&&n instanceof Uint16Array||"[object Uint16Array]"===rr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:dr,uint8:gr};(br=new mr.uint16(1))[0]=4660;var Ar=52===new mr.uint8(br.buffer)[0],Nr=!0===Ar?1:0,_r=new sr(1),Er=new ar(_r.buffer);function Ur(r){return _r[0]=r,Er[Nr]}var kr=!0===Ar?1:0,xr=new sr(1),Ir=new ar(xr.buffer),Sr=1023,Fr=.6931471803691238,jr=1.9082149292705877e-10,Tr=1048575;function Or(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?X:M(r)||r<0?NaN:(a=0,(n=Ur(r))<1048576&&(a-=54,n=Ur(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-Sr|0,a+=(c=614244+(n&=Tr)&1048576|0)>>20|0,u=(r=function(r,e){return xr[0]=r,Ir[kr]=e>>>0,xr[0]}(r,n|1072693248^c))-1,(Tr&2+n)<3?0===u?0===a?0:a*Fr+a*jr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Fr-(o-a*jr-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Fr-(e-(s*(e+o)+a*jr)-u)):0===a?u-s*(u-o):a*Fr-(s*(u-o)-a*jr-u))))}var Vr=Math.ceil;function $r(r){return r<0?Vr(r):P(r)}function Gr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Hr=-.16666666666666632;function Wr(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Hr+i*n):r-(i*(.5*e-t*n)-e-t*Hr)}var Cr,Lr,Pr=2147483647,Rr=2146435072,Mr=!0===Ar?0:1,Zr=new sr(1),Xr=new ar(Zr.buffer);!0===Ar?(Cr=1,Lr=0):(Cr=0,Lr=1);var Yr,zr,qr={HIGH:Cr,LOW:Lr},Br=new sr(1),Dr=new ar(Br.buffer),Jr=qr.HIGH,Kr=qr.LOW;function Qr(r,e){return Dr[Jr]=r,Dr[Kr]=e,Br[0]}!0===Ar?(Yr=1,zr=0):(Yr=0,zr=1);var re={HIGH:Yr,LOW:zr},ee=new sr(1),ne=new ar(ee.buffer),te=re.HIGH,ie=re.LOW;function ae(r,e,n,t){return ee[0]=r,e[t]=ne[te],e[t+n]=ne[ie],e}function oe(r){return ae(r,[0,0],1,0)}L(oe,"assign",ae);var ue=[0,0];function ce(r,e){var n,t;return oe.assign(r,ue,1,0),n=ue[0],n&=Pr,t=Ur(e),Qr(n|=t&=2147483648,ue[1])}function fe(r,e,n,t){return M(r)||Y(r)?(e[t]=r,e[t+n]=0,e):0!==r&&z(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return fe(r,[0,0],1,0)}),"assign",fe);var se=[0,0],le=[0,0];function pe(r,e){var n,t;return 0===e||0===r||M(r)||Y(r)?r:(fe(r,se,1,0),e+=se[1],e+=function(r){var e=Ur(r);return(e=(e&Rr)>>>20)-Sr|0}(r=se[0]),e<-1074?ce(0,r):e>1023?r<0?X:Z:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,oe.assign(r,le,1,0),n=le[0],n&=2148532223,t*Qr(n|=e+Sr<<20,le[1])))}function ye(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var de=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ge=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ve=16777216,he=5.960464477539063e-8,we=ye(20),be=ye(20),me=ye(20),Ae=ye(20);function Ne(r,e,n,t,i,a,o,u,c){var f,s,l,p,y,d,g,v,h;for(p=a,h=t[n],v=n,y=0;v>0;y++)s=he*h|0,Ae[y]=h-ve*s|0,h=t[v-1]+s,v-=1;if(h=pe(h,i),h-=8*P(.125*h),h-=g=0|h,l=0,i>0?(g+=y=Ae[n-1]>>24-i,Ae[n-1]-=y<<24-i,l=Ae[n-1]>>23-i):0===i?l=Ae[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,y=0;y<n;y++)v=Ae[y],0===f?0!==v&&(f=1,Ae[y]=16777216-v):Ae[y]=16777215-v;if(i>0)switch(i){case 1:Ae[n-1]&=8388607;break;case 2:Ae[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=pe(1,i)))}if(0===h){for(v=0,y=n-1;y>=a;y--)v|=Ae[y];if(0===v){for(d=1;0===Ae[a-d];d++);for(y=n+1;y<=n+d;y++){for(c[u+y]=de[o+y],s=0,v=0;v<=u;v++)s+=r[v]*c[u+(y-v)];t[y]=s}return Ne(r,e,n+=d,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===Ae[n];)n-=1,i-=24;else(h=pe(h,-i))>=ve?(s=he*h|0,Ae[n]=h-ve*s|0,i+=24,Ae[n+=1]=s):Ae[n]=0|h;for(s=pe(1,i),y=n;y>=0;y--)t[y]=s*Ae[y],s*=he;for(y=n;y>=0;y--){for(s=0,d=0;d<=p&&d<=n-y;d++)s+=ge[d]*t[y+d];me[n-y]=s}for(s=0,y=n;y>=0;y--)s+=me[y];for(e[0]=0===l?s:-s,s=me[0]-s,y=1;y<=n;y++)s+=me[y];return e[1]=0===l?s:-s,7&g}function _e(r,e,n,t){var i,a,o,u,c,f,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)we[c]=f<0?0:de[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*we[o+(c-f)];be[c]=i}return Ne(r,e,4,be,u,4,a,o,we)}var Ee=Math.round;function Ue(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=Ee(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(Ur(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(Ur(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var ke=1.5707963267341256,xe=6077100506506192e-26,Ie=2*xe,Se=3*xe,Fe=4*xe,je=[0,0,0],Te=[0,0];function Oe(r,e){var n,t,i,a,o,u,c;if((i=Ur(r)&Pr|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Ue(r,i,e):i<=1073928572?r>0?(c=r-ke,e[0]=c-xe,e[1]=c-e[0]-xe,1):(c=r+ke,e[0]=c+xe,e[1]=c-e[0]+xe,-1):r>0?(c=r-2*ke,e[0]=c-Ie,e[1]=c-e[0]-Ie,2):(c=r+2*ke,e[0]=c+Ie,e[1]=c-e[0]+Ie,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Ue(r,i,e):r>0?(c=r-3*ke,e[0]=c-Se,e[1]=c-e[0]-Se,3):(c=r+3*ke,e[0]=c+Se,e[1]=c-e[0]+Se,-3):1075388923===i?Ue(r,i,e):r>0?(c=r-4*ke,e[0]=c-Fe,e[1]=c-e[0]-Fe,4):(c=r+4*ke,e[0]=c+Fe,e[1]=c-e[0]+Fe,-4);if(i<1094263291)return Ue(r,i,e);if(i>=Rr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Zr[0]=r,Xr[Mr]}(r),c=Qr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)je[o]=0|c,c=16777216*(c-je[o]);for(je[2]=c,a=3;0===je[a-1];)a-=1;return u=_e(je,Te,t,a),r<0?(e[0]=-Te[0],e[1]=-Te[1],-u):(e[0]=Te[0],e[1]=Te[1],u)}var Ve=[0,0];function $e(r){var e;if(e=Ur(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Gr(r,0);if(e>=2146435072)return NaN;switch(3&Oe(r,Ve)){case 0:return Gr(Ve[0],Ve[1]);case 1:return-Wr(Ve[0],Ve[1]);case 2:return-Gr(Ve[0],Ve[1]);default:return Wr(Ve[0],Ve[1])}}var Ge=[0,0];function He(r){var e;if(e=Ur(r),(e&=Pr)<=1072243195)return e<1045430272?r:Wr(r,0);if(e>=Rr)return NaN;switch(3&Oe(r,Ge)){case 0:return Wr(Ge[0],Ge[1]);case 1:return Gr(Ge[0],Ge[1]);case 2:return-Wr(Ge[0],Ge[1]);default:return-Gr(Ge[0],Ge[1])}}var We=3.141592653589793,Ce=1.4616321449683622,Le=1.4616321449683622;function Pe(r){var e,n,t,i,a,o,u,c,f,s,l,p,y;if(M(r)||Y(r))return r;if(0===r)return Z;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-Or(r);if(e){if(r>=4503599627370496)return Z;if(f=function(r){var e,n;return M(r)||Y(r)?NaN:0===(e=z(n=r%2))||1===e?ce(0,n):e<.25?He(We*n):e<.75?ce($e(We*(e=.5-e)),n):e<1.25?(n=ce(1,n)-n,He(We*n)):e<1.75?-ce($e(We*(e-=1.5)),n):(n-=ce(2,n),He(We*n))}(r),0===f)return Z;n=Or(We/z(f*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(y=-Or(r),r>=Ce-1+.27?(l=1-r,t=0):r>=Ce-1-.27?(l=r-(Le-1),t=1):(l=r,t=2)):(y=0,r>=Ce+.27?(l=2-r,t=0):r>=Ce-.27?(l=r-Le,t=1):(l=r-1,t=2)),t){case 0:o=.07721566490153287+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),y+=(u=l*o+a)-.5*l;break;case 1:o=.48383612272381005+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),y+=(u=p*o-(-3638676997039505e-33-s*(a+l*i)))-.12148629053584961;break;case 2:o=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),y+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=$r(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),c=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),y=.5*l+u/c,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:y+=Or(p*=l+2)}else r<0x400000000000000?(f=Or(r),s=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),y=(r-.5)*(f-1)+s):y=r*(Or(r)-1);return e&&(y=n-y),y}function Re(r){return function(r){return P(r)===r&&r<0}(r)?NaN:Pe(r+1)}var Me=1.4426950408889634,Ze=1/(1<<28);function Xe(r){var e;return M(r)||r===Z?r:r===X?0:r>709.782712893384?Z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ze?1+r:function(r,e,n){var t,i,a,o;return pe(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=$r(r<0?Me*r-.5:Me*r+.5)),1.9082149292705877e-10*e,e)}function Ye(r,e){return M(r)||M(e)||e<0?NaN:0===e?0===r?1:0:R(r)&&r!==Z?Xe(r*Or(e)-e-Re(r)):0}function ze(r){return function(){return r}}function qe(r){return M(r)?ze(NaN):function(e){return M(e)?NaN:e===r?1:0}}return L((function(r,e){return M(r)||M(e)?NaN:r===e?1:0}),"factory",qe),L(Ye,"factory",(function(r){return M(r)||r<0?ze(NaN):0===r?qe(0):function(e){return M(e)?NaN:R(e)&&e!==Z?Xe(e*Or(r)-r-Re(e)):0}})),Ye},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pmf=e();
//# sourceMappingURL=index.js.map
