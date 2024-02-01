// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function N(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return I.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var P=Math.floor;function R(r){return P(r)===r&&r>=0}function M(r){return r!=r}var Z=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY;function Y(r){return r===Z||r===X}function z(r){return Math.abs(r)}var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var B=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=q&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return B.call(r);n=r[K],a=K,e=null!=(i=r)&&D.call(i,a);try{r[K]=void 0}catch(e){return B.call(r)}return t=B.call(r),e?r[K]=n:delete r[K],t}:function(r){return B.call(r)},rr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var nr,tr="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(rr&&n instanceof Uint32Array||"[object Uint32Array]"===Q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=nr,ar="function"==typeof Float64Array;var or="function"==typeof Float64Array?Float64Array:null;var ur,cr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or([1,3.14,-3.14,NaN]),n=e,r=(ar&&n instanceof Float64Array||"[object Float64Array]"===Q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr=ur,sr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null;var pr,vr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,256,257]),n=e,r=(sr&&n instanceof Uint8Array||"[object Uint8Array]"===Q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var yr=pr,gr="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var hr,wr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(gr&&n instanceof Uint16Array||"[object Uint16Array]"===Q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:hr,uint8:yr};(br=new mr.uint16(1))[0]=4660;var Ar=52===new mr.uint8(br.buffer)[0],Nr=!0===Ar?1:0,_r=new fr(1),Er=new ir(_r.buffer);function Ur(r){return _r[0]=r,Er[Nr]}var kr=!0===Ar?1:0,Ir=new fr(1),Sr=new ir(Ir.buffer);var xr=.6931471803691238,Fr=1.9082149292705877e-10;function jr(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?X:M(r)||r<0?NaN:(a=0,(n=Ur(r))<1048576&&(a-=54,n=Ur(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(c=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,e){return Ir[0]=r,Sr[kr]=e>>>0,Ir[0]}(r,n|1072693248^c))-1,(1048575&2+n)<3?0===u?0===a?0:a*xr+a*Fr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*xr-(o-a*Fr-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*xr-(e-(s*(e+o)+a*Fr)-u)):0===a?u-s*(u-o):a*xr-(s*(u-o)-a*Fr-u))))}var Tr=Math.ceil;function Or(r){return r<0?Tr(r):P(r)}function Vr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var $r=-.16666666666666632;function Gr(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*($r+i*n):r-(i*(.5*e-t*n)-e-t*$r)}var Hr,Wr,Cr=!0===Ar?0:1,Lr=new fr(1),Pr=new ir(Lr.buffer);!0===Ar?(Hr=1,Wr=0):(Hr=0,Wr=1);var Rr={HIGH:Hr,LOW:Wr},Mr=new fr(1),Zr=new ir(Mr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,e){return Zr[Xr]=r,Zr[Yr]=e,Mr[0]}var qr,Br;!0===Ar?(qr=1,Br=0):(qr=0,Br=1);var Dr={HIGH:qr,LOW:Br},Jr=new fr(1),Kr=new ir(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,n,t){return Jr[0]=r,e[t]=Kr[Qr],e[t+n]=Kr[re],e}function ne(r){return ee(r,[0,0],1,0)}L(ne,"assign",ee);var te=[0,0];function ie(r,e){var n,t;return ne.assign(r,te,1,0),n=te[0],n&=2147483647,t=Ur(e),zr(n|=t&=2147483648,te[1])}function ae(r,e,n,t){return M(r)||Y(r)?(e[t]=r,e[t+n]=0,e):0!==r&&z(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ae(r,[0,0],1,0)}),"assign",ae);var oe=[0,0],ue=[0,0];function ce(r,e){var n,t;return 0===e||0===r||M(r)||Y(r)?r:(ae(r,oe,1,0),e+=oe[1],e+=function(r){var e=Ur(r);return(e=(2146435072&e)>>>20)-1023|0}(r=oe[0]),e<-1074?ie(0,r):e>1023?r<0?X:Z:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ne.assign(r,ue,1,0),n=ue[0],n&=2148532223,t*zr(n|=e+1023<<20,ue[1])))}function fe(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var se=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],le=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pe=5.960464477539063e-8,ve=fe(20),ye=fe(20),ge=fe(20),de=fe(20);function he(r,e,n,t,i,a,o,u,c){var f,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=pe*h|0,de[v]=h-16777216*s|0,h=t[d-1]+s,d-=1;if(h=ce(h,i),h-=8*P(.125*h),h-=g=0|h,l=0,i>0?(g+=v=de[n-1]>>24-i,de[n-1]-=v<<24-i,l=de[n-1]>>23-i):0===i?l=de[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,v=0;v<n;v++)d=de[v],0===f?0!==d&&(f=1,de[v]=16777216-d):de[v]=16777215-d;if(i>0)switch(i){case 1:de[n-1]&=8388607;break;case 2:de[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=ce(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=de[v];if(0===d){for(y=1;0===de[a-y];y++);for(v=n+1;v<=n+y;v++){for(c[u+v]=se[o+v],s=0,d=0;d<=u;d++)s+=r[d]*c[u+(v-d)];t[v]=s}return he(r,e,n+=y,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===de[n];)n-=1,i-=24;else(h=ce(h,-i))>=16777216?(s=pe*h|0,de[n]=h-16777216*s|0,i+=24,de[n+=1]=s):de[n]=0|h;for(s=ce(1,i),v=n;v>=0;v--)t[v]=s*de[v],s*=pe;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=le[y]*t[v+y];ge[n-v]=s}for(s=0,v=n;v>=0;v--)s+=ge[v];for(e[0]=0===l?s:-s,s=ge[0]-s,v=1;v<=n;v++)s+=ge[v];return e[1]=0===l?s:-s,7&g}function we(r,e,n,t){var i,a,o,u,c,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)ve[c]=f<0?0:se[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*ve[o+(c-f)];ye[c]=i}return 4,he(r,e,4,ye,u,4,a,o,ve)}var be=Math.round;function me(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=be(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(Ur(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(Ur(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Ae=1.5707963267341256,Ne=6077100506506192e-26,_e=2*Ne,Ee=4*Ne,Ue=[0,0,0],ke=[0,0];function Ie(r,e){var n,t,i,a,o,u,c;if((i=2147483647&Ur(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?me(r,i,e):i<=1073928572?r>0?(c=r-Ae,e[0]=c-Ne,e[1]=c-e[0]-Ne,1):(c=r+Ae,e[0]=c+Ne,e[1]=c-e[0]+Ne,-1):r>0?(c=r-2*Ae,e[0]=c-_e,e[1]=c-e[0]-_e,2):(c=r+2*Ae,e[0]=c+_e,e[1]=c-e[0]+_e,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?me(r,i,e):r>0?(c=r-3*Ae,e[0]=c-1.8231301519518578e-10,e[1]=c-e[0]-1.8231301519518578e-10,3):(c=r+3*Ae,e[0]=c+1.8231301519518578e-10,e[1]=c-e[0]+1.8231301519518578e-10,-3):1075388923===i?me(r,i,e):r>0?(c=r-4*Ae,e[0]=c-Ee,e[1]=c-e[0]-Ee,4):(c=r+4*Ae,e[0]=c+Ee,e[1]=c-e[0]+Ee,-4);if(i<1094263291)return me(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Lr[0]=r,Pr[Cr]}(r),c=zr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Ue[o]=0|c,c=16777216*(c-Ue[o]);for(Ue[2]=c,a=3;0===Ue[a-1];)a-=1;return u=we(Ue,ke,t,a),r<0?(e[0]=-ke[0],e[1]=-ke[1],-u):(e[0]=ke[0],e[1]=ke[1],u)}var Se=[0,0];function xe(r){var e;if(e=Ur(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Vr(r,0);if(e>=2146435072)return NaN;switch(3&Ie(r,Se)){case 0:return Vr(Se[0],Se[1]);case 1:return-Gr(Se[0],Se[1]);case 2:return-Vr(Se[0],Se[1]);default:return Gr(Se[0],Se[1])}}var Fe=[0,0];function je(r){var e;if(e=Ur(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Gr(r,0);if(e>=2146435072)return NaN;switch(3&Ie(r,Fe)){case 0:return Gr(Fe[0],Fe[1]);case 1:return Vr(Fe[0],Fe[1]);case 2:return-Gr(Fe[0],Fe[1]);default:return-Vr(Fe[0],Fe[1])}}var Te=3.141592653589793;var Oe=1.4616321449683622,Ve=1.4616321449683622;function $e(r){var e,n,t,i,a,o,u,c,f,s,l,p,v;if(M(r)||Y(r))return r;if(0===r)return Z;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-jr(r);if(e){if(r>=4503599627370496)return Z;if(f=function(r){var e,n;return M(r)||Y(r)?NaN:0===(e=z(n=r%2))||1===e?ie(0,n):e<.25?je(Te*n):e<.75?ie(xe(Te*(e=.5-e)),n):e<1.25?(n=ie(1,n)-n,je(Te*n)):e<1.75?-ie(xe(Te*(e-=1.5)),n):(n-=ie(2,n),je(Te*n))}(r),0===f)return Z;n=jr(Te/z(f*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-jr(r),r>=Oe-1+.27?(l=1-r,t=0):r>=Oe-1-.27?(l=r-(Ve-1),t=1):(l=r,t=2)):(v=0,r>=Oe+.27?(l=2-r,t=0):r>=Oe-.27?(l=r-Ve,t=1):(l=r-1,t=2)),t){case 0:o=.07721566490153287+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=.48383612272381005+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=-.12148629053584961+(u=p*o-(-3638676997039505e-33-s*(a+l*i)));break;case 2:o=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=Or(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),c=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/c,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=jr(p*=l+2)}else r<0x400000000000000?(f=jr(r),s=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(f-1)+s):v=r*(jr(r)-1);return e&&(v=n-v),v}function Ge(r){return function(r){return P(r)===r&&r<0}(r)?NaN:$e(r+1)}function He(r){var e;return M(r)||r===Z?r:r===X?0:r>709.782712893384?Z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,n){var t,i,a,o;return ce(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=Or(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function We(r,e){return M(r)||M(e)||e<0?NaN:0===e?0===r?1:0:R(r)&&r!==Z?He(r*jr(e)-e-Ge(r)):0}function Ce(r){return function(){return r}}function Le(r){return M(r)?Ce(NaN):function(e){if(M(e))return NaN;return e===r?1:0}}function Pe(r){return M(r)||r<0?Ce(NaN):0===r?Le(0):function(e){if(M(e))return NaN;if(R(e)&&e!==Z)return He(e*jr(r)-r-Ge(e));return 0}}L((function(r,e){return M(r)||M(e)?NaN:r===e?1:0}),"factory",Le),L(We,"factory",Pe);export{We as default,Pe as factory};
//# sourceMappingURL=mod.js.map
