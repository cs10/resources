// Concatenation of all CS10 JS Files.

/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});


//! moment.js
//! version : 2.8.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function d(a){rb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function e(a,b){var c=!0;return l(function(){return c&&(d(a),c=!1),b.apply(this,arguments)},b)}function f(a,b){nc[a]||(d(b),nc[a]=!0)}function g(a,b){return function(c){return o(a.call(this,c),b)}}function h(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function i(){}function j(a,b){b!==!1&&E(a),m(this,a),this._d=new Date(+a._d)}function k(a){var b=x(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=rb.localeData(),this._bubble()}function l(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function m(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Fb.length>0)for(c in Fb)d=Fb[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function n(a){return 0>a?Math.ceil(a):Math.floor(a)}function o(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function p(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function q(a,b){var c;return b=J(b,a),a.isBefore(b)?c=p(a,b):(c=p(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function r(a,b){return function(c,d){var e,g;return null===d||isNaN(+d)||(f(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),g=c,c=d,d=g),c="string"==typeof c?+c:c,e=rb.duration(c,d),s(this,e,a),this}}function s(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&lb(a,"Date",kb(a,"Date")+f*c),g&&jb(a,kb(a,"Month")+g*c),d&&rb.updateOffset(a,f||g)}function t(a){return"[object Array]"===Object.prototype.toString.call(a)}function u(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&z(a[d])!==z(b[d]))&&g++;return g+f}function w(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=gc[a]||hc[b]||b}return a}function x(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=w(c),b&&(d[b]=a[c]));return d}function y(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}rb[b]=function(e,f){var g,h,i=rb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=rb().utc().set(d,a);return i.call(rb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function z(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function A(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function B(a,b,c){return fb(rb([a,11,31+b-c]),b,c).week}function C(a){return D(a)?366:365}function D(a){return a%4===0&&a%100!==0||a%400===0}function E(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[yb]<0||a._a[yb]>11?yb:a._a[zb]<1||a._a[zb]>A(a._a[xb],a._a[yb])?zb:a._a[Ab]<0||a._a[Ab]>23?Ab:a._a[Bb]<0||a._a[Bb]>59?Bb:a._a[Cb]<0||a._a[Cb]>59?Cb:a._a[Db]<0||a._a[Db]>999?Db:-1,a._pf._overflowDayOfYear&&(xb>b||b>zb)&&(b=zb),a._pf.overflow=b)}function F(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function G(a){return a?a.toLowerCase().replace("_","-"):a}function H(a){for(var b,c,d,e,f=0;f<a.length;){for(e=G(a[f]).split("-"),b=e.length,c=G(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=I(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--}f++}return null}function I(a){var b=null;if(!Eb[a]&&Gb)try{b=rb.locale(),require("./locale/"+a),rb.locale(b)}catch(c){}return Eb[a]}function J(a,b){return b._isUTC?rb(a).zone(b._offset||0):rb(a).local()}function K(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function L(a){var b,c,d=a.match(Kb);for(b=0,c=d.length;c>b;b++)d[b]=mc[d[b]]?mc[d[b]]:K(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function M(a,b){return a.isValid()?(b=N(b,a.localeData()),ic[b]||(ic[b]=L(b)),ic[b](a)):a.localeData().invalidDate()}function N(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Lb.lastIndex=0;d>=0&&Lb.test(a);)a=a.replace(Lb,c),Lb.lastIndex=0,d-=1;return a}function O(a,b){var c,d=b._strict;switch(a){case"Q":return Wb;case"DDDD":return Yb;case"YYYY":case"GGGG":case"gggg":return d?Zb:Ob;case"Y":case"G":case"g":return _b;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?$b:Pb;case"S":if(d)return Wb;case"SS":if(d)return Xb;case"SSS":if(d)return Yb;case"DDD":return Nb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Rb;case"a":case"A":return b._locale._meridiemParse;case"X":return Ub;case"Z":case"ZZ":return Sb;case"T":return Tb;case"SSSS":return Qb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Xb:Mb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Mb;case"Do":return Vb;default:return c=new RegExp(X(W(a.replace("\\","")),"i"))}}function P(a){a=a||"";var b=a.match(Sb)||[],c=b[b.length-1]||[],d=(c+"").match(ec)||["-",0,0],e=+(60*d[1])+z(d[2]);return"+"===d[0]?-e:e}function Q(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[yb]=3*(z(b)-1));break;case"M":case"MM":null!=b&&(e[yb]=z(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b),null!=d?e[yb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[zb]=z(b));break;case"Do":null!=b&&(e[zb]=z(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=z(b));break;case"YY":e[xb]=rb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[xb]=z(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"H":case"HH":case"h":case"hh":e[Ab]=z(b);break;case"m":case"mm":e[Bb]=z(b);break;case"s":case"ss":e[Cb]=z(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Db]=z(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=P(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=z(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=rb.parseTwoDigitYear(b)}}function R(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[xb],fb(rb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[xb],fb(rb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=gb(d,e,f,h,g),a._a[xb]=i.year,a._dayOfYear=i.dayOfYear}function S(a){var c,d,e,f,g=[];if(!a._d){for(e=U(a),a._w&&null==a._a[zb]&&null==a._a[yb]&&R(a),a._dayOfYear&&(f=b(a._a[xb],e[xb]),a._dayOfYear>C(f)&&(a._pf._overflowDayOfYear=!0),d=bb(f,0,a._dayOfYear),a._a[yb]=d.getUTCMonth(),a._a[zb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];a._d=(a._useUTC?bb:ab).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm)}}function T(a){var b;a._d||(b=x(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],S(a))}function U(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function V(a){if(a._f===rb.ISO_8601)return void Z(a);a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=""+a._i,h=g.length,i=0;for(d=N(a._f,a._locale).match(Kb)||[],b=0;b<d.length;b++)e=d[b],c=(g.match(O(e,a))||[])[0],c&&(f=g.substr(0,g.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),g=g.slice(g.indexOf(c)+c.length),i+=c.length),mc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),Q(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=h-i,g.length>0&&a._pf.unusedInput.push(g),a._isPm&&a._a[Ab]<12&&(a._a[Ab]+=12),a._isPm===!1&&12===a._a[Ab]&&(a._a[Ab]=0),S(a),E(a)}function W(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function X(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Y(a){var b,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=m({},a),b._pf=c(),b._f=a._f[f],V(b),F(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,d=b));l(a,d||b)}function Z(a){var b,c,d=a._i,e=ac.exec(d);if(e){for(a._pf.iso=!0,b=0,c=cc.length;c>b;b++)if(cc[b][1].exec(d)){a._f=cc[b][0]+(e[6]||" ");break}for(b=0,c=dc.length;c>b;b++)if(dc[b][1].exec(d)){a._f+=dc[b][0];break}d.match(Sb)&&(a._f+="Z"),V(a)}else a._isValid=!1}function $(a){Z(a),a._isValid===!1&&(delete a._isValid,rb.createFromInputFallback(a))}function _(b){var c,d=b._i;d===a?b._d=new Date:u(d)?b._d=new Date(+d):null!==(c=Hb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?$(b):t(d)?(b._a=d.slice(0),S(b)):"object"==typeof d?T(b):"number"==typeof d?b._d=new Date(d):rb.createFromInputFallback(b)}function ab(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function bb(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function cb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function db(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function eb(a,b,c){var d=rb.duration(a).abs(),e=wb(d.as("s")),f=wb(d.as("m")),g=wb(d.as("h")),h=wb(d.as("d")),i=wb(d.as("M")),j=wb(d.as("y")),k=e<jc.s&&["s",e]||1===f&&["m"]||f<jc.m&&["mm",f]||1===g&&["h"]||g<jc.h&&["hh",g]||1===h&&["d"]||h<jc.d&&["dd",h]||1===i&&["M"]||i<jc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,db.apply({},k)}function fb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=rb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function gb(a,b,c,d,e){var f,g,h=bb(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:C(a-1)+g}}function hb(b){var c=b._i,d=b._f;return b._locale=b._locale||rb.localeData(b._l),null===c||d===a&&""===c?rb.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=b._locale.preparse(c)),rb.isMoment(c)?new j(c,!0):(d?t(d)?Y(b):V(b):_(b),new j(b)))}function ib(a,b){var c,d;if(1===b.length&&t(b[0])&&(b=b[0]),!b.length)return rb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function jb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),A(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function kb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function lb(a,b,c){return"Month"===b?jb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function mb(a,b){return function(c){return null!=c?(lb(this,a,c),rb.updateOffset(this,b),this):kb(this,a)}}function nb(a){return 400*a/146097}function ob(a){return 146097*a/400}function pb(a){rb.duration.fn[a]=function(){return this._data[a]}}function qb(a){"undefined"==typeof ender&&(sb=vb.moment,vb.moment=a?e("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",rb):rb)}for(var rb,sb,tb,ub="2.8.1",vb="undefined"!=typeof global?global:this,wb=Math.round,xb=0,yb=1,zb=2,Ab=3,Bb=4,Cb=5,Db=6,Eb={},Fb=[],Gb="undefined"!=typeof module&&module.exports,Hb=/^\/?Date\((\-?\d+)/i,Ib=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Jb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Kb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Lb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Mb=/\d\d?/,Nb=/\d{1,3}/,Ob=/\d{1,4}/,Pb=/[+\-]?\d{1,6}/,Qb=/\d+/,Rb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Sb=/Z|[\+\-]\d\d:?\d\d/gi,Tb=/T/i,Ub=/[\+\-]?\d+(\.\d{1,3})?/,Vb=/\d{1,2}/,Wb=/\d/,Xb=/\d\d/,Yb=/\d{3}/,Zb=/\d{4}/,$b=/[+-]?\d{6}/,_b=/[+-]?\d+/,ac=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,bc="YYYY-MM-DDTHH:mm:ssZ",cc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],dc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ec=/([\+\-]|\d\d)/gi,fc=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),gc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},hc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},ic={},jc={s:45,m:45,h:22,d:26,M:11},kc="DDD w W M D d".split(" "),lc="M D H h m s w W".split(" "),mc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return o(this.year()%100,2)},YYYY:function(){return o(this.year(),4)},YYYYY:function(){return o(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+o(Math.abs(a),6)},gg:function(){return o(this.weekYear()%100,2)},gggg:function(){return o(this.weekYear(),4)},ggggg:function(){return o(this.weekYear(),5)},GG:function(){return o(this.isoWeekYear()%100,2)},GGGG:function(){return o(this.isoWeekYear(),4)},GGGGG:function(){return o(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return z(this.milliseconds()/100)},SS:function(){return o(z(this.milliseconds()/10),2)},SSS:function(){return o(this.milliseconds(),3)},SSSS:function(){return o(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+o(z(a/60),2)+":"+o(z(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+o(z(a/60),2)+o(z(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},nc={},oc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];kc.length;)tb=kc.pop(),mc[tb+"o"]=h(mc[tb],tb);for(;lc.length;)tb=lc.pop(),mc[tb+tb]=g(mc[tb],2);mc.DDDD=g(mc.DDD,3),l(i.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=rb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=rb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return fb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),rb=function(b,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=c(),hb(g)},rb.suppressDeprecationWarnings=!1,rb.createFromInputFallback=e("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),rb.min=function(){var a=[].slice.call(arguments,0);return ib("isBefore",a)},rb.max=function(){var a=[].slice.call(arguments,0);return ib("isAfter",a)},rb.utc=function(b,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=d,g._strict=f,g._pf=c(),hb(g).utc()},rb.unix=function(a){return rb(1e3*a)},rb.duration=function(a,b){var c,d,e,f,g=a,h=null;return rb.isDuration(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=Ib.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:z(h[zb])*c,h:z(h[Ab])*c,m:z(h[Bb])*c,s:z(h[Cb])*c,ms:z(h[Db])*c}):(h=Jb.exec(a))?(c="-"===h[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},g={y:e(h[2]),M:e(h[3]),d:e(h[4]),h:e(h[5]),m:e(h[6]),s:e(h[7]),w:e(h[8])}):"object"==typeof g&&("from"in g||"to"in g)&&(f=q(rb(g.from),rb(g.to)),g={},g.ms=f.milliseconds,g.M=f.months),d=new k(g),rb.isDuration(a)&&a.hasOwnProperty("_locale")&&(d._locale=a._locale),d},rb.version=ub,rb.defaultFormat=bc,rb.ISO_8601=function(){},rb.momentProperties=Fb,rb.updateOffset=function(){},rb.relativeTimeThreshold=function(b,c){return jc[b]===a?!1:c===a?jc[b]:(jc[b]=c,!0)},rb.lang=e("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return rb.locale(a,b)}),rb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?rb.defineLocale(a,b):rb.localeData(a),c&&(rb.duration._locale=rb._locale=c)),rb._locale._abbr},rb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Eb[a]||(Eb[a]=new i),Eb[a].set(b),rb.locale(a),Eb[a]):(delete Eb[a],null)},rb.langData=e("moment.langData is deprecated. Use moment.localeData instead.",function(a){return rb.localeData(a)}),rb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return rb._locale;if(!t(a)){if(b=I(a))return b;a=[a]}return H(a)},rb.isMoment=function(a){return a instanceof j||null!=a&&a.hasOwnProperty("_isAMomentObject")},rb.isDuration=function(a){return a instanceof k};for(tb=oc.length-1;tb>=0;--tb)y(oc[tb]);rb.normalizeUnits=function(a){return w(a)},rb.invalid=function(a){var b=rb.utc(0/0);return null!=a?l(b._pf,a):b._pf.userInvalidated=!0,b},rb.parseZone=function(){return rb.apply(null,arguments).parseZone()},rb.parseTwoDigitYear=function(a){return z(a)+(z(a)>68?1900:2e3)},l(rb.fn=j.prototype,{clone:function(){return rb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=rb(this).utc();return 0<a.year()&&a.year()<=9999?M(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):M(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return F(this)},isDSTShifted:function(){return this._a?this.isValid()&&v(this._a,(this._isUTC?rb.utc(this._a):rb(this._a)).toArray())>0:!1},parsingFlags:function(){return l({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._d.getTimezoneOffset(),"m")),this},format:function(a){var b=M(this,a||rb.defaultFormat);return this.localeData().postformat(b)},add:r(1,"add"),subtract:r(-1,"subtract"),diff:function(a,b,c){var d,e,f=J(a,this),g=6e4*(this.zone()-f.zone());return b=w(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-rb(this).startOf("month")-(f-rb(f).startOf("month")))/d,e-=6e4*(this.zone()-rb(this).startOf("month").zone()-(f.zone()-rb(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:n(e)},from:function(a,b){return rb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(rb(),a)},calendar:function(a){var b=a||rb(),c=J(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this))},isLeapYear:function(){return D(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=cb(a,this.localeData()),this.add(a-b,"d")):b},month:mb("Month",!0),startOf:function(a){switch(a=w(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=w(a),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+rb(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+rb(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+J(a,this).startOf(b)},min:e("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=rb.apply(null,arguments),this>a?this:a}),max:e("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=rb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._d.getTimezoneOffset():("string"==typeof a&&(a=P(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._d.getTimezoneOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?s(this,rb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,rb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?rb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return A(this.year(),this.month())},dayOfYear:function(a){var b=wb((rb(this).startOf("day")-rb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=fb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=fb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=fb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return B(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return B(this.year(),a.dow,a.doy)},get:function(a){return a=w(a),this[a]()},set:function(a,b){return a=w(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){return b===a?this._locale._abbr:(this._locale=rb.localeData(b),this)},lang:e("moment().lang() is deprecated. Use moment().localeData() instead.",function(b){return b===a?this.localeData():(this._locale=rb.localeData(b),this)}),localeData:function(){return this._locale}}),rb.fn.millisecond=rb.fn.milliseconds=mb("Milliseconds",!1),rb.fn.second=rb.fn.seconds=mb("Seconds",!1),rb.fn.minute=rb.fn.minutes=mb("Minutes",!1),rb.fn.hour=rb.fn.hours=mb("Hours",!0),rb.fn.date=mb("Date",!0),rb.fn.dates=e("dates accessor is deprecated. Use date instead.",mb("Date",!0)),rb.fn.year=mb("FullYear",!0),rb.fn.years=e("years accessor is deprecated. Use year instead.",mb("FullYear",!0)),rb.fn.days=rb.fn.day,rb.fn.months=rb.fn.month,rb.fn.weeks=rb.fn.week,rb.fn.isoWeeks=rb.fn.isoWeek,rb.fn.quarters=rb.fn.quarter,rb.fn.toJSON=rb.fn.toISOString,l(rb.duration.fn=k.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=n(d/1e3),g.seconds=a%60,b=n(a/60),g.minutes=b%60,c=n(b/60),g.hours=c%24,e+=n(c/24),h=n(nb(e)),e-=n(ob(h)),f+=n(e/30),e%=30,h+=n(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return n(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*z(this._months/12)},humanize:function(a){var b=eb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=rb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=rb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=w(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=w(a),b=this._days+this._milliseconds/864e5,"month"===a||"year"===a)return c=this._months+12*nb(b),"month"===a?c:c/12;switch(b+=ob(this._months/12),a){case"week":return b/7;case"day":return b;case"hour":return 24*b;case"minute":return 24*b*60;case"second":return 24*b*60*60;case"millisecond":return 24*b*60*60*1e3;default:throw new Error("Unknown unit "+a)}},lang:rb.fn.lang,locale:rb.fn.locale,toIsoString:e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}});for(tb in fc)fc.hasOwnProperty(tb)&&pb(tb.toLowerCase());rb.duration.fn.asMilliseconds=function(){return this.as("ms")},rb.duration.fn.asSeconds=function(){return this.as("s")},rb.duration.fn.asMinutes=function(){return this.as("m")},rb.duration.fn.asHours=function(){return this.as("h")},rb.duration.fn.asDays=function(){return this.as("d")},rb.duration.fn.asWeeks=function(){return this.as("weeks")},rb.duration.fn.asMonths=function(){return this.as("M")},rb.duration.fn.asYears=function(){return this.as("y")},rb.locale("en",{ordinal:function(a){var b=a%10,c=1===z(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Gb?module.exports=rb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(vb.moment=sb),rb}),qb(!0)):qb()}).call(this);

// Note this much come before the full Calendar script.
var cs10 = cs10 || {};

// Sunday at the start of the semester
cs10.startDate = '2015-01-18';
cs10.endDate   = '2015-05-16';

cs10.bCoursesID = '1301472';

cs10.gradingScheme = {
    'A+': 485,
    'A' : 470,
    'A-': 450,
    'B+': 445,
    'B' : 420,
    'B-': 400,
    'C+': 385,
    'C' : 370,
    'C-': 350,
    'D' : 300,
    'F' : '<= 299'
};

// ==================================================
// ==========     OBJECT CREATION          ==========
// ==================================================
// Return the week of the course in range [1, 17] else -1
function getWeekOfDate(date) {
    var now = new Date();
    var from = date;
    if (typeof from === 'string') {
        from = new Date(date);
    }

    var dist = from - now;

    if (dist < 0) {
        return -1;
    }

    var weeks = Math.floor(dist / (MS_DAY * 7));

    return weeks <= 17 ? weeks : -1;
}


cs10.newLabObject = function(title, url, rq, video) {
    // FIXME -- better handle the URL via config
    var baseURL = 'http://beautyjoy.github.io/bjc-r/llab/html/topic.html?topic=';
    var urlEnd  = '&novideo&noreading&noassingment&course=cs10_sp15.html';
    var lab = { type: 'Lab' };
    lab.title = title;

    // Global Counter for lecture
    cs10.rqCounter = cs10.rqCounter || 0;

    if (!title) {
        lab.title = 'No Lab';
    }

    if (url) {
        lab.url = baseURL + url + urlEnd;
    }

    if (rq) {
        cs10.rqCounter += 1;
        rq = cs10.rqCounter;
    }

    if (title.indexOf('Project Work') !== -1) {
        lab.classes = 'project';
    }

    if (title.indexOf('No Lab') !== -1 || title.indexOf('No Class') !== -1) {
        lab.classes = 'noClass';
    }

    lab.RQ = rq;

    lab.video = video;
    return lab;
};

cs10.newReadingsObject = function(title, url, classes) {
    var reading = {
        type: 'Reading',
        title: title,
        url: url
    };

    if (!classes) {
        classes = 'required'; // Default option
    }

    reading.classes = 'reading ' + classes;

    return reading;
};

cs10.newLectureObject = function(title, path, videoURL, guest) {
    var lect = { type: 'Lecture' };

    lect.title = title;
    if (!title) {
        lect.title = 'No Lecture';
        return lect;
    }

    if (title.indexOf('No Lecture') !== -1 || title.indexOf('No Class') !== -1) {
        lect.classes = 'noClass';
    }
    if (path) {
        lect.url = 'lecture/' + path + '/';
    }

    lect.guest = guest;
    lect.video = videoURL;
    return lect;
};

