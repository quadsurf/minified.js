/^u/.test(typeof define)&&(this.define=function a(b,c){a[b]=c()},this.require=function(a){return this.define[a]}),define("minified",function(){function E(a){return a!=g?""+a:""}function w(a){return"string"==typeof a}function A(a){return a&&a.nodeType}function aa(a){return a}function B(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function N(a,b){var c=[];return h(a,function(a,d){b(a,d)&&c.push(a)}),c}function x(a,b,c){var d=[];return a(b,function(a,b){h(c(a,b),function(a){d.push(a)})}),d}function n(a,b,c){return E(a).replace(b,c||"")}function h(a,b){if(F(a))for(var c=0;c<a.length;c++)b(a[c],c);else a!=g&&b(a,0);return a}function V(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function v(a){return"function"==typeof a&&!a.item}function F(a){return a&&a.length!=g&&!w(a)&&!A(a)&&!v(a)&&a!==s}function O(a,b){var c=RegExp("(^|\\s)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):t}}function P(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function I(a,b){s.setTimeout(a,b||0)}function H(a){return parseFloat(n(a,/^[^\d-]+/))}function J(a){return a.Mid=a.Mid||++ba}function Q(a,b){var c,d=[],e={};return h(a,function(a){h(b(a),function(a){A(a)&&!e[c=J(a)]&&(d.push(a),e[c]=t)})}),d}function W(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:g},c=a.get(b);return a.set(b),b=a.get("$height",t),a.set(c),b}function ca(a,b,c,d,e,f){return function(g,h){for(var i,j=g||s.event,k=!f,l=h||j.target;l&&l!=b&&!k;)f(l)?k=t:l=l.parentNode;return k&&(i=(!a.apply(r(f?l:b),c||[j,d])||""==e)&&"|"!=e)&&!h&&(j.stopPropagation&&(j.preventDefault(),j.stopPropagation()),j.cancelBubble=t),!i}}function X(a){a()}function R(a,b){h(b,function(a){a.e.detachEvent("on"+a.n,a.h)})}function S(){h(K,X),K=g}function Y(a){K?K.push(a):I(a)}function Z(a,b,c){return a=r(q.createElement(a)),F(b)||b!=g&&"object"!=typeof b?a.add(b):a.set(b).add(c)}function L(a){return x(h,a,function(a){var b,c;return w(a)?a:F(a)?L(a):1==(b=A(a))?(c={$:a.className||g,$$:y?a.style.cssText:a.getAttribute("style")},h(a.attributes,function(b){var d=b.name;"id"!=d&&"style"!=d&&"class"!=d&&a.getAttribute(d)&&(c["@"+d]=b.value)}),Z(a.tagName,c,L(a.childNodes))):5>b?a.data:g})}function r(a,b,c){return v(a)?Y(a):new G(C(a,b,c))}function C(a,b,c){function d(a){return a=x(h,a,function b(a){return F(a)?x(h,a,b):a}),e?N(a,function(a){for(;a=a.parentNode;)if(a==e||c)return a==e}):a}var e,f,g,i;return b&&1!=(b=C(b)).length?Q(b,function(b){return C(a,b,c)}):(e=b&&b[0],w(a)?1<(b=a.split(/\s*,\s*/)).length?Q(b,function(a){return C(a,e,c)}):(b=/(\S+)\s+(.+)$/.exec(a))?C(b[2],C(b[1],e),c):a!=(b=n(a,/^#/))?d(q.getElementById(b)):(f=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1],i=b[2],b=(g=q.getElementsByClassName&&i)?(e||q).getElementsByClassName(i):(e||q).getElementsByTagName(f||"*"),(f=g?f:i)&&(b=N(b,O(f,g?"nodeName":"className"))),c?d(b):b):d(a))}function M(a,b){var c,d,e={},f=e;return v(a)?a:"number"==typeof a?function(b,c){return c==a}:!a||"*"==a||w(a)&&(f=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(c=O(f[1],"nodeName"),d=O(f[2],"className"),function(a){return 1==A(a)&&c(a)&&d(a)}):b?function(c){return r(a,b).find(c)!=g}:(r(a).each(function(a){e[J(a)]=t}),function(a){return e[J(a)]})}function T(){function a(a,e){b==g&&(b=a,c=e,I(function(){h(d,X)}))}var b,c=[],d=[],e=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,v(d)?(f=d.apply(g,c),f&&v(f.then)?f.then(function(a){h(t,[a])},function(a){h(z,[a])}):h(t,[f])):h(b,c)}catch(i){h(z,[i])}}var h=T();return b!=g?I(f):d.push(f),h};return a.error=function(a){return e(0,a)},a}function G(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var g=null,t=!0,z=!1,s=this,q=document,ba=1,D={},K=/^[ic]/.test(q.readyState)?g:[],U=[],da=s.requestAnimationFrame||function(a){I(a,33)},y=!!q.all&&!q.addEventListener;return B({each:function(a){return h(this,a)},filter:function(a){return new G(N(this,a))},collect:function(a){return new G(x(h,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&d>b})},find:function(a,b){for(var c,d=v(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d(this[e],e))!=g)return c},remove:function(){h(this,function(a){y&&1==A(a)&&(h(C("*",a),function(a){R(0,D[a.Mid]),delete D[a.Mid]}),R(0,D[a.Mid]),delete D[a.Mid]),a.parentNode.removeChild(a)})},text:function(){function a(b){var c=A(b);return 1==c?x(h,b.childNodes,a):5>c?b.data:g}return x(h,this,a).join("")},trav:function(a,b,c){var d="number"==typeof b,e=M(d?g:b),f=d?b:c;return new G(Q(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},select:function(a,b){return r(a,this,b)},is:function(a){var b=M(a);return!this.find(function(a){return b(a)?void 0:t})},only:function(a){return this.filter(M(a))},get:function(a,b){var c,d,e,f=this,i=f[0];return i?w(a)?(d=n(n(a,/^%/,"data-"),/^[$@]+/),c="$"==a?i.className:"$$"==a?y?i.style.cssText:i.getAttribute("style"):"$$fade"==a||"$$slide"==a?"hidden"==i.style.visibility||"none"==i.style.display?0:"$$fade"==a?isNaN(c=y?H(i.style.filter)/100:H(i.style.opacity))?1:c:f.get("$height"):"$$scrollX"==a?s.pageXOffset!=g?s.pageXOffset:(q.documentElement||q.body.parentNode||q.body).scrollLeft:"$$scrollY"==a?s.pageXOffset!=g?s.pageYOffset:(q.documentElement||q.body.parentNode||q.body).scrollTop:/^\$[^$]/.test(a)?s.getComputedStyle?s.getComputedStyle(i,g).getPropertyValue(n(d,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(i.currentStyle||i.style)[d]:/^[@%]/.test(a)?i.getAttribute(d):i[d],b?H(c):c):(e={},(F(a)?h:B)(a,function(a){e[a]=f.get(a,b)}),e):void 0},set:function(a,b){function c(a,b,c){c!=g?a.setAttribute(b,c):a.removeAttribute(b)}var d,e=this;return void 0!==b?"$$fade"==a||"$$slide"==a?e.set({$visibility:0<(d=H(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?y?1>d?{$filter:"alpha(opacity = "+100*d+")",$zoom:1}:{$filter:""}:{$opacity:d}:{$height:/px/.test(b)?b:function(a,b,c){return d*(d&&W(r(c)))+"px"},$overflow:"hidden"}):h(e,function(d,e){var f=n(n(a,/^%/,"data-"),/^[@$]+/),i=d.className||"",j=/^\$/.test(a)?d.style:d,k=v(b)?b(r(d).get(a),e,d):b;"$"==a?k!=g&&(h(k.split(/\s+/),function(a){var b=n(a,/^[+-]/),c=i;i=n(i,RegExp("(^|\\s)"+b+"(?=$|\\s)","i")),(/^\+/.test(a)||b==a&&c==i)&&(i+=" "+b)}),d.className=n(i,/^\s+|\s+(?=\s|$)/g)):"$$"==a?y?j.cssText=k:c(d,"style",k):"$$scrollX"==a?d.scroll(k,r(d).get("$$scrollY")):"$$scrollY"==a?d.scroll(r(d).get("$$scrollX"),k):/^[@%]/.test(a)?c(j,f,k):j[f]=k}):w(a)||v(a)?e.set("$",a):B(a,function(a,b){e.set(a,b)}),e},add:function(a,b){return this.each(function(c,d){var e;!function f(a){F(a)?h(a,f):v(a)?f(a(c,d)):a!=g&&(a=A(a)?a:q.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)}(d&&!v(a)?L(a):a)})},fill:function(a){return this.each(function(a){r(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new G(L(this))},animate:function(a,b,c){var d,e=this,f=[],g=T(),i=0;return g.stop=function(){return g(z),d(),i},b=b||500,h(e,function(b,d){var e,g=r(b),h={};B(e=g.get(a),function(c,e){var f=a[c];h[c]=v(f)?f(e,d,b):"$$slide"==c?a[c]*W(g)+"px":f}),f.push(g.dial(e,h,c))}),d=r.loop(function(a){a>=b||0>a?(i=b,d(),g(t,[e])):i=a,h(f,function(a){a(i/b)})}),g},dial:function(a,b,c){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(n(a,/[^\d,]+/g).split(",")[b])}var e=this,f=v(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};return c=c||0,function(c){B(a,function(a,g){var h=b[a],i=0;e.set(a,0>=c?g:c>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(f(d(g,i),d(h,i++),c))+","+Math.round(f(d(g,i),d(h,i++),c))+","+Math.round(f(d(g,i),d(h,i++),c))+")":n(h,/-?[\d.]+/,E(f(H(g),H(h),c))))})}},toggle:function(a,b,c,d){var e,f,h=this,i=z,j=/\b(?=\w)/g;return b?h.set(a)&&function(j){j!==i&&(f=(i=j===t||j===z?j:!i)?b:a,c?(e=h.animate(f,e?e.stop():c,d)).then(function(){e=g}):h.set(f)&&void 0)}:h.toggle(n(a,j,"-"),n(a,j,"+"))},values:function(a){var b=a||{};return this.each(function(a){var c=a.name,d=E(a.value);if(/form/i.test(a.tagName))for(c=0;c<a.elements.length;c++)r(a.elements[c]).values(b);else!c||/kbox|dio/i.test(a.type)&&!a.checked||(b[c]=b[c]==g?d:x(h,[b[c],d],aa))}),b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d,e){return v(b)?this.on(g,a,b,c,e):w(d)?this.on(a,b,c,g,d):this.each(function(f,g){h(a?C(a,f):f,function(a){h(E(b).split(/\s/),function(b){var f=n(b,/[?|]/),h=ca(c,a,d,g,n(b,/[^?|]/g),e&&M(e,a));b={e:a,h:h,n:f},(c.M=c.M||[]).push(b),y?(a.attachEvent("on"+f,h),f=J(a),(D[f]=D[f]||[]).push(b)):(a.addEventListener(f,h,z),(a.M=a.M||[]).push(b))})})})},onOver:function(a,b){var c=this,d=[];return b?this.on(a,"|mouseover |mouseout",function(a,e){var f="mouseout"!=a.type,g=a.relatedTarget||a.toElement;d[e]===f||!f&&g&&(g==c[e]||r(g).trav("parentNode",c[e]).length)||(d[e]=f,b.call(this,f,a))}):this.onOver(g,a)},onFocus:function(a,b){return this.on(a,"|focus",b,[t]).on(a,"|blur",b,[z])},onChange:function(a,b){var c=[];return b?this.each(function(d,e){function f(f,g){c[e]=d[g],r(d).on(a,f,function(){var a=d[g];a!=c[e]&&(b.call(this,a,e),c[e]=a)})}/kbox|dio/i.test(d.type)?f("|click","checked"):f(y?"|propertychange":"|input |change |keyup","value")}):this.onChange(g,a)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)h(y?D[e.Mid]:e.M,function(e){e.n==a&&(d=d||!e.h(b,c))}),e=e.parentNode})}},function(a,b){G.prototype[a]=b}),B({request:function(a,b,c,d){d=d||{};var e,f=0,i=T(),j=c!=g&&!A(c)&&!w(c);try{e=s.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),j&&(c=x(B,c,function(a,b){return x(h,b,function(b){return encodeURIComponent(a)+(b!=g?"="+encodeURIComponent(b):"")})}).join("&")),c==g||/post/i.test(a)||(b+="?"+c,c=g),e.open(a,b,t,d.user,d.pass),j&&/post/i.test(a)&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),B(d.headers,function(a,b){e.setRequestHeader(a,b)}),B(d.xhr,function(a,b){e[a]=b}),e.onreadystatechange=function(){4!=e.readyState||f++||(200==e.status?i(t,[e.responseText,e.responseXML]):i(z,[e.status,e.statusText,e.responseText]))},e.send(c)}catch(k){f||i(z,[0,g,E(k)])}return i},toJSON:function a(b){return b==g?""+b:w(b=b.valueOf())?'"'+n(b,/[\\\"\x00-\x1f\x22\x5c\u2028\u2029]/g,V)+'"':F(b)?"["+x(h,b,a).join()+"]":"object"==typeof b?"{"+x(B,b,function(b,c){return a(b)+":"+a(c)}).join()+"}":E(b)},parseJSON:s.JSON?s.JSON.parse:function(b){return b=n(b,/[\x00\xad\u0600-\uffff]/g,V),/^[[\],:{}\s]*$/.test(n(n(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g))?eval("("+b+")"):void 0},ready:Y,loop:function(a){var b={b:a,c:+new Date,a:function(){P(U,b)}};return 2>U.push(b)&&function c(){h(U,function(a){a.b(Math.max(0,+new Date-a.c),a.a)}).length&&da(c)}(),b.a},off:function(a){h(a.M,function(a){y?(a.e.detachEvent("on"+a.n,a.h),P(D[a.e.Mid],a)):(a.e.removeEventListener(a.n,a.h,z),P(a.e.M,a))}),a.M=g}},function(a,b){r[a]=b}),y?(q.attachEvent("onreadystatechange",function(){/^[ic]/.test(q.readyState)&&S()}),s.attachEvent("onload",S)):q.addEventListener("DOMContentLoaded",S,z),s.d=function(){h(D,R)},{$:r,$$:function(a){return C(a)[0]},EE:Z,M:G}});