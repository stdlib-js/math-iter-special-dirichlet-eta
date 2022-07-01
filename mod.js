// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var e=r.default;if("function"==typeof e){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,u=Object.prototype,o=u.toString,i=u.__defineGetter__,f=u.__defineSetter__,a=u.__lookupGetter__,c=u.__lookupSetter__;var v=function(r,e,n){var t,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((v="value"in n)&&(a.call(r,e)||c.call(r,e)?(t=r.__proto__,r.__proto__=u,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),l="get"in n,y="set"in n,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,e,n.get),y&&f&&f.call(r,e,n.set),r},l=t,y=v,p=n()?l:y;var s=function(r,e,n){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})},b=s,d=/./;var w=function(r){return"boolean"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return m&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,_=h;var g=function(r){return _.call(r)},N=Object.prototype.hasOwnProperty;var A=function(r,e){return null!=r&&N.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",E=A,U=O,S=h;var P=g,F=function(r){var e,n,t;if(null==r)return S.call(r);n=r[U],e=E(r,U);try{r[U]=void 0}catch(e){return S.call(r)}return t=S.call(r),e?r[U]=n:delete r[U],t},I=j()?F:P,x=Boolean.prototype.toString;var T=I,G=function(r){try{return x.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===T(r)))},M=w,k=H;var B=b,L=function(r){return M(r)||k(r)},W=H;B(L,"isPrimitive",w),B(L,"isObject",W);var C=L;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},z="object"==typeof q?q:null;module.exports=z;var D=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),er=rr.document&&rr.document.childNodes,nr=Int8Array,tr=d,ur=er,or=nr;var ir=function(){return"function"==typeof tr||"object"==typeof or||"function"==typeof ur};var fr=function(){return/^\s*function\s*([^(]*)/i},ar=fr;b(ar,"REGEXP",fr());var cr=ar,vr=I;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===vr(r)},yr=lr;var pr=function(r){return null!==r&&"object"==typeof r};b(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var n,t;if(!yr(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(pr));var sr=pr;var br=I,dr=cr.REGEXP,wr=function(r){return sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var mr=function(r){var e,n,t;if(("Object"===(n=br(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=dr.exec(t.toString()))return e[1]}return wr(r)?"Buffer":n},jr=mr;var hr=mr;var _r=function(r){var e;return null===r?"null":"object"===(e=typeof r)?jr(r).toLowerCase():e},gr=function(r){return hr(r).toLowerCase()},Nr=ir()?gr:_r;var Ar=function(r){return"function"===Nr(r)},Or=Ar;var Er=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&Or(r.next)};var Ur=function(r){return"number"==typeof r},Sr=Number,Pr=Sr.prototype.toString;var Fr=I,Ir=Sr,xr=function(r){try{return Pr.call(r),!0}catch(r){return!1}},Tr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Ir||(Tr?xr(r):"[object Number]"===Fr(r)))},Vr=Ur,Hr=Gr;var Mr=b,kr=function(r){return Vr(r)||Hr(r)},Br=Gr;Mr(kr,"isPrimitive",Ur),Mr(kr,"isObject",Br);var Lr=kr,Wr=A;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=lr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var qr=function(r){return r.__proto__},zr=I,Dr=qr;var Jr=function(r){var e=Dr(r);return e||null===e?e:"[object Function]"===zr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Ar(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,re=Ar,ee=function(r){return null==r?null:(r=Object(r),Zr(r))},ne=A,te=I,ue=Object.prototype;var oe=function(r){var e;return!!$r(r)&&(!(e=ee(r))||!ne(r,"constructor")&&ne(e,"constructor")&&re(e.constructor)&&"[object Function]"===te(e.constructor)&&ne(e,"isPrototypeOf")&&re(e.isPrototypeOf)&&(e===ue||function(r){var e;for(e in r)if(!ne(r,e))return!1;return!0}(r)))},ie=oe,fe=A;var ae=b,ce=Ar,ve=Er,le=Lr.isPrimitive,ye=Cr,pe=function(r,e){return ie(e)?(fe(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")};var se=function r(e,n,t){var u,o,i,f;if(!ve(e))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+e+"`.");if(!ce(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(u={invalid:NaN},arguments.length>2&&(i=pe(u,t)))throw i;return ae(o={},"next",a),ae(o,"return",c),ye&&ce(e[ye])&&ae(o,ye,v),o;function a(){var r;return f?{done:!0}:(r=e.next()).done?(f=!0,r):{value:le(r.value)?n(r.value):u.invalid,done:!1}}function c(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function v(){return r(e[ye](),n,u)}},be=se;var de=function(r){return r!=r};var we=function(r){return Math.abs(r)},me=I,je="function"==typeof Uint32Array;var he="function"==typeof Uint32Array?Uint32Array:null,_e=function(r){return je&&r instanceof Uint32Array||"[object Uint32Array]"===me(r)},ge=he;var Ne=function(){var r,e;if("function"!=typeof ge)return!1;try{e=new ge(e=[1,3.14,-3.14,4294967296,4294967297]),r=_e(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Ae="function"==typeof Uint32Array?Uint32Array:void 0,Oe=function(){throw new Error("not implemented")},Ee=Ne()?Ae:Oe,Ue=I,Se="function"==typeof Float64Array;var Pe="function"==typeof Float64Array?Float64Array:null,Fe=function(r){return Se&&r instanceof Float64Array||"[object Float64Array]"===Ue(r)},Ie=Pe;var xe=function(){var r,e;if("function"!=typeof Ie)return!1;try{e=new Ie([1,3.14,-3.14,NaN]),r=Fe(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var Te="function"==typeof Float64Array?Float64Array:void 0,Ge=function(){throw new Error("not implemented")},Ve=xe()?Te:Ge,He=I,Me="function"==typeof Uint8Array;var ke="function"==typeof Uint8Array?Uint8Array:null,Be=function(r){return Me&&r instanceof Uint8Array||"[object Uint8Array]"===He(r)},Le=ke;var We=function(){var r,e;if("function"!=typeof Le)return!1;try{e=new Le(e=[1,3.14,-3.14,256,257]),r=Be(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Ce="function"==typeof Uint8Array?Uint8Array:void 0,Re=function(){throw new Error("not implemented")},Xe=We()?Ce:Re,Ye=I,qe="function"==typeof Uint16Array;var ze="function"==typeof Uint16Array?Uint16Array:null,De=function(r){return qe&&r instanceof Uint16Array||"[object Uint16Array]"===Ye(r)},Je=ze;var Ke=function(){var r,e;if("function"!=typeof Je)return!1;try{e=new Je(e=[1,3.14,-3.14,65536,65537]),r=De(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Qe,Ze="function"==typeof Uint16Array?Uint16Array:void 0,$e=function(){throw new Error("not implemented")},rn={uint16:Ke()?Ze:$e,uint8:Xe};(Qe=new rn.uint16(1))[0]=4660;var en=52===new rn.uint8(Qe.buffer)[0],nn=Ee,tn=!0===en?1:0,un=new Ve(1),on=new nn(un.buffer);var fn=function(r){return un[0]=r,on[tn]},an=Ee,cn=!0===en?1:0,vn=new Ve(1),ln=new an(vn.buffer);var yn=function(r,e){return vn[0]=r,ln[cn]=e>>>0,vn[0]},pn=yn,sn=Number.POSITIVE_INFINITY,bn=Sr.NEGATIVE_INFINITY;var dn=de,wn=fn,mn=pn,jn=sn,hn=bn,_n=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},gn=.6931471803691238,Nn=1.9082149292705877e-10;var An=function(r){var e,n,t,u,o,i,f,a,c,v,l,y;if(r===jn||dn(r))return r;if(r===hn)return-1;if(0===r)return r;if(r<0?(n=!0,f=-r):(n=!1,f=r),f>=38.816242111356935){if(n)return-1;if(f>=709.782712893384)return jn}if(o=0|wn(f),f>.34657359027997264)f<1.0397207708399179?n?(t=r+gn,u=-Nn,y=-1):(t=r-gn,u=Nn,y=1):(y=n?1.4426950408889634*r-.5:1.4426950408889634*r+.5,t=r-(v=y|=0)*gn,u=v*Nn),c=t-(r=t-u)-u;else{if(o<1016070144)return r;y=0}return l=(a=r*(e=.5*r))*(((i=1+a*_n(a))-(v=3-i*e))/(6-r*v)),0===y?r-(r*l-a):(l=r*(l-c)-c,l-=a,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(t=wn(f=1-(l-r))+(y<<20)|0,(f=mn(f,t))-1):(v=1,y<20?f=(v=mn(v,t=1072693248-(2097152>>y)|0))-(l-r):(f=r-(l+(v=mn(v,t=1023-y<<20|0))),f+=1),t=wn(f)+(y<<20)|0,mn(f,t)))};var On=fn,En=pn,Un=de,Sn=bn,Pn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Fn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},In=.6931471803691238,xn=1.9082149292705877e-10;var Tn=function(r){var e,n,t,u,o,i,f,a,c,v,l;return 0===r?Sn:Un(r)||r<0?NaN:(u=0,(n=On(r))<1048576&&(u-=54,n=On(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-1023|0,u+=(f=(n&=1048575)+614244&1048576|0)>>20|0,i=(r=En(r,n|1072693248^f))-1,(1048575&2+n)<3?0===i?0===u?0:u*In+u*xn:(o=i*i*(.5-.3333333333333333*i),0===u?i-o:u*In-(o-u*xn-i)):(f=n-398458|0,a=440401-n|0,t=(v=(l=(c=i/(2+i))*c)*l)*Pn(v),o=l*Fn(v)+t,(f|=a)>0?(e=.5*i*i,0===u?i-(e-c*(e+o)):u*In-(e-(c*(e+o)+u*xn)-i)):0===u?i-c*(i-o):u*In-(c*(i-o)-u*xn-i))))},Gn=Tn,Vn=Math.floor,Hn=Vn;var Mn=function(r){return Hn(r)===r},kn=Mn;var Bn=function(r){return kn(r/2)};var Ln=function(r){return Bn(r>0?r-1:r+1)},Wn=sn,Cn=bn;var Rn,Xn,Yn=function(r){return r===Wn||r===Cn},qn=Math.sqrt;!0===en?(Rn=1,Xn=0):(Rn=0,Xn=1);var zn=Ee,Dn={HIGH:Rn,LOW:Xn},Jn=new Ve(1),Kn=new zn(Jn.buffer),Qn=Dn.HIGH,Zn=Dn.LOW;var $n=function(r,e){return Jn[0]=e,r[0]=Kn[Qn],r[1]=Kn[Zn],r};var rt=function(r,e){return 1===arguments.length?$n([0,0],r):$n(r,e)},et=Ee,nt=!0===en?0:1,tt=new Ve(1),ut=new et(tt.buffer);var ot=function(r,e){return tt[0]=r,ut[nt]=e>>>0,tt[0]},it=ot;var ft,at,ct=function(r){return 0|r};!0===en?(ft=1,at=0):(ft=0,at=1);var vt=Ee,lt={HIGH:ft,LOW:at},yt=new Ve(1),pt=new vt(yt.buffer),st=lt.HIGH,bt=lt.LOW;var dt=function(r,e){return pt[st]=r,pt[bt]=e,yt[0]},wt=dt,mt=rt,jt=fn,ht=wt,_t=[0,0];var gt=function(r,e){var n,t;return mt(_t,r),n=_t[0],n&=2147483647,t=jt(e),ht(n|=t&=2147483648,_t[1])},Nt=Ln,At=gt,Ot=bn,Et=sn;var Ut=fn;var St=we,Pt=sn;var Ft=fn,It=it,xt=pn,Tt=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Gt=[1,1.5],Vt=[0,.5849624872207642],Ht=[0,1.350039202129749e-8];var Mt=it,kt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Bt=Yn,Lt=de,Wt=we;var Ct=function(r,e){return Lt(e)||Bt(e)?(r[0]=e,r[1]=0,r):0!==e&&Wt(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var Rt=fn;var Xt=function(r){var e=Rt(r);return(e=(2146435072&e)>>>20)-1023|0},Yt=sn,qt=bn,zt=de,Dt=Yn,Jt=gt,Kt=function(r,e){return 1===arguments.length?Ct([0,0],r):Ct(r,e)},Qt=Xt,Zt=rt,$t=wt,ru=[0,0],eu=[0,0];var nu=function(r,e){var n,t;return 0===e||0===r||zt(r)||Dt(r)?r:(Kt(ru,r),e+=ru[1],(e+=Qt(r=ru[0]))<-1074?Jt(0,r):e>1023?r<0?qt:Yt:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Zt(eu,r),n=eu[0],n&=2148532223,t*$t(n|=e+1023<<20,eu[1])))},tu=nu;var uu=fn,ou=pn,iu=it,fu=ct,au=tu,cu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var vu=de,lu=Ln,yu=Yn,pu=Mn,su=qn,bu=we,du=rt,wu=it,mu=ct,ju=bn,hu=sn,_u=function(r,e){return e===Ot?Et:e===Et?0:e>0?Nt(e)?r:0:Nt(e)?At(Et,r):Et},gu=function(r,e){return(2147483647&Ut(r))<=1072693247?e<0?1/0:0:e>0?1/0:0},Nu=function(r,e){return-1===r?(r-r)/(r-r):1===r?1:St(r)<1==(e===Pt)?0:Pt},Au=function(r,e,n){var t,u,o,i,f,a,c,v,l,y,p,s,b,d,w,m,j,h,_,g;return h=0,n<1048576&&(h-=53,n=Ft(e*=9007199254740992)),h+=(n>>20)-1023|0,n=1072693248|(_=1048575&n|0),_<=235662?g=0:_<767610?g=1:(g=0,h+=1,n-=1048576),t=524288+(n>>1|536870912),f=(j=1/((e=xt(e,n))+(c=Gt[g])))*((m=e-c)-(i=It(u=m*j,0))*(a=xt(0,t+=g<<18))-i*(e-(a-c))),w=(o=u*u)*o*Tt(o),a=It(a=3+(o=i*i)+(w+=f*(i+u)),0),b=(p=-7.028461650952758e-9*(l=It(l=(m=i*a)+(j=f*a+(w-(a-3-o))*u),0))+.9617966939259756*(j-(l-m))+Ht[g])-((s=It(s=(y=.9617967009544373*l)+p+(v=Vt[g])+(d=h),0))-d-v-y),r[0]=s,r[1]=b,r},Ou=function(r,e){var n,t,u,o,i;return n=(i=1.9259629911266175e-8*(u=e-1)-1.4426950408889634*(u*u*kt(u)))-((t=Mt(t=(o=1.4426950216293335*u)+i,0))-o),r[0]=t,r[1]=n,r},Eu=function(r,e,n){var t,u,o,i,f,a,c,v,l,y;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(t=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),e-=o=ou(0,t)),a=(f=.6931471805599453*(n-((o=iu(o=n+e,0))-e))+-1.904654299957768e-9*o)-((c=(i=.6931471824645996*o)+f)-i),u=c-(o=c*c)*cu(o),r=uu(c=1-(c*u/(u-2)-(a+c*a)-c)),r=fu(r),c=(r+=v<<20>>>0)>>20<=0?au(c,v):ou(c,r)},Uu=1e300,Su=[0,0],Pu=[0,0];var Fu=function r(e,n){var t,u,o,i,f,a,c,v,l,y,p,s,b,d;if(vu(e)||vu(n))return NaN;if(du(Su,n),f=Su[0],0===Su[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return su(e);if(-.5===n)return 1/su(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(yu(n))return Nu(e,n)}if(du(Su,e),i=Su[0],0===Su[1]){if(0===i)return _u(e,n);if(1===e)return 1;if(-1===e&&lu(n))return-1;if(yu(e))return e===ju?r(-0,-n):n<0?0:hu}if(e<0&&!1===pu(n))return(e-e)/(e-e);if(o=bu(e),t=2147483647&i|0,u=2147483647&f|0,c=f>>>31|0,a=(a=i>>>31|0)&&lu(n)?-1:1,u>1105199104){if(u>1139802112)return gu(e,n);if(t<1072693247)return 1===c?a*Uu*Uu:1e-300*a*1e-300;if(t>1072693248)return 0===c?a*Uu*Uu:1e-300*a*1e-300;p=Ou(Pu,o)}else p=Au(Pu,o,t);if(y=(n-(v=wu(n,0)))*p[0]+n*p[1],l=v*p[0],du(Su,s=y+l),b=mu(Su[0]),d=mu(Su[1]),b>=1083179008){if(0!=(b-1083179008|d))return a*Uu*Uu;if(y+8008566259537294e-32>s-l)return a*Uu*Uu}else if((2147483647&b)>=1083231232){if(0!=(b-3230714880|d))return 1e-300*a*1e-300;if(y<=s-l)return 1e-300*a*1e-300}return a*(s=Eu(b,l,y))},Iu=Fu,xu=Math.ceil,Tu=Vn,Gu=xu;var Vu=function(r){return r<0?Gu(r):Tu(r)},Hu=de,Mu=we,ku=An,Bu=Gn,Lu=Iu,Wu=Vu;var Cu=function(r,e){var n;if(Hu(r)||Hu(e))return NaN;if(0===e)return 0;if(0===r)return-1;if(r<0&&e%2==0&&(r=-r),r>0){if((Mu(e*(r-1))<.5||Mu(e)<.2)&&(n=Bu(r)*e)<.5)return ku(n)}else if(Wu(e)!==e)return NaN;return Lu(r,e)-1};var Ru=tu,Xu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Yu=de,qu=Vu,zu=bn,Du=sn,Ju=function(r,e,n){var t,u,o;return o=(t=r-e)-(u=t*t)*Xu(u),Ru(1-(e-t*o/(2-o)-r),n)};var Ku=function(r){var e;return Yu(r)||r===Du?r:r===zu?0:r>709.782712893384?Du:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(e=qu(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),Ju(r-.6931471803691238*e,1.9082149292705877e-10*e,e))},Qu=bn;var Zu=function(r){return 0===r&&1/r===Qu};var $u=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},ro=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var eo=function(r,e){var n,t,u,o;return u=(o=r*r)*o,t=o*$u(o),t+=u*u*ro(o),(u=1-(n=.5*o))+(1-u-n+(o*t-r*e))},no=-.16666666666666632;var to=function(r,e){var n,t,u;return n=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===e?r+t*(no+u*n):r-(u*(.5*e-t*n)-e-t*no)},uo=Ee,oo=!0===en?0:1,io=new Ve(1),fo=new uo(io.buffer);var ao=function(r){return io[0]=r,fo[oo]};var co=function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n};var vo=Vn,lo=tu,yo=function(r){return co(0,r)},po=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],so=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],bo=5.960464477539063e-8,wo=yo(20),mo=yo(20),jo=yo(20),ho=yo(20);function _o(r,e,n,t,u,o,i,f,a){var c,v,l,y,p,s,b,d,w;for(y=o,w=t[n],d=n,p=0;d>0;p++)v=bo*w|0,ho[p]=w-16777216*v|0,w=t[d-1]+v,d-=1;if(w=lo(w,u),w-=8*vo(.125*w),w-=b=0|w,l=0,u>0?(b+=p=ho[n-1]>>24-u,ho[n-1]-=p<<24-u,l=ho[n-1]>>23-u):0===u?l=ho[n-1]>>23:w>=.5&&(l=2),l>0){for(b+=1,c=0,p=0;p<n;p++)d=ho[p],0===c?0!==d&&(c=1,ho[p]=16777216-d):ho[p]=16777215-d;if(u>0)switch(u){case 1:ho[n-1]&=8388607;break;case 2:ho[n-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=lo(1,u)))}if(0===w){for(d=0,p=n-1;p>=o;p--)d|=ho[p];if(0===d){for(s=1;0===ho[o-s];s++);for(p=n+1;p<=n+s;p++){for(a[f+p]=po[i+p],v=0,d=0;d<=f;d++)v+=r[d]*a[f+(p-d)];t[p]=v}return _o(r,e,n+=s,t,u,o,i,f,a)}}if(0===w)for(n-=1,u-=24;0===ho[n];)n-=1,u-=24;else(w=lo(w,-u))>=16777216?(v=bo*w|0,ho[n]=w-16777216*v|0,u+=24,ho[n+=1]=v):ho[n]=0|w;for(v=lo(1,u),p=n;p>=0;p--)t[p]=v*ho[p],v*=bo;for(p=n;p>=0;p--){for(v=0,s=0;s<=y&&s<=n-p;s++)v+=so[s]*t[p+s];jo[n-p]=v}for(v=0,p=n;p>=0;p--)v+=jo[p];for(e[0]=0===l?v:-v,v=jo[0]-v,p=1;p<=n;p++)v+=jo[p];return e[1]=0===l?v:-v,7&b}var go=function(r,e,n,t){var u,o,i,f,a,c,v;for(4,(o=(n-3)/24|0)<0&&(o=0),f=n-24*(o+1),c=o-(i=t-1),v=i+4,a=0;a<=v;a++)wo[a]=c<0?0:po[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*wo[i+(a-c)];mo[a]=u}return 4,_o(r,e,4,mo,f,4,o,i,wo)},No=Math.round,Ao=fn;var Oo=fn,Eo=ao,Uo=wt,So=go,Po=function(r,e,n){var t,u,o,i,f;return o=r-1.5707963267341256*(t=No(.6366197723675814*r)),i=6077100506506192e-26*t,f=e>>20|0,n[0]=o-i,f-(Ao(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((u=o)-(o=u-(i=6077100506303966e-26*t))-i),n[0]=o-i,f-(Ao(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((u=o)-(o=u-(i=20222662487111665e-37*t))-i),n[0]=o-i)),n[1]=o-n[0]-i,t},Fo=1.5707963267341256,Io=6077100506506192e-26,xo=2*Io,To=4*Io,Go=[0,0,0],Vo=[0,0];var Ho=function(r,e){var n,t,u,o,i,f,a;if((u=2147483647&Oo(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Po(r,u,e):u<=1073928572?r>0?(a=r-Fo,e[0]=a-Io,e[1]=a-e[0]-Io,1):(a=r+Fo,e[0]=a+Io,e[1]=a-e[0]+Io,-1):r>0?(a=r-2*Fo,e[0]=a-xo,e[1]=a-e[0]-xo,2):(a=r+2*Fo,e[0]=a+xo,e[1]=a-e[0]+xo,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Po(r,u,e):r>0?(a=r-3*Fo,e[0]=a-1.8231301519518578e-10,e[1]=a-e[0]-1.8231301519518578e-10,3):(a=r+3*Fo,e[0]=a+1.8231301519518578e-10,e[1]=a-e[0]+1.8231301519518578e-10,-3):1075388923===u?Po(r,u,e):r>0?(a=r-4*Fo,e[0]=a-To,e[1]=a-e[0]-To,4):(a=r+4*Fo,e[0]=a+To,e[1]=a-e[0]+To,-4);if(u<1094263291)return Po(r,u,e);if(u>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=Eo(r),a=Uo(u-((t=(u>>20)-1046)<<20|0),n),i=0;i<2;i++)Go[i]=0|a,a=16777216*(a-Go[i]);for(Go[2]=a,o=3;0===Go[o-1];)o-=1;return f=So(Go,Vo,t,o),r<0?(e[0]=-Vo[0],e[1]=-Vo[1],-f):(e[0]=Vo[0],e[1]=Vo[1],f)},Mo=fn,ko=eo,Bo=to,Lo=Ho,Wo=[0,0];var Co=function(r){var e;if(e=Mo(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Bo(r,0);if(e>=2146435072)return NaN;switch(3&Lo(r,Wo)){case 0:return Bo(Wo[0],Wo[1]);case 1:return ko(Wo[0],Wo[1]);case 2:return-Bo(Wo[0],Wo[1]);default:return-ko(Wo[0],Wo[1])}},Ro=3.141592653589793;var Xo=Iu,Yo=Ku,qo=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var zo=de,Do=Mn,Jo=Zu,Ko=we,Qo=Vn,Zo=Co,$o=sn,ri=bn,ei=Ro,ni=function(r){var e,n,t;return e=1+(e=1/r)*qo(e),n=Yo(r),2.5066282746310007*(n=r>143.01608?(t=Xo(r,.5*r-.25))*(t/n):Xo(r,r-.5)/n)*e},ti=function(r,e){return e/((1+.5772156649015329*r)*r)},ui=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)};var oi=fn,ii=eo,fi=to,ai=Ho,ci=[0,0];var vi=de,li=Yn,yi=function(r){var e;if(e=oi(r),(e&=2147483647)<=1072243195)return e<1044381696?1:ii(r,0);if(e>=2146435072)return NaN;switch(3&ai(r,ci)){case 0:return ii(ci[0],ci[1]);case 1:return-fi(ci[0],ci[1]);case 2:return-ii(ci[0],ci[1]);default:return fi(ci[0],ci[1])}},pi=Co,si=we,bi=gt,di=Ro;var wi=function(r){var e,n;return vi(r)||li(r)?NaN:0===(e=si(n=r%2))||1===e?bi(0,n):e<.25?pi(di*n):e<.75?bi(yi(di*(e=.5-e)),n):e<1.25?(n=bi(1,n)-n,pi(di*n)):e<1.75?-bi(yi(di*(e-=1.5)),n):(n-=bi(2,n),pi(di*n))};var mi=de,ji=Yn,hi=we,_i=Gn,gi=Vu,Ni=wi,Ai=sn,Oi=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},Ei=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Ui=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},Si=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},Pi=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},Fi=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},Ii=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},xi=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},Ti=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},Gi=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},Vi=1.4616321449683622,Hi=1.4616321449683622;var Mi=de,ki=Mn,Bi=we,Li=Ku,Wi=Vn,Ci=function(r){var e,n,t,u;if(Do(r)&&r<0||r===ri||zo(r))return NaN;if(0===r)return Jo(r)?ri:$o;if(r>171.61447887182297)return $o;if(r<-170.5674972726612)return 0;if((n=Ko(r))>33)return r>=0?ni(r):(e=0==(1&(t=Qo(n)))?-1:1,(u=n-t)>.5&&(u=n-(t+=1)),u=n*Zo(ei*u),e*ei/(Ko(u)*ni(n)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return ti(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return ti(r,u);u/=r,r+=1}return 2===r?u:u*ui(r-=2)},Ri=function(r){var e,n,t,u,o,i,f,a;if(mi(r)||ji(r))return r;if(0===r)return Ai;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-_i(r);if(e){if(r>=4503599627370496)return Ai;if(0===(u=Ni(r)))return Ai;n=_i(3.141592653589793/hi(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(a=-_i(r),r>=Vi-1+.27?(i=1-r,t=0):r>=Vi-1-.27?(i=r-(Hi-1),t=1):(i=r,t=2)):(a=0,r>=Vi+.27?(i=2-r,t=0):r>=Vi-.27?(i=r-Hi,t=1):(i=r-1,t=2)),t){case 0:a+=i*(.07721566490153287+(f=i*i)*Oi(f))+f*(.3224670334241136+f*Ei(f))-.5*i;break;case 1:a+=-.12148629053584961+((f=i*i)*(.48383612272381005+(o=f*i)*Pi(o))-(-3638676997039505e-33-o*(o*Fi(o)-.1475877229945939+i*(.06462494023913339+o*Ii(o)))));break;case 2:a+=-.5*i+i*(i*xi(i)-.07721566490153287)/(1+i*Ti(i))}else if(r<8)switch(a=.5*(i=r-(t=gi(r)))+i*(i*Si(i)-.07721566490153287)/(1+i*Ui(i)),f=1,t){case 7:f*=i+6;case 6:f*=i+5;case 5:f*=i+4;case 4:f*=i+3;case 3:a+=_i(f*=i+2)}else a=r<0x400000000000000?(r-.5)*((u=_i(r))-1)+(o=.4189385332046727+(f=1/r)*Gi(i=f*f)):r*(_i(r)-1);return e&&(a=n-a),a},Xi=wi,Yi=Iu,qi=Gn,zi=sn,Di=bn,Ji=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],Ki=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1],Qi=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1425517.1666666667,-27298231.067816094,601580873.9006424,-15116315767.092157,429614643061.1667,-13711655205088.332,488332318973593.2,-0x448e22fd0e7564,0xbae4b5e068b9980,-0x22fcd9ea189658000,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2.849876930245088e30,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,2.2752696488463515e40,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8.218362941978458e50,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7.406424897967885e80,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5.036885995049238e90,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6.116051999495218e100,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-3.7846468581969106e140,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,1.2181154536221047e160,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-1.3116736213556958e180,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4.292841379140298e200,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5.103172577262957e230,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3.286267919069014e280,-4935592895596035e268,7534957120083251e271,-1.1691485154584178e290,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290],Zi=function(r){var e,n;return 0===r?.2433929443359375:((r<0?-r:r)<=1?(e=.2433929443359375+r*(r*(.055761621477604675+r*(r*(.0004515345286457964+-9332412703570615e-21*r)-.003209124988790859))-.4909247051635357),n=1+r*(r*(.04196762233099861+r*(r*(.00024978985622317937+-10185578841856403e-21*r)-.00413421406552171))-.27996033431034445)):(e=(r=1/r)*(.0004515345286457964+r*(r*(.055761621477604675+r*(.2433929443359375*r-.4909247051635357))-.003209124988790859))-9332412703570615e-21,n=r*(.00024978985622317937+r*(r*(.04196762233099861+r*(1*r-.27996033431034445))-.00413421406552171))-10185578841856403e-21),e/n)},$i=function(r){var e,n;return 0===r?.5772156649015329:((r<0?-r:r)<=1?(e=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+1101084409767329e-20*r)))),n=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+10991819782396113e-21*r))))):(e=1101084409767329e-20+(r=1/r)*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+.5772156649015329*r)))),n=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+1*r))))),e/n)},rf=function(r){var e,n;return 0===r?-.053725830002359504:((r<0?-r:r)<=1?(e=r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+0*r)))))-.053725830002359504,n=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+2.3627662397497864e-8*r)))))):(e=0+(r=1/r)*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+-.053725830002359504*r))))),n=2.3627662397497864e-8+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+1*r)))))),e/n)},ef=function(r){var e,n;return 0===r?-2.497101906022594:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(0+r*(0+0*r))-22925731059489392e-21)-.007017212405498024)-.13844861799574154)-.9392604353771099)-2.600133018094757)-2.497101906022594,n=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(r*(49340956392759e-19+r*(r*(7.188337293654598e-9+-1.1292001134749475e-10*r)-2.3405548702528722e-7))-36910273311764616e-21))))):(e=0+(r=1/r)*(0+r*(0+r*(r*(r*(r*(r*(-2.497101906022594*r-2.600133018094757)-.9392604353771099)-.13844861799574154)-.007017212405498024)-22925731059489392e-21))),n=r*(7.188337293654598e-9+r*(r*(49340956392759e-19+r*(r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+1*r)))-36910273311764616e-21))-2.3405548702528722e-7))-1.1292001134749475e-10),e/n)},nf=function(r){var e,n;return 0===r?-4.785580284951356:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+0*r))))-.0001892047582600767)-.21140713487441282)-1.8919736488197254)-4.785580284951356,n=1+r*(.24434533737818856+r*(.008733707544922887+r*(r*(r*(r*(4.710012640030765e-9+r*(6998415452048457e-28*r-8333784406253855e-26))-21750464515767985e-22)-7437436828999331e-20)-.0011759276533443448)))):(e=0+(r=1/r)*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(r*(r*(-4.785580284951356*r-1.8919736488197254)-.21140713487441282)-.0001892047582600767))))),n=6998415452048457e-28+r*(r*(4.710012640030765e-9+r*(r*(r*(r*(.008733707544922887+r*(.24434533737818856+1*r))-.0011759276533443448)-7437436828999331e-20)-21750464515767985e-22))-8333784406253855e-26)),e/n)},tf=function(r){var e,n;return 0===r?-10.39489505733089:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(r*(-8.214657090954655e-9*r-7.855236337967234e-7)-3825293235079675e-20)-.001194591734169687)-.025115606465534634)-.34772826653924577)-2.858272196711067)-10.39489505733089,n=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9.555611230656935e-7+r*(1.185071534740229e-8+2226094836273526e-30*r))))))):(e=(r=1/r)*(r*(r*(r*(r*(r*(-10.39489505733089*r-2.858272196711067)-.34772826653924577)-.025115606465534634)-.001194591734169687)-3825293235079675e-20)-7.855236337967234e-7)-8.214657090954655e-9,n=2226094836273526e-30+r*(1.185071534740229e-8+r*(9.555611230656935e-7+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+1*r))))))),e/n)};var uf=function r(e){var n,t,u,o,i,f;if(Mi(e))return NaN;if(1===e)return NaN;if(e>=56)return 1;if(ki(e)&&(o=0|e)===e){if(!(o<0))return 0==(1&o)?Ki[o/2]:Ji[(o-3)/2];if(0==(1&(u=0|-o)))return 0;if((f=(u+1)/2|0)<=129)return-Qi[f]/(u+1)}return Bi(e)<1.4901161193847656e-8?-.5-.9189385332046728*e:(t=1-e,e<0?Wi(e/2)===e/2?0:(n=e,e=t,t=n,e>170?(n=2*Xi(.5*t)*r(e),i=Ri(e),(i-=e*qi(6.283185307179586))>709?n<0?Di:zi:n*Li(i)):2*Xi(.5*t)*Yi(6.283185307179586,-e)*Ci(e)*r(e)):e<1?(n=Zi(t),n-=1.2433929443359375,n+=t,n/=t):e<=2?(n=1/(t=-t))+$i(t):e<=4?(n=.6986598968505859+1/-t)+rf(e-2):e<=7?(n=ef(e-4),1+Li(n)):e<15?(n=nf(e-7),1+Li(n)):e<36?(n=tf(e-15),1+Li(n)):1+Yi(2,-e))},of=de,ff=Cu,af=uf;var cf=function(r){return of(r)?NaN:1===r?.6931471805599453:-ff(2,1-r)*af(r)};function vf(r){return be(r,cf)}export{vf as default};
//# sourceMappingURL=mod.js.map