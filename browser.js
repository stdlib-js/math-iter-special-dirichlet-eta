// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterEta=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,t=Object.prototype,u=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,f=t.__lookupGetter__,a=t.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,n){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,e)||a.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=n.value,r.__proto__=c):r[e]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,e,n.get),y&&i&&i.call(r,e,n.set),r};var c=e;function l(r,e,n){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var v=/./;function y(r){return"boolean"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return s&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,e){return null!=r&&d.call(r,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=p()?function(r){var e,n,t;if(null==r)return b.call(r);n=r[m],e=w(r,m);try{r[m]=void 0}catch(e){return b.call(r)}return t=b.call(r),e?r[m]=n:delete r[m],t}:function(r){return b.call(r)},h=Boolean.prototype.toString;var N=p();function g(r){return"object"==typeof r&&(r instanceof Boolean||(N?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function A(r){return y(r)||g(r)}function _(){return new Function("return this;")()}l(A,"isPrimitive",y),l(A,"isObject",g);var O="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var T=function(r){if(arguments.length){if(!y(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return _()}if(O)return O;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(x,"REGEXP",P);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var e,n,t,u;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=P.exec(t.toString()))return e[1]}return G(u=r)&&(u._isBuffer||u.constructor&&"function"==typeof u.constructor.isBuffer&&u.constructor.isBuffer(u))?"Buffer":n}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var n,t;if(!V(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(G));var B="function"==typeof v||"object"==typeof I||"function"==typeof F?function(r){return H(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?H(r).toLowerCase():e};function L(r){return"function"===B(r)}function M(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=p();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(e=function(r){return null==r?null:(r=Object(r),J(r))}(r),!e||!w(r,"constructor")&&w(e,"constructor")&&L(e.constructor)&&"[object Function]"===j(e.constructor)&&w(e,"isPrototypeOf")&&L(e.isPrototypeOf)&&(e===K||function(r){var e;for(e in r)if(!w(r,e))return!1;return!0}(r)))}function Z(r,e){return Q(e)?(w(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}function $(r,e,n){var t,u,o,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(t={invalid:NaN},arguments.length>2&&(o=Z(t,n)))throw o;return l(u={},"next",f),l(u,"return",a),X&&L(r[X])&&l(u,X,c),u;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:k(n.value)?e(n.value):t.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),e,t)}}function rr(r){return r!=r}function er(r){return Math.abs(r)}var nr="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var ur,or="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,e,n;if("function"!=typeof tr)return!1;try{e=new tr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(nr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ir=ur,fr="function"==typeof Float64Array;var ar="function"==typeof Float64Array?Float64Array:null;var cr,lr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar([1,3.14,-3.14,NaN]),n=e,r=(fr&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var vr=cr,yr="function"==typeof Uint8Array;var sr="function"==typeof Uint8Array?Uint8Array:null;var pr,br="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,256,257]),n=e,r=(yr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var dr=pr,wr="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var jr,hr="function"==typeof Uint16Array?Uint16Array:void 0;jr=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(wr&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var Nr,gr={uint16:jr,uint8:dr};(Nr=new gr.uint16(1))[0]=4660;var Ar=52===new gr.uint8(Nr.buffer)[0],_r=!0===Ar?1:0,Or=new vr(1),Ur=new ir(Or.buffer);function Sr(r){return Or[0]=r,Ur[_r]}var Er=!0===Ar?1:0,Tr=new vr(1),Fr=new ir(Tr.buffer);function Ir(r,e){return Tr[0]=r,Fr[Er]=e>>>0,Tr[0]}var xr=Number.POSITIVE_INFINITY,Pr=W.NEGATIVE_INFINITY,Vr=1023;var Gr=.6931471803691238,Hr=1.9082149292705877e-10,Br=1.4426950408889634;var Lr=.6931471803691238,Mr=1.9082149292705877e-10,kr=1048575;function Wr(r){var e,n,t,u,o,i,f,a,c,l,v,y;return 0===r?Pr:rr(r)||r<0?NaN:(o=0,(n=Sr(r))<1048576&&(o-=54,n=Sr(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-Vr|0,o+=(a=(n&=kr)+614244&1048576|0)>>20|0,f=(r=Ir(r,n|1072693248^a))-1,(kr&2+n)<3?0===f?0===o?0:o*Lr+o*Mr:(i=f*f*(.5-.3333333333333333*f),0===o?f-i:o*Lr-(i-o*Mr-f)):(a=n-398458|0,c=440401-n|0,u=(v=(y=(l=f/(2+f))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),t=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=t+u,(a|=c)>0?(e=.5*f*f,0===o?f-(e-l*(e+i)):o*Lr-(e-(l*(e+i)+o*Mr)-f)):0===o?f-l*(f-i):o*Lr-(l*(f-i)-o*Mr-f))))}var Cr=Math.floor;function Yr(r){return Cr(r)===r}function qr(r){return Yr(r/2)}function Rr(r){return qr(r>0?r-1:r+1)}function Xr(r){return r===xr||r===Pr}var zr,Dr,Jr=Math.sqrt;!0===Ar?(zr=1,Dr=0):(zr=0,Dr=1);var Kr={HIGH:zr,LOW:Dr},Qr=new vr(1),Zr=new ir(Qr.buffer),$r=Kr.HIGH,re=Kr.LOW;function ee(r,e){return Qr[0]=e,r[0]=Zr[$r],r[1]=Zr[re],r}function ne(r,e){return 1===arguments.length?ee([0,0],r):ee(r,e)}var te,ue,oe=!0===Ar?0:1,ie=new vr(1),fe=new ir(ie.buffer);function ae(r,e){return ie[0]=r,fe[oe]=e>>>0,ie[0]}function ce(r){return 0|r}!0===Ar?(te=1,ue=0):(te=0,ue=1);var le={HIGH:te,LOW:ue},ve=new vr(1),ye=new ir(ve.buffer),se=le.HIGH,pe=le.LOW;function be(r,e){return ye[se]=r,ye[pe]=e,ve[0]}var de=[0,0];function we(r,e){var n,t;return ne(de,r),n=de[0],n&=2147483647,t=Sr(e),be(n|=t&=2147483648,de[1])}var me=1048576,je=[1,1.5],he=[0,.5849624872207642],Ne=[0,1.350039202129749e-8];function ge(r,e,n,t){return rr(r)||Xr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&er(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}l((function(r){return ge(r,[0,0],1,0)}),"assign",ge);var Ae=[0,0],_e=[0,0];function Oe(r,e){var n,t;return 0===e||0===r||rr(r)||Xr(r)?r:(ge(r,Ae,1,0),e+=Ae[1],e+=function(r){var e=Sr(r);return(e=(2146435072&e)>>>20)-Vr|0}(r=Ae[0]),e<-1074?we(0,r):e>1023?r<0?Pr:xr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ne(_e,r),n=_e[0],n&=2148532223,t*be(n|=e+Vr<<20,_e[1])))}var Ue=.6931471805599453;var Se=2147483647,Ee=1048575,Te=1048576;var Fe=2147483647,Ie=1083179008,xe=1e300,Pe=1e-300,Ve=[0,0],Ge=[0,0];function He(r,e){var n,t,u,o,i,f,a,c,l,v,y,s,p,b;if(rr(r)||rr(e))return NaN;if(ne(Ve,e),i=Ve[0],0===Ve[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Jr(r);if(-.5===e)return 1/Jr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Xr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:er(r)<1==(e===xr)?0:xr}(r,e)}if(ne(Ve,r),o=Ve[0],0===Ve[1]){if(0===o)return function(r,e){return e===Pr?xr:e===xr?0:e>0?Rr(e)?r:0:Rr(e)?we(xr,r):xr}(r,e);if(1===r)return 1;if(-1===r&&Rr(e))return-1;if(Xr(r))return r===Pr?He(-0,-e):e<0?0:xr}if(r<0&&!1===Yr(e))return(r-r)/(r-r);if(u=er(r),n=o&Fe|0,t=i&Fe|0,a=i>>>31|0,f=(f=o>>>31|0)&&Rr(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&Sr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===a?f*xe*xe:f*Pe*Pe;if(n>1072693248)return 0===a?f*xe*xe:f*Pe*Pe;y=function(r,e){var n,t,u,o,i,f;return n=(i=1.9259629911266175e-8*(u=e-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((t=ae(t=(o=1.4426950216293335*u)+i,0))-o),r[0]=t,r[1]=n,r}(Ge,u)}else y=function(r,e,n){var t,u,o,i,f,a,c,l,v,y,s,p,b,d,w,m,j,h,N,g,A;return h=0,n<me&&(h-=53,n=Sr(e*=9007199254740992)),h+=(n>>20)-Vr|0,n=1072693248|(N=1048575&n|0),N<=235662?g=0:N<767610?g=1:(g=0,h+=1,n-=me),i=ae(u=(m=(e=Ir(e,n))-(c=je[g]))*(j=1/(e+c)),0),t=524288+(n>>1|536870912),a=Ir(0,t+=g<<18),w=(o=u*u)*o*(0===(A=o)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),a=ae(a=3+(o=i*i)+(w+=(f=j*(m-i*a-i*(e-(a-c))))*(i+u)),0),b=(s=-7.028461650952758e-9*(v=ae(v=(m=i*a)+(j=f*a+(w-(a-3-o))*u),0))+.9617966939259756*(j-(v-m))+Ne[g])-((p=ae(p=(y=.9617967009544373*v)+s+(l=he[g])+(d=h),0))-d-l-y),r[0]=p,r[1]=b,r}(Ge,u,n);if(v=(e-(c=ae(e,0)))*y[0]+e*y[1],l=c*y[0],ne(Ve,s=v+l),p=ce(Ve[0]),b=ce(Ve[1]),p>=Ie){if(0!=(p-Ie|b))return f*xe*xe;if(v+8008566259537294e-32>s-l)return f*xe*xe}else if((p&Fe)>=1083231232){if(0!=(p-3230714880|b))return f*Pe*Pe;if(v<=s-l)return f*Pe*Pe}return s=function(r,e,n){var t,u,o,i,f,a,c,l,v,y;return v=((l=r&Se|0)>>20)-Vr|0,c=0,l>1071644672&&(u=Ir(0,((c=r+(Te>>v+1)>>>0)&~(Ee>>(v=((c&Se)>>20)-Vr|0)))>>>0),c=(c&Ee|Te)>>20-v>>>0,r<0&&(c=-c),e-=u),r=ce(r=Sr(a=1-((a=(o=.6931471824645996*(u=ae(u=n+e,0)))+(i=(n-(u-e))*Ue+-1.904654299957768e-9*u))*(t=a-(u=a*a)*(0===(y=u)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((f=i-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Oe(a,c):Ir(a,r)}(p,l,v),f*s}var Be=Math.ceil;function Le(r){return r<0?Be(r):Cr(r)}function Me(r,e){var n;if(rr(r)||rr(e))return NaN;if(0===e)return 0;if(0===r)return-1;if(r<0&&e%2==0&&(r=-r),r>0){if((er(e*(r-1))<.5||er(e)<.2)&&(n=Wr(r)*e)<.5)return function(r){var e,n,t,u,o,i,f,a,c,l,v,y;if(r===xr||rr(r))return r;if(r===Pr)return-1;if(0===r)return r;if(r<0?(n=!0,f=-r):(n=!1,f=r),f>=38.816242111356935){if(n)return-1;if(f>=709.782712893384)return xr}if(o=0|Sr(f),f>.34657359027997264)f<1.0397207708399179?n?(t=r+Gr,u=-Hr,y=-1):(t=r-Gr,u=Hr,y=1):(y=n?Br*r-.5:Br*r+.5,t=r-(l=y|=0)*Gr,u=l*Hr),c=t-(r=t-u)-u;else{if(o<1016070144)return r;y=0}return i=1+(a=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),v=a*((i-(l=3-i*e))/(6-r*l)),0===y?r-(r*v-a):(v=r*(v-c)-c,v-=a,-1===y?.5*(r-v)-.5:1===y?r<-.25?-2*(v-(r+.5)):1+2*(r-v):y<=-2||y>56?(f=Ir(f=1-(v-r),t=Sr(f)+(y<<20)|0))-1:(l=1,y<20?f=(l=Ir(l,t=1072693248-(2097152>>y)|0))-(v-r):(f=r-(v+(l=Ir(l,t=Vr-y<<20|0))),f+=1),Ir(f,t=Sr(f)+(y<<20)|0)))}(n)}else if(Le(e)!==e)return NaN;return He(r,e)-1}var ke=1.4426950408889634,We=1/(1<<28);function Ce(r){var e;return rr(r)||r===xr?r:r===Pr?0:r>709.782712893384?xr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<We?1+r:function(r,e,n){var t,u,o,i;return Oe(1-(e-(t=r-e)*(o=t-(u=t*t)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(e=Le(r<0?ke*r-.5:ke*r+.5)),1.9082149292705877e-10*e,e)}function Ye(r,e){var n,t,u,o;return u=(o=r*r)*o,t=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),t+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(n=.5*o))+(1-u-n+(o*t-r*e))}var qe=-.16666666666666632;function Re(r,e){var n,t,u;return n=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===e?r+t*(qe+u*n):r-(u*(.5*e-t*n)-e-t*qe)}var Xe=!0===Ar?0:1,ze=new vr(1),De=new ir(ze.buffer);function Je(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Ke=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Qe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ze=16777216,$e=5.960464477539063e-8,rn=Je(20),en=Je(20),nn=Je(20),tn=Je(20);function un(r,e,n,t,u,o,i,f,a){var c,l,v,y,s,p,b,d,w;for(y=o,w=t[n],d=n,s=0;d>0;s++)l=$e*w|0,tn[s]=w-Ze*l|0,w=t[d-1]+l,d-=1;if(w=Oe(w,u),w-=8*Cr(.125*w),w-=b=0|w,v=0,u>0?(b+=s=tn[n-1]>>24-u,tn[n-1]-=s<<24-u,v=tn[n-1]>>23-u):0===u?v=tn[n-1]>>23:w>=.5&&(v=2),v>0){for(b+=1,c=0,s=0;s<n;s++)d=tn[s],0===c?0!==d&&(c=1,tn[s]=16777216-d):tn[s]=16777215-d;if(u>0)switch(u){case 1:tn[n-1]&=8388607;break;case 2:tn[n-1]&=4194303}2===v&&(w=1-w,0!==c&&(w-=Oe(1,u)))}if(0===w){for(d=0,s=n-1;s>=o;s--)d|=tn[s];if(0===d){for(p=1;0===tn[o-p];p++);for(s=n+1;s<=n+p;s++){for(a[f+s]=Ke[i+s],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(s-d)];t[s]=l}return un(r,e,n+=p,t,u,o,i,f,a)}}if(0===w)for(n-=1,u-=24;0===tn[n];)n-=1,u-=24;else(w=Oe(w,-u))>=Ze?(l=$e*w|0,tn[n]=w-Ze*l|0,u+=24,tn[n+=1]=l):tn[n]=0|w;for(l=Oe(1,u),s=n;s>=0;s--)t[s]=l*tn[s],l*=$e;for(s=n;s>=0;s--){for(l=0,p=0;p<=y&&p<=n-s;p++)l+=Qe[p]*t[s+p];nn[n-s]=l}for(l=0,s=n;s>=0;s--)l+=nn[s];for(e[0]=0===v?l:-l,l=nn[0]-l,s=1;s<=n;s++)l+=nn[s];return e[1]=0===v?l:-l,7&b}function on(r,e,n,t){var u,o,i,f,a,c,l;for(4,(o=(n-3)/24|0)<0&&(o=0),f=n-24*(o+1),c=o-(i=t-1),l=i+4,a=0;a<=l;a++)rn[a]=c<0?0:Ke[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*rn[i+(a-c)];en[a]=u}return 4,un(r,e,4,en,f,4,o,i,rn)}var fn=Math.round;function an(r,e,n){var t,u,o,i,f;return o=r-1.5707963267341256*(t=fn(.6366197723675814*r)),i=6077100506506192e-26*t,f=e>>20|0,n[0]=o-i,f-(Sr(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((u=o)-(o=u-(i=6077100506303966e-26*t))-i),n[0]=o-i,f-(Sr(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((u=o)-(o=u-(i=20222662487111665e-37*t))-i),n[0]=o-i)),n[1]=o-n[0]-i,t}var cn=1.5707963267341256,ln=6077100506506192e-26,vn=2*ln,yn=3*ln,sn=4*ln,pn=[0,0,0],bn=[0,0];function dn(r,e){var n,t,u,o,i,f,a;if((u=2147483647&Sr(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?an(r,u,e):u<=1073928572?r>0?(a=r-cn,e[0]=a-ln,e[1]=a-e[0]-ln,1):(a=r+cn,e[0]=a+ln,e[1]=a-e[0]+ln,-1):r>0?(a=r-2*cn,e[0]=a-vn,e[1]=a-e[0]-vn,2):(a=r+2*cn,e[0]=a+vn,e[1]=a-e[0]+vn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?an(r,u,e):r>0?(a=r-3*cn,e[0]=a-yn,e[1]=a-e[0]-yn,3):(a=r+3*cn,e[0]=a+yn,e[1]=a-e[0]+yn,-3):1075388923===u?an(r,u,e):r>0?(a=r-4*cn,e[0]=a-sn,e[1]=a-e[0]-sn,4):(a=r+4*cn,e[0]=a+sn,e[1]=a-e[0]+sn,-4);if(u<1094263291)return an(r,u,e);if(u>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return ze[0]=r,De[Xe]}(r),a=be(u-((t=(u>>20)-1046)<<20|0),n),i=0;i<2;i++)pn[i]=0|a,a=16777216*(a-pn[i]);for(pn[2]=a,o=3;0===pn[o-1];)o-=1;return f=on(pn,bn,t,o),r<0?(e[0]=-bn[0],e[1]=-bn[1],-f):(e[0]=bn[0],e[1]=bn[1],f)}var wn=[0,0];function mn(r){var e;if(e=Sr(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Re(r,0);if(e>=2146435072)return NaN;switch(3&dn(r,wn)){case 0:return Re(wn[0],wn[1]);case 1:return Ye(wn[0],wn[1]);case 2:return-Re(wn[0],wn[1]);default:return-Ye(wn[0],wn[1])}}var jn=3.141592653589793;function hn(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=Ce(r),2.5066282746310007*(n=r>143.01608?(t=He(r,.5*r-.25))*(t/n):He(r,r-.5)/n)*e}function Nn(r,e){return e/((1+.5772156649015329*r)*r)}function gn(r){var e,n,t,u;if(Yr(r)&&r<0||r===Pr||rr(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Pr}(r)?Pr:xr;if(r>171.61447887182297)return xr;if(r<-170.5674972726612)return 0;if((n=er(r))>33)return r>=0?hn(r):(e=0==(1&(t=Cr(n)))?-1:1,(u=n-t)>.5&&(u=n-(t+=1)),u=n*mn(jn*u),e*jn/(er(u)*hn(n)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Nn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Nn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}var An=[0,0];function _n(r){var e;if(e=Sr(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Ye(r,0);if(e>=2146435072)return NaN;switch(3&dn(r,An)){case 0:return Ye(An[0],An[1]);case 1:return-Re(An[0],An[1]);case 2:return-Ye(An[0],An[1]);default:return Re(An[0],An[1])}}function On(r){var e,n;return rr(r)||Xr(r)?NaN:0===(e=er(n=r%2))||1===e?we(0,n):e<.25?mn(jn*n):e<.75?we(_n(jn*(e=.5-e)),n):e<1.25?(n=we(1,n)-n,mn(jn*n)):e<1.75?-we(_n(jn*(e-=1.5)),n):(n-=we(2,n),mn(jn*n))}var Un=1.4616321449683622,Sn=1.4616321449683622;var En=6.283185307179586,Tn=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Fn=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],In=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290];function xn(r){var e,n,t,u,o,i,f,a,c;if(rr(r))return NaN;if(1===r)return NaN;if(r>=56)return 1;if(Yr(r)&&(u=0|r)===r){if(!(u<0))return 0==(1&u)?Fn[u/2]:Tn[(u-3)/2];if(0==(1&(t=0|-u)))return 0;if((i=(t+1)/2|0)<=129)return-In[i]/(t+1)}return er(r)<1.4901161193847656e-8?-.5-.9189385332046728*r:(n=1-r,r<0?Cr(r/2)===r/2?0:(e=r,r=n,n=e,r>170?(e=2*On(.5*n)*xn(r),o=function(r){var e,n,t,u,o,i,f,a,c,l,v,y,s;if(rr(r)||Xr(r))return r;if(0===r)return xr;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-Wr(r);if(e){if(r>=4503599627370496)return xr;if(0===(c=On(r)))return xr;n=Wr(jn/er(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(s=-Wr(r),r>=Un-1+.27?(v=1-r,t=0):r>=Un-1-.27?(v=r-(Sn-1),t=1):(v=r,t=2)):(s=0,r>=Un+.27?(v=2-r,t=0):r>=Un-.27?(v=r-Sn,t=1):(v=r-1,t=2)),t){case 0:i=.07721566490153287+(y=v*v)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(y),o=y*(.3224670334241136+y*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(y)),s+=(f=v*i+o)-.5*v;break;case 1:i=.48383612272381005+(l=(y=v*v)*v)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),o=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),s+=(f=y*i-(-3638676997039505e-33-l*(o+v*u)))-.12148629053584961;break;case 2:i=v*(v*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(v)-.07721566490153287),o=1+v*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(v),s+=-.5*v+i/o}else if(r<8)switch(f=(v=r-(t=Le(r)))*(v*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(v)-.07721566490153287),a=1+v*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(v),s=.5*v+f/a,y=1,t){case 7:y*=v+6;case 6:y*=v+5;case 5:y*=v+4;case 4:y*=v+3;case 3:s+=Wr(y*=v+2)}else r<0x400000000000000?(c=Wr(r),l=.4189385332046727+(y=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(v=y*y),s=(r-.5)*(c-1)+l):s=r*(Wr(r)-1);return e&&(s=n-s),s}(r),(o-=r*Wr(En))>709?e<0?Pr:xr:e*Ce(o)):2*On(.5*n)*He(En,-r)*gn(r)*xn(r)):r<1?(e=0===(f=n)?.2433929443359375:((f<0?-f:f)<=1?(a=.2433929443359375+f*(f*(.055761621477604675+f*(f*(.0004515345286457964+-9332412703570615e-21*f)-.003209124988790859))-.4909247051635357),c=1+f*(f*(.04196762233099861+f*(f*(.00024978985622317937+-10185578841856403e-21*f)-.00413421406552171))-.27996033431034445)):(a=(f=1/f)*(.0004515345286457964+f*(f*(.055761621477604675+f*(.2433929443359375*f-.4909247051635357))-.003209124988790859))-9332412703570615e-21,c=f*(.00024978985622317937+f*(f*(.04196762233099861+f*(1*f-.27996033431034445))-.00413421406552171))-10185578841856403e-21),a/c),e-=1.2433929443359375,e+=n,e/=n):r<=2?(e=1/(n=-n))+function(r){var e,n;return 0===r?.5772156649015329:((r<0?-r:r)<=1?(e=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+1101084409767329e-20*r)))),n=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+10991819782396113e-21*r))))):(e=1101084409767329e-20+(r=1/r)*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+.5772156649015329*r)))),n=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+1*r))))),e/n)}(n):r<=4?(e=.6986598968505859+1/-n)+function(r){var e,n;return 0===r?-.053725830002359504:((r<0?-r:r)<=1?(e=r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+0*r)))))-.053725830002359504,n=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+2.3627662397497864e-8*r)))))):(e=0+(r=1/r)*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+-.053725830002359504*r))))),n=2.3627662397497864e-8+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+1*r)))))),e/n)}(r-2):r<=7?(e=function(r){var e,n;return 0===r?-2.497101906022594:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(0+r*(0+0*r))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(r*(49340956392759e-19+r*(r*(7.188337293654598e-9+-1.1292001134749475e-10*r)-2.3405548702528722e-7))-36910273311764616e-21))))):(e=0+(r=1/r)*(0+r*(0+r*(r*(r*(r*(r*(-2.497101906022594*r-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=r*(7.188337293654598e-9+r*(r*(49340956392759e-19+r*(r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+1*r)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),e/n)}(r-4),1+Ce(e)):r<15?(e=function(r){var e,n;return 0===r?-4.785580284951356:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+0*r))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+r*(.24434533737818856+r*(.008733707544922887+r*(r*(r*(r*(4.710012640030765e-9+r*(6998415452048457e-28*r-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(e=0+(r=1/r)*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(r*(r*(-4.785580284951356*r-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+r*(r*(4.710012640030765e-9+r*(r*(r*(r*(.008733707544922887+r*(.24434533737818856+1*r))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),e/n)}(r-7),1+Ce(e)):r<36?(e=function(r){var e,n;return 0===r?-10.39489505733089:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(-8.214657090954655e-9*r-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9.555611230656935e-7+r*(1.185071534740229e-8+2226094836273526e-30*r))))))):(e=(r=1/r)*(r*(r*(r*(r*(r*(-10.39489505733089*r-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+r*(1.185071534740229e-8+r*(9.555611230656935e-7+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+1*r))))))),e/n)}(r-15),1+Ce(e)):1+He(2,-r))}function Pn(r){return rr(r)?NaN:1===r?Ue:-Me(2,1-r)*xn(r)}return function(r){return $(r,Pn)}}));
//# sourceMappingURL=browser.js.map