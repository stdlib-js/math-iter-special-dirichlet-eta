// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function n(e){return"number"==typeof e}function t(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function i(e,r,n){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=n?e+t(o):t(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(e){var r,t,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,a=parseInt(t,10),!isFinite(a)){if(!n(t))throw new Error("invalid integer. Value: "+t);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(t=(-a).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=a.toString(r),a||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=l.call(t,h,"$1e"),t=l.call(t,b,"e"),t=l.call(t,g,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),e.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,d,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===s.call(e.specifier)?s.call(t):c.call(t)}function m(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}var j=String.fromCharCode,A=Array.isArray;function N(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _(e){var r,n,t,o,u,f,c,s,l,p,v,y,d;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",c=1,s=0;s<e.length;s++)if("string"==typeof(t=e[s]))f+=t;else{if(r=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(o=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,N(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=a(t);break;case"s":t.maxWidth=r?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!N(t.arg)){if((u=parseInt(t.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(u)?String(t.arg):j(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=w(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,d=void 0,(d=v-p.length)<0?p:p=y?p+m(d):m(d)+p)),f+=t.arg||"",c+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function S(e){var r,n,t,i;for(n=[],i=0,t=x.exec(e);t;)(r=e.slice(i,x.lastIndex-t[0].length)).length&&n.push(r),n.push(O(t)),i=x.lastIndex,t=x.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function U(e){var r,n;if("string"!=typeof e)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[S(e)],n=1;n<arguments.length;n++)r.push(arguments[n]);return _.apply(null,r)}var T,k=Object.prototype,F=k.toString,I=k.__defineGetter__,V=k.__defineSetter__,P=k.__lookupGetter__,G=k.__lookupSetter__;T=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,n){var t,i,o,u;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(P.call(e,r)||G.call(e,r)?(t=e.__proto__,e.__proto__=k,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),o="get"in n,u="set"in n,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(e,r,n.get),u&&V&&V.call(e,r,n.set),e};var L=T;function $(e,r,n){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var C=/./;function H(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString,R=Object.prototype.hasOwnProperty;function Z(e,r){return null!=e&&R.call(e,r)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",q=W()?function(e){var r,n,t;if(null==e)return B.call(e);n=e[Y],r=Z(e,Y);try{e[Y]=void 0}catch(r){return B.call(e)}return t=B.call(e),r?e[Y]=n:delete e[Y],t}:function(e){return B.call(e)},z=Boolean,D=Boolean.prototype.toString,J=W();function K(e){return"object"==typeof e&&(e instanceof z||(J?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function Q(e){return H(e)||K(e)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,ne="object"==typeof globalThis?globalThis:null,te=function(e){if(arguments.length){if(!H(e))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ne)return ne;if(ee)return ee;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=te.document&&te.document.childNodes,oe=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var ae=/^\s*function\s*([^(]*)/i;$(ue,"REGEXP",ae);var fe=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function ce(e){return null!==e&&"object"==typeof e}function se(e){var r,n,t,i;if(("Object"===(n=q(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=ae.exec(t.toString()))return r[1]}return ce(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}$(ce,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var n,t;if(!fe(r))return!1;if(0===(n=r.length))return!1;for(t=0;t<n;t++)if(!1===e(r[t]))return!1;return!0}}(ce));var le="function"==typeof C||"object"==typeof oe||"function"==typeof ie?function(e){return se(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?se(e).toLowerCase():r};function pe(e){return"function"===le(e)}function ve(e){return"number"==typeof e}var ye=Number,de=ye.prototype.toString,ge=W();function be(e){return"object"==typeof e&&(e instanceof ye||(ge?function(e){try{return de.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function he(e){return ve(e)||be(e)}$(he,"isPrimitive",ve),$(he,"isObject",be);var we,me="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,je=Object,Ae=Object.getPrototypeOf;we=pe(Object.getPrototypeOf)?Ae:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ne=we,Ee=Object.prototype;function _e(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!fe(e)}(e)&&(r=function(e){return null==e?null:(e=je(e),Ne(e))}(e),!r||!Z(e,"constructor")&&Z(r,"constructor")&&pe(r.constructor)&&"[object Function]"===q(r.constructor)&&Z(r,"isPrototypeOf")&&pe(r.isPrototypeOf)&&(r===Ee||function(e){var r;for(r in e)if(!Z(e,r))return!1;return!0}(e)))}function xe(e,r,n){var t,i,o,u,a,f;if(f=typeof(a=e),null===a||"object"!==f&&"function"!==f||!pe(a.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));if(!pe(r))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",r));if(t={invalid:NaN},arguments.length>2&&(o=function(e,r){return _e(r)?(Z(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",r))}(t,n),o))throw o;return $(i={},"next",(function(){var n;return u?{done:!0}:(n=e.next()).done?(u=!0,n):{value:ve(n.value)?r(n.value):t.invalid,done:!1}})),$(i,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&pe(e[me])&&$(i,me,(function(){return xe(e[me](),r,t)})),i}function Oe(e){return e!=e}var Se=Number.POSITIVE_INFINITY,Ue=ye.NEGATIVE_INFINITY;function Te(e){return e===Se||e===Ue}function ke(e){return Math.abs(e)}var Fe,Ie="function"==typeof Uint32Array,Ve="function"==typeof Uint32Array?Uint32Array:null,Pe="function"==typeof Uint32Array?Uint32Array:void 0;Fe=function(){var e,r,n;if("function"!=typeof Ve)return!1;try{r=new Ve(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(Ie&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Pe:function(){throw new Error("not implemented")};var Ge,Le=Fe,$e="function"==typeof Float64Array,Ce="function"==typeof Float64Array?Float64Array:null,He="function"==typeof Float64Array?Float64Array:void 0;Ge=function(){var e,r,n;if("function"!=typeof Ce)return!1;try{r=new Ce([1,3.14,-3.14,NaN]),n=r,e=($e&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?He:function(){throw new Error("not implemented")};var Me,We=Ge,Be="function"==typeof Uint8Array,Re="function"==typeof Uint8Array?Uint8Array:null,Ze="function"==typeof Uint8Array?Uint8Array:void 0;Me=function(){var e,r,n;if("function"!=typeof Re)return!1;try{r=new Re(r=[1,3.14,-3.14,256,257]),n=r,e=(Be&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ze:function(){throw new Error("not implemented")};var Xe,Ye=Me,qe="function"==typeof Uint16Array,ze="function"==typeof Uint16Array?Uint16Array:null,De="function"==typeof Uint16Array?Uint16Array:void 0;Xe=function(){var e,r,n;if("function"!=typeof ze)return!1;try{r=new ze(r=[1,3.14,-3.14,65536,65537]),n=r,e=(qe&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?De:function(){throw new Error("not implemented")};var Je,Ke={uint16:Xe,uint8:Ye};(Je=new Ke.uint16(1))[0]=4660;var Qe=52===new Ke.uint8(Je.buffer)[0],er=!0===Qe?1:0,rr=new We(1),nr=new Le(rr.buffer);function tr(e){return rr[0]=e,nr[er]}var ir,or,ur=!0===Qe?1:0,ar=new We(1),fr=new Le(ar.buffer);function cr(e,r){return ar[0]=e,fr[ur]=r>>>0,ar[0]}!0===Qe?(ir=1,or=0):(ir=0,or=1);var sr={HIGH:ir,LOW:or},lr=new We(1),pr=new Le(lr.buffer),vr=sr.HIGH,yr=sr.LOW;function dr(e,r){return pr[vr]=e,pr[yr]=r,lr[0]}var gr=1023,br=.34657359027997264,hr=709.782712893384,wr=.6931471803691238,mr=1.9082149292705877e-10,jr=1.4426950408889634,Ar=38.816242111356935,Nr=1.0397207708399179,Er=.6931471803691238,_r=1.9082149292705877e-10,xr=0x40000000000000,Or=.3333333333333333,Sr=1048575,Ur=2146435072,Tr=1048576,kr=1072693248;function Fr(e){var r,n,t,i,o,u,a,f,c,s,l,p;return 0===e?Ue:Oe(e)||e<0?NaN:(o=0,(n=tr(e))<Tr&&(o-=54,n=tr(e*=xr)),n>=Ur?e+e:(o+=(n>>20)-gr|0,o+=(f=614244+(n&=Sr)&1048576|0)>>20|0,a=(e=cr(e,n|f^kr))-1,(Sr&2+n)<3?0===a?0===o?0:o*Er+o*_r:(u=a*a*(.5-Or*a),0===o?a-u:o*Er-(u-o*_r-a)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=a/(2+a))*s)*p)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(l),t=p*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(l),u=t+i,(f|=c)>0?(r=.5*a*a,0===o?a-(r-s*(r+u)):o*Er-(r-(s*(r+u)+o*_r)-a)):0===o?a-s*(a-u):o*Er-(s*(a-u)-o*_r-a))))}var Ir=Math.floor;function Vr(e){return Ir(e)===e}function Pr(e){return Vr(e/2)}function Gr(e){return Pr(e>0?e-1:e+1)}var Lr,$r,Cr=Math.sqrt;!0===Qe?(Lr=1,$r=0):(Lr=0,$r=1);var Hr={HIGH:Lr,LOW:$r},Mr=new We(1),Wr=new Le(Mr.buffer),Br=Hr.HIGH,Rr=Hr.LOW;function Zr(e,r,n,t){return Mr[0]=e,r[t]=Wr[Br],r[t+n]=Wr[Rr],r}function Xr(e){return Zr(e,[0,0],1,0)}$(Xr,"assign",Zr);var Yr=!0===Qe?0:1,qr=new We(1),zr=new Le(qr.buffer);function Dr(e,r){return qr[0]=e,zr[Yr]=r>>>0,qr[0]}function Jr(e){return 0|e}var Kr=2147483647,Qr=2147483648,en=[0,0];function rn(e,r){var n,t;return Xr.assign(e,en,1,0),n=en[0],n&=Kr,t=tr(r),dr(n|=t&=Qr,en[1])}var nn=1072693247,tn=1e300,on=1e-300,un=1048575,an=1048576,fn=1072693248,cn=536870912,sn=524288,ln=20,pn=9007199254740992,vn=.9617966939259756,yn=.9617967009544373,dn=-7.028461650952758e-9,gn=[1,1.5],bn=[0,.5849624872207642],hn=[0,1.350039202129749e-8],wn=1.4426950408889634,mn=1.4426950216293335,jn=1.9259629911266175e-8,An=1023,Nn=-1023,En=-1074,_n=22250738585072014e-324,xn=4503599627370496;function On(e,r,n,t){return Oe(e)||Te(e)?(r[t]=e,r[t+n]=0,r):0!==e&&ke(e)<_n?(r[t]=e*xn,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}$((function(e){return On(e,[0,0],1,0)}),"assign",On);var Sn=2146435072,Un=2220446049250313e-31,Tn=2148532223,kn=[0,0],Fn=[0,0];function In(e,r){var n,t;return 0===r||0===e||Oe(e)||Te(e)?e:(On(e,kn,1,0),e=kn[0],r+=kn[1],r+=function(e){var r=tr(e);return(r=(r&Sn)>>>20)-gr|0}(e),r<En?rn(0,e):r>An?e<0?Ue:Se:(r<=Nn?(r+=52,t=Un):t=1,Xr.assign(e,Fn,1,0),n=Fn[0],n&=Tn,t*dr(n|=r+gr<<20,Fn[1])))}var Vn=.6931471805599453,Pn=1048575,Gn=1048576,Ln=1071644672,$n=20,Cn=.6931471824645996,Hn=-1.904654299957768e-9,Mn=1072693247,Wn=1105199104,Bn=1139802112,Rn=1083179008,Zn=1072693248,Xn=1083231232,Yn=3230714880,qn=31,zn=1e300,Dn=1e-300,Jn=8008566259537294e-32,Kn=[0,0],Qn=[0,0];function et(e,r){var n,t,i,o,u,a,f,c,s,l,p,v,y,d;if(Oe(e)||Oe(r))return NaN;if(Xr.assign(r,Kn,1,0),u=Kn[0],0===Kn[1]){if(0===r)return 1;if(1===r)return e;if(-1===r)return 1/e;if(.5===r)return Cr(e);if(-.5===r)return 1/Cr(e);if(2===r)return e*e;if(3===r)return e*e*e;if(4===r)return(e*=e)*e;if(Te(r))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:ke(e)<1==(r===Se)?0:Se}(e,r)}if(Xr.assign(e,Kn,1,0),o=Kn[0],0===Kn[1]){if(0===o)return function(e,r){return r===Ue?Se:r===Se?0:r>0?Gr(r)?e:0:Gr(r)?rn(Se,e):Se}(e,r);if(1===e)return 1;if(-1===e&&Gr(r))return-1;if(Te(e))return e===Ue?et(-0,-r):r<0?0:Se}if(e<0&&!1===Vr(r))return(e-e)/(e-e);if(i=ke(e),n=o&Kr|0,t=u&Kr|0,f=u>>>qn|0,a=(a=o>>>qn|0)&&Gr(r)?-1:1,t>Wn){if(t>Bn)return function(e,r){return(tr(e)&Kr)<=nn?r<0?tn*tn:on*on:r>0?tn*tn:on*on}(e,r);if(n<Mn)return 1===f?a*zn*zn:a*Dn*Dn;if(n>Zn)return 0===f?a*zn*zn:a*Dn*Dn;p=function(e,r){var n,t,i,o,u,a,f;return o=(i=r-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(a=i*jn-o*wn)-((t=Dr(t=(u=mn*i)+a,0))-u),e[0]=t,e[1]=n,e}(Qn,i)}else p=function(e,r,n){var t,i,o,u,a,f,c,s,l,p,v,y,d,g,b,h,w,m,j,A,N;return m=0,n<an&&(m-=53,n=tr(r*=pn)),m+=(n>>ln)-gr|0,n=(j=n&un|0)|fn|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=an),u=Dr(i=(h=(r=cr(r,n))-(c=gn[A]))*(w=1/(r+c)),0),t=(n>>1|cn)+sn,f=cr(0,t+=A<<18),b=(o=i*i)*o*(0===(N=o)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=Dr(f=3+(o=u*u)+(b+=(a=w*(h-u*f-u*(r-(f-c))))*(u+i)),0),l=Dr(l=(h=u*f)+(w=a*f+(b-(f-3-o))*i),0),p=yn*l,d=(v=dn*l+(w-(l-h))*vn+hn[A])-((y=Dr(y=p+v+(s=bn[A])+(g=m),0))-g-s-p),e[0]=y,e[1]=d,e}(Qn,i,n);if(v=(l=(r-(c=Dr(r,0)))*p[0]+r*p[1])+(s=c*p[0]),Xr.assign(v,Kn,1,0),y=Jr(Kn[0]),d=Jr(Kn[1]),y>=Rn){if(0!=(y-Rn|d))return a*zn*zn;if(l+Jn>v-s)return a*zn*zn}else if((y&Kr)>=Xn){if(0!=(y-Yn|d))return a*Dn*Dn;if(l<=v-s)return a*Dn*Dn}return v=function(e,r,n){var t,i,o,u,a,f,c,s,l,p;return l=((s=e&Kr|0)>>$n)-gr|0,c=0,s>Ln&&(i=cr(0,((c=e+(Gn>>l+1)>>>0)&~(Pn>>(l=((c&Kr)>>$n)-gr|0)))>>>0),c=(c&Pn|Gn)>>$n-l>>>0,e<0&&(c=-c),r-=i),e=Jr(e=tr(f=1-((f=(o=(i=Dr(i=n+r,0))*Cn)+(u=(n-(i-r))*Vn+i*Hn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((a=u-(f-o))+f*a)-f))),(e+=c<<$n>>>0)>>$n<=0?In(f,c):cr(f,e)}(y,s,l),a*v}var rt=Math.ceil;function nt(e){return e<0?rt(e):Ir(e)}function tt(e,r){var n,t;if(Oe(e)||Oe(r))return NaN;if(0===r)return 0;if(0===e)return-1;if(e<0&&r%2==0&&(e=-e),e>0){if((ke(r*(e-1))<.5||ke(r)<.2)&&(t=Fr(e)*r)<.5)return function(e){var r,n,t,i,o,u,a,f,c,s,l,p,v;if(e===Se||Oe(e))return e;if(e===Ue)return-1;if(0===e)return e;if(e<0?(t=!0,f=-e):(t=!1,f=e),f>=Ar){if(t)return-1;if(f>=hr)return Se}if(u=0|tr(f),f>br)f<Nr?t?(i=e+wr,o=-mr,v=-1):(i=e-wr,o=mr,v=1):(v=t?jr*e-.5:jr*e+.5,i=e-(l=v|=0)*wr,o=l*mr),s=i-(e=i-o)-o;else{if(u<1016070144)return e;v=0}return a=1+(c=e*(r=.5*e))*function(e){return 0===e?-.03333333333333313:e*(.0015873015872548146+e*(e*(4008217827329362e-21+-2.0109921818362437e-7*e)-793650757867488e-19))-.03333333333333313}(c),p=c*((a-(l=3-a*r))/(6-e*l)),0===v?e-(e*p-c):(n=dr(gr+v<<20,0),p=e*(p-s)-s,p-=c,-1===v?.5*(e-p)-.5:1===v?e<-.25?-2*(p-(e+.5)):1+2*(e-p):v<=-2||v>56?(f=1-(p-e),1024===v?f=cr(f,i=tr(f)+(v<<20)|0):f*=n,f-1):(l=1,v<20?f=(l=cr(l,i=1072693248-(2097152>>v)|0))-(p-e):(f=e-(p+(l=cr(l,i=gr-v<<20|0))),f+=1),f*=n))}(t)}else if(nt(r)!==r)return NaN;return Te(n=et(e,r)-1)||Oe(n)?NaN:n}var it=.6931471803691238,ot=1.9082149292705877e-10,ut=1.4426950408889634,at=709.782712893384,ft=-745.1332191019411,ct=1/(1<<28),st=-ct;function lt(e){var r;return Oe(e)||e===Se?e:e===Ue?0:e>at?Se:e<ft?0:e>st&&e<ct?1+e:function(e,r,n){var t,i,o,u;return In(1-(r-(t=e-r)*(o=t-(i=t*t)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-e),n)}(e-(r=nt(e<0?ut*e-.5:ut*e+.5))*it,r*ot,r)}function pt(e,r){var n,t,i,o;return i=(o=e*e)*o,t=o*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(o),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(o),(i=1-(n=.5*o))+(1-i-n+(o*t-e*r))}var vt=-.16666666666666632,yt=.00833333333332249,dt=-.0001984126982985795,gt=27557313707070068e-22,bt=-2.5050760253406863e-8,ht=1.58969099521155e-10;function wt(e,r){var n,t,i;return n=yt+(i=e*e)*(dt+i*gt)+i*(i*i)*(bt+i*ht),t=i*e,0===r?e+t*(vt+i*n):e-(i*(.5*r-t*n)-r-t*vt)}var mt=!0===Qe?0:1,jt=new We(1),At=new Le(jt.buffer);function Nt(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var Et=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],_t=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],xt=16777216,Ot=5.960464477539063e-8,St=Nt(20),Ut=Nt(20),Tt=Nt(20),kt=Nt(20);function Ft(e,r,n,t,i,o,u,a,f){var c,s,l,p,v,y,d,g,b;for(p=o,b=t[n],g=n,v=0;g>0;v++)s=Ot*b|0,kt[v]=b-xt*s|0,b=t[g-1]+s,g-=1;if(b=In(b,i),b-=8*Ir(.125*b),b-=d=0|b,l=0,i>0?(d+=v=kt[n-1]>>24-i,kt[n-1]-=v<<24-i,l=kt[n-1]>>23-i):0===i?l=kt[n-1]>>23:b>=.5&&(l=2),l>0){for(d+=1,c=0,v=0;v<n;v++)g=kt[v],0===c?0!==g&&(c=1,kt[v]=16777216-g):kt[v]=16777215-g;if(i>0)switch(i){case 1:kt[n-1]&=8388607;break;case 2:kt[n-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=In(1,i)))}if(0===b){for(g=0,v=n-1;v>=o;v--)g|=kt[v];if(0===g){for(y=1;0===kt[o-y];y++);for(v=n+1;v<=n+y;v++){for(f[a+v]=Et[u+v],s=0,g=0;g<=a;g++)s+=e[g]*f[a+(v-g)];t[v]=s}return Ft(e,r,n+=y,t,i,o,u,a,f)}}if(0===b)for(n-=1,i-=24;0===kt[n];)n-=1,i-=24;else(b=In(b,-i))>=xt?(s=Ot*b|0,kt[n]=b-xt*s|0,i+=24,kt[n+=1]=s):kt[n]=0|b;for(s=In(1,i),v=n;v>=0;v--)t[v]=s*kt[v],s*=Ot;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=_t[y]*t[v+y];Tt[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Tt[v];for(r[0]=0===l?s:-s,s=Tt[0]-s,v=1;v<=n;v++)s+=Tt[v];return r[1]=0===l?s:-s,7&d}function It(e,r,n,t){var i,o,u,a,f,c,s;for((o=(n-3)/24|0)<0&&(o=0),a=n-24*(o+1),c=o-(u=t-1),s=u+4,f=0;f<=s;f++)St[f]=c<0?0:Et[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=e[c]*St[u+(f-c)];Ut[f]=i}return Ft(e,r,4,Ut,a,4,o,u,St)}var Vt=Math.round,Pt=.6366197723675814,Gt=1.5707963267341256,Lt=6077100506506192e-26,$t=6077100506303966e-26,Ct=20222662487959506e-37,Ht=20222662487111665e-37,Mt=84784276603689e-45,Wt=2047;function Bt(e,r,n){var t,i,o,u,a;return o=e-(t=Vt(e*Pt))*Gt,u=t*Lt,a=r>>20|0,n[0]=o-u,a-(tr(n[0])>>20&Wt)>16&&(u=t*Ct-((i=o)-(o=i-(u=t*$t))-u),n[0]=o-u,a-(tr(n[0])>>20&Wt)>49&&(u=t*Mt-((i=o)-(o=i-(u=t*Ht))-u),n[0]=o-u)),n[1]=o-n[0]-u,t}var Rt=0,Zt=16777216,Xt=1.5707963267341256,Yt=6077100506506192e-26,qt=2*Yt,zt=3*Yt,Dt=4*Yt,Jt=598523,Kt=1072243195,Qt=1073928572,ei=1074752122,ri=1074977148,ni=1075183036,ti=1075388923,ii=1075594811,oi=1094263291,ui=[0,0,0],ai=[0,0];function fi(e,r){var n,t,i,o,u,a,f;if((i=tr(e)&Kr|0)<=Kt)return r[0]=e,r[1]=0,0;if(i<=ei)return(i&Pn)===Jt?Bt(e,i,r):i<=Qt?e>0?(f=e-Xt,r[0]=f-Yt,r[1]=f-r[0]-Yt,1):(f=e+Xt,r[0]=f+Yt,r[1]=f-r[0]+Yt,-1):e>0?(f=e-2*Xt,r[0]=f-qt,r[1]=f-r[0]-qt,2):(f=e+2*Xt,r[0]=f+qt,r[1]=f-r[0]+qt,-2);if(i<=ii)return i<=ni?i===ri?Bt(e,i,r):e>0?(f=e-3*Xt,r[0]=f-zt,r[1]=f-r[0]-zt,3):(f=e+3*Xt,r[0]=f+zt,r[1]=f-r[0]+zt,-3):i===ti?Bt(e,i,r):e>0?(f=e-4*Xt,r[0]=f-Dt,r[1]=f-r[0]-Dt,4):(f=e+4*Xt,r[0]=f+Dt,r[1]=f-r[0]+Dt,-4);if(i<oi)return Bt(e,i,r);if(i>=Sn)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return jt[0]=e,At[mt]}(e),f=dr(i-((t=(i>>20)-1046)<<20|0),n),u=0;u<2;u++)ui[u]=0|f,f=(f-ui[u])*Zt;for(ui[2]=f,o=3;ui[o-1]===Rt;)o-=1;return a=It(ui,ai,t,o),e<0?(r[0]=-ai[0],r[1]=-ai[1],-a):(r[0]=ai[0],r[1]=ai[1],a)}var ci=1072243195,si=1045430272,li=[0,0];function pi(e){var r;if(r=tr(e),(r&=Kr)<=ci)return r<si?e:wt(e,0);if(r>=Sn)return NaN;switch(3&fi(e,li)){case 0:return wt(li[0],li[1]);case 1:return pt(li[0],li[1]);case 2:return-wt(li[0],li[1]);default:return-pt(li[0],li[1])}}var vi=3.141592653589793,yi=2.5066282746310007,di=143.01608;function gi(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=lt(e),n=e>di?(t=et(e,.5*e-.25))*(t/n):et(e,e-.5)/n,yi*n*r}var bi=.5772156649015329;function hi(e,r){return r/((1+bi*e)*e)}function wi(e){var r,n,t,i;if(Vr(e)&&e<0||e===Ue||Oe(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===Ue}(e)?Ue:Se;if(e>171.61447887182297)return Se;if(e<-170.5674972726612)return 0;if((n=ke(e))>33)return e>=0?gi(e):(r=0==(1&(t=Ir(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*pi(vi*i),r*vi/(ke(i)*gi(n)));for(i=1;e>=3;)i*=e-=1;for(;e<0;){if(e>-1e-9)return hi(e,i);i/=e,e+=1}for(;e<2;){if(e<1e-9)return hi(e,i);i/=e,e+=1}return 2===e?i:i*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var mi=[0,0],ji=2147483647,Ai=1072243195,Ni=1044381696,Ei=2146435072;function _i(e){var r;if(r=tr(e),(r&=ji)<=Ai)return r<Ni?1:pt(e,0);if(r>=Ei)return NaN;switch(3&fi(e,mi)){case 0:return pt(mi[0],mi[1]);case 1:return-wt(mi[0],mi[1]);case 2:return-pt(mi[0],mi[1]);default:return wt(mi[0],mi[1])}}var xi=.07721566490153287,Oi=.3224670334241136,Si=1,Ui=-.07721566490153287,Ti=.48383612272381005,ki=-.1475877229945939,Fi=.06462494023913339,Ii=-.07721566490153287,Vi=1,Pi=.4189385332046727,Gi=1.4616321449683622,Li=4503599627370496,$i=0x400000000000000,Ci=8470329472543003e-37,Hi=1.4616321449683622,Mi=-.12148629053584961,Wi=-3638676997039505e-33;function Bi(e){var r,n,t,i,o,u,a,f,c,s,l,p,v;if(Oe(e)||Te(e))return e;if(0===e)return Se;if(e<0?(r=!0,e=-e):r=!1,e<Ci)return-Fr(e);if(r){if(e>=Li)return Se;if(c=function(e){var r,n;return Oe(e)||Te(e)?NaN:0===(r=ke(n=e%2))||1===r?rn(0,n):r<.25?pi(vi*n):r<.75?rn(_i(vi*(r=.5-r)),n):r<1.25?(n=rn(1,n)-n,pi(vi*n)):r<1.75?-rn(_i(vi*(r-=1.5)),n):(n-=rn(2,n),pi(vi*n))}(e),0===c)return Se;n=Fr(vi/ke(c*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(v=-Fr(e),e>=Gi-1+.27?(l=1-e,t=0):e>=Gi-1-.27?(l=e-(Hi-1),t=1):(l=e,t=2)):(v=0,e>=Gi+.27?(l=2-e,t=0):e>=Gi-.27?(l=e-Hi,t=1):(l=e-1,t=2)),t){case 0:u=xi+(p=l*l)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(p),o=p*(Oi+p*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(p)),v+=(a=l*u+o)-.5*l;break;case 1:u=Ti+(s=(p=l*l)*l)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(s),o=ki+s*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(s),i=Fi+s*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(s),v+=Mi+(a=p*u-(Wi-s*(o+l*i)));break;case 2:u=l*(Ii+l*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(l)),o=Vi+l*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(l),v+=-.5*l+u/o}else if(e<8)switch(a=(l=e-(t=nt(e)))*(Ui+l*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(l)),f=Si+l*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(l),v=.5*l+a/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Fr(p*=l+2)}else e<$i?(c=Fr(e),s=Pi+(p=1/e)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(e-.5)*(c-1)+s):v=e*(Fr(e)-1);return r&&(v=n-v),v}function Ri(e){var r,n;return Oe(e)||Te(e)?NaN:0===(r=ke(n=e%2))||1===r?rn(0,n):r<.25?pi(vi*n):r<.75?rn(_i(vi*(r=.5-r)),n):r<1.25?(n=rn(1,n)-n,pi(vi*n)):r<1.75?-rn(_i(vi*(r-=1.5)),n):(n-=rn(2,n),pi(vi*n))}var Zi=6.283185307179586,Xi=1.4901161193847656e-8,Yi=.9189385332046728,qi=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],zi=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Di=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290],Ji=129,Ki=170,Qi=709,eo=1.2433929443359375,ro=.6986598968505859;function no(e){var r,n,t,i,o,u,a,f,c;if(Oe(e))return NaN;if(1===e)return NaN;if(e>=56)return 1;if(Vr(e)&&(i=0|e)===e){if(!(i<0))return 0==(1&i)?zi[i/2]:qi[(i-3)/2];if(0==(1&(t=0|-i)))return 0;if((u=(t+1)/2|0)<=Ji)return-Di[u]/(t+1)}return ke(e)<Xi?-.5-Yi*e:(n=1-e,e<0?Ir(e/2)===e/2?0:(r=e,e=n,n=r,e>Ki?(r=2*Ri(.5*n)*no(e),o=Bi(e),(o-=e*Fr(Zi))>Qi?r<0?Ue:Se:r*lt(o)):2*Ri(.5*n)*et(Zi,-e)*wi(e)*no(e)):e<1?(r=0===(a=n)?.2433929443359375:((a<0?-a:a)<=1?(f=.2433929443359375+a*(a*(.055761621477604675+a*(a*(.0004515345286457964+-9332412703570615e-21*a)-.003209124988790859))-.4909247051635357),c=1+a*(a*(.04196762233099861+a*(a*(.00024978985622317937+-10185578841856403e-21*a)-.00413421406552171))-.27996033431034445)):(f=(a=1/a)*(.0004515345286457964+a*(a*(.055761621477604675+a*(.2433929443359375*a-.4909247051635357))-.003209124988790859))-9332412703570615e-21,c=a*(.00024978985622317937+a*(a*(.04196762233099861+a*(1*a-.27996033431034445))-.00413421406552171))-10185578841856403e-21),f/c),r-=eo,r+=n,r/=n):e<=2?(r=1/(n=-n))+function(e){var r,n;return 0===e?.5772156649015329:((e<0?-e:e)<=1?(r=.5772156649015329+e*(.24321064694010716+e*(.04173646739882165+e*(.003902520870728433+e*(.0002496063671518772+1101084409767329e-20*e)))),n=1+e*(.29520127712663174+e*(.043460910607305496+e*(.004349305820858264+e*(.0002557842261404885+10991819782396113e-21*e))))):(r=1101084409767329e-20+(e=1/e)*(.0002496063671518772+e*(.003902520870728433+e*(.04173646739882165+e*(.24321064694010716+.5772156649015329*e)))),n=10991819782396113e-21+e*(.0002557842261404885+e*(.004349305820858264+e*(.043460910607305496+e*(.29520127712663174+1*e))))),r/n)}(n):e<=4?(r=ro+1/-n)+function(e){var r,n;return 0===e?-.053725830002359504:((e<0?-e:e)<=1?(r=e*(.04451634732923656+e*(.012867767353451996+e*(.0009754177045739176+e*(7698751015736541e-20+e*(3280325100003831e-21+0*e)))))-.053725830002359504,n=1+e*(.3338319455303405+e*(.048779843129140764+e*(.0047903970857355845+e*(.00027077670395633634+e*(10695186753205734e-21+2.3627662397497864e-8*e)))))):(r=0+(e=1/e)*(3280325100003831e-21+e*(7698751015736541e-20+e*(.0009754177045739176+e*(.012867767353451996+e*(.04451634732923656+-.053725830002359504*e))))),n=2.3627662397497864e-8+e*(10695186753205734e-21+e*(.00027077670395633634+e*(.0047903970857355845+e*(.048779843129140764+e*(.3338319455303405+1*e)))))),r/n)}(e-2):e<=7?(r=function(e){var r,n;return 0===e?-2.497101906022594:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(0+e*(0+0*e))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+e*(.7060390259377451+e*(.15739599649558628+e*(.010611795097684508+e*(e*(49340956392759e-19+e*(e*(7.188337293654598e-9+-1.1292001134749475e-10*e)-2.3405548702528722e-7))-36910273311764616e-21))))):(r=0+(e=1/e)*(0+e*(0+e*(e*(e*(e*(e*(-2.497101906022594*e-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=e*(7.188337293654598e-9+e*(e*(49340956392759e-19+e*(e*(.010611795097684508+e*(.15739599649558628+e*(.7060390259377451+1*e)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),r/n)}(e-4),1+lt(r)):e<15?(r=function(e){var r,n;return 0===e?-4.785580284951356:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(.0011514092388917874+e*(6399492042131645e-20+e*(1393489324453249e-21+e*(0+0*e))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+e*(.24434533737818856+e*(.008733707544922887+e*(e*(e*(e*(4.710012640030765e-9+e*(6998415452048457e-28*e-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(r=0+(e=1/e)*(0+e*(1393489324453249e-21+e*(6399492042131645e-20+e*(.0011514092388917874+e*(e*(e*(-4.785580284951356*e-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+e*(e*(4.710012640030765e-9+e*(e*(e*(e*(.008733707544922887+e*(.24434533737818856+1*e))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),r/n)}(e-7),1+lt(r)):e<36?(r=function(e){var r,n;return 0===e?-10.39489505733089:((e<0?-e:e)<=1?(r=e*(e*(e*(e*(e*(e*(-8.214657090954655e-9*e-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+e*(.2081963335726719+e*(.019568765731720502+e*(.0011107963810248593+e*(40850774626603926e-21+e*(9.555611230656935e-7+e*(1.185071534740229e-8+2226094836273526e-30*e))))))):(r=(e=1/e)*(e*(e*(e*(e*(e*(-10.39489505733089*e-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+e*(1.185071534740229e-8+e*(9.555611230656935e-7+e*(40850774626603926e-21+e*(.0011107963810248593+e*(.019568765731720502+e*(.2081963335726719+1*e))))))),r/n)}(e-15),1+lt(r)):1+et(2,-e))}function to(e){return Oe(e)?NaN:1===e?Vn:-tt(2,1-e)*no(e)}return function(e){return xe(e,to)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterEta=r();
//# sourceMappingURL=browser.js.map
