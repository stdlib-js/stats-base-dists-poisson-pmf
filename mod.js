// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,o=t.__defineSetter__,a=t.__lookupGetter__,i=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(a.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,f.get),v&&o&&o.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function y(r){return l(r)===r&&r>=0}function v(r){return r!=r}var s=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function b(r){return r===s||r===p}function w(r){return Math.abs(r)}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var A=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var h=N&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return A.call(r);t=r[d],o=d,n=null!=(u=r)&&_.call(u,o);try{r[d]=void 0}catch(n){return A.call(r)}return e=A.call(r),n?r[d]=t:delete r[d],e}:function(r){return A.call(r)},m="function"==typeof Uint32Array;var U="function"==typeof Uint32Array?Uint32Array:null;var g,j="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(m&&t instanceof Uint32Array||"[object Uint32Array]"===h(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I=g,O="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null;var E,F="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),t=n,r=(O&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=E,T="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var P,k="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,256,257]),t=n,r=(T&&t instanceof Uint8Array||"[object Uint8Array]"===h(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var x=P,L="function"==typeof Uint16Array;var M="function"==typeof Uint16Array?Uint16Array:null;var V,W="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,65536,65537]),t=n,r=(L&&t instanceof Uint16Array||"[object Uint16Array]"===h(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var Y,C={uint16:V,uint8:x};(Y=new C.uint16(1))[0]=4660;var q=52===new C.uint8(Y.buffer)[0],z=!0===q?1:0,B=new H(1),D=new I(B.buffer);function J(r){return B[0]=r,D[z]}var K=!0===q?1:0,Q=new H(1),R=new I(Q.buffer);var X=.6931471803691238,Z=1.9082149292705877e-10;function $(r){var n,t,e,u,o,a,i,f,c,l,y,s;return 0===r?p:v(r)||r<0?NaN:(o=0,(t=J(r))<1048576&&(o-=54,t=J(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(f=(t&=1048575)+614244&1048576|0)>>20|0,i=(r=function(r,n){return Q[0]=r,R[K]=n>>>0,Q[0]}(r,t|1072693248^f))-1,(1048575&2+t)<3?0===i?0===o?0:o*X+o*Z:(a=i*i*(.5-.3333333333333333*i),0===o?i-a:o*X-(a-o*Z-i)):(f=t-398458|0,c=440401-t|0,u=(y=(s=(l=i/(2+i))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),a=e+u,(f|=c)>0?(n=.5*i*i,0===o?i-(n-l*(n+a)):o*X-(n-(l*(n+a)+o*Z)-i)):0===o?i-l*(i-a):o*X-(l*(i-a)-o*Z-i))))}var rr=Math.ceil;function nr(r){return r<0?rr(r):l(r)}function tr(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var er=-.16666666666666632;function ur(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(er+u*t):r-(u*(.5*n-e*t)-n-e*er)}var or,ar,ir=!0===q?0:1,fr=new H(1),cr=new I(fr.buffer);!0===q?(or=1,ar=0):(or=0,ar=1);var lr={HIGH:or,LOW:ar},yr=new H(1),vr=new I(yr.buffer),sr=lr.HIGH,pr=lr.LOW;function br(r,n){return vr[sr]=r,vr[pr]=n,yr[0]}var wr,Nr;!0===q?(wr=1,Nr=0):(wr=0,Nr=1);var Ar={HIGH:wr,LOW:Nr},_r=new H(1),dr=new I(_r.buffer),hr=Ar.HIGH,mr=Ar.LOW;function Ur(r,n,t,e){return _r[0]=r,n[e]=dr[hr],n[e+t]=dr[mr],n}function gr(r){return Ur(r,[0,0],1,0)}c(gr,"assign",Ur);var jr=[0,0];function Ir(r,n){var t,e;return gr.assign(r,jr,1,0),t=jr[0],t&=2147483647,e=J(n),br(t|=e&=2147483648,jr[1])}function Or(r,n,t,e){return v(r)||b(r)?(n[e]=r,n[e+t]=0,n):0!==r&&w(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Or(r,[0,0],1,0)}),"assign",Or);var Sr=[0,0],Er=[0,0];function Fr(r,n){var t,e;return 0===n||0===r||v(r)||b(r)?r:(Or(r,Sr,1,0),n+=Sr[1],n+=function(r){var n=J(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Sr[0]),n<-1074?Ir(0,r):n>1023?r<0?p:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,gr.assign(r,Er,1,0),t=Er[0],t&=2148532223,e*br(t|=n+1023<<20,Er[1])))}function Hr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Tr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Pr=5.960464477539063e-8,kr=Hr(20),xr=Hr(20),Lr=Hr(20),Mr=Hr(20);function Vr(r,n,t,e,u,o,a,i,f){var c,y,v,s,p,b,w,N,A;for(s=o,A=e[t],N=t,p=0;N>0;p++)y=Pr*A|0,Mr[p]=A-16777216*y|0,A=e[N-1]+y,N-=1;if(A=Fr(A,u),A-=8*l(.125*A),A-=w=0|A,v=0,u>0?(w+=p=Mr[t-1]>>24-u,Mr[t-1]-=p<<24-u,v=Mr[t-1]>>23-u):0===u?v=Mr[t-1]>>23:A>=.5&&(v=2),v>0){for(w+=1,c=0,p=0;p<t;p++)N=Mr[p],0===c?0!==N&&(c=1,Mr[p]=16777216-N):Mr[p]=16777215-N;if(u>0)switch(u){case 1:Mr[t-1]&=8388607;break;case 2:Mr[t-1]&=4194303}2===v&&(A=1-A,0!==c&&(A-=Fr(1,u)))}if(0===A){for(N=0,p=t-1;p>=o;p--)N|=Mr[p];if(0===N){for(b=1;0===Mr[o-b];b++);for(p=t+1;p<=t+b;p++){for(f[i+p]=Tr[a+p],y=0,N=0;N<=i;N++)y+=r[N]*f[i+(p-N)];e[p]=y}return Vr(r,n,t+=b,e,u,o,a,i,f)}}if(0===A)for(t-=1,u-=24;0===Mr[t];)t-=1,u-=24;else(A=Fr(A,-u))>=16777216?(y=Pr*A|0,Mr[t]=A-16777216*y|0,u+=24,Mr[t+=1]=y):Mr[t]=0|A;for(y=Fr(1,u),p=t;p>=0;p--)e[p]=y*Mr[p],y*=Pr;for(p=t;p>=0;p--){for(y=0,b=0;b<=s&&b<=t-p;b++)y+=Gr[b]*e[p+b];Lr[t-p]=y}for(y=0,p=t;p>=0;p--)y+=Lr[p];for(n[0]=0===v?y:-y,y=Lr[0]-y,p=1;p<=t;p++)y+=Lr[p];return n[1]=0===v?y:-y,7&w}function Wr(r,n,t,e){var u,o,a,i,f,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(a=e-1),l=a+4,f=0;f<=l;f++)kr[f]=c<0?0:Tr[c],c+=1;for(f=0;f<=4;f++){for(u=0,c=0;c<=a;c++)u+=r[c]*kr[a+(f-c)];xr[f]=u}return 4,Vr(r,n,4,xr,i,4,o,a,kr)}var Yr=Math.round;function Cr(r,n,t){var e,u,o,a,i;return o=r-1.5707963267341256*(e=Yr(.6366197723675814*r)),a=6077100506506192e-26*e,i=n>>20|0,t[0]=o-a,i-(J(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((u=o)-(o=u-(a=6077100506303966e-26*e))-a),t[0]=o-a,i-(J(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((u=o)-(o=u-(a=20222662487111665e-37*e))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var qr=1.5707963267341256,zr=6077100506506192e-26,Br=2*zr,Dr=4*zr,Jr=[0,0,0],Kr=[0,0];function Qr(r,n){var t,e,u,o,a,i,f;if((u=2147483647&J(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Cr(r,u,n):u<=1073928572?r>0?(f=r-qr,n[0]=f-zr,n[1]=f-n[0]-zr,1):(f=r+qr,n[0]=f+zr,n[1]=f-n[0]+zr,-1):r>0?(f=r-2*qr,n[0]=f-Br,n[1]=f-n[0]-Br,2):(f=r+2*qr,n[0]=f+Br,n[1]=f-n[0]+Br,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Cr(r,u,n):r>0?(f=r-3*qr,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*qr,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===u?Cr(r,u,n):r>0?(f=r-4*qr,n[0]=f-Dr,n[1]=f-n[0]-Dr,4):(f=r+4*qr,n[0]=f+Dr,n[1]=f-n[0]+Dr,-4);if(u<1094263291)return Cr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return fr[0]=r,cr[ir]}(r),f=br(u-((e=(u>>20)-1046)<<20|0),t),a=0;a<2;a++)Jr[a]=0|f,f=16777216*(f-Jr[a]);for(Jr[2]=f,o=3;0===Jr[o-1];)o-=1;return i=Wr(Jr,Kr,e,o),r<0?(n[0]=-Kr[0],n[1]=-Kr[1],-i):(n[0]=Kr[0],n[1]=Kr[1],i)}var Rr=[0,0];function Xr(r){var n;if(n=J(r),(n&=2147483647)<=1072243195)return n<1044381696?1:tr(r,0);if(n>=2146435072)return NaN;switch(3&Qr(r,Rr)){case 0:return tr(Rr[0],Rr[1]);case 1:return-ur(Rr[0],Rr[1]);case 2:return-tr(Rr[0],Rr[1]);default:return ur(Rr[0],Rr[1])}}var Zr=[0,0];function $r(r){var n;if(n=J(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ur(r,0);if(n>=2146435072)return NaN;switch(3&Qr(r,Zr)){case 0:return ur(Zr[0],Zr[1]);case 1:return tr(Zr[0],Zr[1]);case 2:return-ur(Zr[0],Zr[1]);default:return-tr(Zr[0],Zr[1])}}var rn=3.141592653589793;var nn=1.4616321449683622,tn=1.4616321449683622;function en(r){var n,t,e,u,o,a,i,f,c,l,y,p,N;if(v(r)||b(r))return r;if(0===r)return s;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-$(r);if(n){if(r>=4503599627370496)return s;if(c=function(r){var n,t;return v(r)||b(r)?NaN:0===(n=w(t=r%2))||1===n?Ir(0,t):n<.25?$r(rn*t):n<.75?Ir(Xr(rn*(n=.5-n)),t):n<1.25?(t=Ir(1,t)-t,$r(rn*t)):n<1.75?-Ir(Xr(rn*(n-=1.5)),t):(t-=Ir(2,t),$r(rn*t))}(r),0===c)return s;t=$(rn/w(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(N=-$(r),r>=nn-1+.27?(y=1-r,e=0):r>=nn-1-.27?(y=r-(tn-1),e=1):(y=r,e=2)):(N=0,r>=nn+.27?(y=2-r,e=0):r>=nn-.27?(y=r-tn,e=1):(y=r-1,e=2)),e){case 0:a=.07721566490153287+(p=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),o=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),N+=(i=y*a+o)-.5*y;break;case 1:a=.48383612272381005+(l=(p=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),o=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),N+=-.12148629053584961+(i=p*a-(-3638676997039505e-33-l*(o+y*u)));break;case 2:a=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),o=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),N+=-.5*y+a/o}else if(r<8)switch(i=(y=r-(e=nr(r)))*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),f=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),N=.5*y+i/f,p=1,e){case 7:p*=y+6;case 6:p*=y+5;case 5:p*=y+4;case 4:p*=y+3;case 3:N+=$(p*=y+2)}else r<0x400000000000000?(c=$(r),l=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=p*p),N=(r-.5)*(c-1)+l):N=r*($(r)-1);return n&&(N=t-N),N}function un(r){return function(r){return l(r)===r&&r<0}(r)?NaN:en(r+1)}function on(r){var n;return v(r)||r===s?r:r===p?0:r>709.782712893384?s:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,o,a;return Fr(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(a=u)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=nr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function an(r,n){return v(r)||v(n)||n<0?NaN:0===n?0===r?1:0:y(r)&&r!==s?on(r*$(n)-n-un(r)):0}function fn(r){return function(){return r}}function cn(r){return v(r)?fn(NaN):function(n){if(v(n))return NaN;return n===r?1:0}}function ln(r){return v(r)||r<0?fn(NaN):0===r?cn(0):function(n){if(v(n))return NaN;if(y(n)&&n!==s)return on(n*$(r)-r-un(n));return 0}}c((function(r,n){return v(r)||v(n)?NaN:r===n?1:0}),"factory",cn),c(an,"factory",ln);export{an as default,ln as factory};
//# sourceMappingURL=mod.js.map
