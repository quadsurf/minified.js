/^u/.test(typeof define)&&function(a){var b=this.require=function(b){return a[b]};this.define=function(c,d){a[c]=a[c]||d(b)}}({}),define("minified",function(){function w(a){return null!=a?""+a:""}function B(a,b){return b.test(typeof a)}function r(a){return B(a,/^str/)}function y(a){return a&&a.nodeType}function ca(a){return a}function H(a,b){k(a,function(a){a(b)})}function u(a,b){for(var c in a)b(c,a[c])}function F(a,b){var c=[];return k(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function t(a,b,c){var d=[];return a(b,function(a,e){k(c.call(b,a,e),function(a){d.push(a)})}),d}function l(a,b,c){return w(a).replace(b,c||"")}function k(a,b){if(C(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else null!=a&&b(a,0);return a}function T(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function n(a){return"function"==typeof a&&!a.item}function C(a){return a&&null!=a.length&&!r(a)&&!y(a)&&!n(a)&&a!==q}function U(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function I(a){return parseFloat(l(a,/^[^\d-]+/))}function J(a){return a.Nia=a.Nia||++V}function M(a,b){var c,d=[],e={};return k(a,function(a){k(b(a),function(a){e[c=J(a)]||(d.push(a),e[c]=!0)})}),d}function W(a,b){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:null},d=a.get(c),c=a.set(c).get("clientHeight");return a.set(d),c*b+"px"}function da(a,b,c,d,e,f){return function(g,h){var i,j=g||q.event,k=!f,l=h||j.target||j.srcElement;if(f)for(;l&&l!=b&&!(k=f(l));)l=l.parentNode;return k&&(i=(!a.apply(p(f?l:b),c||[j,d])||""==e)&&"|"!=e)&&!h&&(j.preventDefault&&(j.preventDefault(),j.stopPropagation()),j.cancelBubble=!0),!i}}function N(a,b){k(b,function(a){a.element.detachEvent("on"+a.a,a.b)})}function Y(a){G?G.push(a):setTimeout(a,0)}function O(a){return t(k,a,function(a){return C(a)?O(a):(y(a)&&(a=a.cloneNode(!0),a.removeAttribute&&a.removeAttribute("id")),a)})}function p(a,b,c){return n(a)?Y(a):new x(z(a,b,c))}function z(a,b,c){function d(a){return a=t(k,a,function b(a){return C(a)?t(k,a,b):a}),f?F(a,function(a){for(;a=a.parentNode;)if(a==f||c)return a==f}):a}function e(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var f,g,h,i;return b&&1!=(b=z(b)).length?M(b,function(b){return z(a,b,c)}):(f=b&&b[0],r(a)?f&&1!=y(f)?[]:1<(b=a.split(/\s*,\s*/)).length?M(b,function(a){return z(a,f,c)}):(b=/(\S+)\s+(.+)$/.exec(a))?z(b[2],z(b[1],f),c):a!=(b=l(a,/^#/))?d(document.getElementById(b)):(g=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1],i=b[2],b=(h=document.getElementsByClassName&&i)?(f||document).getElementsByClassName(i):(f||document).getElementsByTagName(g||"*"),(g=h?g:i)&&(b=F(b,e(g,h?"tagName":"className"))),c?d(b):b):d(a))}function K(a,b){function c(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var d,e,f={},g=f;return n(a)?a:B(a,/^num/)?function(b,c){return c==a}:!a||"*"==a||r(a)&&(g=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(d=c(g[1],"tagName"),e=c(g[2],"className"),function(a){return 1==y(a)&&d(a)&&e(a)}):b?function(c){return null!=p(a,b).find(c)}:(p(a).each(function(a){f[J(a)]=!0}),function(a){return f[J(a)]})}function Z(a){var b=K(a);return function(a){return b(a)?null:!0}}function P(){function a(a,e){function f(){var d=b?a:e;n(d)?(d=d.apply(aa,c))&&d.then?d.then(function(a){g.fire(!0,[a])},function(a){g.fire(!1,[a])}):g.fire(!0,[d]):g.fire(b,c)}var g=P();return null==b?d.push(f):setTimeout(f,0),g}var b,c,d=[];return{fire:function(a,e){null==b&&(b=a,c=e,setTimeout(function(){H(d)},0))},then:a,error:function(b){return a(0,b)}}}function x(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var aa,ba,q=window,Q={},R={},V=1,A={},G=/^[ic]/.test(document.readyState)?null:[],L={},S=0,v=!!document.all&&!document.addEventListener;return u({each:function(a){return k(this,a)},filter:function(a){return new x(F(this,a))},collect:function(a){return new x(t(k,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return new x(F(this,function(a,b){return b>=c&&d>b}))},find:function(a,b){for(var c,d=n(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if(null!=(c=d.call(this,this[e],e)))return c},remove:function(){k(this,function(a){v&&1==y(a)&&(k(z("*",a),function(a){N(0,A[a.Nia]),delete A[a.Nia]}),N(0,A[a.Nia]),delete A[a.Nia]),a.parentNode.removeChild(a)})},text:function(){function a(b){var c=y(b);return 1==c?t(k,b.childNodes,a):5>c?b.data:null}return t(k,this,a).join("")},trav:function(a,b,c){var d=B(b,/^num/),e=K(d?null:b),f=d?b:c;return new x(M(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},next:function(a,b){return this.trav("nextSibling",a,b||1)},up:function(a,b){return this.trav("parentNode",a,b||1)},select:function(a,b){return p(a,this,b)},is:function(a){return!this.find(Z(a))},only:function(a){return new x(F(this,K(a)))},not:function(a){return new x(F(this,Z(a)))},get:function(a,b){var c,d,e,f,g=this,h=g[0];return h?r(a)?(c=/^(\W*)(.*)/.exec(l(a,/^%/,"@data-")),d=c[1],e=R[d]?R[d](this,c[2]):"$"==a?g.get("className"):"$$"==a?v?h.style.cssText:g.get("@style"):"$$slide"==a?g.get("$height"):"$$fade"==a||"$$show"==a?"hidden"==g.get("$visibility")||"none"==g.get("$display")?0:"$$fade"==a?v?isNaN(g.get("$filter",!0))?1:g.get("$filter",!0)/100:isNaN(g.get("$opacity",!0))?1:g.get("$opacity",!0):1:"$$scrollX"==a?null!=q.pageXOffset?q.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft:"$$scrollY"==a?null!=q.pageXOffset?q.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:"$"==d?q.getComputedStyle?q.getComputedStyle(h,null).getPropertyValue(l(c[2],/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(h.currentStyle||h.style)[l(c[2],/^float$/,"cssFloat")]:"@"==d?h.getAttribute(c[2]):h[c[2]],b?I(e):e):(f={},(C(a)?k:u)(a,function(a){f[a]=g.get(a,b)}),f):void 0},set:function(a,b){var c,d,e=this;return b!==aa?(c=/^(\W*)(.*)/.exec(l(l(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),d=c[1],Q[d]?Q[d](this,c[2],b):"$$fade"==a?e.set({$visibility:b?"visible":"hidden"}).set(v?1>b?{$filter:"alpha(opacity = "+100*b+")",$zoom:1}:{$filter:""}:{$opacity:b}):"$$slide"==a?e.set({$visibility:b?"visible":"hidden",$overflow:"hidden",$height:/px/.test(b)?b:function(a,c,d){return W(p(d),b)}}):"$$show"==a?b?e.set({$visibility:b?"visible":"hidden",$display:""}).set({$display:function(a){return"none"==a?"block":a}}):e.set({$display:"none"}):"$$"==a?v?e.set("$cssText",b):e.set("@style",b):k(this,function(e,f){var g=n(b)?b(p(e).get(a),f,e):b;"$"==d?c[2]?e.style[c[2]]=g:k(g&&g.split(/\s+/),function(a){var b=l(a,/^[+-]/),c=e.className||"",d=l(c,RegExp("(^|\\s+)"+b+"(?=$|\\s)"));(/^\+/.test(a)||b==a&&c==d)&&(d+=" "+b),e.className=l(d,/^\s+/g)}):"$$scrollX"==a?e.scroll(g,p(e).get("$$scrollY")):"$$scrollY"==a?e.scroll(p(e).get("$$scrollX"),g):"@"==d?null==g?e.removeAttribute(c[2]):e.setAttribute(c[2],g):e[c[2]]=g})):r(a)||n(a)?e.set("$",a):u(a,function(a,b){e.set(a,b)}),e},show:function(){return this.set("$$show",1)},hide:function(){return this.set("$$show",0)},add:function(a,b){return this.each(function(c,d){function e(a){C(a)?k(a,e):n(a)?e(a(c,d)):null!=a&&(a=y(a)?a:document.createTextNode(a),f?f.parentNode.insertBefore(a,f.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),f=a)}var f;e(d&&!n(a)?O(a):a)})},fill:function(a){return this.each(function(a){p(a.childNodes).remove()}).add(a)},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new x(O(this))},animate:function(a,b,c){var d,e=P(),f=this,g=t(k,this,function(b,d){var e,f=p(b),g={};return u(e=f.get(a),function(c,e){var h=a[c];g[c]=n(h)?h(e,d,b):"$$slide"==c?W(f,h):h}),f.dial(e,g,c)}),h=b||500;return e.stop=function(){return e.fire(!1),d()},d=p.loop(function(a){H(g,a/h),a>=h&&(d(),e.fire(!0,[f]))}),e},dial:function(a,b,c){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(2*b+1,2):(a=a.charAt(b+1))+a,16):I(a.split(",")[b])}var e=this,f=c||0,g=n(f)?f:function(a,b,c){return c*(b-a)*(f+(1-f)*c*(3-2*c))+a};return function(c){u(a,function(a,f){var h=b[a],i=0;e.set(a,0>=c?f:c>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+")":l(h,/-?[\d.]+/,w(g(I(f),I(h),c))))})}},toggle:function(a,b,c,d){var e,f,g=this,h=!1;return b?(g.set(a),function(i){i!==h&&(f=(h=!0===i||!1===i?i:!h)?b:a,c?(e=g.animate(f,e?e.stop():c,d)).then(function(){e=null}):g.set(f))}):g.toggle(l(a,/\b(?=\w)/g,"-"),l(a,/\b(?=\w)/g,"+"))},values:function(a){var b=a||{};return this.each(function(a){var c=a.name||a.id,d=w(a.value);if(/form/i.test(a.tagName))for(c=0;c<a.elements.length;c++)p(a.elements[c]).values(b);else!c||/ox|io/i.test(a.type)&&!a.checked||(b[c]=null==b[c]?d:t(k,[b[c],d],ca))}),b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d,e){return n(b)?this.on(null,a,b,c,e):r(d)?this.on(a,b,c,null,d):this.each(function(f,g){k(a?z(a,f):f,function(a){k(w(b).split(/\s/),function(b){var f=l(b,/[?|]/),h=!!e&&("blur"==f||"focus"==f),i=da(c,a,d,g,l(b,/[^?|]/g),e&&K(e,a));b={element:a,b:i,a:f,c:h},(c.M=c.M||[]).push(b),v?(a.attachEvent("on"+b.a+(h?"in":""),i),f=J(a),(A[f]=A[f]||[]).push(b)):(a.addEventListener(f,i,h),(a.M=a.M||[]).push(b))})})})},onOver:function(a,b){var c=this,d=[];return n(b)?this.on(a,"|mouseover |mouseout",function(a,e){var f=a.relatedTarget||a.toElement,g="mouseout"!=a.type;d[e]===g||!g&&f&&(f==c[e]||p(f).up(c[e]).length)||(d[e]=g,b.call(this,g,a))}):this.onOver(null,a)},onFocus:function(a,b,c){return n(b)?this.on(a,"|blur",b,[!1],c).on(a,"|focus",b,[!0],c):this.onFocus(null,a,b)},onChange:function(a,b,c){return n(b)?this.on(a,v?"|propertychange |change |keyup |clicked":"|input |change |clicked",function(a,c){var d,e=this[0];d=v&&/select/i.test(e.tagName)?e.options[e.selectedIndex].text:/ox|io/i.test(e.type)?e.checked:e.value,d!=e.NiaP&&b.call(this,e.NiaP=d,c)},c):this.onChange(null,a,b)},onClick:function(a,b,c,d){return n(b)?this.on(a,"click",b,c,d):this.onClick(null,a,b,c)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)k(v?A[e.Nia]:e.M,function(e){e.a==a&&(d=d||!e.b(b,c))}),e=e.parentNode})}},function(a,b){x.prototype[a]=b}),u({request:function(a,b,c,d){d=d||{};var e,f=0,g=P(),h=c&&c.constructor==d.constructor;try{g.xhr=e=q.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),g.stop=function(){e.abort()},h&&(c=t(u,c,function(a,b){return t(k,b,function(b){return encodeURIComponent(a)+(null!=b?"="+encodeURIComponent(b):"")})}).join("&")),null==c||/post/i.test(a)||(b+="?"+c,c=null),e.open(a,b,!0,d.user,d.pass),h&&/post/i.test(a)&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),u(d.headers,function(a,b){e.setRequestHeader(a,b)}),u(d.xhr,function(a,b){e[a]=b}),e.onreadystatechange=function(){4!=e.readyState||f++||(200<=e.status&&300>e.status?g.fire(!0,[e.responseText,e]):g.fire(!1,[e.status,e.responseText,e]))},e.send(c)}catch(i){f||g.fire(!1,[0,null,w(i)])}return g},toJSON:function a(b){return null==b?""+b:r(b=b.valueOf())?'"'+l(b,/[\\\"\x00-\x1f\u2028\u2029]/g,T)+'"':C(b)?"["+t(k,b,a).join()+"]":B(b,/^ob/)?"{"+t(u,b,function(b,c){return a(b)+":"+a(c)}).join()+"}":w(b)},parseJSON:q.JSON?q.JSON.parse:function(b){return b=l(b,/[\x00\xad\u0600-\uffff]/g,T),/^[[\],:{}\s]*$/.test(l(l(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g))?eval("("+b+")"):void 0},ready:Y,loop:function(a){function b(a){u(L,function(b,c){c(a)}),S&&g(b)}function c(){return L[f]&&(delete L[f],S--),e}var d,e=0,f=V++,g=q.requestAnimationFrame||function(a){setTimeout(function(){a(+new Date)},33)};return L[f]=function(b){d=d||b,a(e=b-d,c)},S++||g(b),c},off:function(a){k(a.M,function(a){v?(a.element.detachEvent("on"+a.a+(a.c?"in":""),a.b),U(A[a.element.Nia],a)):(a.element.removeEventListener(a.a,a.b,a.c),U(a.element.M,a))}),a.M=null}},function(a,b){p[a]=b}),v?(ba=function(){H(G),G=null},document.attachEvent("onreadystatechange",function(){/^[ic]/.test(document.readyState)&&ba()}),q.attachEvent("onload",ba)):document.addEventListener("DOMContentLoaded",function(){H(G),G=null},!1),q.f=function(){k(A,N)},{$:p,$$:function(a,b,c){return z(a,b,c)[0]},EE:function(a,b,c){return a=p(document.createElement(a)),C(b)||!B(b,/^ob/)?a.add(b):a.set(b).add(c)},M:x,getter:R,setter:Q}});