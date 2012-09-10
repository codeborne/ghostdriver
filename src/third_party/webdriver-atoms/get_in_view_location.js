function(){return function(){var g=!0,j=!1,k=this;function l(a,d){function b(){}b.prototype=d.prototype;a.f=d.prototype;a.prototype=new b};function aa(a,d){for(var b=1;b<arguments.length;b++)var c=(""+arguments[b]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,c);return a}
function n(a,d){for(var b=0,c=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=(""+d).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),m=Math.max(c.length,e.length),f=0;0==b&&f<m;f++){var ia=c[f]||"",ja=e[f]||"",ka=RegExp("(\\d*)(\\D*)","g"),la=RegExp("(\\d*)(\\D*)","g");do{var h=ka.exec(ia)||["","",""],i=la.exec(ja)||["","",""];if(0==h[0].length&&0==i[0].length)break;b=((0==h[1].length?0:parseInt(h[1],10))<(0==i[1].length?0:parseInt(i[1],10))?-1:(0==h[1].length?0:parseInt(h[1],10))>(0==i[1].length?
0:parseInt(i[1],10))?1:0)||((0==h[2].length)<(0==i[2].length)?-1:(0==h[2].length)>(0==i[2].length)?1:0)||(h[2]<i[2]?-1:h[2]>i[2]?1:0)}while(0==b)}return b};var o,p,q,r,s;function t(){return k.navigator?k.navigator.userAgent:null}s=r=q=p=o=j;var u;if(u=t()){var ba=k.navigator;o=0==u.indexOf("Opera");p=!o&&-1!=u.indexOf("MSIE");r=(q=!o&&-1!=u.indexOf("WebKit"))&&-1!=u.indexOf("Mobile");s=!o&&!q&&"Gecko"==ba.product}var v=o,w=p,x=s,y=q,ca=r,z;
a:{var A="",B;if(v&&k.opera)var C=k.opera.version,A="function"==typeof C?C():C;else if(x?B=/rv\:([^\);]+)(\)|;)/:w?B=/MSIE\s+([^\);]+)(\)|;)/:y&&(B=/WebKit\/(\S+)/),B)var D=B.exec(t()),A=D?D[1]:"";if(w){var E,F=k.document;E=F?F.documentMode:void 0;if(E>parseFloat(A)){z=""+E;break a}}z=A}var G={};function H(a){return G[a]||(G[a]=0<=n(z,a))}var da={};function ea(){return da[9]||(da[9]=w&&document.documentMode&&9<=document.documentMode)};var fa=window;function I(a){this.stack=Error().stack||"";a&&(this.message=""+a)}l(I,Error);I.prototype.name="CustomError";function ga(a,d){d.unshift(a);I.call(this,aa.apply(null,d));d.shift()}l(ga,I);ga.prototype.name="AssertionError";function J(a,d){this.code=a;this.message=d||"";this.name=ha[a]||ha[13];var b=Error(this.message);b.name=this.name;this.stack=b.stack||""}l(J,Error);
var ha={7:"NoSuchElementError",8:"NoSuchFrameError",9:"UnknownCommandError",10:"StaleElementReferenceError",11:"ElementNotVisibleError",12:"InvalidElementStateError",13:"UnknownError",15:"ElementNotSelectableError",19:"XPathLookupError",23:"NoSuchWindowError",24:"InvalidCookieDomainError",25:"UnableToSetCookieError",26:"ModalDialogOpenedError",27:"NoModalDialogOpenError",28:"ScriptTimeoutError",32:"InvalidSelectorError",35:"SqlDatabaseError",34:"MoveTargetOutOfBoundsError"};
J.prototype.toString=function(){return"["+this.name+"] "+this.message};var K;!w||ea();!x&&!w||w&&ea()||x&&H("1.9.1");w&&H("9");function L(a,d){this.x=void 0!==a?a:0;this.y=void 0!==d?d:0}L.prototype.toString=function(){return"("+this.x+", "+this.y+")"};function M(a,d){this.width=a;this.height=d}M.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};function ma(a){var d=!y&&"CSS1Compat"==a.compatMode?a.documentElement:a.body,a=a.parentWindow||a.defaultView;return new L(a.pageXOffset||d.scrollLeft,a.pageYOffset||d.scrollTop)}function N(a){this.a=a||k.document||document};var O,P,Q,R,S,T,U;U=T=S=R=Q=P=O=j;var V=t();V&&(-1!=V.indexOf("Firefox")?O=g:-1!=V.indexOf("Camino")?P=g:-1!=V.indexOf("iPhone")||-1!=V.indexOf("iPod")?Q=g:-1!=V.indexOf("iPad")?R=g:-1!=V.indexOf("Android")?S=g:-1!=V.indexOf("Chrome")?T=g:-1!=V.indexOf("Safari")&&(U=g));var na=P,oa=Q,pa=R,qa=S,ra=T,sa=U;a:{var W;if(O)W=/Firefox\/([0-9.]+)/;else{if(w||v)break a;ra?W=/Chrome\/([0-9.]+)/:sa?W=/Version\/([0-9.]+)/:oa||pa?W=/Version\/(\S+).*Mobile\/(\S+)/:qa?W=/Android\s+([0-9.]+)(?:.*Version\/([0-9.]+))?/:na&&(W=/Camino\/([0-9.]+)/)}W&&W.exec(t())};var ta,ua=function(){if(!x)return j;var a=k.Components;if(!a)return j;try{if(!a.classes)return j}catch(d){return j}var b=a.classes,a=a.interfaces,c=b["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),e=b["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo).platformVersion;ta=function(a){c.e(e,""+a)};return g}();!v&&y&&(ua?ta("533"):w?n(document.documentMode,"533"):H("533"));function X(a,d,b,c,e){this.c=!!d;if(a&&(this.b=a))this.d="number"==typeof c?c:1!=this.b.nodeType?0:this.c?-1:1;this.depth=void 0!=e?e:this.d||0;this.c&&(this.depth*=-1)}l(X,function(){});X.prototype.b=null;X.prototype.d=0;l(function(a,d,b,c){X.call(this,a,d,0,null,c)},X);function va(a,d){var b=d||fa,c;c=b||window;var e=c.document;if(y&&!H("500")&&!ca){"undefined"==typeof c.innerHeight&&(c=window);var e=c.innerHeight,m=c.document.documentElement.scrollHeight;c==c.top&&m<e&&(e-=15);c=new M(c.innerWidth,e)}else c="CSS1Compat"==e.compatMode?e.documentElement:e.body,c=new M(c.clientWidth,c.clientHeight);var e=a.x>=c.width?a.x-(c.width-1):0>a.x?a.x:0,m=a.y>=c.height?a.y-(c.height-1):0>a.y?a.y:0,f;f=b.document?new N(9==b.document.nodeType?b.document:b.document.ownerDocument||
b.document.document):K||(K=new N);f=ma(f.a);(0!=e||0!=m)&&b.scrollBy(e,m);b=b.document?new N(9==b.document.nodeType?b.document:b.document.ownerDocument||b.document.document):K||(K=new N);b=ma(b.a);if(f.x+e!=b.x||f.y+m!=b.y)throw new J(34,"The target location ("+(a.x+f.x)+", "+(a.y+f.y)+") is not on the webpage.");b=new L(a.x-e,a.y-m);if(0>b.x||b.x>=c.width)throw new J(34,"The target location ("+b.x+", "+b.y+") should be within the viewport ("+c.width+":"+c.height+") after scrolling.");if(0>b.y||b.y>=
c.height)throw new J(34,"The target location ("+b.x+", "+b.y+") should be within the viewport ("+c.width+":"+c.height+") after scrolling.");return b}var Y=["_"],Z=k;!(Y[0]in Z)&&Z.execScript&&Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)!Y.length&&void 0!==va?Z[$]=va:Z=Z[$]?Z[$]:Z[$]={};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null}, arguments);}