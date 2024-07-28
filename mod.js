// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,N=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,c,f,s,l,p,v,y,g;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,_(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),c+=t.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){var e,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W=Math.floor;function C(r){return W(r)===r&&r>=0}function L(r){return r!=r}var P=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;function M(r){return r===P||r===R}function Z(r){return Math.abs(r)}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Y.call(r);n=r[B],a=B,e=null!=(i=r)&&z.call(i,a);try{r[B]=void 0}catch(e){return Y.call(r)}return t=Y.call(r),e?r[B]=n:delete r[B],t}:function(r){return Y.call(r)},J="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q,rr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,e,n;if("function"!=typeof K)return!1;try{e=new K(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(J&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er=Q,nr="function"==typeof Float64Array;var tr="function"==typeof Float64Array?Float64Array:null;var ir,ar="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,n;if("function"!=typeof tr)return!1;try{e=new tr([1,3.14,-3.14,NaN]),n=e,r=(nr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ir,ur="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null;var fr,sr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,e,n;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),n=e,r=(ur&&n instanceof Uint8Array||"[object Uint8Array]"===D(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr=fr,pr="function"==typeof Uint16Array;var vr="function"==typeof Uint16Array?Uint16Array:null;var yr,gr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,n;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(pr&&n instanceof Uint16Array||"[object Uint16Array]"===D(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,hr={uint16:yr,uint8:lr};(dr=new hr.uint16(1))[0]=4660;var wr=52===new hr.uint8(dr.buffer)[0],br=!0===wr?1:0,mr=new or(1),Ar=new er(mr.buffer);function Nr(r){return mr[0]=r,Ar[br]}var _r=!0===wr?1:0,Er=new or(1),Ur=new er(Er.buffer);var Sr=1023;var kr=.6931471803691238,Ir=1.9082149292705877e-10,xr=0x40000000000000,Fr=.3333333333333333,jr=1048575,Tr=2146435072,Or=1048576,Vr=1072693248;function $r(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?R:L(r)||r<0?NaN:(a=0,(n=Nr(r))<Or&&(a-=54,n=Nr(r*=xr)),n>=Tr?r+r:(a+=(n>>20)-Sr|0,a+=(c=(n&=jr)+614244&1048576|0)>>20|0,u=(r=function(r,e){return Er[0]=r,Ur[_r]=e>>>0,Er[0]}(r,n|c^Vr))-1,(jr&2+n)<3?0===u?0===a?0:a*kr+a*Ir:(o=u*u*(.5-Fr*u),0===a?u-o:a*kr-(o-a*Ir-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*kr-(e-(s*(e+o)+a*Ir)-u)):0===a?u-s*(u-o):a*kr-(s*(u-o)-a*Ir-u))))}var Gr=Math.ceil;function Hr(r){return r<0?Gr(r):W(r)}function Wr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Cr=-.16666666666666632,Lr=.00833333333332249,Pr=-.0001984126982985795,Rr=27557313707070068e-22,Mr=-2.5050760253406863e-8,Zr=1.58969099521155e-10;function Xr(r,e){var n,t,i;return n=Lr+(i=r*r)*(Pr+i*Rr)+i*(i*i)*(Mr+i*Zr),t=i*r,0===e?r+t*(Cr+i*n):r-(i*(.5*e-t*n)-e-t*Cr)}var Yr,zr,qr=2147483647,Br=2146435072,Dr=1048575,Jr=!0===wr?0:1,Kr=new or(1),Qr=new er(Kr.buffer);!0===wr?(Yr=1,zr=0):(Yr=0,zr=1);var re={HIGH:Yr,LOW:zr},ee=new or(1),ne=new er(ee.buffer),te=re.HIGH,ie=re.LOW;function ae(r,e){return ne[te]=r,ne[ie]=e,ee[0]}var oe,ue,ce=1023,fe=-1023,se=-1074,le=2147483648;!0===wr?(oe=1,ue=0):(oe=0,ue=1);var pe={HIGH:oe,LOW:ue},ve=new or(1),ye=new er(ve.buffer),ge=pe.HIGH,de=pe.LOW;function he(r,e,n,t){return ve[0]=r,e[t]=ye[ge],e[t+n]=ye[de],e}function we(r){return he(r,[0,0],1,0)}H(we,"assign",he);var be=[0,0];function me(r,e){var n,t;return we.assign(r,be,1,0),n=be[0],n&=qr,t=Nr(e),ae(n|=t&=le,be[1])}var Ae=22250738585072014e-324,Ne=4503599627370496;function _e(r,e,n,t){return L(r)||M(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Z(r)<Ae?(e[t]=r*Ne,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return _e(r,[0,0],1,0)}),"assign",_e);var Ee=2220446049250313e-31,Ue=2148532223,Se=[0,0],ke=[0,0];function Ie(r,e){var n,t;return 0===e||0===r||L(r)||M(r)?r:(_e(r,Se,1,0),r=Se[0],e+=Se[1],e+=function(r){var e=Nr(r);return(e=(e&Br)>>>20)-Sr|0}(r),e<se?me(0,r):e>ce?r<0?R:P:(e<=fe?(e+=52,t=Ee):t=1,we.assign(r,ke,1,0),n=ke[0],n&=Ue,t*ae(n|=e+Sr<<20,ke[1])))}function xe(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Fe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],je=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Te=16777216,Oe=5.960464477539063e-8,Ve=xe(20),$e=xe(20),Ge=xe(20),He=xe(20);function We(r,e,n,t,i,a,o,u,c){var f,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=Oe*h|0,He[v]=h-Te*s|0,h=t[d-1]+s,d-=1;if(h=Ie(h,i),h-=8*W(.125*h),h-=g=0|h,l=0,i>0?(g+=v=He[n-1]>>24-i,He[n-1]-=v<<24-i,l=He[n-1]>>23-i):0===i?l=He[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,v=0;v<n;v++)d=He[v],0===f?0!==d&&(f=1,He[v]=16777216-d):He[v]=16777215-d;if(i>0)switch(i){case 1:He[n-1]&=8388607;break;case 2:He[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=Ie(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=He[v];if(0===d){for(y=1;0===He[a-y];y++);for(v=n+1;v<=n+y;v++){for(c[u+v]=Fe[o+v],s=0,d=0;d<=u;d++)s+=r[d]*c[u+(v-d)];t[v]=s}return We(r,e,n+=y,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===He[n];)n-=1,i-=24;else(h=Ie(h,-i))>=Te?(s=Oe*h|0,He[n]=h-Te*s|0,i+=24,He[n+=1]=s):He[n]=0|h;for(s=Ie(1,i),v=n;v>=0;v--)t[v]=s*He[v],s*=Oe;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=je[y]*t[v+y];Ge[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Ge[v];for(e[0]=0===l?s:-s,s=Ge[0]-s,v=1;v<=n;v++)s+=Ge[v];return e[1]=0===l?s:-s,7&g}function Ce(r,e,n,t){var i,a,o,u,c,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)Ve[c]=f<0?0:Fe[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*Ve[o+(c-f)];$e[c]=i}return 4,We(r,e,4,$e,u,4,a,o,Ve)}var Le=Math.round,Pe=.6366197723675814,Re=1.5707963267341256,Me=6077100506506192e-26,Ze=6077100506303966e-26,Xe=20222662487959506e-37,Ye=20222662487111665e-37,ze=84784276603689e-45,qe=2047;function Be(r,e,n){var t,i,a,o,u;return a=r-(t=Le(r*Pe))*Re,o=t*Me,u=e>>20|0,n[0]=a-o,u-(Nr(n[0])>>20&qe)>16&&(o=t*Xe-((i=a)-(a=i-(o=t*Ze))-o),n[0]=a-o,u-(Nr(n[0])>>20&qe)>49&&(o=t*ze-((i=a)-(a=i-(o=t*Ye))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var De=0,Je=16777216,Ke=1.5707963267341256,Qe=6077100506506192e-26,rn=2*Qe,en=3*Qe,nn=4*Qe,tn=598523,an=1072243195,on=1073928572,un=1074752122,cn=1074977148,fn=1075183036,sn=1075388923,ln=1075594811,pn=1094263291,vn=[0,0,0],yn=[0,0];function gn(r,e){var n,t,i,a,o,u,c;if((i=Nr(r)&qr|0)<=an)return e[0]=r,e[1]=0,0;if(i<=un)return(i&Dr)===tn?Be(r,i,e):i<=on?r>0?(c=r-Ke,e[0]=c-Qe,e[1]=c-e[0]-Qe,1):(c=r+Ke,e[0]=c+Qe,e[1]=c-e[0]+Qe,-1):r>0?(c=r-2*Ke,e[0]=c-rn,e[1]=c-e[0]-rn,2):(c=r+2*Ke,e[0]=c+rn,e[1]=c-e[0]+rn,-2);if(i<=ln)return i<=fn?i===cn?Be(r,i,e):r>0?(c=r-3*Ke,e[0]=c-en,e[1]=c-e[0]-en,3):(c=r+3*Ke,e[0]=c+en,e[1]=c-e[0]+en,-3):i===sn?Be(r,i,e):r>0?(c=r-4*Ke,e[0]=c-nn,e[1]=c-e[0]-nn,4):(c=r+4*Ke,e[0]=c+nn,e[1]=c-e[0]+nn,-4);if(i<pn)return Be(r,i,e);if(i>=Br)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Kr[0]=r,Qr[Jr]}(r),c=ae(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)vn[o]=0|c,c=(c-vn[o])*Je;for(vn[2]=c,a=3;vn[a-1]===De;)a-=1;return u=Ce(vn,yn,t,a),r<0?(e[0]=-yn[0],e[1]=-yn[1],-u):(e[0]=yn[0],e[1]=yn[1],u)}var dn=[0,0],hn=2147483647,wn=1072243195,bn=1044381696,mn=2146435072;function An(r){var e;if(e=Nr(r),(e&=hn)<=wn)return e<bn?1:Wr(r,0);if(e>=mn)return NaN;switch(3&gn(r,dn)){case 0:return Wr(dn[0],dn[1]);case 1:return-Xr(dn[0],dn[1]);case 2:return-Wr(dn[0],dn[1]);default:return Xr(dn[0],dn[1])}}var Nn=1072243195,_n=1045430272,En=[0,0];function Un(r){var e;if(e=Nr(r),(e&=qr)<=Nn)return e<_n?r:Xr(r,0);if(e>=Br)return NaN;switch(3&gn(r,En)){case 0:return Xr(En[0],En[1]);case 1:return Wr(En[0],En[1]);case 2:return-Xr(En[0],En[1]);default:return-Wr(En[0],En[1])}}var Sn=3.141592653589793;var kn=.07721566490153287,In=.3224670334241136,xn=1,Fn=-.07721566490153287,jn=.48383612272381005,Tn=-.1475877229945939,On=.06462494023913339,Vn=-.07721566490153287,$n=1,Gn=.4189385332046727,Hn=1.4616321449683622,Wn=4503599627370496,Cn=0x400000000000000,Ln=8470329472543003e-37,Pn=1.4616321449683622,Rn=-.12148629053584961,Mn=-3638676997039505e-33;function Zn(r){var e,n,t,i,a,o,u,c,f,s,l,p,v;if(L(r)||M(r))return r;if(0===r)return P;if(r<0?(e=!0,r=-r):e=!1,r<Ln)return-$r(r);if(e){if(r>=Wn)return P;if(f=function(r){var e,n;return L(r)||M(r)?NaN:0===(e=Z(n=r%2))||1===e?me(0,n):e<.25?Un(Sn*n):e<.75?me(An(Sn*(e=.5-e)),n):e<1.25?(n=me(1,n)-n,Un(Sn*n)):e<1.75?-me(An(Sn*(e-=1.5)),n):(n-=me(2,n),Un(Sn*n))}(r),0===f)return P;n=$r(Sn/Z(f*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-$r(r),r>=Hn-1+.27?(l=1-r,t=0):r>=Hn-1-.27?(l=r-(Pn-1),t=1):(l=r,t=2)):(v=0,r>=Hn+.27?(l=2-r,t=0):r>=Hn-.27?(l=r-Pn,t=1):(l=r-1,t=2)),t){case 0:o=kn+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(In+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=jn+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=Tn+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=On+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Rn+(u=p*o-(Mn-s*(a+l*i)));break;case 2:o=l*(Vn+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=$n+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=Hr(r)))*(Fn+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),c=xn+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/c,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=$r(p*=l+2)}else r<Cn?(f=$r(r),s=Gn+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(f-1)+s):v=r*($r(r)-1);return e&&(v=n-v),v}function Xn(r){return function(r){return W(r)===r&&r<0}(r)?NaN:Zn(r+1)}var Yn=.6931471803691238,zn=1.9082149292705877e-10,qn=1.4426950408889634,Bn=709.782712893384,Dn=-745.1332191019411,Jn=1/(1<<28),Kn=-Jn;function Qn(r){var e;return L(r)||r===P?r:r===R?0:r>Bn?P:r<Dn?0:r>Kn&&r<Jn?1+r:function(r,e,n){var t,i,a,o;return Ie(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=Hr(r<0?qn*r-.5:qn*r+.5))*Yn,e*zn,e)}function rt(r,e){return L(r)||L(e)||e<0?NaN:0===e?0===r?1:0:C(r)&&r!==P?Qn(r*$r(e)-e-Xn(r)):0}function et(r){return function(){return r}}function nt(r){return L(r)?et(NaN):function(e){if(L(e))return NaN;return e===r?1:0}}function tt(r){return L(r)||r<0?et(NaN):0===r?nt(0):function(e){if(L(e))return NaN;if(C(e)&&e!==P)return Qn(e*$r(r)-r-Xn(e));return 0}}H((function(r,e){return L(r)||L(e)?NaN:r===e?1:0}),"factory",nt),H(rt,"factory",tt);export{rt as default,tt as factory};
//# sourceMappingURL=mod.js.map