cs10.newDiscussionObject = function(title, files) {
    var disc = { type: 'Discussion' };

    disc.title = title;
    if (!title) {
        disc.title = 'No Discussion';
    }

    if (title.indexOf('No Discussion') !== -1 || title.indexOf('No Class') !== -1) {
        disc.classes = 'noClass';
    }

    // Global Counter for discussions
    cs10.discussionCounter = cs10.discussionCounter || 0;
    cs10.discussionCounter += 1;

    if (files) {
        var count = cs10.discussionCounter;
        disc.url = 'discussion/' + (count < 10 ? '0' : '') + count + '/';
    }

    return disc;
};

cs10.newHomeworkObject = function(title, due, submission, spec, notes) {
    var obj = { type: 'Homework' };

    // TODO: Consider refactoring this....
    if (!title) {
        obj.title = 'No Homework!<br />But you might want to check next week\'s';
        return obj;
    }

    obj.title = title;

    // TODO:
    // Consider setting due date from bCourses data?
    if (due) {
        obj.classes = 'due';
        obj.due = due;
    }

    if (spec) {
        obj.spec = spec;
    }

    if (submission) {
        obj.url = 'https://bcourses.berkeley.edu/courses/' + cs10.bCoursesID +
                  '/' + submission;
    }

    return obj;
};

// ==================================================
// ==========     RENDERING CODE           ==========
// ==================================================

cs10.renderObject = function(obj) {
    obj.classes = obj.classes || ' ';
    var html = $(document.createElement('div')).attr(
        { 'class': obj.classes }
    );

    var heading = $(document.createElement('h3')).html(obj.type);
    html.append(heading);
    var content;
    if (obj.url) {
        content = $(document.createElement('a')).attr(
            { 'href': obj.url}).html(obj.title);
    } else {
        content = $(document.createElement('span')).html(obj.title);
    }
    if (obj.video) {
        content.append('<br />');
        var video = $(document.createElement('a')).attr(
            { 'href': obj.video,
              'target': '_blank'
            }).html('Watch a video here.');
        content.append(video);
    }
    if (obj.RQ) {
        content.append('<br />');
        content.append($(document.createElement('b')).html('Reading Quiz ' +
        obj.RQ));
    }

    html.append(content);
    return html.html();
};

cs10.schedule = [];
cs10.buildCal = function() {
    var calDiv     = $('#main-cal'),
        calPills   = $('#cal-sidebar'),
        calContent = $('#cal-content'),
        pillsList  = '',
        calData    = '',
        selector, title, i = 1;

    for (; i <= 17; i += 1) {
        cs10.schedule.push(cs10['week' + i]);
        selector = 'cal-week-' + i;
        title = 'Week ' + i;
        // TODO: Add the date.
        pillsList += '<li><a href="#' + selector +
        '" target="' + selector + '" role="tab" data-toggle="tab">' + title + '</a></li>\n';
    }

    /* Bootstrap div format:
     * <div class="tab-pane active" id="home"></div>
     */
    var week, weekStr, isActive;
    for (i = 0; i < 17; i += 1) {
        // TODO this should be the current week of the school year.
        isActive = i === 0 ? 'active' : '';
        selector = 'cal-week-' + (i + 1);
        week = cs10.schedule[i].map(cs10.renderObject);
        weekStr = week.join('\n');
        calData += '<div class="tab-pane ' + isActive + '" id="' + selector +
        '">' + weekStr + '</div>\n';
    }
    calPills.html(pillsList);
    calContent.html(calData);
};


// REQUIRES MOMENTJS
cs10.getWeekStartDate = function(week) {
    var start = moment(cs10.startDate);

    return start.add((week - 1) * 7 + 1, 'd');
}

cs10.renderTableCalendar = function() {
    var result = $('<tbody>');
    var table = $('.calendar.table');
    if (table.length === 0) { return; }
    for(var i = 1; i < 18; i += 1) {
        result.append(cs10.renderTableRow(i, cs10['week' + i]));
    }
    table.append(result);
};

// This renders a single week in the large semester calendar.
cs10.renderTableRow = function(week, data) {
    var result = $('<tr>').addClass('cal');

    // TODO: Special Case For data.special
    // TODO: Handle Exams (data.exams)

    result.append($('<td>').html(week))                     // Week Number
          .append($('<td>').html(cs10.getDateString(week))) // Dates
          .append(cs10.renderTableReading(data.readings))   // Readings
          .append(cs10.renderTableLecture(data.lectM))      // Mon Lecture
          .append(cs10.renderTableLab(data.labA))           // 1st Lab
          .append(cs10.renderTableLecture(data.lectW))      // Wed Lecture
          .append(cs10.renderTableLab(data.labB))           // 2nd Lab
          .append(cs10.renderTableDiscussion(data.disc))    // Discussion
          .append(cs10.renderTableHW(data.hw));             // Assignments

    return result;
};

cs10.getDateString = function(week) {
    var start = cs10.getWeekStartDate(week);
    var end   = moment(start).add(5, 'd');
    return (start.month() + 1) + '-' + start.date() + ' to ' +
            (end.month() + 1) + '-' + end.date();
};

cs10.renderTableReading = function(readings) {
    var result = $('<td>');
    if (!readings) {
        result.append('No Reading');
    } else if (typeof readings === 'string') {
        result.append(readings);
    } else {
        for (var i = 0; i < readings.length; i += 1) {
            var rd = readings[i];
            var a = $('<a>').html(rd.title).attr(
                {'class': rd.classes, 'href': rd.url, 'target': '_blank'} );
            result.append(a);
            result.append('<br>');
        }
    }
    return result;
};

cs10.renderTableLecture = function(lect) {
    var result = $('<td>');
    if (!lect) {
        result.append('No Lecture');
        result.attr({'class': 'noClass'});
    } else if (typeof lect === 'string') {
        result.append(lect);
    } else {
        if (lect.geust) {
            result.append($('<strong>').html('Guest Lecturer: ' + lect.guest));
            result.append($('<br>'));
        }
        var tag = lect.url ? '<a>' : '<span>';
        var title = $(tag).attr({'href': lect.url}).html(lect.title);
        result.append(title);
        result.append('<br>');
        if (lect.video) {
            result.append('<br>');
            result.append($('<a>').html('(Sp12 HD video with Qs)').attr(
                {'href' : lect.video, 'target' : '_blank'} ));
        }
        result.attr({ 'class' : lect.classes });
    }
    return result;
};

cs10.renderTableLab = function(lab) {
    var result = $('<td>');
    if (!lab) {
        result.append('No Lab');
        result.attr({'class': 'noClass'});
    } else if (typeof lab === 'string') {
        result.append(lab);
    } else {
        var tag = lab.url ? '<a>' : '<span>';
        var title = $(tag).html(lab.title).attr({
            'href': lab.url, 'target': '_blank'});
        result.append(title);
        result.append('<br>');
        if (lab.RQ) {
            result.append($('<br>'));
            result.append($('<strong>').html('Reading Quiz ' + lab.RQ +' (in lab)'));
        }
        result.attr({ 'class' : lab.classes });
        if (lab.video) {
            result.append($('<br>'));
            result.append($('<a>').html('(Video Review)').attr({
                'href' : lab.video, 'target' : '_blank' }));
        }
    }
    return result;
};

cs10.renderTableDiscussion = function(disc) {
    var result = $('<td>');
    if (!disc) {
        result.append('No Discussion');
        result.attr({'class': 'noClass'});
    } else if (typeof disc === 'string') {
        result.append(disc);
    } else {
        result.append(disc.title);
        result.append('<br>');
        result.attr({ 'class' : disc.classes });
        if (disc.url) {
            result.append($('<br>'));
            result.append($('<strong>').html(
                $('<a>').html('(Resources)').attr({'href' : disc.url})
            ));
        }
    }
    return result;
};

cs10.renderTableHW = function(hw) {
    var result = $('<td>');
    if (!hw) {
        result.append('No Homework');
    } else if (typeof hw === 'string') {
        result.append(hw);
    } else { // HW is a list.
        result.append(hw.title);
        result.append('<br>');
        result.attr({ 'class' : hw.classes });
        if (hw.url) {
            result.append($('<a>').html('Submit').attr(
                {'href' : hw.url, 'target' : '_blank' }));
        }
        if (hw.url && hw.spec) {
            result.append(' | ');
        }
        if (hw.spec) {
            result.append($('<a>').html('Spec').attr({'href' : hw.spec}));
        }
        if (hw.due) {
            result.append('<br>');
            result.append('<br>');
            result.append($('<i>').html('due ' + hw.due + ' at 11:59pm'));
        }
    }
    return result;
};

/* Shortcuts for creating schedule objects
 * Paramters:
 * Reading: (title, link, 'type [required is default]')
 * Lecture: (title, '[video URL]', '[Guest Name]')
 * Lab:     (title, 'topic file path', [boolean -- Reading Quiz?])
 * Disc:    (title, [boolean -- Resources available?])
 * HW:      (title, TBD...)
 * NOTE: These links are currently relative to the home page.
 */
var lab      = cs10.newLabObject,
    reading  = cs10.newReadingsObject,
    lect     = cs10.newLectureObject,
    disc     = cs10.newDiscussionObject,
    hw       = cs10.newHomeworkObject;

// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// JAN 19 - 23
cs10.week1 = {
    readings: 'No Readings',
    lectM: lect('No Lecture Monday'),
    labA: lab('No Labs Monday, Tuesday, or Wednesday morning'),
    lectW: lect('Welcome and Abstraction', '', 'https://coursesharing.org/courses/6/lectures/7'),
    labB: lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/intro_new/1-introduction.topic"),
    disc: disc('Welcome to CS10!'),
    hw: hw('HW0', '1/24', 'quizzes/1869517')
};

// JAN 26 - 30
cs10.week2 = {
    readings: [
        reading('Prof. Harvey\'s Intro to Abstraction',
                'resources/readings/BH-Abstraction.txt'),
        reading('Why Software is Eating the World',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53889491'),
        reading('Learning to Code!',
                'http://www.youtube.com/watch?v=dU1xS07N-FA',
                'optional'),
        reading('Is Abstraction the Key to Computing?',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53889492',
                'optional'),
        reading('Scratch: Programming for All',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53889490',
                'optional')
    ],
    lectM: lect('Functions'),
    labA: lab('Build Your Own Blocks', 'berkeley_bjc/intro_new/2-loops-variables.topic'),
    lectW: lect('Creativity and Abstraction'),
    labB: lab('Conditionals', 'berkeley_bjc/intro_new/3-conditionals.topic', true),
    disc: disc('Anatomy of a Computer and the Power of Binary'),
    hw: hw('HW1', '1/31')
};

// FEB 2 - 6
cs10.week3 = {
    readings: [
        reading('The Story of Alan Turing &amp; His Machine',
                'http://youtu.be/CQhrMmbiaM0'),
        reading('Designing Games with a Purpose (GWAP)',
                'http://doi.acm.org/10.1145/1378704.1378719'),
        reading('Justices Split on Violent Games',
                'http://www.nytimes.com/2011/06/28/us/28scotus.html'),
        reading('Video Games Lecture',
                'https://coursesharing.org/courses/6/lectures/11'),
        reading('(Slides)',
                '../sp12/lec/03/'),
        reading('More readings on video games',
                '../fa10/readings/videogames/extra/',
                'optional'),
        reading('Kinect\'s Future a Game Controller in Everything',
                'http://www.msnbc.msn.com/id/40077373/ns/technology_and_science-games/',
                'optional')
    ],
    lectM: lect('3D Graphics'),
    labA: lab('Functions', 'berkeley_bjc/intro_new/4-abstraction-testing.topic', true),
    lectW: lect('Programming Paradigms'),
    labB: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic'),
    disc: disc('All about lists'),
    hw: hw('HW2', '2/7')
};

// FEB 9 - 13
cs10.week4 = {
    readings: [
        reading('How Algorithms Shape Our World',
                'http://www.ted.com/talks/kevin_slavin_how_algorithms_shape_our_world.html'),
        reading('BtB Chapter 1',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter1.pdf'),
        reading('Program or Be Programmed',
                'http://tedxtalks.ted.com/video/Douglas-Rushkoff-at-TEDxNYED'),
        reading('Program or Be Programmed: A Guide',
                'http://dtc-wsuv.org/hashnextchapter/wp-content/uploads/2013/03/Rushkoff-Study-Guide.pdf',
                'optional'),
        reading('Animating a Blockbuster',
                'http://www.wired.com/magazine/2010/05/process_pixar/',
                'optional')
    ],
    lectM: lect('Algorithms', '',
                'https://coursesharing.org/courses/6/lectures/14'),
    labA: lab('Algorithms', 'berkeley_bjc/areas/algorithms.topic', true),
    lectW: lect('Algorithmic Complexity'),
    labB: lab('Algorithmic Complexity', "berkeley_bjc/areas/algorithm-complexity.topic"),
    disc: disc('Algorithmic Complexity and Quest Review'),
    hw: hw('HW2')
};

// FEB 16 - 20
cs10.week5 = {
    exam: {

    },
    readings: 'No Readings',
    lectM: lect('No Lecture (Holiday)'),
    labA: lab('No Labs Monday<br>Quest Help and Review'),
    lectW: lect('Quest In Class'),
    labB: lab('Finch Robots', 'berkeley_bjc/robots/robots.topic'),
    disc: disc('Quest Debrief and HW3 Help'),
    hw: 'Start HW 3'
};
cs10.week5.lectW.classes = 'exam';
cs10.week5.labA.classes = ''; // Remove 'noClass'


// FEB 23 - 24
cs10.week6 = {
    readings: [
        reading('BtB Chapter 2',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf'),
        reading('BtB Chapter 4 Reading Segment 1',
                '../sp12/readings/BtB4-pt1.pdf'),
        reading('BtB Chapter 4 Reading Segment 2',
                '../sp12/readings/BtB4-pt2.pdf'),
        reading('Living in a Digital World',
                'http://cacm.acm.org/magazines/2011/10/131393-living-in-a-digital-world/pdf',
                'optional'),
        reading('BtB Chapter 3',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter3.pdf',
                'optional')
    ],
    lectM: lect('Recursion I'),
    labA: lab('Trees and Fractals using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic', true),
    lectW: lect('Concurrency'),
    labB: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic'),
    disc: disc('<span style="font-size: 150%">R<sup>e<sup>c<sup>u<sup>r<sup>s<sup>i<sup>o<sup>n</sup></sup></sup></sup></sup></sup></sup></sup>'),
    hw: hw('HW3')
};

// MARCH 2 - 6 (Lauren, Dan, Michael out -- mostly)
cs10.week7 = {
    readings: [
        reading('How Moore\'s Law Works',
                'http://computer.howstuffworks.com/moores-law.htm'),
        reading('Free Lunch is Over',
                'http://www.gotw.ca/publications/concurrency-ddj.htm',
                'hard'),
        reading('What is IBM\'s Watson?',
                'http://www.nytimes.com/2010/06/20/magazine/20Computer-t.html'),
        reading('Brian Harvey\'s AI notes',
                'http://inst.eecs.berkeley.edu/~cs10/fa10/lec/21/ai.txt'),
        reading('The First Church of Robotics',
                'http://www.nytimes.com/2010/08/09/opinion/09lanier.html',
                'optional'),
        reading('The Thinking Machine (Video)',
                'http://www.youtube.com/watch?v=4gzpd0irP58',
                'optional'),
        reading('Spending Moore\'s dividend (CACM)',
                'http://doi.acm.org/10.1145/1506409.1506425',
                'optional')
    ],
    lectM: lect('Recursion II'),
    labA: lab('Recursive Reporters I', 'berkeley_bjc/recur/recursive-reporters-part1.topic', true),
    lectW: lect('Artificial Intelligence', '', '', 'A Guest'),
    labB: lab('Project Work'),
    disc: disc('Concurrency and Midterm Intro'),
    hw: hw('Start Midterm Project')
};

// MARCH 9 - 13 (Lauren, Dan, Michael partially out)
cs10.week8 = {
    readings: [
        reading('BtB Chapter 5 Reading Segment 1',
                '../sp12/readings/BtB5-pt1.pdf'),
        reading('BtB Chapter 5 Reading Segment 2',
                '../sp12/readings/BtB5-pt2.pdf'),
        reading('BtB Chapter 5 Reading Segment 3',
                '../sp12/readings/BtB5-pt3.pdf'),
        reading('BtB Chapter 6 (27-37)',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter6.pdf')
    ],
    lectM: lect('Social Implications I'),
    labA: lab('Project Work <br> Lab Review', '', true),
    lectW: lect('Social Implications II', '', '', 'Gerald Friedland'),
    labB: lab('Project Work'),
    disc: disc('Midterm Review'),
    hw: 'Work on midterm Project'
};

// MIDTERM WEEK
// MARCH 16 - 20
cs10.week9 = {
    exam: {

    },
    readings: 'No Readings',
    lectM: lect('Social Implications III', '', '', 'Brian Harvey'),
    labA: lab('Online <span class="snap">snap</span> Midterm'),
    lectW: lect('The Internet'),
    labB: lab('The Internet', 'berkeley_bjc/areas/internet.topic'),
    disc: disc('Midterm Debrief'),
    hw: hw('Midterm Project')
};
cs10.week9.labA.classes = 'exam';


// Spring Break
// MARCH 23 - 27
cs10.week10 = {
    special: 'Spring Break',
    readings: [],
    hw: 'Get Some Rest!'
};

// MARCH 30 - APRIL 3
cs10.week11 = {
    readings: [
        reading('BtB Chapter 7',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter7.pdf'),
        reading('BtB Appendix',
                '../fa13/readings/Btb_Appendix.pdf'),
        reading('BtB Chapter 8',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter8.pdf',
                'optional')
    ],
    lectM: lect('HCI', '', '', 'Eric Paulos'),
    labA: lab('Tic Tac Toe', 'berkeley_bjc/lists/tic-tac-toe.topic', true),
    lectW: lect('The Internet II'),
    labB: lab('Poject Work'),
    disc: disc('The Internet'),
    hw: hw('Impact Writing Assignment')
};

// APRIL 6 - 10
cs10.week12 = {
    readings: [
        reading('Data explosion creates revolution',
                'http://www.sfgate.com/cgi-bin/article.cgi?f=/c/a/2011/10/19/BU5K1LJ4R3.DTL'),
        reading('Data Mining',
                'http://webdocs.cs.ualberta.ca/~zaiane/courses/cmput690/notes/Chapter1/ch1.pdf'),
        reading('Data Pitfalls',
                'http://searchenginewatch.com/article/2289574/Big-Data-Big-Trouble-How-to-Avoid-5-Data-Analysis-Pitfalls'),
        reading('Computing as Social Science',
                'http://cacm.acm.org/magazines/2009/4/22953-computing-as-social-science/fulltext',
                'optional'),
        reading('Data Visualization',
                'http://datavisualization.ch/',
                'optional'),
        reading('Basic Statistics (Helpful for Project)',
                'http://www.cimt.plymouth.ac.uk/projects/mepres/stats/handlg_data_ch3.pdf',
                'optional')
    ],
    lectM: lect('Lambda and HOFs'),
    labA: lab('Practice with HOFs and Functions as Data', 'berkeley_bjc/hofs/hofs-practice.topic', true),
    lectW: lect('Besides Blocks I'), // THOUGHT: Move this up a weekx
    labB: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic'),
    disc: disc('Data and HOFs'),
    hw: hw('Impact Post Comments')
};

// APRIL 13 - 17
cs10.week13 = {
    readings: [
        reading('The Heartbleed Bug',
                'http://blog.agilebits.com/2014/04/08/imagine-no-ssl-encryption-its-scary-if-you-try/'),
        reading('What Servers Bleed',
                'https://medium.com/p/804cdf4b48c1',
                'hard')
    ],
    lectM: lect('Besides Blocks II'),
    labA: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic', true),
    lectW: lect('Data'),
    labB: lab('Besides Blocks: Data in Python', 'berkeley_bjc/python/besides-blocks-data.topic'),
    disc: disc('Practical Privacy Implications'),
    hw: [ hw('Data Project'),
          hw('Final Project Proposal') ]
};

// APRIL 20 - 24
cs10.week14 = {
    readings: [
        reading('The Great Robot Race (Video)',
                'https://www.youtube.com/watch?v=uoiJeIb0wBA'),
        reading('Halting Problem Poem',
                'http://introcs.cs.princeton.edu/java/76computability/halting-poem.html',
                'optional')
    ],
    lectM: lect('Future of Computing'),
    labA: lab('Project Work', '', true),
    lectW: lect('Limits of Computing'),
    labB: lab('Project Work'),
    disc: disc('CS @ Cal and Beyond'),
    hw: 'Start on the Final Project'
};

// APRIL 27 - MAY 1
cs10.week15 = {
    exam: {

    },
    readings: [
        reading('Why is Quantum Different?',
                'http://www.scientificamerican.com/article.cfm?id=what-makes-a-quantum-comp'),
        reading('DNA Storage',
                'http://radar.oreilly.com/2012/08/dna-storage.html',
                'hard'),
        reading('Quantum Leap',
                'http://money.cnn.com/2006/07/26/magazines/fortune/futureoftech_quantum.fortune/index.htm',
                'optional'),
        reading('Twenty Top Predictions for life 100 years from now',
                'http://www.bbc.co.uk/news/magazine-16536598',
                'optional'),
        reading('BtB: Conclusion',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter9.pdf',
                'optional')
    ],
    lectM: lect('Saving the World with Computing', '', '', 'Kathy Yelick'),
    labA: lab('Project Work Lab', '', true),
    lectW: lect('Summary and Farewell'),
    labB: 'With-<span class="snap">snap</span> Exam',
    disc: disc('Summary and Farewell'),
    hw: hw('Final Project')
};
cs10.week15.labB.classes = 'exam';


// DEAD WEEK
// MAY 4 - 7
cs10.week16 = {
    special: 'RRR Week -- No Class',
    readings: [],
    hw: hw('Study for the Final')
};

// MAY 11 - 15
cs10.week17 = {
    exam: {

    },
    readings: [],
    labA: lab('Final Exam<br>7 - 10pm'),
    hw: hw(' ')
};
cs10.week17.labA.classes = 'exam';


// Load the Calendar
// Load the calendar:
$(document).ready(function() {
    cs10.renderTableCalendar();
});

/*!
 * FullCalendar v2.2.6
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function(t){"function"==typeof define&&define.amd?define(["jquery","moment"],t):t(jQuery,moment)})(function(t,e){function n(t){i(Ee,t)}function i(e){function n(n,s){t.isPlainObject(s)&&t.isPlainObject(e[n])&&!r(n)?e[n]=i({},e[n],s):void 0!==s&&(e[n]=s)}for(var s=1;arguments.length>s;s++)t.each(arguments[s],n);return e}function r(t){return/(Time|Duration)$/.test(t)}function s(t){var n=e.localeData||e.langData;return n.call(e,t)||n.call(e,"en")}function o(t,e){e.left&&t.css({"border-left-width":1,"margin-left":e.left-1}),e.right&&t.css({"border-right-width":1,"margin-right":e.right-1})}function l(t){t.css({"margin-left":"","margin-right":"","border-left-width":"","border-right-width":""})}function a(){t("body").addClass("fc-not-allowed")}function u(){t("body").removeClass("fc-not-allowed")}function d(e,n,i){var r=Math.floor(n/e.length),s=Math.floor(n-r*(e.length-1)),o=[],l=[],a=[],u=0;c(e),e.each(function(n,i){var d=n===e.length-1?s:r,c=t(i).outerHeight(!0);d>c?(o.push(i),l.push(c),a.push(t(i).height())):u+=c}),i&&(n-=u,r=Math.floor(n/o.length),s=Math.floor(n-r*(o.length-1))),t(o).each(function(e,n){var i=e===o.length-1?s:r,u=l[e],d=a[e],c=i-(u-d);i>u&&t(n).height(c)})}function c(t){t.height("")}function h(e){var n=0;return e.find("> *").each(function(e,i){var r=t(i).outerWidth();r>n&&(n=r)}),n++,e.width(n),n}function f(t,e){return t.height(e).addClass("fc-scroller"),t[0].scrollHeight-1>t[0].clientHeight?!0:(g(t),!1)}function g(t){t.height("").removeClass("fc-scroller")}function p(e){var n=e.css("position"),i=e.parents().filter(function(){var e=t(this);return/(auto|scroll)/.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==n&&i.length?i:t(e[0].ownerDocument||document)}function m(t){var e=t.offset().left,n=e+t.width(),i=t.children(),r=i.offset().left,s=r+i.outerWidth();return{left:r-e,right:n-s}}function v(t){return 1==t.which&&!t.ctrlKey}function y(t,e){var n,i,r,s,o=t.start,l=t.end,a=e.start,u=e.end;return l>a&&u>o?(o>=a?(n=o.clone(),r=!0):(n=a.clone(),r=!1),u>=l?(i=l.clone(),s=!0):(i=u.clone(),s=!1),{start:n,end:i,isStart:r,isEnd:s}):void 0}function w(t,e){if(t=t||{},void 0!==t[e])return t[e];for(var n,i=e.split(/(?=[A-Z])/),r=i.length-1;r>=0;r--)if(n=t[i[r].toLowerCase()],void 0!==n)return n;return t["default"]}function E(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days"),ms:t.time()-n.time()})}function S(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days")})}function b(t,e){var n,i;for(n=0;ze.length>n&&(i=ze[n],!D(i,t,e));n++);return i}function D(t,n,i){var r;return r=null!=i?i.diff(n,t,!0):e.isDuration(n)?n.as(t):n.end.diff(n.start,t,!0),r>=1&&_(r)?r:!1}function C(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function T(t){return/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)}function x(t){var e=function(){};return e.prototype=t,new e}function H(t,e){for(var n in t)R(t,n)&&(e[n]=t[n])}function R(t,e){return Le.call(t,e)}function k(e){return/undefined|null|boolean|number|string/.test(t.type(e))}function M(e,n,i){if(t.isFunction(e)&&(e=[e]),e){var r,s;for(r=0;e.length>r;r++)s=e[r].apply(n,i)||s;return s}}function F(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t]}function z(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function L(t){return t.replace(/&.*?;/g,"")}function P(t){return t.charAt(0).toUpperCase()+t.slice(1)}function V(t,e){return t-e}function _(t){return 0===t%1}function G(t,e){var n,i,r,s,o=function(){var l=+new Date-s;e>l&&l>0?n=setTimeout(o,e-l):(n=null,t.apply(r,i),n||(r=i=null))};return function(){r=this,i=arguments,s=+new Date,n||(n=setTimeout(o,e))}}function A(n,i,r){var s,o,l,a,u=n[0],d=1==n.length&&"string"==typeof u;return e.isMoment(u)?(a=e.apply(null,n),Y(u,a)):C(u)||void 0===u?a=e.apply(null,n):(s=!1,o=!1,d?Pe.test(u)?(u+="-01",n=[u],s=!0,o=!0):(l=Ve.exec(u))&&(s=!l[5],o=!0):t.isArray(u)&&(o=!0),a=i||s?e.utc.apply(e,n):e.apply(null,n),s?(a._ambigTime=!0,a._ambigZone=!0):r&&(o?a._ambigZone=!0:d&&a.zone(u))),a._fullCalendar=!0,a}function N(t,n){var i,r,s=!1,o=!1,l=t.length,a=[];for(i=0;l>i;i++)r=t[i],e.isMoment(r)||(r=De.moment.parseZone(r)),s=s||r._ambigTime,o=o||r._ambigZone,a.push(r);for(i=0;l>i;i++)r=a[i],n||!s||r._ambigTime?o&&!r._ambigZone&&(a[i]=r.clone().stripZone()):a[i]=r.clone().stripTime();return a}function Y(t,e){t._ambigTime?e._ambigTime=!0:e._ambigTime&&(e._ambigTime=!1),t._ambigZone?e._ambigZone=!0:e._ambigZone&&(e._ambigZone=!1)}function O(t,e){t.year(e[0]||0).month(e[1]||0).date(e[2]||0).hours(e[3]||0).minutes(e[4]||0).seconds(e[5]||0).milliseconds(e[6]||0)}function B(t,e){return Ge.format.call(t,e)}function Z(t,e){return I(t,U(e))}function I(t,e){var n,i="";for(n=0;e.length>n;n++)i+=W(t,e[n]);return i}function W(t,e){var n,i;return"string"==typeof e?e:(n=e.token)?Ae[n]?Ae[n](t):B(t,n):e.maybe&&(i=I(t,e.maybe),i.match(/[1-9]/))?i:""}function j(t,e,n,i,r){var s;return t=De.moment.parseZone(t),e=De.moment.parseZone(e),s=(t.localeData||t.lang).call(t),n=s.longDateFormat(n)||n,i=i||" - ",X(t,e,U(n),i,r)}function X(t,e,n,i,r){var s,o,l,a,u="",d="",c="",h="",f="";for(o=0;n.length>o&&(s=$(t,e,n[o]),s!==!1);o++)u+=s;for(l=n.length-1;l>o&&(s=$(t,e,n[l]),s!==!1);l--)d=s+d;for(a=o;l>=a;a++)c+=W(t,n[a]),h+=W(e,n[a]);return(c||h)&&(f=r?h+i+c:c+i+h),u+f+d}function $(t,e,n){var i,r;return"string"==typeof n?n:(i=n.token)&&(r=Ne[i.charAt(0)],r&&t.isSame(e,r))?B(t,i):!1}function U(t){return t in Ye?Ye[t]:Ye[t]=q(t)}function q(t){for(var e,n=[],i=/\[([^\]]*)\]|\(([^\)]*)\)|(LT|(\w)\4*o?)|([^\w\[\(]+)/g;e=i.exec(t);)e[1]?n.push(e[1]):e[2]?n.push({maybe:q(e[2])}):e[3]?n.push({token:e[3]}):e[5]&&n.push(e[5]);return n}function K(){}function Q(t,e){return t||e?t&&e?t.grid===e.grid&&t.row===e.row&&t.col===e.col:!1:!0}function J(t){var e=ee(t);return"background"===e||"inverse-background"===e}function te(t){return"inverse-background"===ee(t)}function ee(t){return F((t.source||{}).rendering,t.rendering)}function ne(t){var e,n,i={};for(e=0;t.length>e;e++)n=t[e],(i[n._id]||(i[n._id]=[])).push(n);return i}function ie(t,e){return t.eventStartMS-e.eventStartMS}function re(t,e){return t.eventStartMS-e.eventStartMS||e.eventDurationMS-t.eventDurationMS||e.event.allDay-t.event.allDay||(t.event.title||"").localeCompare(e.event.title)}function se(n){var i,r,s,o,l=De.dataAttrPrefix;return l&&(l+="-"),i=n.data(l+"event")||null,i&&(i="object"==typeof i?t.extend({},i):{},r=i.start,null==r&&(r=i.time),s=i.duration,o=i.stick,delete i.start,delete i.time,delete i.duration,delete i.stick),null==r&&(r=n.data(l+"start")),null==r&&(r=n.data(l+"time")),null==s&&(s=n.data(l+"duration")),null==o&&(o=n.data(l+"stick")),r=null!=r?e.duration(r):null,s=null!=s?e.duration(s):null,o=Boolean(o),{eventProps:i,startTime:r,duration:s,stick:o}}function oe(t,e){var n,i;for(n=0;e.length>n;n++)if(i=e[n],i.leftCol<=t.rightCol&&i.rightCol>=t.leftCol)return!0;return!1}function le(t,e){return t.leftCol-e.leftCol}function ae(t){var e,n,i;if(t.sort(re),e=ue(t),de(e),n=e[0]){for(i=0;n.length>i;i++)ce(n[i]);for(i=0;n.length>i;i++)he(n[i],0,0)}}function ue(t){var e,n,i,r=[];for(e=0;t.length>e;e++){for(n=t[e],i=0;r.length>i&&fe(n,r[i]).length;i++);n.level=i,(r[i]||(r[i]=[])).push(n)}return r}function de(t){var e,n,i,r,s;for(e=0;t.length>e;e++)for(n=t[e],i=0;n.length>i;i++)for(r=n[i],r.forwardSegs=[],s=e+1;t.length>s;s++)fe(r,t[s],r.forwardSegs)}function ce(t){var e,n,i=t.forwardSegs,r=0;if(void 0===t.forwardPressure){for(e=0;i.length>e;e++)n=i[e],ce(n),r=Math.max(r,1+n.forwardPressure);t.forwardPressure=r}}function he(t,e,n){var i,r=t.forwardSegs;if(void 0===t.forwardCoord)for(r.length?(r.sort(pe),he(r[0],e+1,n),t.forwardCoord=r[0].backwardCoord):t.forwardCoord=1,t.backwardCoord=t.forwardCoord-(t.forwardCoord-n)/(e+1),i=0;r.length>i;i++)he(r[i],0,t.forwardCoord)}function fe(t,e,n){n=n||[];for(var i=0;e.length>i;i++)ge(t,e[i])&&n.push(e[i]);return n}function ge(t,e){return t.bottom>e.top&&t.top<e.bottom}function pe(t,e){return e.forwardPressure-t.forwardPressure||(t.backwardCoord||0)-(e.backwardCoord||0)||re(t,e)}function me(n,r){function o(t){return(t.locale||t.lang).call(t,J.lang).humanize()}function l(t){re?d()&&(v(),c(t)):a()}function a(){se=J.theme?"ui":"fc",n.addClass("fc"),J.isRTL?n.addClass("fc-rtl"):n.addClass("fc-ltr"),J.theme?n.addClass("ui-widget"):n.addClass("fc-unthemed"),re=t("<div class='fc-view-container'/>").prependTo(n),ne=new ve(K,J),ie=ne.render(),ie&&n.prepend(ie),c(J.defaultView),J.handleWindowResize&&(ae=G(w,J.windowResizeDelay),t(window).resize(ae))}function u(){oe&&oe.destroyView(),ne.destroy(),re.remove(),n.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"),t(window).unbind("resize",ae)}function d(){return n.is(":visible")}function c(e){ge++,oe&&e&&oe.type!==e&&(ne.deactivateButton(oe.type),W(),oe.start&&oe.destroyView(),oe.el.remove(),oe=null),!oe&&e&&(oe=h(e),oe.el=t("<div class='fc-view fc-"+e+"-view' />").appendTo(re),ne.activateButton(e)),oe&&(ue=oe.massageCurrentDate(ue),oe.start&&ue.isWithin(oe.intervalStart,oe.intervalEnd)||d()&&(W(),oe.start&&oe.destroyView(),oe.setDate(ue),oe.renderView(),j(),M(),F(),T())),j(),ge--}function h(t){var e=f(t);return new e["class"](K,e.options,t)}function f(n){function i(e){"function"==typeof e?s=e:"object"==typeof e&&t.extend(r,e)}var r,s,l,a,u,d=J.defaultButtonText||{},c=J.buttonText||{},h=J.views||{},f=n,g=[],p=!1;if(fe[n])return fe[n];for(;f&&!s;)r={},i(Ce[f]),i(h[f]),g.unshift(r),f=r.type;return g.unshift({}),r=t.extend.apply(t,g),s?(l=r.duration||s.duration,l&&(l=e.duration(l),a=b(l),p=1===D(a,l)),p&&h[a]&&(r=t.extend({},h[a],r)),u=c[n]||(p?c[a]:null)||d[n]||(p?d[a]:null)||r.buttonText||s.buttonText||(l?o(l):null)||n,fe[n]={"class":s,options:r,buttonText:u}):void 0}function g(t){return Boolean(f(t))}function p(t){var e=f(t);return e?e.buttonText:void 0}function m(t){return d()?(t&&y(),ge++,oe.updateSize(!0),ge--,!0):void 0}function v(){d()&&y()}function y(){le="number"==typeof J.contentHeight?J.contentHeight:"number"==typeof J.height?J.height-(ie?ie.outerHeight(!0):0):Math.round(re.width()/Math.max(J.aspectRatio,.5))}function w(t){!ge&&t.target===window&&oe.start&&m(!0)&&oe.trigger("windowResize",he)}function E(){C(),H()}function S(){d()&&(W(),oe.destroyViewEvents(),oe.renderViewEvents(pe),j())}function C(){W(),oe.destroyViewEvents(),j()}function T(){!J.lazyFetching||de(oe.start,oe.end)?H():S()}function H(){ce(oe.start,oe.end)}function R(t){pe=t,S()}function k(){S()}function M(){oe.updateTitle(),ne.updateTitle(oe.title)}function F(){var t=K.getNow();t.isWithin(oe.intervalStart,oe.intervalEnd)?ne.disableButton("today"):ne.enableButton("today")}function z(t,e){t=K.moment(t),e=e?K.moment(e):t.hasTime()?t.clone().add(K.defaultTimedEventDuration):t.clone().add(K.defaultAllDayEventDuration),oe.select({start:t,end:e})}function L(){oe&&oe.unselect()}function V(){ue=oe.computePrevDate(ue),c()}function _(){ue=oe.computeNextDate(ue),c()}function A(){ue.add(-1,"years"),c()}function N(){ue.add(1,"years"),c()}function Y(){ue=K.getNow(),c()}function O(t){ue=K.moment(t),c()}function B(t){ue.add(e.duration(t)),c()}function Z(t,e){var n,i;e&&g(e)||(e=e||"day",n=ne.getViewsWithButtons().join(" "),i=n.match(RegExp("\\w+"+P(e))),i||(i=n.match(/\w+Day/)),e=i?i[0]:"agendaDay"),ue=t,c(e)}function I(){return ue.clone()}function W(){re.css({width:"100%",height:re.height(),overflow:"hidden"})}function j(){re.css({width:"",height:"",overflow:""})}function X(){return K}function $(){return oe}function U(t,e){return void 0===e?J[t]:(("height"==t||"contentHeight"==t||"aspectRatio"==t)&&(J[t]=e,m(!0)),void 0)}function q(t,e){return J[t]?J[t].apply(e||he,Array.prototype.slice.call(arguments,2)):void 0}var K=this;r=r||{};var Q,J=i({},Ee,r);Q=J.lang in Te?Te[J.lang]:Te[Ee.lang],Q&&(J=i({},Ee,Q,r)),J.isRTL&&(J=i({},Ee,be,Q||{},r)),K.options=J,K.render=l,K.destroy=u,K.refetchEvents=E,K.reportEvents=R,K.reportEventChange=k,K.rerenderEvents=S,K.changeView=c,K.select=z,K.unselect=L,K.prev=V,K.next=_,K.prevYear=A,K.nextYear=N,K.today=Y,K.gotoDate=O,K.incrementDate=B,K.zoomTo=Z,K.getDate=I,K.getCalendar=X,K.getView=$,K.option=U,K.trigger=q,K.isValidViewType=g,K.getViewButtonText=p;var te=x(s(J.lang));if(J.monthNames&&(te._months=J.monthNames),J.monthNamesShort&&(te._monthsShort=J.monthNamesShort),J.dayNames&&(te._weekdays=J.dayNames),J.dayNamesShort&&(te._weekdaysShort=J.dayNamesShort),null!=J.firstDay){var ee=x(te._week);ee.dow=J.firstDay,te._week=ee}K.defaultAllDayEventDuration=e.duration(J.defaultAllDayEventDuration),K.defaultTimedEventDuration=e.duration(J.defaultTimedEventDuration),K.moment=function(){var t;return"local"===J.timezone?(t=De.moment.apply(null,arguments),t.hasTime()&&t.local()):t="UTC"===J.timezone?De.moment.utc.apply(null,arguments):De.moment.parseZone.apply(null,arguments),"_locale"in t?t._locale=te:t._lang=te,t},K.getIsAmbigTimezone=function(){return"local"!==J.timezone&&"UTC"!==J.timezone},K.rezoneDate=function(t){return K.moment(t.toArray())},K.getNow=function(){var t=J.now;return"function"==typeof t&&(t=t()),K.moment(t)},K.calculateWeekNumber=function(t){var e=J.weekNumberCalculation;return"function"==typeof e?e(t):"local"===e?t.week():"ISO"===e.toUpperCase()?t.isoWeek():void 0},K.getEventEnd=function(t){return t.end?t.end.clone():K.getDefaultEventEnd(t.allDay,t.start)},K.getDefaultEventEnd=function(t,e){var n=e.clone();return t?n.stripTime().add(K.defaultAllDayEventDuration):n.add(K.defaultTimedEventDuration),K.getIsAmbigTimezone()&&n.stripZone(),n},ye.call(K,J);var ne,ie,re,se,oe,le,ae,ue,de=K.isFetchNeeded,ce=K.fetchEvents,he=n[0],fe={},ge=0,pe=[];ue=null!=J.defaultDate?K.moment(J.defaultDate):K.getNow(),K.getSuggestedViewHeight=function(){return void 0===le&&v(),le},K.isHeightAuto=function(){return"auto"===J.contentHeight||"auto"===J.height}}function ve(e,n){function i(){var e=n.header;return f=n.theme?"ui":"fc",e?g=t("<div class='fc-toolbar'/>").append(s("left")).append(s("right")).append(s("center")).append('<div class="fc-clear"/>'):void 0}function r(){g.remove()}function s(i){var r=t('<div class="fc-'+i+'"/>'),s=n.header[i];return s&&t.each(s.split(" "),function(){var i,s=t(),o=!0;t.each(this.split(","),function(i,r){var l,a,u,d,c,h,g,m,v;"title"==r?(s=s.add(t("<h2>&nbsp;</h2>")),o=!1):(e[r]?l=function(){e[r]()}:e.isValidViewType(r)&&(l=function(){e.changeView(r)},p.push(r),c=e.getViewButtonText(r)),l&&(a=w(n.themeButtonIcons,r),u=w(n.buttonIcons,r),d=w(n.defaultButtonText,r),h=w(n.buttonText,r),g=c||h?z(c||h):a&&n.theme?"<span class='ui-icon ui-icon-"+a+"'></span>":u&&!n.theme?"<span class='fc-icon fc-icon-"+u+"'></span>":z(d||r),m=["fc-"+r+"-button",f+"-button",f+"-state-default"],v=t('<button type="button" class="'+m.join(" ")+'">'+g+"</button>").click(function(){v.hasClass(f+"-state-disabled")||(l(),(v.hasClass(f+"-state-active")||v.hasClass(f+"-state-disabled"))&&v.removeClass(f+"-state-hover"))}).mousedown(function(){v.not("."+f+"-state-active").not("."+f+"-state-disabled").addClass(f+"-state-down")}).mouseup(function(){v.removeClass(f+"-state-down")}).hover(function(){v.not("."+f+"-state-active").not("."+f+"-state-disabled").addClass(f+"-state-hover")},function(){v.removeClass(f+"-state-hover").removeClass(f+"-state-down")}),s=s.add(v)))}),o&&s.first().addClass(f+"-corner-left").end().last().addClass(f+"-corner-right").end(),s.length>1?(i=t("<div/>"),o&&i.addClass("fc-button-group"),i.append(s),r.append(i)):r.append(s)}),r}function o(t){g.find("h2").text(t)}function l(t){g.find(".fc-"+t+"-button").addClass(f+"-state-active")}function a(t){g.find(".fc-"+t+"-button").removeClass(f+"-state-active")}function u(t){g.find(".fc-"+t+"-button").attr("disabled","disabled").addClass(f+"-state-disabled")}function d(t){g.find(".fc-"+t+"-button").removeAttr("disabled").removeClass(f+"-state-disabled")}function c(){return p}var h=this;h.render=i,h.destroy=r,h.updateTitle=o,h.activateButton=l,h.deactivateButton=a,h.disableButton=u,h.enableButton=d,h.getViewsWithButtons=c;var f,g=t(),p=[]}function ye(n){function i(t,e){return!B||t.clone().stripZone()<B.clone().stripZone()||e.clone().stripZone()>Z.clone().stripZone()}function r(t,e){B=t,Z=e,Q=[];var n=++U,i=$.length;q=i;for(var r=0;i>r;r++)s($[r],n)}function s(e,n){o(e,function(i){var r,s,o,l=t.isArray(e.events);if(n==U){if(i)for(r=0;i.length>r;r++)s=i[r],o=l?s:b(s,e),o&&Q.push.apply(Q,H(o));q--,q||j(Q)}})}function o(e,i){var r,s,l=De.sourceFetchers;for(r=0;l.length>r;r++){if(s=l[r].call(O,e,B.clone(),Z.clone(),n.timezone,i),s===!0)return;if("object"==typeof s)return o(s,i),void 0}var a=e.events;if(a)t.isFunction(a)?(y(),a.call(O,B.clone(),Z.clone(),n.timezone,function(t){i(t),w()})):t.isArray(a)?i(a):i();else{var u=e.url;if(u){var d,c=e.success,h=e.error,f=e.complete;d=t.isFunction(e.data)?e.data():e.data;var g=t.extend({},d||{}),p=F(e.startParam,n.startParam),m=F(e.endParam,n.endParam),v=F(e.timezoneParam,n.timezoneParam);p&&(g[p]=B.format()),m&&(g[m]=Z.format()),n.timezone&&"local"!=n.timezone&&(g[v]=n.timezone),y(),t.ajax(t.extend({},Ke,e,{data:g,success:function(e){e=e||[];var n=M(c,this,arguments);t.isArray(n)&&(e=n),i(e)},error:function(){M(h,this,arguments),i()},complete:function(){M(f,this,arguments),w()}}))}else i()}}function l(t){var e=a(t);e&&($.push(e),q++,s(e,U))}function a(e){var n,i,r=De.sourceNormalizers;if(t.isFunction(e)||t.isArray(e)?n={events:e}:"string"==typeof e?n={url:e}:"object"==typeof e&&(n=t.extend({},e)),n){for(n.className?"string"==typeof n.className&&(n.className=n.className.split(/\s+/)):n.className=[],t.isArray(n.events)&&(n.origArray=n.events,n.events=t.map(n.events,function(t){return b(t,n)})),i=0;r.length>i;i++)r[i].call(O,n);return n}}function u(e){$=t.grep($,function(t){return!d(t,e)}),Q=t.grep(Q,function(t){return!d(t.source,e)}),j(Q)}function d(t,e){return t&&e&&c(t)==c(e)}function c(t){return("object"==typeof t?t.origArray||t.googleCalendarId||t.url||t.events:null)||t}function h(t){t.start=O.moment(t.start),t.end=t.end?O.moment(t.end):null,R(t,f(t)),j(Q)}function f(e){var n={};return t.each(e,function(t,e){g(t)&&void 0!==e&&k(e)&&(n[t]=e)}),n}function g(t){return!/^_|^(id|allDay|start|end)$/.test(t)}function p(t,e){var n,i,r,s=b(t);if(s){for(n=H(s),i=0;n.length>i;i++)r=n[i],r.source||(e&&(X.events.push(r),r.source=X),Q.push(r));return j(Q),n}return[]}function m(e){var n,i;for(null==e?e=function(){return!0}:t.isFunction(e)||(n=e+"",e=function(t){return t._id==n}),Q=t.grep(Q,e,!0),i=0;$.length>i;i++)t.isArray($[i].events)&&($[i].events=t.grep($[i].events,e,!0));j(Q)}function v(e){return t.isFunction(e)?t.grep(Q,e):null!=e?(e+="",t.grep(Q,function(t){return t._id==e})):Q}function y(){K++||I("loading",null,!0,W())}function w(){--K||I("loading",null,!1,W())}function b(i,r){var s,o,l,a={};if(n.eventDataTransform&&(i=n.eventDataTransform(i)),r&&r.eventDataTransform&&(i=r.eventDataTransform(i)),t.extend(a,i),r&&(a.source=r),a._id=i._id||(void 0===i.id?"_fc"+Qe++:i.id+""),a.className=i.className?"string"==typeof i.className?i.className.split(/\s+/):i.className:[],s=i.start||i.date,o=i.end,T(s)&&(s=e.duration(s)),T(o)&&(o=e.duration(o)),i.dow||e.isDuration(s)||e.isDuration(o))a.start=s?e.duration(s):null,a.end=o?e.duration(o):null,a._recurring=!0;else{if(s&&(s=O.moment(s),!s.isValid()))return!1;o&&(o=O.moment(o),o.isValid()||(o=null)),l=i.allDay,void 0===l&&(l=F(r?r.allDayDefault:void 0,n.allDayDefault)),D(s,o,l,a)}return a}function D(t,e,n,i){i.start=t,i.end=e,i.allDay=n,C(i),we(i)}function C(t){null==t.allDay&&(t.allDay=!(t.start.hasTime()||t.end&&t.end.hasTime())),t.allDay?(t.start.stripTime(),t.end&&t.end.stripTime()):(t.start.hasTime()||(t.start=O.rezoneDate(t.start)),t.end&&!t.end.hasTime()&&(t.end=O.rezoneDate(t.end))),t.end&&!t.end.isAfter(t.start)&&(t.end=null),t.end||(t.end=n.forceEventDuration?O.getDefaultEventEnd(t.allDay,t.start):null)}function x(t){var e;return t.end||(e=t.allDay,null==e&&(e=!t.start.hasTime()),t={start:t.start,end:O.getDefaultEventEnd(e,t.start)}),t}function H(e,n,i){var r,s,o,l,a,u,d,c,h,f=[];if(n=n||B,i=i||Z,e)if(e._recurring){if(s=e.dow)for(r={},o=0;s.length>o;o++)r[s[o]]=!0;for(l=n.clone().stripTime();l.isBefore(i);)(!r||r[l.day()])&&(a=e.start,u=e.end,d=l.clone(),c=null,a&&(d=d.time(a)),u&&(c=l.clone().time(u)),h=t.extend({},e),D(d,c,!a&&!u,h),f.push(h)),l.add(1,"days")}else f.push(e);return f}function R(e,n){var i,r,s,o,l={};return n=n||{},n.start||(n.start=e.start.clone()),void 0===n.end&&(n.end=e.end?e.end.clone():null),null==n.allDay&&(n.allDay=e.allDay),C(n),i=null!==e._end&&null===n.end,r=n.allDay?S(n.start,e._start):E(n.start,e._start),!i&&n.end&&(s=E(n.end,n.start).subtract(E(e._end||O.getDefaultEventEnd(e._allDay,e._start),e._start))),t.each(n,function(t,e){g(t)&&void 0!==e&&(l[t]=e)}),o=z(v(e._id),i,n.allDay,r,s,l),{dateDelta:r,durationDelta:s,undo:o}}function z(e,n,i,r,s,o){var l=O.getIsAmbigTimezone(),a=[];return r&&!r.valueOf()&&(r=null),s&&!s.valueOf()&&(s=null),t.each(e,function(e,u){var d,c;d={start:u.start.clone(),end:u.end?u.end.clone():null,allDay:u.allDay},t.each(o,function(t){d[t]=u[t]}),c={start:u._start,end:u._end,allDay:u._allDay},n&&(c.end=null),c.allDay=i,C(c),r&&(c.start.add(r),c.end&&c.end.add(r)),s&&(c.end||(c.end=O.getDefaultEventEnd(c.allDay,c.start)),c.end.add(s)),l&&!c.allDay&&(r||s)&&(c.start.stripZone(),c.end&&c.end.stripZone()),t.extend(u,o,c),we(u),a.push(function(){t.extend(u,d),we(u)})}),function(){for(var t=0;a.length>t;t++)a[t]()}}function L(){var e,i=n.businessHours,r={className:"fc-nonbusiness",start:"09:00",end:"17:00",dow:[1,2,3,4,5],rendering:"inverse-background"},s=O.getView();return i&&(e="object"==typeof i?t.extend({},r,i):r),e?H(b(e),s.start,s.end):[]}function P(t,e){var i=e.source||{},r=F(e.constraint,i.constraint,n.eventConstraint),s=F(e.overlap,i.overlap,n.eventOverlap);return t=x(t),G(t,r,s,e)}function V(t){return G(t,n.selectConstraint,n.selectOverlap)}function _(e,n){var i,r;return n&&(i=t.extend({},n,e),r=H(b(i))[0]),r?P(e,r):(e=x(e),V(e))}function G(t,e,n,i){var r,s,o,l,a;if(t={start:t.start.clone().stripZone(),end:t.end.clone().stripZone()},null!=e){for(r=A(e),s=!1,o=0;r.length>o;o++)if(N(r[o],t)){s=!0;break}if(!s)return!1}for(o=0;Q.length>o;o++)if(l=Q[o],(!i||i._id!==l._id)&&Y(l,t)){if(n===!1)return!1;if("function"==typeof n&&!n(l,i))return!1;if(i){if(a=F(l.overlap,(l.source||{}).overlap),a===!1)return!1;if("function"==typeof a&&!a(i,l))return!1}}return!0}function A(t){return"businessHours"===t?L():"object"==typeof t?H(b(t)):v(t)}function N(t,e){var n=t.start.clone().stripZone(),i=O.getEventEnd(t).stripZone();return e.start>=n&&i>=e.end}function Y(t,e){var n=t.start.clone().stripZone(),i=O.getEventEnd(t).stripZone();return i>e.start&&e.end>n}var O=this;O.isFetchNeeded=i,O.fetchEvents=r,O.addEventSource=l,O.removeEventSource=u,O.updateEvent=h,O.renderEvent=p,O.removeEvents=m,O.clientEvents=v,O.mutateEvent=R,O.normalizeEventDateProps=C,O.ensureVisibleEventRange=x;var B,Z,I=O.trigger,W=O.getView,j=O.reportEvents,X={events:[]},$=[X],U=0,q=0,K=0,Q=[];t.each((n.events?[n.events]:[]).concat(n.eventSources||[]),function(t,e){var n=a(e);n&&$.push(n)}),O.getBusinessHoursEvents=L,O.isEventRangeAllowed=P,O.isSelectionRangeAllowed=V,O.isExternalDropRangeAllowed=_}function we(t){t._allDay=t.allDay,t._start=t.start.clone(),t._end=t.end?t.end.clone():null}var Ee={titleRangeSeparator:" — ",monthYearFormat:"MMMM YYYY",defaultTimedEventDuration:"02:00:00",defaultAllDayEventDuration:{days:1},forceEventDuration:!1,nextDayThreshold:"09:00:00",defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberTitle:"W",weekNumberCalculation:"local",lazyFetching:!0,startParam:"start",endParam:"end",timezoneParam:"timezone",timezone:!1,isRTL:!1,defaultButtonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",today:"today",month:"month",week:"week",day:"day"},buttonIcons:{prev:"left-single-arrow",next:"right-single-arrow",prevYear:"left-double-arrow",nextYear:"right-double-arrow"},theme:!1,themeButtonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e",prevYear:"seek-prev",nextYear:"seek-next"},dragOpacity:.75,dragRevertDuration:500,dragScroll:!0,unselectAuto:!0,dropAccept:"*",eventLimit:!1,eventLimitText:"more",eventLimitClick:"popover",dayPopoverFormat:"LL",handleWindowResize:!0,windowResizeDelay:200},Se={dayPopoverFormat:"dddd, MMMM D"},be={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}},De=t.fullCalendar={version:"2.2.6"},Ce=De.views={};t.fn.fullCalendar=function(e){var n=Array.prototype.slice.call(arguments,1),i=this;return this.each(function(r,s){var o,l=t(s),a=l.data("fullCalendar");"string"==typeof e?a&&t.isFunction(a[e])&&(o=a[e].apply(a,n),r||(i=o),"destroy"===e&&l.removeData("fullCalendar")):a||(a=new me(l,e),l.data("fullCalendar",a),a.render())}),i};var Te=De.langs={};De.datepickerLang=function(e,n,i){var r=Te[e]||(Te[e]={});r.isRTL=i.isRTL,r.weekNumberTitle=i.weekHeader,t.each(xe,function(t,e){r[t]=e(i)}),t.datepicker&&(t.datepicker.regional[n]=t.datepicker.regional[e]=i,t.datepicker.regional.en=t.datepicker.regional[""],t.datepicker.setDefaults(i))},De.lang=function(e,n){var r,o;r=Te[e]||(Te[e]={}),n&&i(r,n),o=s(e),t.each(He,function(t,e){void 0===r[t]&&(r[t]=e(o,r))}),Ee.lang=e};var xe={defaultButtonText:function(t){return{prev:L(t.prevText),next:L(t.nextText),today:L(t.currentText)}},monthYearFormat:function(t){return t.showMonthAfterYear?"YYYY["+t.yearSuffix+"] MMMM":"MMMM YYYY["+t.yearSuffix+"]"}},He={dayOfMonthFormat:function(t,e){var n=t.longDateFormat("l");return n=n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g,""),e.isRTL?n+=" ddd":n="ddd "+n,n},smallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"a")},extraSmallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"t")},noMeridiemTimeFormat:function(t){return t.longDateFormat("LT").replace(/\s*a$/i,"")}};De.lang("en",Se),De.intersectionToSeg=y,De.applyAll=M,De.debounce=G;var Re,ke,Me,Fe=["sun","mon","tue","wed","thu","fri","sat"],ze=["year","month","week","day","hour","minute","second","millisecond"],Le={}.hasOwnProperty,Pe=/^\s*\d{4}-\d\d$/,Ve=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,_e=e.fn,Ge=t.extend({},_e);De.moment=function(){return A(arguments)},De.moment.utc=function(){var t=A(arguments,!0);return t.hasTime()&&t.utc(),t},De.moment.parseZone=function(){return A(arguments,!0,!0)},_e.clone=function(){var t=Ge.clone.apply(this,arguments);return Y(this,t),this._fullCalendar&&(t._fullCalendar=!0),t},_e.time=function(t){if(!this._fullCalendar)return Ge.time.apply(this,arguments);if(null==t)return e.duration({hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()});this._ambigTime=!1,e.isDuration(t)||e.isMoment(t)||(t=e.duration(t));var n=0;return e.isDuration(t)&&(n=24*Math.floor(t.asDays())),this.hours(n+t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())},_e.stripTime=function(){var t;return this._ambigTime||(t=this.toArray(),this.utc(),ke(this,t.slice(0,3)),this._ambigTime=!0,this._ambigZone=!0),this},_e.hasTime=function(){return!this._ambigTime},_e.stripZone=function(){var t,e;return this._ambigZone||(t=this.toArray(),e=this._ambigTime,this.utc(),ke(this,t),e&&(this._ambigTime=!0),this._ambigZone=!0),this},_e.hasZone=function(){return!this._ambigZone},t.each(["utcOffset","zone"],function(t,e){Ge[e]&&(_e[e]=function(t){return null!=t&&(this._ambigTime=!1,this._ambigZone=!1),Ge[e].apply(this,arguments)})}),_e.local=function(){var t=this.toArray(),e=this._ambigZone;return Ge.local.apply(this,arguments),e&&Me(this,t),this},_e.format=function(){return this._fullCalendar&&arguments[0]?Z(this,arguments[0]):this._ambigTime?B(this,"YYYY-MM-DD"):this._ambigZone?B(this,"YYYY-MM-DD[T]HH:mm:ss"):Ge.format.apply(this,arguments)},_e.toISOString=function(){return this._ambigTime?B(this,"YYYY-MM-DD"):this._ambigZone?B(this,"YYYY-MM-DD[T]HH:mm:ss"):Ge.toISOString.apply(this,arguments)},_e.isWithin=function(t,e){var n=N([this,t,e]);return n[0]>=n[1]&&n[0]<n[2]},_e.isSame=function(t,e){var n;return this._fullCalendar?e?(n=N([this,t],!0),Ge.isSame.call(n[0],n[1],e)):(t=De.moment.parseZone(t),Ge.isSame.call(this,t)&&Boolean(this._ambigTime)===Boolean(t._ambigTime)&&Boolean(this._ambigZone)===Boolean(t._ambigZone)):Ge.isSame.apply(this,arguments)},t.each(["isBefore","isAfter"],function(t,e){_e[e]=function(t,n){var i;return this._fullCalendar?(i=N([this,t]),Ge[e].call(i[0],i[1],n)):Ge[e].apply(this,arguments)}}),Re="_d"in e()&&"updateOffset"in e,ke=Re?function(t,n){t._d.setTime(Date.UTC.apply(Date,n)),e.updateOffset(t,!1)}:O,Me=Re?function(t,n){t._d.setTime(+new Date(n[0]||0,n[1]||0,n[2]||0,n[3]||0,n[4]||0,n[5]||0,n[6]||0)),e.updateOffset(t,!1)}:O;var Ae={t:function(t){return B(t,"a").charAt(0)},T:function(t){return B(t,"A").charAt(0)}};De.formatRange=j;var Ne={Y:"year",M:"month",D:"day",d:"day",A:"second",a:"second",T:"second",t:"second",H:"second",h:"second",m:"second",s:"second"},Ye={};De.Class=K,K.extend=function(t){var e,n=this;return t=t||{},R(t,"constructor")&&(e=t.constructor),"function"!=typeof e&&(e=t.constructor=function(){n.apply(this,arguments)}),e.prototype=x(n.prototype),H(t,e.prototype),H(n,e),e},K.mixin=function(t){H(t.prototype||t,this.prototype)};var Oe=K.extend({isHidden:!0,options:null,el:null,documentMousedownProxy:null,margin:10,constructor:function(t){this.options=t||{}},show:function(){this.isHidden&&(this.el||this.render(),this.el.show(),this.position(),this.isHidden=!1,this.trigger("show"))},hide:function(){this.isHidden||(this.el.hide(),this.isHidden=!0,this.trigger("hide"))},render:function(){var e=this,n=this.options;this.el=t('<div class="fc-popover"/>').addClass(n.className||"").css({top:0,left:0}).append(n.content).appendTo(n.parentEl),this.el.on("click",".fc-close",function(){e.hide()}),n.autoHide&&t(document).on("mousedown",this.documentMousedownProxy=t.proxy(this,"documentMousedown"))},documentMousedown:function(e){this.el&&!t(e.target).closest(this.el).length&&this.hide()},destroy:function(){this.hide(),this.el&&(this.el.remove(),this.el=null),t(document).off("mousedown",this.documentMousedownProxy)},position:function(){var e,n,i,r,s,o=this.options,l=this.el.offsetParent().offset(),a=this.el.outerWidth(),u=this.el.outerHeight(),d=t(window),c=p(this.el);r=o.top||0,s=void 0!==o.left?o.left:void 0!==o.right?o.right-a:0,c.is(window)||c.is(document)?(c=d,e=0,n=0):(i=c.offset(),e=i.top,n=i.left),e+=d.scrollTop(),n+=d.scrollLeft(),o.viewportConstrain!==!1&&(r=Math.min(r,e+c.outerHeight()-u-this.margin),r=Math.max(r,e+this.margin),s=Math.min(s,n+c.outerWidth()-a-this.margin),s=Math.max(s,n+this.margin)),this.el.css({top:r-l.top,left:s-l.left})},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1))}}),Be=K.extend({grid:null,rowCoords:null,colCoords:null,containerEl:null,minX:null,maxX:null,minY:null,maxY:null,constructor:function(t){this.grid=t},build:function(){this.rowCoords=this.grid.computeRowCoords(),this.colCoords=this.grid.computeColCoords(),this.computeBounds()},clear:function(){this.rowCoords=null,this.colCoords=null},getCell:function(t,e){var n,i,r,s=this.rowCoords,o=this.colCoords,l=null,a=null;if(this.inBounds(t,e)){for(n=0;s.length>n;n++)if(i=s[n],e>=i.top&&i.bottom>e){l=n;break}for(n=0;o.length>n;n++)if(i=o[n],t>=i.left&&i.right>t){a=n;break}if(null!==l&&null!==a)return r=this.grid.getCell(l,a),r.grid=this.grid,r}return null},computeBounds:function(){var t;this.containerEl&&(t=this.containerEl.offset(),this.minX=t.left,this.maxX=t.left+this.containerEl.outerWidth(),this.minY=t.top,this.maxY=t.top+this.containerEl.outerHeight())
},inBounds:function(t,e){return this.containerEl?t>=this.minX&&this.maxX>t&&e>=this.minY&&this.maxY>e:!0}}),Ze=K.extend({coordMaps:null,constructor:function(t){this.coordMaps=t},build:function(){var t,e=this.coordMaps;for(t=0;e.length>t;t++)e[t].build()},getCell:function(t,e){var n,i=this.coordMaps,r=null;for(n=0;i.length>n&&!r;n++)r=i[n].getCell(t,e);return r},clear:function(){var t,e=this.coordMaps;for(t=0;e.length>t;t++)e[t].clear()}}),Ie=K.extend({coordMap:null,options:null,isListening:!1,isDragging:!1,origCell:null,cell:null,mouseX0:null,mouseY0:null,mousemoveProxy:null,mouseupProxy:null,scrollEl:null,scrollBounds:null,scrollTopVel:null,scrollLeftVel:null,scrollIntervalId:null,scrollHandlerProxy:null,scrollSensitivity:30,scrollSpeed:200,scrollIntervalMs:50,constructor:function(t,e){this.coordMap=t,this.options=e||{}},mousedown:function(t){v(t)&&(t.preventDefault(),this.startListening(t),this.options.distance||this.startDrag(t))},startListening:function(e){var n,i;this.isListening||(e&&this.options.scroll&&(n=p(t(e.target)),n.is(window)||n.is(document)||(this.scrollEl=n,this.scrollHandlerProxy=G(t.proxy(this,"scrollHandler"),100),this.scrollEl.on("scroll",this.scrollHandlerProxy))),this.computeCoords(),e&&(i=this.getCell(e),this.origCell=i,this.mouseX0=e.pageX,this.mouseY0=e.pageY),t(document).on("mousemove",this.mousemoveProxy=t.proxy(this,"mousemove")).on("mouseup",this.mouseupProxy=t.proxy(this,"mouseup")).on("selectstart",this.preventDefault),this.isListening=!0,this.trigger("listenStart",e))},computeCoords:function(){this.coordMap.build(),this.computeScrollBounds()},mousemove:function(t){var e,n;this.isDragging||(e=this.options.distance||1,n=Math.pow(t.pageX-this.mouseX0,2)+Math.pow(t.pageY-this.mouseY0,2),n>=e*e&&this.startDrag(t)),this.isDragging&&this.drag(t)},startDrag:function(t){var e;this.isListening||this.startListening(),this.isDragging||(this.isDragging=!0,this.trigger("dragStart",t),e=this.getCell(t),e&&this.cellOver(e))},drag:function(t){var e;this.isDragging&&(e=this.getCell(t),Q(e,this.cell)||(this.cell&&this.cellOut(),e&&this.cellOver(e)),this.dragScroll(t))},cellOver:function(t){this.cell=t,this.trigger("cellOver",t,Q(t,this.origCell))},cellOut:function(){this.cell&&(this.trigger("cellOut",this.cell),this.cell=null)},mouseup:function(t){this.stopDrag(t),this.stopListening(t)},stopDrag:function(t){this.isDragging&&(this.stopScrolling(),this.trigger("dragStop",t),this.isDragging=!1)},stopListening:function(e){this.isListening&&(this.scrollEl&&(this.scrollEl.off("scroll",this.scrollHandlerProxy),this.scrollHandlerProxy=null),t(document).off("mousemove",this.mousemoveProxy).off("mouseup",this.mouseupProxy).off("selectstart",this.preventDefault),this.mousemoveProxy=null,this.mouseupProxy=null,this.isListening=!1,this.trigger("listenStop",e),this.origCell=this.cell=null,this.coordMap.clear())},getCell:function(t){return this.coordMap.getCell(t.pageX,t.pageY)},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1))},preventDefault:function(t){t.preventDefault()},computeScrollBounds:function(){var t,e=this.scrollEl;e&&(t=e.offset(),this.scrollBounds={top:t.top,left:t.left,bottom:t.top+e.outerHeight(),right:t.left+e.outerWidth()})},dragScroll:function(t){var e,n,i,r,s=this.scrollSensitivity,o=this.scrollBounds,l=0,a=0;o&&(e=(s-(t.pageY-o.top))/s,n=(s-(o.bottom-t.pageY))/s,i=(s-(t.pageX-o.left))/s,r=(s-(o.right-t.pageX))/s,e>=0&&1>=e?l=-1*e*this.scrollSpeed:n>=0&&1>=n&&(l=n*this.scrollSpeed),i>=0&&1>=i?a=-1*i*this.scrollSpeed:r>=0&&1>=r&&(a=r*this.scrollSpeed)),this.setScrollVel(l,a)},setScrollVel:function(e,n){this.scrollTopVel=e,this.scrollLeftVel=n,this.constrainScrollVel(),!this.scrollTopVel&&!this.scrollLeftVel||this.scrollIntervalId||(this.scrollIntervalId=setInterval(t.proxy(this,"scrollIntervalFunc"),this.scrollIntervalMs))},constrainScrollVel:function(){var t=this.scrollEl;0>this.scrollTopVel?0>=t.scrollTop()&&(this.scrollTopVel=0):this.scrollTopVel>0&&t.scrollTop()+t[0].clientHeight>=t[0].scrollHeight&&(this.scrollTopVel=0),0>this.scrollLeftVel?0>=t.scrollLeft()&&(this.scrollLeftVel=0):this.scrollLeftVel>0&&t.scrollLeft()+t[0].clientWidth>=t[0].scrollWidth&&(this.scrollLeftVel=0)},scrollIntervalFunc:function(){var t=this.scrollEl,e=this.scrollIntervalMs/1e3;this.scrollTopVel&&t.scrollTop(t.scrollTop()+this.scrollTopVel*e),this.scrollLeftVel&&t.scrollLeft(t.scrollLeft()+this.scrollLeftVel*e),this.constrainScrollVel(),this.scrollTopVel||this.scrollLeftVel||this.stopScrolling()},stopScrolling:function(){this.scrollIntervalId&&(clearInterval(this.scrollIntervalId),this.scrollIntervalId=null,this.computeCoords())},scrollHandler:function(){this.scrollIntervalId||this.computeCoords()}}),We=K.extend({options:null,sourceEl:null,el:null,parentEl:null,top0:null,left0:null,mouseY0:null,mouseX0:null,topDelta:null,leftDelta:null,mousemoveProxy:null,isFollowing:!1,isHidden:!1,isAnimating:!1,constructor:function(e,n){this.options=n=n||{},this.sourceEl=e,this.parentEl=n.parentEl?t(n.parentEl):e.parent()},start:function(e){this.isFollowing||(this.isFollowing=!0,this.mouseY0=e.pageY,this.mouseX0=e.pageX,this.topDelta=0,this.leftDelta=0,this.isHidden||this.updatePosition(),t(document).on("mousemove",this.mousemoveProxy=t.proxy(this,"mousemove")))},stop:function(e,n){function i(){this.isAnimating=!1,r.destroyEl(),this.top0=this.left0=null,n&&n()}var r=this,s=this.options.revertDuration;this.isFollowing&&!this.isAnimating&&(this.isFollowing=!1,t(document).off("mousemove",this.mousemoveProxy),e&&s&&!this.isHidden?(this.isAnimating=!0,this.el.animate({top:this.top0,left:this.left0},{duration:s,complete:i})):i())},getEl:function(){var t=this.el;return t||(this.sourceEl.width(),t=this.el=this.sourceEl.clone().css({position:"absolute",visibility:"",display:this.isHidden?"none":"",margin:0,right:"auto",bottom:"auto",width:this.sourceEl.width(),height:this.sourceEl.height(),opacity:this.options.opacity||"",zIndex:this.options.zIndex}).appendTo(this.parentEl)),t},destroyEl:function(){this.el&&(this.el.remove(),this.el=null)},updatePosition:function(){var t,e;this.getEl(),null===this.top0&&(this.sourceEl.width(),t=this.sourceEl.offset(),e=this.el.offsetParent().offset(),this.top0=t.top-e.top,this.left0=t.left-e.left),this.el.css({top:this.top0+this.topDelta,left:this.left0+this.leftDelta})},mousemove:function(t){this.topDelta=t.pageY-this.mouseY0,this.leftDelta=t.pageX-this.mouseX0,this.isHidden||this.updatePosition()},hide:function(){this.isHidden||(this.isHidden=!0,this.el&&this.el.hide())},show:function(){this.isHidden&&(this.isHidden=!1,this.updatePosition(),this.getEl().show())}}),je=K.extend({view:null,isRTL:null,cellHtml:"<td/>",constructor:function(t){this.view=t,this.isRTL=t.opt("isRTL")},rowHtml:function(t,e){var n,i,r=this.getHtmlRenderer("cell",t),s="";for(e=e||0,n=0;this.colCnt>n;n++)i=this.getCell(e,n),s+=r(i);return s=this.bookendCells(s,t,e),"<tr>"+s+"</tr>"},bookendCells:function(t,e,n){var i=this.getHtmlRenderer("intro",e)(n||0),r=this.getHtmlRenderer("outro",e)(n||0),s=this.isRTL?r:i,o=this.isRTL?i:r;return"string"==typeof t?s+t+o:t.prepend(s).append(o)},getHtmlRenderer:function(t,e){var n,i,r,s,o=this.view;return n=t+"Html",e&&(i=e+P(t)+"Html"),i&&(s=o[i])?r=o:i&&(s=this[i])?r=this:(s=o[n])?r=o:(s=this[n])&&(r=this),"function"==typeof s?function(){return s.apply(r,arguments)||""}:function(){return s||""}}}),Xe=De.Grid=je.extend({start:null,end:null,rowCnt:0,colCnt:0,rowData:null,colData:null,el:null,coordMap:null,elsByFill:null,documentDragStartProxy:null,colHeadFormat:null,eventTimeFormat:null,displayEventEnd:null,constructor:function(){je.apply(this,arguments),this.coordMap=new Be(this),this.elsByFill={},this.documentDragStartProxy=t.proxy(this,"documentDragStart")},render:function(){this.bindHandlers()},destroy:function(){this.unbindHandlers()},computeColHeadFormat:function(){},computeEventTimeFormat:function(){return this.view.opt("smallTimeFormat")},computeDisplayEventEnd:function(){return!1},setRange:function(t){var e=this.view;this.start=t.start.clone(),this.end=t.end.clone(),this.rowData=[],this.colData=[],this.updateCells(),this.colHeadFormat=e.opt("columnFormat")||this.computeColHeadFormat(),this.eventTimeFormat=e.opt("timeFormat")||this.computeEventTimeFormat(),this.displayEventEnd=e.opt("displayEventEnd"),null==this.displayEventEnd&&(this.displayEventEnd=this.computeDisplayEventEnd())},updateCells:function(){},rangeToSegs:function(){},getCell:function(e,n){var i;return null==n&&("number"==typeof e?(n=e%this.colCnt,e=Math.floor(e/this.colCnt)):(n=e.col,e=e.row)),i={row:e,col:n},t.extend(i,this.getRowData(e),this.getColData(n)),t.extend(i,this.computeCellRange(i)),i},computeCellRange:function(){},getRowData:function(t){return this.rowData[t]||{}},getColData:function(t){return this.colData[t]||{}},getRowEl:function(){},getColEl:function(){},getCellDayEl:function(t){return this.getColEl(t.col)||this.getRowEl(t.row)},computeRowCoords:function(){var t,e,n,i=[];for(t=0;this.rowCnt>t;t++)e=this.getRowEl(t),n={top:e.offset().top},t>0&&(i[t-1].bottom=n.top),i.push(n);return n.bottom=n.top+e.outerHeight(),i},computeColCoords:function(){var t,e,n,i=[];for(t=0;this.colCnt>t;t++)e=this.getColEl(t),n={left:e.offset().left},t>0&&(i[t-1].right=n.left),i.push(n);return n.right=n.left+e.outerWidth(),i},bindHandlers:function(){var e=this;this.el.on("mousedown",function(n){t(n.target).is(".fc-event-container *, .fc-more")||t(n.target).closest(".fc-popover").length||e.dayMousedown(n)}),this.bindSegHandlers(),t(document).on("dragstart",this.documentDragStartProxy)},unbindHandlers:function(){t(document).off("dragstart",this.documentDragStartProxy)},dayMousedown:function(t){var e,n,i=this,r=this.view,s=r.opt("selectable"),o=new Ie(this.coordMap,{scroll:r.opt("dragScroll"),dragStart:function(){r.unselect()},cellOver:function(t,r){var l=o.origCell;l&&(e=r?t:null,s&&(n=i.computeSelection(l,t),n?i.renderSelection(n):a()))},cellOut:function(){e=null,n=null,i.destroySelection(),u()},listenStop:function(t){e&&r.trigger("dayClick",i.getCellDayEl(e),e.start,t),n&&r.reportSelection(n,t),u()}});o.mousedown(t)},renderRangeHelper:function(t,e){var n;n=e?x(e.event):{},n.start=t.start.clone(),n.end=t.end?t.end.clone():null,n.allDay=null,this.view.calendar.normalizeEventDateProps(n),n.className=(n.className||[]).concat("fc-helper"),e||(n.editable=!1),this.renderHelper(n,e)},renderHelper:function(){},destroyHelper:function(){},renderSelection:function(t){this.renderHighlight(t)},destroySelection:function(){this.destroyHighlight()},computeSelection:function(t,e){var n,i=[t.start,t.end,e.start,e.end];return i.sort(V),n={start:i[0].clone(),end:i[3].clone()},this.view.calendar.isSelectionRangeAllowed(n)?n:null},renderHighlight:function(t){this.renderFill("highlight",this.rangeToSegs(t))},destroyHighlight:function(){this.destroyFill("highlight")},highlightSegClasses:function(){return["fc-highlight"]},renderFill:function(){},destroyFill:function(t){var e=this.elsByFill[t];e&&(e.remove(),delete this.elsByFill[t])},renderFillSegEls:function(e,n){var i,r=this,s=this[e+"SegEl"],o="",l=[];if(n.length){for(i=0;n.length>i;i++)o+=this.fillSegHtml(e,n[i]);t(o).each(function(e,i){var o=n[e],a=t(i);s&&(a=s.call(r,o,a)),a&&(a=t(a),a.is(r.fillSegTag)&&(o.el=a,l.push(o)))})}return l},fillSegTag:"div",fillSegHtml:function(t,e){var n=this[t+"SegClasses"],i=this[t+"SegStyles"],r=n?n.call(this,e):[],s=i?i.call(this,e):"";return"<"+this.fillSegTag+(r.length?' class="'+r.join(" ")+'"':"")+(s?' style="'+s+'"':"")+" />"},headHtml:function(){return'<div class="fc-row '+this.view.widgetHeaderClass+'">'+"<table>"+"<thead>"+this.rowHtml("head")+"</thead>"+"</table>"+"</div>"},headCellHtml:function(t){var e=this.view,n=t.start;return'<th class="fc-day-header '+e.widgetHeaderClass+" fc-"+Fe[n.day()]+'">'+z(n.format(this.colHeadFormat))+"</th>"},bgCellHtml:function(t){var e=this.view,n=t.start,i=this.getDayClasses(n);return i.unshift("fc-day",e.widgetContentClass),'<td class="'+i.join(" ")+'"'+' data-date="'+n.format("YYYY-MM-DD")+'"'+"></td>"},getDayClasses:function(t){var e=this.view,n=e.calendar.getNow().stripTime(),i=["fc-"+Fe[t.day()]];return"month"===e.name&&t.month()!=e.intervalStart.month()&&i.push("fc-other-month"),t.isSame(n,"day")?i.push("fc-today",e.highlightStateClass):n>t?i.push("fc-past"):i.push("fc-future"),i}});Xe.mixin({mousedOverSeg:null,isDraggingSeg:!1,isResizingSeg:!1,segs:null,renderEvents:function(t){var e,n,i=this.eventsToSegs(t),r=[],s=[];for(e=0;i.length>e;e++)n=i[e],J(n.event)?r.push(n):s.push(n);r=this.renderBgSegs(r)||r,s=this.renderFgSegs(s)||s,this.segs=r.concat(s)},destroyEvents:function(){this.triggerSegMouseout(),this.destroyFgSegs(),this.destroyBgSegs(),this.segs=null},getEventSegs:function(){return this.segs||[]},renderFgSegs:function(){},destroyFgSegs:function(){},renderFgSegEls:function(e,n){var i,r=this.view,s="",o=[];if(e.length){for(i=0;e.length>i;i++)s+=this.fgSegHtml(e[i],n);t(s).each(function(n,i){var s=e[n],l=r.resolveEventEl(s.event,t(i));l&&(l.data("fc-seg",s),s.el=l,o.push(s))})}return o},fgSegHtml:function(){},renderBgSegs:function(t){return this.renderFill("bgEvent",t)},destroyBgSegs:function(){this.destroyFill("bgEvent")},bgEventSegEl:function(t,e){return this.view.resolveEventEl(t.event,e)},bgEventSegClasses:function(t){var e=t.event,n=e.source||{};return["fc-bgevent"].concat(e.className,n.className||[])},bgEventSegStyles:function(t){var e=this.view,n=t.event,i=n.source||{},r=n.color,s=i.color,o=e.opt("eventColor"),l=n.backgroundColor||r||i.backgroundColor||s||e.opt("eventBackgroundColor")||o;return l?"background-color:"+l:""},businessHoursSegClasses:function(){return["fc-nonbusiness","fc-bgevent"]},bindSegHandlers:function(){var e=this,n=this.view;t.each({mouseenter:function(t,n){e.triggerSegMouseover(t,n)},mouseleave:function(t,n){e.triggerSegMouseout(t,n)},click:function(t,e){return n.trigger("eventClick",this,t.event,e)},mousedown:function(i,r){t(r.target).is(".fc-resizer")&&n.isEventResizable(i.event)?e.segResizeMousedown(i,r):n.isEventDraggable(i.event)&&e.segDragMousedown(i,r)}},function(n,i){e.el.on(n,".fc-event-container > *",function(n){var r=t(this).data("fc-seg");return!r||e.isDraggingSeg||e.isResizingSeg?void 0:i.call(this,r,n)})})},triggerSegMouseover:function(t,e){this.mousedOverSeg||(this.mousedOverSeg=t,this.view.trigger("eventMouseover",t.el[0],t.event,e))},triggerSegMouseout:function(t,e){e=e||{},this.mousedOverSeg&&(t=t||this.mousedOverSeg,this.mousedOverSeg=null,this.view.trigger("eventMouseout",t.el[0],t.event,e))},segDragMousedown:function(t,e){var n,i=this,r=this.view,s=t.el,o=t.event,l=new We(t.el,{parentEl:r.el,opacity:r.opt("dragOpacity"),revertDuration:r.opt("dragRevertDuration"),zIndex:2}),d=new Ie(r.coordMap,{distance:5,scroll:r.opt("dragScroll"),listenStart:function(t){l.hide(),l.start(t)},dragStart:function(e){i.triggerSegMouseout(t,e),i.isDraggingSeg=!0,r.hideEvent(o),r.trigger("eventDragStart",s[0],o,e,{})},cellOver:function(e,s){var u=t.cell||d.origCell;n=i.computeEventDrop(u,e,o),n?(r.renderDrag(n,t)?l.hide():l.show(),s&&(n=null)):(l.show(),a())},cellOut:function(){n=null,r.destroyDrag(),l.show(),u()},dragStop:function(t){l.stop(!n,function(){i.isDraggingSeg=!1,r.destroyDrag(),r.showEvent(o),r.trigger("eventDragStop",s[0],o,t,{}),n&&r.reportEventDrop(o,n,s,t)}),u()},listenStop:function(){l.stop()}});d.mousedown(e)},computeEventDrop:function(t,e,n){var i,r,s,o,l,a=t.start,u=e.start;return a.hasTime()===u.hasTime()?(i=E(u,a),r=n.start.clone().add(i),s=null===n.end?null:n.end.clone().add(i),o=n.allDay):(r=u.clone(),s=null,o=!u.hasTime()),l={start:r,end:s,allDay:o},this.view.calendar.isEventRangeAllowed(l,n)?l:null},documentDragStart:function(e,n){var i,r,s=this.view;s.opt("droppable")&&(i=t(e.target),r=s.opt("dropAccept"),(t.isFunction(r)?r.call(i[0],i):i.is(r))&&this.startExternalDrag(i,e,n))},startExternalDrag:function(e,n){var i,r,s=this,o=se(e);i=new Ie(this.coordMap,{cellOver:function(t){r=s.computeExternalDrop(t,o),r?s.renderDrag(r):a()},cellOut:function(){r=null,s.destroyDrag(),u()}}),t(document).one("dragstop",function(t,n){s.destroyDrag(),u(),r&&s.view.reportExternalDrop(o,r,e,t,n)}),i.startDrag(n)},computeExternalDrop:function(t,e){var n={start:t.start.clone(),end:null};return e.startTime&&!n.start.hasTime()&&n.start.time(e.startTime),e.duration&&(n.end=n.start.clone().add(e.duration)),this.view.calendar.isExternalDropRangeAllowed(n,e.eventProps)?n:null},renderDrag:function(){},destroyDrag:function(){},segResizeMousedown:function(t,e){function n(){s.destroyEventResize(),o.showEvent(c),u()}var i,r,s=this,o=this.view,l=o.calendar,d=t.el,c=t.event,h=c.start,f=l.getEventEnd(c);r=new Ie(this.coordMap,{distance:5,scroll:o.opt("dragScroll"),dragStart:function(e){s.triggerSegMouseout(t,e),s.isResizingSeg=!0,o.trigger("eventResizeStart",d[0],c,e,{})},cellOver:function(e){i=e.end,i.isAfter(h)||(i=h.clone().add(E(e.end,e.start))),i.isSame(f)?i=null:l.isEventRangeAllowed({start:h,end:i},c)?(s.renderEventResize({start:h,end:i},t),o.hideEvent(c)):(i=null,a())},cellOut:function(){i=null,n()},dragStop:function(t){s.isResizingSeg=!1,n(),o.trigger("eventResizeStop",d[0],c,t,{}),i&&o.reportEventResize(c,i,d,t)}}),r.mousedown(e)},renderEventResize:function(){},destroyEventResize:function(){},getEventTimeText:function(t,e){return e=e||this.eventTimeFormat,t.end&&this.displayEventEnd?this.view.formatRange(t,e):t.start.format(e)},getSegClasses:function(t,e,n){var i=t.event,r=["fc-event",t.isStart?"fc-start":"fc-not-start",t.isEnd?"fc-end":"fc-not-end"].concat(i.className,i.source?i.source.className:[]);return e&&r.push("fc-draggable"),n&&r.push("fc-resizable"),r},getEventSkinCss:function(t){var e=this.view,n=t.source||{},i=t.color,r=n.color,s=e.opt("eventColor"),o=t.backgroundColor||i||n.backgroundColor||r||e.opt("eventBackgroundColor")||s,l=t.borderColor||i||n.borderColor||r||e.opt("eventBorderColor")||s,a=t.textColor||n.textColor||e.opt("eventTextColor"),u=[];return o&&u.push("background-color:"+o),l&&u.push("border-color:"+l),a&&u.push("color:"+a),u.join(";")},eventsToSegs:function(t,e){var n,i=this.eventsToRanges(t),r=[];for(n=0;i.length>n;n++)r.push.apply(r,this.eventRangeToSegs(i[n],e));return r},eventsToRanges:function(e){var n=this,i=ne(e),r=[];return t.each(i,function(t,e){e.length&&r.push.apply(r,te(e[0])?n.eventsToInverseRanges(e):n.eventsToNormalRanges(e))}),r},eventsToNormalRanges:function(t){var e,n,i,r,s=this.view.calendar,o=[];for(e=0;t.length>e;e++)n=t[e],i=n.start.clone().stripZone(),r=s.getEventEnd(n).stripZone(),o.push({event:n,start:i,end:r,eventStartMS:+i,eventDurationMS:r-i});return o},eventsToInverseRanges:function(t){var e,n,i=this.view,r=i.start.clone().stripZone(),s=i.end.clone().stripZone(),o=this.eventsToNormalRanges(t),l=[],a=t[0],u=r;for(o.sort(ie),e=0;o.length>e;e++)n=o[e],n.start>u&&l.push({event:a,start:u,end:n.start}),u=n.end;return s>u&&l.push({event:a,start:u,end:s}),l},eventRangeToSegs:function(t,e){var n,i,r;for(n=e?e(t):this.rangeToSegs(t),i=0;n.length>i;i++)r=n[i],r.event=t.event,r.eventStartMS=t.eventStartMS,r.eventDurationMS=t.eventDurationMS;return n}}),De.compareSegs=re,De.dataAttrPrefix="";var $e=Xe.extend({numbersVisible:!1,bottomCoordPadding:0,breakOnWeeks:null,cellDates:null,dayToCellOffsets:null,rowEls:null,dayEls:null,helperEls:null,render:function(t){var e,n,i,r=this.view,s=this.rowCnt,o=this.colCnt,l=s*o,a="";for(e=0;s>e;e++)a+=this.dayRowHtml(e,t);for(this.el.html(a),this.rowEls=this.el.find(".fc-row"),this.dayEls=this.el.find(".fc-day"),n=0;l>n;n++)i=this.getCell(n),r.trigger("dayRender",null,i.start,this.dayEls.eq(n));Xe.prototype.render.call(this)},destroy:function(){this.destroySegPopover(),Xe.prototype.destroy.call(this)},dayRowHtml:function(t,e){var n=this.view,i=["fc-row","fc-week",n.widgetContentClass];return e&&i.push("fc-rigid"),'<div class="'+i.join(" ")+'">'+'<div class="fc-bg">'+"<table>"+this.rowHtml("day",t)+"</table>"+"</div>"+'<div class="fc-content-skeleton">'+"<table>"+(this.numbersVisible?"<thead>"+this.rowHtml("number",t)+"</thead>":"")+"</table>"+"</div>"+"</div>"},dayCellHtml:function(t){return this.bgCellHtml(t)},computeColHeadFormat:function(){return this.rowCnt>1?"ddd":this.colCnt>1?this.view.opt("dayOfMonthFormat"):"dddd"},computeEventTimeFormat:function(){return this.view.opt("extraSmallTimeFormat")},computeDisplayEventEnd:function(){return 1==this.colCnt},updateCells:function(){var t,e,n,i;if(this.updateCellDates(),t=this.cellDates,this.breakOnWeeks){for(e=t[0].day(),i=1;t.length>i&&t[i].day()!=e;i++);n=Math.ceil(t.length/i)}else n=1,i=t.length;this.rowCnt=n,this.colCnt=i},updateCellDates:function(){for(var t=this.view,e=this.start.clone(),n=[],i=-1,r=[];e.isBefore(this.end);)t.isHiddenDay(e)?r.push(i+.5):(i++,r.push(i),n.push(e.clone())),e.add(1,"days");this.cellDates=n,this.dayToCellOffsets=r},computeCellRange:function(t){var e=this.colCnt,n=t.row*e+(this.isRTL?e-t.col-1:t.col),i=this.cellDates[n].clone(),r=i.clone().add(1,"day");return{start:i,end:r}},getRowEl:function(t){return this.rowEls.eq(t)},getColEl:function(t){return this.dayEls.eq(t)},getCellDayEl:function(t){return this.dayEls.eq(t.row*this.colCnt+t.col)},computeRowCoords:function(){var t=Xe.prototype.computeRowCoords.call(this);return t[t.length-1].bottom+=this.bottomCoordPadding,t},rangeToSegs:function(t){var e,n,i,r,s,o,l,a,u,d,c=this.isRTL,h=this.rowCnt,f=this.colCnt,g=[];for(t=this.view.computeDayRange(t),e=this.dateToCellOffset(t.start),n=this.dateToCellOffset(t.end.subtract(1,"days")),i=0;h>i;i++)r=i*f,s=r+f-1,a=Math.max(r,e),u=Math.min(s,n),a=Math.ceil(a),u=Math.floor(u),u>=a&&(o=a===e,l=u===n,a-=r,u-=r,d={row:i,isStart:o,isEnd:l},c?(d.leftCol=f-u-1,d.rightCol=f-a-1):(d.leftCol=a,d.rightCol=u),g.push(d));return g},dateToCellOffset:function(t){var e=this.dayToCellOffsets,n=t.diff(this.start,"days");return 0>n?e[0]-1:n>=e.length?e[e.length-1]+1:e[n]},renderDrag:function(t,e){var n;return this.renderHighlight(this.view.calendar.ensureVisibleEventRange(t)),e&&!e.el.closest(this.el).length?(this.renderRangeHelper(t,e),n=this.view.opt("dragOpacity"),void 0!==n&&this.helperEls.css("opacity",n),!0):void 0},destroyDrag:function(){this.destroyHighlight(),this.destroyHelper()},renderEventResize:function(t,e){this.renderHighlight(t),this.renderRangeHelper(t,e)},destroyEventResize:function(){this.destroyHighlight(),this.destroyHelper()},renderHelper:function(e,n){var i,r=[],s=this.eventsToSegs([e]);s=this.renderFgSegEls(s),i=this.renderSegRows(s),this.rowEls.each(function(e,s){var o,l=t(s),a=t('<div class="fc-helper-skeleton"><table/></div>');o=n&&n.row===e?n.el.position().top:l.find(".fc-content-skeleton tbody").position().top,a.css("top",o).find("table").append(i[e].tbodyEl),l.append(a),r.push(a[0])}),this.helperEls=t(r)},destroyHelper:function(){this.helperEls&&(this.helperEls.remove(),this.helperEls=null)},fillSegTag:"td",renderFill:function(e,n){var i,r,s,o=[];for(n=this.renderFillSegEls(e,n),i=0;n.length>i;i++)r=n[i],s=this.renderFillRow(e,r),this.rowEls.eq(r.row).append(s),o.push(s[0]);return this.elsByFill[e]=t(o),n},renderFillRow:function(e,n){var i,r,s=this.colCnt,o=n.leftCol,l=n.rightCol+1;return i=t('<div class="fc-'+e.toLowerCase()+'-skeleton">'+"<table><tr/></table>"+"</div>"),r=i.find("tr"),o>0&&r.append('<td colspan="'+o+'"/>'),r.append(n.el.attr("colspan",l-o)),s>l&&r.append('<td colspan="'+(s-l)+'"/>'),this.bookendCells(r,e),i}});$e.mixin({rowStructs:null,destroyEvents:function(){this.destroySegPopover(),Xe.prototype.destroyEvents.apply(this,arguments)},getEventSegs:function(){return Xe.prototype.getEventSegs.call(this).concat(this.popoverSegs||[])},renderBgSegs:function(e){var n=t.grep(e,function(t){return t.event.allDay});return Xe.prototype.renderBgSegs.call(this,n)},renderFgSegs:function(e){var n;return e=this.renderFgSegEls(e),n=this.rowStructs=this.renderSegRows(e),this.rowEls.each(function(e,i){t(i).find(".fc-content-skeleton > table").append(n[e].tbodyEl)}),e},destroyFgSegs:function(){for(var t,e=this.rowStructs||[];t=e.pop();)t.tbodyEl.remove();this.rowStructs=null},renderSegRows:function(t){var e,n,i=[];for(e=this.groupSegRows(t),n=0;e.length>n;n++)i.push(this.renderSegRow(n,e[n]));return i},fgSegHtml:function(t,e){var n,i=this.view,r=t.event,s=i.isEventDraggable(r),o=!e&&r.allDay&&t.isEnd&&i.isEventResizable(r),l=this.getSegClasses(t,s,o),a=this.getEventSkinCss(r),u="";return l.unshift("fc-day-grid-event"),!r.allDay&&t.isStart&&(u='<span class="fc-time">'+z(this.getEventTimeText(r))+"</span>"),n='<span class="fc-title">'+(z(r.title||"")||"&nbsp;")+"</span>",'<a class="'+l.join(" ")+'"'+(r.url?' href="'+z(r.url)+'"':"")+(a?' style="'+a+'"':"")+">"+'<div class="fc-content">'+(this.isRTL?n+" "+u:u+" "+n)+"</div>"+(o?'<div class="fc-resizer"/>':"")+"</a>"},renderSegRow:function(e,n){function i(e){for(;e>o;)d=(v[r-1]||[])[o],d?d.attr("rowspan",parseInt(d.attr("rowspan")||1,10)+1):(d=t("<td/>"),l.append(d)),m[r][o]=d,v[r][o]=d,o++}var r,s,o,l,a,u,d,c=this.colCnt,h=this.buildSegLevels(n),f=Math.max(1,h.length),g=t("<tbody/>"),p=[],m=[],v=[];for(r=0;f>r;r++){if(s=h[r],o=0,l=t("<tr/>"),p.push([]),m.push([]),v.push([]),s)for(a=0;s.length>a;a++){for(u=s[a],i(u.leftCol),d=t('<td class="fc-event-container"/>').append(u.el),u.leftCol!=u.rightCol?d.attr("colspan",u.rightCol-u.leftCol+1):v[r][o]=d;u.rightCol>=o;)m[r][o]=d,p[r][o]=u,o++;l.append(d)}i(c),this.bookendCells(l,"eventSkeleton"),g.append(l)}return{row:e,tbodyEl:g,cellMatrix:m,segMatrix:p,segLevels:h,segs:n}},buildSegLevels:function(t){var e,n,i,r=[];for(t.sort(re),e=0;t.length>e;e++){for(n=t[e],i=0;r.length>i&&oe(n,r[i]);i++);n.level=i,(r[i]||(r[i]=[])).push(n)}for(i=0;r.length>i;i++)r[i].sort(le);return r},groupSegRows:function(t){var e,n=[];for(e=0;this.rowCnt>e;e++)n.push([]);for(e=0;t.length>e;e++)n[t[e].row].push(t[e]);return n}}),$e.mixin({segPopover:null,popoverSegs:null,destroySegPopover:function(){this.segPopover&&this.segPopover.hide()},limitRows:function(t){var e,n,i=this.rowStructs||[];for(e=0;i.length>e;e++)this.unlimitRow(e),n=t?"number"==typeof t?t:this.computeRowLevelLimit(e):!1,n!==!1&&this.limitRow(e,n)},computeRowLevelLimit:function(t){var e,n,i=this.rowEls.eq(t),r=i.height(),s=this.rowStructs[t].tbodyEl.children();for(e=0;s.length>e;e++)if(n=s.eq(e).removeClass("fc-limited"),n.position().top+n.outerHeight()>r)return e;return!1},limitRow:function(e,n){function i(i){for(;i>D;)r=E.getCell(e,D),d=E.getCellSegs(r,n),d.length&&(f=o[n-1][D],w=E.renderMoreLink(r,d),y=t("<div/>").append(w),f.append(y),b.push(y[0])),D++}var r,s,o,l,a,u,d,c,h,f,g,p,m,v,y,w,E=this,S=this.rowStructs[e],b=[],D=0;if(n&&S.segLevels.length>n){for(s=S.segLevels[n-1],o=S.cellMatrix,l=S.tbodyEl.children().slice(n).addClass("fc-limited").get(),a=0;s.length>a;a++){for(u=s[a],i(u.leftCol),h=[],c=0;u.rightCol>=D;)r=this.getCell(e,D),d=this.getCellSegs(r,n),h.push(d),c+=d.length,D++;if(c){for(f=o[n-1][u.leftCol],g=f.attr("rowspan")||1,p=[],m=0;h.length>m;m++)v=t('<td class="fc-more-cell"/>').attr("rowspan",g),d=h[m],r=this.getCell(e,u.leftCol+m),w=this.renderMoreLink(r,[u].concat(d)),y=t("<div/>").append(w),v.append(y),p.push(v[0]),b.push(v[0]);f.addClass("fc-limited").after(t(p)),l.push(f[0])}}i(this.colCnt),S.moreEls=t(b),S.limitedEls=t(l)}},unlimitRow:function(t){var e=this.rowStructs[t];e.moreEls&&(e.moreEls.remove(),e.moreEls=null),e.limitedEls&&(e.limitedEls.removeClass("fc-limited"),e.limitedEls=null)},renderMoreLink:function(e,n){var i=this,r=this.view;return t('<a class="fc-more"/>').text(this.getMoreLinkText(n.length)).on("click",function(s){var o=r.opt("eventLimitClick"),l=e.start,a=t(this),u=i.getCellDayEl(e),d=i.getCellSegs(e),c=i.resliceDaySegs(d,l),h=i.resliceDaySegs(n,l);"function"==typeof o&&(o=r.trigger("eventLimitClick",null,{date:l,dayEl:u,moreEl:a,segs:c,hiddenSegs:h},s)),"popover"===o?i.showSegPopover(e,a,c):"string"==typeof o&&r.calendar.zoomTo(l,o)})},showSegPopover:function(t,e,n){var i,r,s=this,o=this.view,l=e.parent();i=1==this.rowCnt?o.el:this.rowEls.eq(t.row),r={className:"fc-more-popover",content:this.renderSegPopoverContent(t,n),parentEl:this.el,top:i.offset().top,autoHide:!0,viewportConstrain:o.opt("popoverViewportConstrain"),hide:function(){s.segPopover.destroy(),s.segPopover=null,s.popoverSegs=null}},this.isRTL?r.right=l.offset().left+l.outerWidth()+1:r.left=l.offset().left-1,this.segPopover=new Oe(r),this.segPopover.show()},renderSegPopoverContent:function(e,n){var i,r=this.view,s=r.opt("theme"),o=e.start.format(r.opt("dayPopoverFormat")),l=t('<div class="fc-header '+r.widgetHeaderClass+'">'+'<span class="fc-close '+(s?"ui-icon ui-icon-closethick":"fc-icon fc-icon-x")+'"></span>'+'<span class="fc-title">'+z(o)+"</span>"+'<div class="fc-clear"/>'+"</div>"+'<div class="fc-body '+r.widgetContentClass+'">'+'<div class="fc-event-container"></div>'+"</div>"),a=l.find(".fc-event-container");for(n=this.renderFgSegEls(n,!0),this.popoverSegs=n,i=0;n.length>i;i++)n[i].cell=e,a.append(n[i].el);return l},resliceDaySegs:function(e,n){var i=t.map(e,function(t){return t.event}),r=n.clone().stripTime(),s=r.clone().add(1,"days"),o={start:r,end:s};return this.eventsToSegs(i,function(t){var e=y(t,o);return e?[e]:[]})},getMoreLinkText:function(t){var e=this.view.opt("eventLimitText");return"function"==typeof e?e(t):"+"+t+" "+e},getCellSegs:function(t,e){for(var n,i=this.rowStructs[t.row].segMatrix,r=e||0,s=[];i.length>r;)n=i[r][t.col],n&&s.push(n),r++;return s}});var Ue=Xe.extend({slotDuration:null,snapDuration:null,minTime:null,maxTime:null,axisFormat:null,dayEls:null,slatEls:null,slatTops:null,helperEl:null,businessHourSegs:null,constructor:function(){Xe.apply(this,arguments),this.processOptions()},render:function(){this.el.html(this.renderHtml()),this.dayEls=this.el.find(".fc-day"),this.slatEls=this.el.find(".fc-slats tr"),this.computeSlatTops(),this.renderBusinessHours(),Xe.prototype.render.call(this)},renderBusinessHours:function(){var t=this.view.calendar.getBusinessHoursEvents();this.businessHourSegs=this.renderFill("businessHours",this.eventsToSegs(t),"bgevent")},renderHtml:function(){return'<div class="fc-bg"><table>'+this.rowHtml("slotBg")+"</table>"+"</div>"+'<div class="fc-slats">'+"<table>"+this.slatRowHtml()+"</table>"+"</div>"},slotBgCellHtml:function(t){return this.bgCellHtml(t)},slatRowHtml:function(){for(var t,n,i,r=this.view,s=this.isRTL,o="",l=0===this.slotDuration.asMinutes()%15,a=e.duration(+this.minTime);this.maxTime>a;)t=this.start.clone().time(a),n=t.minutes(),i='<td class="fc-axis fc-time '+r.widgetContentClass+'" '+r.axisStyleAttr()+">"+(l&&n?"":"<span>"+z(t.format(this.axisFormat))+"</span>")+"</td>",o+="<tr "+(n?'class="fc-minor"':"")+">"+(s?"":i)+'<td class="'+r.widgetContentClass+'"/>'+(s?i:"")+"</tr>",a.add(this.slotDuration);return o},processOptions:function(){var t=this.view,n=t.opt("slotDuration"),i=t.opt("snapDuration");n=e.duration(n),i=i?e.duration(i):n,this.slotDuration=n,this.snapDuration=i,this.minTime=e.duration(t.opt("minTime")),this.maxTime=e.duration(t.opt("maxTime")),this.axisFormat=t.opt("axisFormat")||t.opt("smallTimeFormat")},computeColHeadFormat:function(){return this.colCnt>1?this.view.opt("dayOfMonthFormat"):"dddd"},computeEventTimeFormat:function(){return this.view.opt("noMeridiemTimeFormat")},computeDisplayEventEnd:function(){return!0},updateCells:function(){var t,e=this.view,n=[];for(t=this.start.clone();t.isBefore(this.end);)n.push({day:t.clone()}),t.add(1,"day"),t=e.skipHiddenDays(t);this.isRTL&&n.reverse(),this.colData=n,this.colCnt=n.length,this.rowCnt=Math.ceil((this.maxTime-this.minTime)/this.snapDuration)},computeCellRange:function(t){var e=this.computeSnapTime(t.row),n=this.view.calendar.rezoneDate(t.day).time(e),i=n.clone().add(this.snapDuration);return{start:n,end:i}},getColEl:function(t){return this.dayEls.eq(t)},computeSnapTime:function(t){return e.duration(this.minTime+this.snapDuration*t)},rangeToSegs:function(t){var e,n,i,r,s=this.colCnt,o=[];for(t={start:t.start.clone().stripZone(),end:t.end.clone().stripZone()},n=0;s>n;n++)i=this.colData[n].day,r={start:i.clone().time(this.minTime),end:i.clone().time(this.maxTime)},e=y(t,r),e&&(e.col=n,o.push(e));
return o},resize:function(){this.computeSlatTops(),this.updateSegVerticals()},computeRowCoords:function(){var t,e,n=this.el.offset().top,i=[];for(t=0;this.rowCnt>t;t++)e={top:n+this.computeTimeTop(this.computeSnapTime(t))},t>0&&(i[t-1].bottom=e.top),i.push(e);return e.bottom=e.top+this.computeTimeTop(this.computeSnapTime(t)),i},computeDateTop:function(t,n){return this.computeTimeTop(e.duration(t.clone().stripZone()-n.clone().stripTime()))},computeTimeTop:function(t){var e,n,i,r,s=(t-this.minTime)/this.slotDuration;return s=Math.max(0,s),s=Math.min(this.slatEls.length,s),e=Math.floor(s),n=s-e,i=this.slatTops[e],n?(r=this.slatTops[e+1],i+(r-i)*n):i},computeSlatTops:function(){var e,n=[];this.slatEls.each(function(i,r){e=t(r).position().top,n.push(e)}),n.push(e+this.slatEls.last().outerHeight()),this.slatTops=n},renderDrag:function(t,e){var n;return e?(this.renderRangeHelper(t,e),n=this.view.opt("dragOpacity"),void 0!==n&&this.helperEl.css("opacity",n),!0):(this.renderHighlight(this.view.calendar.ensureVisibleEventRange(t)),void 0)},destroyDrag:function(){this.destroyHelper(),this.destroyHighlight()},renderEventResize:function(t,e){this.renderRangeHelper(t,e)},destroyEventResize:function(){this.destroyHelper()},renderHelper:function(e,n){var i,r,s,o,l=this.eventsToSegs([e]);for(l=this.renderFgSegEls(l),i=this.renderSegTable(l),r=0;l.length>r;r++)s=l[r],n&&n.col===s.col&&(o=n.el,s.el.css({left:o.css("left"),right:o.css("right"),"margin-left":o.css("margin-left"),"margin-right":o.css("margin-right")}));this.helperEl=t('<div class="fc-helper-skeleton"/>').append(i).appendTo(this.el)},destroyHelper:function(){this.helperEl&&(this.helperEl.remove(),this.helperEl=null)},renderSelection:function(t){this.view.opt("selectHelper")?this.renderRangeHelper(t):this.renderHighlight(t)},destroySelection:function(){this.destroyHelper(),this.destroyHighlight()},renderFill:function(e,n,i){var r,s,o,l,a,u,d,c,h,f;if(n.length){for(n=this.renderFillSegEls(e,n),r=this.groupSegCols(n),i=i||e.toLowerCase(),s=t('<div class="fc-'+i+'-skeleton">'+"<table><tr/></table>"+"</div>"),o=s.find("tr"),l=0;r.length>l;l++)if(a=r[l],u=t("<td/>").appendTo(o),a.length)for(d=t('<div class="fc-'+i+'-container"/>').appendTo(u),c=this.colData[l].day,h=0;a.length>h;h++)f=a[h],d.append(f.el.css({top:this.computeDateTop(f.start,c),bottom:-this.computeDateTop(f.end,c)}));this.bookendCells(o,e),this.el.append(s),this.elsByFill[e]=s}return n}});Ue.mixin({eventSkeletonEl:null,renderFgSegs:function(e){return e=this.renderFgSegEls(e),this.el.append(this.eventSkeletonEl=t('<div class="fc-content-skeleton"/>').append(this.renderSegTable(e))),e},destroyFgSegs:function(){this.eventSkeletonEl&&(this.eventSkeletonEl.remove(),this.eventSkeletonEl=null)},renderSegTable:function(e){var n,i,r,s,o,l,a=t("<table><tr/></table>"),u=a.find("tr");for(n=this.groupSegCols(e),this.computeSegVerticals(e),s=0;n.length>s;s++){for(o=n[s],ae(o),l=t('<div class="fc-event-container"/>'),i=0;o.length>i;i++)r=o[i],r.el.css(this.generateSegPositionCss(r)),30>r.bottom-r.top&&r.el.addClass("fc-short"),l.append(r.el);u.append(t("<td/>").append(l))}return this.bookendCells(u,"eventSkeleton"),a},updateSegVerticals:function(){var t,e=(this.segs||[]).concat(this.businessHourSegs||[]);for(this.computeSegVerticals(e),t=0;e.length>t;t++)e[t].el.css(this.generateSegVerticalCss(e[t]))},computeSegVerticals:function(t){var e,n;for(e=0;t.length>e;e++)n=t[e],n.top=this.computeDateTop(n.start,n.start),n.bottom=this.computeDateTop(n.end,n.start)},fgSegHtml:function(t,e){var n,i,r,s=this.view,o=t.event,l=s.isEventDraggable(o),a=!e&&t.isEnd&&s.isEventResizable(o),u=this.getSegClasses(t,l,a),d=this.getEventSkinCss(o);return u.unshift("fc-time-grid-event"),s.isMultiDayEvent(o)?(t.isStart||t.isEnd)&&(n=this.getEventTimeText(t),i=this.getEventTimeText(t,"LT"),r=this.getEventTimeText({start:t.start})):(n=this.getEventTimeText(o),i=this.getEventTimeText(o,"LT"),r=this.getEventTimeText({start:o.start})),'<a class="'+u.join(" ")+'"'+(o.url?' href="'+z(o.url)+'"':"")+(d?' style="'+d+'"':"")+">"+'<div class="fc-content">'+(n?'<div class="fc-time" data-start="'+z(r)+'"'+' data-full="'+z(i)+'"'+">"+"<span>"+z(n)+"</span>"+"</div>":"")+(o.title?'<div class="fc-title">'+z(o.title)+"</div>":"")+"</div>"+'<div class="fc-bg"/>'+(a?'<div class="fc-resizer"/>':"")+"</a>"},generateSegPositionCss:function(t){var e,n,i=this.view.opt("slotEventOverlap"),r=t.backwardCoord,s=t.forwardCoord,o=this.generateSegVerticalCss(t);return i&&(s=Math.min(1,r+2*(s-r))),this.isRTL?(e=1-s,n=r):(e=r,n=1-s),o.zIndex=t.level+1,o.left=100*e+"%",o.right=100*n+"%",i&&t.forwardPressure&&(o[this.isRTL?"marginLeft":"marginRight"]=20),o},generateSegVerticalCss:function(t){return{top:t.top,bottom:-t.bottom}},groupSegCols:function(t){var e,n=[];for(e=0;this.colCnt>e;e++)n.push([]);for(e=0;t.length>e;e++)n[t[e].col].push(t[e]);return n}});var qe=De.View=K.extend({type:null,name:null,title:null,calendar:null,options:null,coordMap:null,el:null,start:null,end:null,intervalStart:null,intervalEnd:null,intervalDuration:null,intervalUnit:null,isSelected:!1,scrollerEl:null,scrollTop:null,widgetHeaderClass:null,widgetContentClass:null,highlightStateClass:null,nextDayThreshold:null,isHiddenDayHash:null,documentMousedownProxy:null,constructor:function(n,i,r){this.calendar=n,this.options=i,this.type=this.name=r,this.nextDayThreshold=e.duration(this.opt("nextDayThreshold")),this.initTheming(),this.initHiddenDays(),this.documentMousedownProxy=t.proxy(this,"documentMousedown"),this.initialize()},initialize:function(){},opt:function(e){var n;return n=this.options[e],void 0!==n?n:(n=this.calendar.options[e],t.isPlainObject(n)&&!r(e)?w(n,this.type):n)},trigger:function(t,e){var n=this.calendar;return n.trigger.apply(n,[t,e||this].concat(Array.prototype.slice.call(arguments,2),[this]))},setDate:function(t){this.setRange(this.computeRange(t))},setRange:function(e){t.extend(this,e)},computeRange:function(t){var n,i,r=e.duration(this.opt("duration")||this.constructor.duration||{days:1}),s=b(r),o=t.clone().startOf(s),l=o.clone().add(r);return D("days",r)?(o.stripTime(),l.stripTime()):(o.hasTime()||(o=this.calendar.rezoneDate(o)),l.hasTime()||(l=this.calendar.rezoneDate(l))),n=o.clone(),n=this.skipHiddenDays(n),i=l.clone(),i=this.skipHiddenDays(i,-1,!0),{intervalDuration:r,intervalUnit:s,intervalStart:o,intervalEnd:l,start:n,end:i}},computePrevDate:function(t){return this.massageCurrentDate(t.clone().startOf(this.intervalUnit).subtract(this.intervalDuration),-1)},computeNextDate:function(t){return this.massageCurrentDate(t.clone().startOf(this.intervalUnit).add(this.intervalDuration))},massageCurrentDate:function(t,n){return this.intervalDuration<=e.duration({days:1})&&this.isHiddenDay(t)&&(t=this.skipHiddenDays(t,n),t.startOf("day")),t},updateTitle:function(){this.title=this.computeTitle()},computeTitle:function(){return this.formatRange({start:this.intervalStart,end:this.intervalEnd},this.opt("titleFormat")||this.computeTitleFormat(),this.opt("titleRangeSeparator"))},computeTitleFormat:function(){return"year"==this.intervalUnit?"YYYY":"month"==this.intervalUnit?this.opt("monthYearFormat"):this.intervalDuration.as("days")>1?"ll":"LL"},formatRange:function(t,e,n){var i=t.end;return i.hasTime()||(i=i.clone().subtract(1)),j(t.start,i,e,n,this.opt("isRTL"))},renderView:function(){this.render(),this.updateSize(),this.initializeScroll(),this.trigger("viewRender",this,this,this.el),t(document).on("mousedown",this.documentMousedownProxy)},render:function(){},destroyView:function(){this.unselect(),this.destroyViewEvents(),this.destroy(),this.trigger("viewDestroy",this,this,this.el),t(document).off("mousedown",this.documentMousedownProxy)},destroy:function(){this.el.empty()},initTheming:function(){var t=this.opt("theme")?"ui":"fc";this.widgetHeaderClass=t+"-widget-header",this.widgetContentClass=t+"-widget-content",this.highlightStateClass=t+"-state-highlight"},updateSize:function(t){t&&this.recordScroll(),this.updateHeight(),this.updateWidth()},updateWidth:function(){},updateHeight:function(){var t=this.calendar;this.setHeight(t.getSuggestedViewHeight(),t.isHeightAuto())},setHeight:function(){},computeScrollerHeight:function(t,e){var n,i;return e=e||this.scrollerEl,n=this.el.add(e),n.css({position:"relative",left:-1}),i=this.el.outerHeight()-e.height(),n.css({position:"",left:""}),t-i},initializeScroll:function(){},recordScroll:function(){this.scrollerEl&&(this.scrollTop=this.scrollerEl.scrollTop())},restoreScroll:function(){null!==this.scrollTop&&this.scrollerEl.scrollTop(this.scrollTop)},renderViewEvents:function(t){this.renderEvents(t),this.eventSegEach(function(t){this.trigger("eventAfterRender",t.event,t.event,t.el)}),this.trigger("eventAfterAllRender")},renderEvents:function(){},destroyViewEvents:function(){this.eventSegEach(function(t){this.trigger("eventDestroy",t.event,t.event,t.el)}),this.destroyEvents()},destroyEvents:function(){},resolveEventEl:function(e,n){var i=this.trigger("eventRender",e,e,n);return i===!1?n=null:i&&i!==!0&&(n=t(i)),n},showEvent:function(t){this.eventSegEach(function(t){t.el.css("visibility","")},t)},hideEvent:function(t){this.eventSegEach(function(t){t.el.css("visibility","hidden")},t)},eventSegEach:function(t,e){var n,i=this.getEventSegs();for(n=0;i.length>n;n++)e&&i[n].event._id!==e._id||t.call(this,i[n])},getEventSegs:function(){return[]},isEventDraggable:function(t){var e=t.source||{};return F(t.startEditable,e.startEditable,this.opt("eventStartEditable"),t.editable,e.editable,this.opt("editable"))},reportEventDrop:function(t,e,n,i){var r=this.calendar,s=r.mutateEvent(t,e),o=function(){s.undo(),r.reportEventChange()};this.triggerEventDrop(t,s.dateDelta,o,n,i),r.reportEventChange()},triggerEventDrop:function(t,e,n,i,r){this.trigger("eventDrop",i[0],t,e,n,r,{})},reportExternalDrop:function(e,n,i,r,s){var o,l,a=e.eventProps;a&&(o=t.extend({},a,n),l=this.calendar.renderEvent(o,e.stick)[0]),this.triggerExternalDrop(l,n,i,r,s)},triggerExternalDrop:function(t,e,n,i,r){this.trigger("drop",n[0],e.start,i,r),t&&this.trigger("eventReceive",null,t)},renderDrag:function(){},destroyDrag:function(){},isEventResizable:function(t){var e=t.source||{};return F(t.durationEditable,e.durationEditable,this.opt("eventDurationEditable"),t.editable,e.editable,this.opt("editable"))},reportEventResize:function(t,e,n,i){var r=this.calendar,s=r.mutateEvent(t,{end:e}),o=function(){s.undo(),r.reportEventChange()};this.triggerEventResize(t,s.durationDelta,o,n,i),r.reportEventChange()},triggerEventResize:function(t,e,n,i,r){this.trigger("eventResize",i[0],t,e,n,r,{})},select:function(t,e){this.unselect(e),this.renderSelection(t),this.reportSelection(t,e)},renderSelection:function(){},reportSelection:function(t,e){this.isSelected=!0,this.trigger("select",null,t.start,t.end,e)},unselect:function(t){this.isSelected&&(this.isSelected=!1,this.destroySelection(),this.trigger("unselect",null,t))},destroySelection:function(){},documentMousedown:function(e){var n;this.isSelected&&this.opt("unselectAuto")&&v(e)&&(n=this.opt("unselectCancel"),n&&t(e.target).closest(n).length||this.unselect(e))},initHiddenDays:function(){var e,n=this.opt("hiddenDays")||[],i=[],r=0;for(this.opt("weekends")===!1&&n.push(0,6),e=0;7>e;e++)(i[e]=-1!==t.inArray(e,n))||r++;if(!r)throw"invalid hiddenDays";this.isHiddenDayHash=i},isHiddenDay:function(t){return e.isMoment(t)&&(t=t.day()),this.isHiddenDayHash[t]},skipHiddenDays:function(t,e,n){var i=t.clone();for(e=e||1;this.isHiddenDayHash[(i.day()+(n?e:0)+7)%7];)i.add(e,"days");return i},computeDayRange:function(t){var e,n=t.start.clone().stripTime(),i=t.end,r=null;return i&&(r=i.clone().stripTime(),e=+i.time(),e&&e>=this.nextDayThreshold&&r.add(1,"days")),(!i||n>=r)&&(r=n.clone().add(1,"days")),{start:n,end:r}},isMultiDayEvent:function(t){var e=this.computeDayRange(t);return e.end.diff(e.start,"days")>1}});De.sourceNormalizers=[],De.sourceFetchers=[];var Ke={dataType:"json",cache:!1},Qe=1,Je=Ce.basic=qe.extend({dayGrid:null,dayNumbersVisible:!1,weekNumbersVisible:!1,weekNumberWidth:null,headRowEl:null,initialize:function(){this.dayGrid=new $e(this),this.coordMap=this.dayGrid.coordMap},setRange:function(t){qe.prototype.setRange.call(this,t),this.dayGrid.breakOnWeeks=/year|month|week/.test(this.intervalUnit),this.dayGrid.setRange(t)},computeRange:function(t){var e=qe.prototype.computeRange.call(this,t);return/year|month/.test(e.intervalUnit)&&(e.start.startOf("week"),e.start=this.skipHiddenDays(e.start),e.end.weekday()&&(e.end.add(1,"week").startOf("week"),e.end=this.skipHiddenDays(e.end,-1,!0))),e},render:function(){this.dayNumbersVisible=this.dayGrid.rowCnt>1,this.weekNumbersVisible=this.opt("weekNumbers"),this.dayGrid.numbersVisible=this.dayNumbersVisible||this.weekNumbersVisible,this.el.addClass("fc-basic-view").html(this.renderHtml()),this.headRowEl=this.el.find("thead .fc-row"),this.scrollerEl=this.el.find(".fc-day-grid-container"),this.dayGrid.coordMap.containerEl=this.scrollerEl,this.dayGrid.el=this.el.find(".fc-day-grid"),this.dayGrid.render(this.hasRigidRows())},destroy:function(){this.dayGrid.destroy(),qe.prototype.destroy.call(this)},renderHtml:function(){return'<table><thead><tr><td class="'+this.widgetHeaderClass+'">'+this.dayGrid.headHtml()+"</td>"+"</tr>"+"</thead>"+"<tbody>"+"<tr>"+'<td class="'+this.widgetContentClass+'">'+'<div class="fc-day-grid-container">'+'<div class="fc-day-grid"/>'+"</div>"+"</td>"+"</tr>"+"</tbody>"+"</table>"},headIntroHtml:function(){return this.weekNumbersVisible?'<th class="fc-week-number '+this.widgetHeaderClass+'" '+this.weekNumberStyleAttr()+">"+"<span>"+z(this.opt("weekNumberTitle"))+"</span>"+"</th>":void 0},numberIntroHtml:function(t){return this.weekNumbersVisible?'<td class="fc-week-number" '+this.weekNumberStyleAttr()+">"+"<span>"+this.calendar.calculateWeekNumber(this.dayGrid.getCell(t,0).start)+"</span>"+"</td>":void 0},dayIntroHtml:function(){return this.weekNumbersVisible?'<td class="fc-week-number '+this.widgetContentClass+'" '+this.weekNumberStyleAttr()+"></td>":void 0},introHtml:function(){return this.weekNumbersVisible?'<td class="fc-week-number" '+this.weekNumberStyleAttr()+"></td>":void 0},numberCellHtml:function(t){var e,n=t.start;return this.dayNumbersVisible?(e=this.dayGrid.getDayClasses(n),e.unshift("fc-day-number"),'<td class="'+e.join(" ")+'" data-date="'+n.format()+'">'+n.date()+"</td>"):"<td/>"},weekNumberStyleAttr:function(){return null!==this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},hasRigidRows:function(){var t=this.opt("eventLimit");return t&&"number"!=typeof t},updateWidth:function(){this.weekNumbersVisible&&(this.weekNumberWidth=h(this.el.find(".fc-week-number")))},setHeight:function(t,e){var n,i=this.opt("eventLimit");g(this.scrollerEl),l(this.headRowEl),this.dayGrid.destroySegPopover(),i&&"number"==typeof i&&this.dayGrid.limitRows(i),n=this.computeScrollerHeight(t),this.setGridHeight(n,e),i&&"number"!=typeof i&&this.dayGrid.limitRows(i),!e&&f(this.scrollerEl,n)&&(o(this.headRowEl,m(this.scrollerEl)),n=this.computeScrollerHeight(t),this.scrollerEl.height(n),this.restoreScroll())},setGridHeight:function(t,e){e?c(this.dayGrid.rowEls):d(this.dayGrid.rowEls,t,!0)},renderEvents:function(t){this.dayGrid.renderEvents(t),this.updateHeight()},getEventSegs:function(){return this.dayGrid.getEventSegs()},destroyEvents:function(){this.recordScroll(),this.dayGrid.destroyEvents()},renderDrag:function(t,e){return this.dayGrid.renderDrag(t,e)},destroyDrag:function(){this.dayGrid.destroyDrag()},renderSelection:function(t){this.dayGrid.renderSelection(t)},destroySelection:function(){this.dayGrid.destroySelection()}});n({fixedWeekCount:!0});var tn=Ce.month=Je.extend({computeRange:function(t){var e,n=Je.prototype.computeRange.call(this,t);return this.isFixedWeeks()&&(e=Math.ceil(n.end.diff(n.start,"weeks",!0)),n.end.add(6-e,"weeks")),n},setGridHeight:function(t,e){e=e||"variable"===this.opt("weekMode"),e&&(t*=this.rowCnt/6),d(this.dayGrid.rowEls,t,!e)},isFixedWeeks:function(){var t=this.opt("weekMode");return t?"fixed"===t:this.opt("fixedWeekCount")}});tn.duration={months:1},Ce.basicWeek={type:"basic",duration:{weeks:1}},Ce.basicDay={type:"basic",duration:{days:1}},n({allDaySlot:!0,allDayText:"all-day",scrollTime:"06:00:00",slotDuration:"00:30:00",minTime:"00:00:00",maxTime:"24:00:00",slotEventOverlap:!0});var en=5;Ce.agenda=qe.extend({timeGrid:null,dayGrid:null,axisWidth:null,noScrollRowEls:null,bottomRuleEl:null,bottomRuleHeight:null,initialize:function(){this.timeGrid=new Ue(this),this.opt("allDaySlot")?(this.dayGrid=new $e(this),this.coordMap=new Ze([this.dayGrid.coordMap,this.timeGrid.coordMap])):this.coordMap=this.timeGrid.coordMap},setRange:function(t){qe.prototype.setRange.call(this,t),this.timeGrid.setRange(t),this.dayGrid&&this.dayGrid.setRange(t)},render:function(){this.el.addClass("fc-agenda-view").html(this.renderHtml()),this.scrollerEl=this.el.find(".fc-time-grid-container"),this.timeGrid.coordMap.containerEl=this.scrollerEl,this.timeGrid.el=this.el.find(".fc-time-grid"),this.timeGrid.render(),this.bottomRuleEl=t('<hr class="'+this.widgetHeaderClass+'"/>').appendTo(this.timeGrid.el),this.dayGrid&&(this.dayGrid.el=this.el.find(".fc-day-grid"),this.dayGrid.render(),this.dayGrid.bottomCoordPadding=this.dayGrid.el.next("hr").outerHeight()),this.noScrollRowEls=this.el.find(".fc-row:not(.fc-scroller *)")},destroy:function(){this.timeGrid.destroy(),this.dayGrid&&this.dayGrid.destroy(),qe.prototype.destroy.call(this)},renderHtml:function(){return'<table><thead><tr><td class="'+this.widgetHeaderClass+'">'+this.timeGrid.headHtml()+"</td>"+"</tr>"+"</thead>"+"<tbody>"+"<tr>"+'<td class="'+this.widgetContentClass+'">'+(this.dayGrid?'<div class="fc-day-grid"/><hr class="'+this.widgetHeaderClass+'"/>':"")+'<div class="fc-time-grid-container">'+'<div class="fc-time-grid"/>'+"</div>"+"</td>"+"</tr>"+"</tbody>"+"</table>"},headIntroHtml:function(){var t,e,n,i;return this.opt("weekNumbers")?(t=this.timeGrid.getCell(0).start,e=this.calendar.calculateWeekNumber(t),n=this.opt("weekNumberTitle"),i=this.opt("isRTL")?e+n:n+e,'<th class="fc-axis fc-week-number '+this.widgetHeaderClass+'" '+this.axisStyleAttr()+">"+"<span>"+z(i)+"</span>"+"</th>"):'<th class="fc-axis '+this.widgetHeaderClass+'" '+this.axisStyleAttr()+"></th>"},dayIntroHtml:function(){return'<td class="fc-axis '+this.widgetContentClass+'" '+this.axisStyleAttr()+">"+"<span>"+(this.opt("allDayHtml")||z(this.opt("allDayText")))+"</span>"+"</td>"},slotBgIntroHtml:function(){return'<td class="fc-axis '+this.widgetContentClass+'" '+this.axisStyleAttr()+"></td>"},introHtml:function(){return'<td class="fc-axis" '+this.axisStyleAttr()+"></td>"},axisStyleAttr:function(){return null!==this.axisWidth?'style="width:'+this.axisWidth+'px"':""},updateSize:function(t){t&&this.timeGrid.resize(),qe.prototype.updateSize.call(this,t)},updateWidth:function(){this.axisWidth=h(this.el.find(".fc-axis"))},setHeight:function(t,e){var n,i;null===this.bottomRuleHeight&&(this.bottomRuleHeight=this.bottomRuleEl.outerHeight()),this.bottomRuleEl.hide(),this.scrollerEl.css("overflow",""),g(this.scrollerEl),l(this.noScrollRowEls),this.dayGrid&&(this.dayGrid.destroySegPopover(),n=this.opt("eventLimit"),n&&"number"!=typeof n&&(n=en),n&&this.dayGrid.limitRows(n)),e||(i=this.computeScrollerHeight(t),f(this.scrollerEl,i)?(o(this.noScrollRowEls,m(this.scrollerEl)),i=this.computeScrollerHeight(t),this.scrollerEl.height(i),this.restoreScroll()):(this.scrollerEl.height(i).css("overflow","hidden"),this.bottomRuleEl.show()))},initializeScroll:function(){function t(){n.scrollerEl.scrollTop(r)}var n=this,i=e.duration(this.opt("scrollTime")),r=this.timeGrid.computeTimeTop(i);r=Math.ceil(r),r&&r++,t(),setTimeout(t,0)},renderEvents:function(t){var e,n,i=[],r=[],s=[];for(n=0;t.length>n;n++)t[n].allDay?i.push(t[n]):r.push(t[n]);e=this.timeGrid.renderEvents(r),this.dayGrid&&(s=this.dayGrid.renderEvents(i)),this.updateHeight()},getEventSegs:function(){return this.timeGrid.getEventSegs().concat(this.dayGrid?this.dayGrid.getEventSegs():[])},destroyEvents:function(){this.recordScroll(),this.timeGrid.destroyEvents(),this.dayGrid&&this.dayGrid.destroyEvents()},renderDrag:function(t,e){return t.start.hasTime()?this.timeGrid.renderDrag(t,e):this.dayGrid?this.dayGrid.renderDrag(t,e):void 0},destroyDrag:function(){this.timeGrid.destroyDrag(),this.dayGrid&&this.dayGrid.destroyDrag()},renderSelection:function(t){t.start.hasTime()||t.end.hasTime()?this.timeGrid.renderSelection(t):this.dayGrid&&this.dayGrid.renderSelection(t)},destroySelection:function(){this.timeGrid.destroySelection(),this.dayGrid&&this.dayGrid.destroySelection()}}),Ce.agendaWeek={type:"agenda",duration:{weeks:1}},Ce.agendaDay={type:"agenda",duration:{days:1}}});

/*!
 * FullCalendar v2.2.6 Google Calendar Plugin
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
 
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'jquery' ], factory);
	}
	else {
		factory(jQuery);
	}
})(function($) {


var API_BASE = 'https://www.googleapis.com/calendar/v3/calendars';
var fc = $.fullCalendar;
var applyAll = fc.applyAll;


fc.sourceNormalizers.push(function(sourceOptions) {
	var googleCalendarId = sourceOptions.googleCalendarId;
	var url = sourceOptions.url;
	var match;

	// if the Google Calendar ID hasn't been explicitly defined
	if (!googleCalendarId && url) {

		// detect if the ID was specified as a single string.
		// will match calendars like "asdf1234@calendar.google.com" in addition to person email calendars.
		if ((match = /^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(url))) {
			googleCalendarId = url;
		}
		// try to scrape it out of a V1 or V3 API feed URL
		else if (
			(match = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(url)) ||
			(match = /^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(url))
		) {
			googleCalendarId = decodeURIComponent(match[1]);
		}

		if (googleCalendarId) {
			sourceOptions.googleCalendarId = googleCalendarId;
		}
	}


	if (googleCalendarId) { // is this a Google Calendar?

		// make each Google Calendar source uneditable by default
		if (sourceOptions.editable == null) {
			sourceOptions.editable = false;
		}

		// We want removeEventSource to work, but it won't know about the googleCalendarId primitive.
		// Shoehorn it into the url, which will function as the unique primitive. Won't cause side effects.
		// This hack is obsolete since 2.2.3, but keep it so this plugin file is compatible with old versions.
		sourceOptions.url = googleCalendarId;
	}
});


fc.sourceFetchers.push(function(sourceOptions, start, end, timezone) {
	if (sourceOptions.googleCalendarId) {
		return transformOptions(sourceOptions, start, end, timezone, this); // `this` is the calendar
	}
});


function transformOptions(sourceOptions, start, end, timezone, calendar) {
	var url = API_BASE + '/' + encodeURIComponent(sourceOptions.googleCalendarId) + '/events?callback=?'; // jsonp
	var apiKey = sourceOptions.googleCalendarApiKey || calendar.options.googleCalendarApiKey;
	var success = sourceOptions.success;
	var data;
	var timezoneArg; // populated when a specific timezone. escaped to Google's liking

	function reportError(message, apiErrorObjs) {
		var errorObjs = apiErrorObjs || [ { message: message } ]; // to be passed into error handlers
		var consoleObj = window.console;
		var consoleWarnFunc = consoleObj ? (consoleObj.warn || consoleObj.log) : null;

		// call error handlers
		(sourceOptions.googleCalendarError || $.noop).apply(calendar, errorObjs);
		(calendar.options.googleCalendarError || $.noop).apply(calendar, errorObjs);

		// print error to debug console
		if (consoleWarnFunc) {
			consoleWarnFunc.apply(consoleObj, [ message ].concat(apiErrorObjs || []));
		}
	}

	if (!apiKey) {
		reportError("Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/");
		return {}; // an empty source to use instead. won't fetch anything.
	}

	// The API expects an ISO8601 datetime with a time and timezone part.
	// Since the calendar's timezone offset isn't always known, request the date in UTC and pad it by a day on each
	// side, guaranteeing we will receive all events in the desired range, albeit a superset.
	// .utc() will set a zone and give it a 00:00:00 time.
	if (!start.hasZone()) {
		start = start.clone().utc().add(-1, 'day');
	}
	if (!end.hasZone()) {
		end = end.clone().utc().add(1, 'day');
	}

	// when sending timezone names to Google, only accepts underscores, not spaces
	if (timezone && timezone != 'local') {
		timezoneArg = timezone.replace(' ', '_');
	}

	data = $.extend({}, sourceOptions.data || {}, {
		key: apiKey,
		timeMin: start.format(),
		timeMax: end.format(),
		timeZone: timezoneArg,
		singleEvents: true,
		maxResults: 9999
	});

	return $.extend({}, sourceOptions, {
		googleCalendarId: null, // prevents source-normalizing from happening again
		url: url,
		data: data,
		startParam: false, // `false` omits this parameter. we already included it above
		endParam: false, // same
		timezoneParam: false, // same
		success: function(data) {
			var events = [];
			var successArgs;
			var successRes;

			if (data.error) {
				reportError('Google Calendar API: ' + data.error.message, data.error.errors);
			}
			else if (data.items) {
				$.each(data.items, function(i, entry) {
					var url = entry.htmlLink;

					// make the URLs for each event show times in the correct timezone
					if (timezoneArg) {
						url = injectQsComponent(url, 'ctz=' + timezoneArg);
					}

					events.push({
						id: entry.id,
						title: entry.summary,
						start: entry.start.dateTime || entry.start.date, // try timed. will fall back to all-day
						end: entry.end.dateTime || entry.end.date, // same
						url: url,
						location: entry.location,
						description: entry.description
					});
				});

				// call the success handler(s) and allow it to return a new events array
				successArgs = [ events ].concat(Array.prototype.slice.call(arguments, 1)); // forward other jq args
				successRes = applyAll(success, this, successArgs);
				if ($.isArray(successRes)) {
					return successRes;
				}
			}

			return events;
		}
	});
}


// Injects a string like "arg=value" into the querystring of a URL
function injectQsComponent(url, component) {
	// inject it after the querystring but before the fragment
	return url.replace(/(\?.*?)?(#|$)/, function(whole, qs, hash) {
		return (qs ? qs + '&' : '?') + component + hash;
	});
}


});


// Maps days since **saturday** to the appropriate cell numbers
// Its value is the cell numbers to deal with.
// The file dynamically calculates days for the semester and doesn't read
// dates from specific cells.
var since = [
    [2],       // 0 days -- Sun: readings
    [3, 4],    // 1 day  -- Mon: lec lab 1
    [4],       // 2 days -- Tues: lab 1
    [5],       // 3 days -- Wed: lab 1, lec2, lab 2
    [6],       // 4 days -- thurs: lab 2
    [6, 7],    // 5 days -- fri: lab 2, disc, hw
    [2],       // 6 days -- Sat: readings
];

var STYLE  = "8px solid Gold";
var MS_DAY = 1000*60*60*24;
// Function used to highlight the current day.
function updateCalendar(date) {
    // The SATURDAY before the first week of the calendar.
    var start = new Date(2014, 7, 18),
        today = date || new Date(),
        highlight = since[ today.getDay() ],
        weeks = Math.floor(((today - start) / MS_DAY) / 7); // Weeks SINCE start
    // if (highlight[0] === 2) {
    //     weeks += 1; // really shitty hack for weekends....
    // }

    var rows = document.getElementsByClassName("cal"),
        temp = rows[weeks],
        cells;

    // Date is out of range of calendar
    if (typeof temp === 'undefined') {
        return;
    }

    cells = temp.cells;

    if (today.getDay() === 3) { // HIGHLIGHT LAB ON WEDS BASED ON TIME OF DAY
        var n = (today.getHours() < 12) ? 4 : 6;
        highlight.push(n);
    }

    // Hack for weeks like spring break, deadweek
    // Not a robust hack, but it should work OK.
    c = (cells.length == 5) ? 3 : highlight[0];

    cells[c].style.border = STYLE;
    if (c === 2 & weeks >= 2) { // HW, in the row before
        // CANT USE 8 BECAUSE ALL WEEKS ARENT THE SAME DARNIT.
        prev = rows[weeks].cells;
        rows[weeks].cells[prev.length - 1].style.border = STYLE;
    }
    if (highlight[1] && cells.length > highlight[1]) {
        cells[highlight[1]].style.border = STYLE;
    }

    // Grey out cells that have past
    for(i = 1; i < rows.length; i += 1) {
        cells = rows[i].cells;
        for(j = 2; j < cells.length; j += 1) {
            if (cells[j].style.border) { return; }
            cells[j].style.background = "#BBB";
            // Go 1 level deep to change the background on inner divs.
            // FIXME: Banish the jQuery? or make this recursive... or
            // not because I would ever need it? But it might be fun...
            if (typeof $ !== 'undefined') {
                if ($(cells[j]).has('div')) {
                    $(cells[j]).children().css('background', '#BBB');
                }
            }
        }
    }
}

function displaySpeech(img_name, img_src) {
    document[img_name].src = img_src;
}



// Instructors
DanGarcia = {
    name: 'Sr. Lecturer SOE Dan Garcia',
    img: 'DanGarciaUCBFaculty2004.jpg',
    imgSrc: 'DanGarcia.jpg',
    web: 'http://www.cs.berkeley.edu/~ddgarcia/',
    bio: 'DanBio.txt',
    email: 'dan@cs10.org',
    office: '777 Soda, (510) 517-4041'
};

// TAs
michaelB = {
    name: 'Head TA Michael Ball',
    img: 'Sp14/MichaelBallTake3.jpg',
    imgSrc: 'MichaelBall.jpg',
    web: 'http://michaelballphoto.com',
    bio: 'MichaelBall.txt',
    email: 'michael@cs10.org' };

maxD = {
    name: 'TA Max Dougherty',
    img: 'Sp14/MaxDougherty.jpg',
    imgSrc: 'MaxDougherty.jpg',
    email: 'max@cs10.org' };

jeffreyS = {
    name: 'TA Jeffrey Snowiss',
    img: 'Fa12/JeffreySnowiss.jpg',
    imgSrc: 'JeffreySnowiss.jpg',
    email: 'jeff@cs10.org' };

victoriaS = {
    name: 'TA Victoria Shi',
    img: 'Fa13/VictoriaShi.jpg',
    imgSrc: 'VictoriaShi.jpg',
    bio: 'VictoriaBio.txt',
    email: 'victoria@cs10.org' };

rachelH = {
    name: 'TA Rachel Huang',
    img: 'Fa13/RachelHuang.jpg',
    imgSrc: 'RachelHuang.jpg',
    email: 'rachel@cs10.org'
};

josephC = {
    name: 'TA Joseph Cawthorne',
    img: 'Fa13/JosephCawthorne.jpg',
    imgSrc: 'JosephCawthorne.jpg',
    email: 'joseph@cs10.org' };

jaclynB = {
    name: 'TA Jaclyn Burge',
    img: 'Fa13/JaclynBurge.jpg',
    imgSrc: 'JaclynBurge.jpg',
    web: 'www.jacburge.me',
    email: 'jaclyn@cs10.org' };

andyS   = {
    name: 'TA Andrew Schmitt',
    img: 'Sp14/AndrewSchmitt.jpg',
    imgSrc: 'AndrewSchmitt.jpg',
    email: 'andy@cs10.org'};

LaurenMock = {
    name: 'Head TA Lauren Mock',
    img: 'Sp14/LaurenMock.jpg',
    imgSrc: 'LaurenMock.jpg',
    web: 'http://linkedin.com/in/laurenmock',
    email: 'lauren@cs10.org' };

adamK = {
    name: 'TA Adam Kuphaldt',
    img: 'Sp14/AdamKuphaldt.jpg',
    imgSrc: 'AdamKuphaldt.jpg',
    email: 'adam@cs10.org' };

AranyU = {
    name: 'TA Arany Uthayakumar',
    img: 'Sp14/AranyUthayakumar.jpg',
    imgSrc: 'AranyUthayakumar.jpg',
    bio: 'AranyBio.txt',
    email: 'arany@cs10.org' };

StevenT = {
    name: 'TA Steven Traversi',
    img: 'Sp14/StevenTraversi.jpg',
    imgSrc: 'StevenTraversi.jpg',
    email: 'steven@cs10.org'
};

carlosF = {
    name: 'TA Carlos Flores',
    img: 'Fa13/CarlosFlores.jpg',
    imgSrc: 'CarlosFlores.jpg',
    email: 'carlos@cs10.org'
};

PeterS = {
    name: 'TA Peter Sujan',
    img: 'Fa12/PeterSujan.jpg',
    imgSrc: 'PeterSujan.jpg',
    bio: 'PeterBio.txt',
    email: 'peter@cs10.org'
}

// Readers
claireW = {
    name: 'Reader Claire Watanabe',
    img: 'Fa13/ClaireWatanabe.jpg',
    imgSrc: 'ClaireWatanabe.jpg' };

brandonC = {
    name: 'Reader Brandon Chen',
    img: 'Sp14/BrandonChen.jpg',
    imgSrc: 'BrandonChen.jpg' };

alexM = {
    name: 'Reader Alex McKinney',
    img: 'Sp14/AlexMcKinney.jpg',
    imgSrc: 'AlexMcKinney.jpg' };

jobelV = {
    name: 'Reader Jobel Vecino',
    img: 'Fa13/JobelVecino.jpg',
    imgSrc: 'JobelVecino.jpg' };


/*****************************************************************************/
/** LIST DEFINITIONS **/
/*****************************************************************************/

instructors = [ DanGarcia ];

tas = [ michaelB, LaurenMock, adamK, andyS, AranyU, carlosF, jaclynB, josephC,
    jeffreyS, maxD, PeterS, rachelH, StevenT, victoriaS];

readers = [ alexM, brandonC, claireW, jobelV ];

// If you need to add a new SECTION add it to this object.
// Follow the same format.
all = {
    instructors: instructors,
    readers: readers,
    tas: tas
};

/*****************************************************************************/
/* DATA POPULATION FUNCTIONS  */
/*****************************************************************************/

// Build a basic object for a person from the current semester.
function baseObj(name) {
    src = name.replace(/ /g , '');
    return { name: name,
             img: 'Sp14/' + src + '.jpg',
             imgSrc: src + '.jpg' };
}

function buildPerson(data, width) {
    // Given a JSON object build a div that contains all the person's info
    // width is used to control how many are on a row on the page.

    // Build data objects for very simple cases with nothing special.
    if (data.constructor === String) {
        data = baseObj(data);
    }

    // Create a table element with this person's data, setting a class for width
    var cls = 'col-md-' + (width === 5 ? '20' : Math.floor(12/width));
    elm = '<div class="'+ cls + '">';
    if (!!data.img) {
        elm += '<a href="/resources/resources/images/' + data.img + '">';
    }

    elm += '<img class="staff" align="center" ';
    elm += 'alt="' + data.name + '" title="' + data.name + '" src="resources/images/small/';
    elm += data.imgSrc + '" />';
    if (!!data.img) {
        elm += '</a>';
    }
    elm += '<br /><strong>';
    if (!!data.web) {
        elm += '<a href="' + data.web + '">' + data.name + '</a>';
    } else {
        elm += data.name;
    }
    elm += '</strong> ';
    if (!!data.bio) {
        elm += '(<a href="bios/' + data.bio + '">bio</a>)';
    }
    if (!!data.email) {
        elm += '<br /><a href="mailto:' + data.email +
        '?subject=[CS10] SUBJECT"><code>' + data.email + '</code></a>';
    }
    if (!!data.office) {
        elm +=  '<br />' + data.office;
    }
    elm += '</div>';
    return elm;
}

function buildGroup(group, w) {
    // Build a set of table rows, with W items per row
    // based on the people in the GROUP
    // Add them to the appropriate HTML table element
    var ppl = all[group];
    var doc = document.getElementById(group);
    var content = '';
    for (var i = 0; i < ppl.length; i += w) {
        content += '<div class="row staffimgrow">';
        for (var j = i; j < (i + w) && j < ppl.length; j += 1) {
            if (i + w > ppl.length) {
                 w = ppl.length - i;
             }
            content += buildPerson(ppl[j], w);
        }
        content += '</div>';
        content += '<div class="clearfix"></div>';
    }
    doc.innerHTML += content;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

/* more code to run on page load */
// Parameters: a section (HTML 'id') and num of images per row.
buildGroup('instructors', 1);
buildGroup('tas', 5);
buildGroup('readers', 5);
