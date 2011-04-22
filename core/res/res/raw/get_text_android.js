function(){return function(){function g(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function i(a){var b=g(a);return b=="array"||b=="object"&&typeof a.length=="number"}function j(a){return typeof a=="string"}function aa(a){a=g(a);return a=="object"||a=="array"||a=="function"}Math.floor(Math.random()*2147483648).toString(36);var ba=Date.now||function(){return+new Date};function k(a,b){function c(){}c.prototype=b.prototype;a.h=b.prototype;a.prototype=new c};function l(a){this.stack=Error().stack||"";if(a)this.message=String(a)}k(l,Error);l.prototype.name="CustomError";function ca(a,b,c){var d={};for(var e in a)if(b.call(c,a[e],e,a))d[e]=a[e];return d}function m(a,b,c){var d={};for(var e in a)d[e]=b.call(c,a[e],e,a);return d}function da(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};function n(a,b){l.call(this,b);this.code=a;this.name=o[a]||o[13]}k(n,l);var o,p={NoSuchElementError:7,NoSuchFrameError:8,UnknownCommandError:9,StaleElementReferenceError:10,ElementNotVisibleError:11,InvalidElementStateError:12,UnknownError:13,ElementNotSelectableError:15,XPathLookupError:19,NoSuchWindowError:23,InvalidCookieDomainError:24,UnableToSetCookieError:25,ModalDialogOpenedError:26,ModalDialogOpenError:27,ScriptTimeoutError:28},q={};for(var r in p)q[p[r]]=r;o=q;
n.prototype.toString=function(){return"["+this.name+"] "+this.message};var ea=window;function fa(a){for(var b=1;b<arguments.length;b++){var c=String(arguments[b]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,c)}return a}function s(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}var t={};function ga(a){return t[a]||(t[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};function u(a,b){b.unshift(a);l.call(this,fa.apply(null,b));b.shift();this.i=a}k(u,l);u.prototype.name="AssertionError";function v(a,b){if(!a){var c=Array.prototype.slice.call(arguments,2),d="Assertion failed";if(b){d+=": "+b;var e=c}throw new u(""+d,e||[]);}return a};var w=Array.prototype,ha=w.indexOf?function(a,b,c){v(a.length!=null);return w.indexOf.call(a,b,c)}:function(a,b,c){c=c==null?0:c<0?Math.max(0,a.length+c):c;if(j(a)){if(!j(b)||b.length!=1)return-1;return a.indexOf(b,c)}for(c=c;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ia=w.forEach?function(a,b,c){v(a.length!=null);w.forEach.call(a,b,c)}:function(a,b,c){var d=a.length,e=j(a)?a.split(""):a;for(var f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},x=w.map?function(a,b,c){v(a.length!=null);return w.map.call(a,
b,c)}:function(a,b,c){var d=a.length,e=Array(d),f=j(a)?a.split(""):a;for(var h=0;h<d;h++)if(h in f)e[h]=b.call(c,f[h],h,a);return e},ja=w.some?function(a,b,c){v(a.length!=null);return w.some.call(a,b,c)}:function(a,b,c){var d=a.length,e=j(a)?a.split(""):a;for(var f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return true;return false};var y=true,ka="",z;if(y)z=/WebKit\/(\S+)/;if(z){var A=z.exec(this.navigator?this.navigator.userAgent:null);ka=A?A[1]:""};function B(a,b){this.width=a;this.height=b}B.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};B.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};function C(a){return a.nodeType==9?a:a.ownerDocument||a.document}function la(a,b){var c=[];return D(a,b,c,true)?c[0]:undefined}function D(a,b,c,d){if(a!=null){var e=0;for(var f;f=a.childNodes[e];e++){if(b(f)){c.push(f);if(d)return true}if(D(f,b,c,d))return true}}return false}function E(a,b,c,d){if(!c)a=a.parentNode;c=d==null;for(var e=0;a&&(c||e<=d);){if(b(a))return a;a=a.parentNode;e++}return null};function ma(a,b){try{var c;if(typeof b.selectSingleNode!="undefined"){var d=C(b);typeof d.setProperty!="undefined"&&d.setProperty("SelectionLanguage","XPath");c=b.selectSingleNode(a)}else if(document.implementation.hasFeature("XPath","3.0")){d=C(b);var e=d.createNSResolver(d.documentElement);c=d.evaluate(a,b,e,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}else c=null}catch(f){return null}if(!c)return null;if(c.nodeType!=1)throw Error("Returned node is not an element: "+a);return c};var F="StopIteration"in this?this.StopIteration:Error("StopIteration");function G(){}G.prototype.next=function(){throw F;};function H(a,b,c,d,e){this.a=!!b;a&&I(this,a,d);this.d=e!=undefined?e:this.c||0;if(this.a)this.d*=-1;this.f=!c}k(H,G);H.prototype.b=null;H.prototype.c=0;H.prototype.e=false;function I(a,b,c,d){if(a.b=b)a.c=typeof c=="number"?c:a.b.nodeType!=1?0:a.a?-1:1;if(typeof d=="number")a.d=d}
H.prototype.next=function(){var a;if(this.e){if(!this.b||this.f&&this.d==0)throw F;a=this.b;var b=this.a?-1:1;if(this.c==b){var c=this.a?a.lastChild:a.firstChild;c?I(this,c):I(this,a,b*-1)}else(c=this.a?a.previousSibling:a.nextSibling)?I(this,c):I(this,a.parentNode,b*-1);this.d+=this.c*(this.a?-1:1)}else this.e=true;a=this.b;if(!this.b)throw F;return a};
H.prototype.splice=function(){var a=this.b,b=this.a?1:-1;if(this.c==b){this.c=b*-1;this.d+=this.c*(this.a?-1:1)}this.a=!this.a;H.prototype.next.call(this);this.a=!this.a;b=i(arguments[0])?arguments[0]:arguments;for(var c=b.length-1;c>=0;c--)a.parentNode&&a.parentNode.insertBefore(b[c],a.nextSibling);a&&a.parentNode&&a.parentNode.removeChild(a)};function J(a,b,c,d){H.call(this,a,b,c,null,d)}k(J,H);J.prototype.next=function(){do J.h.next.call(this);while(this.c==-1);return this.b};function K(a,b){var c=C(a);if(c.defaultView&&c.defaultView.getComputedStyle)if(c=c.defaultView.getComputedStyle(a,null))return c[b]||c.getPropertyValue(b);return""};function L(a,b){return!!a&&a.nodeType==1&&(!b||a.tagName.toUpperCase()==b)}
var na=["async","autofocus","autoplay","checked","compact","complete","controls","declare","defaultchecked","defaultselected","defer","disabled","draggable","ended","formnovalidate","hidden","indeterminate","iscontenteditable","ismap","itemscope","loop","multiple","muted","nohref","noresize","noshade","novalidate","nowrap","open","paused","pubdate","readonly","required","reversed","scoped","seamless","seeking","selected","spellcheck","truespeed","willvalidate"];
function oa(a,b){if(8==a.nodeType)return null;b=b.toLowerCase();if(b=="style"){var c=s(a.style.cssText).toLowerCase();return c.charAt(c.length-1)==";"?c:c+";"}c=a.getAttributeNode(b);if(!c)return null;if(ha(na,b)>=0)return"true";return c.specified?c.value:null}function M(a){for(a=a.parentNode;a&&a.nodeType!=1&&a.nodeType!=9&&a.nodeType!=11;)a=a.parentNode;return L(a)?a:null}function N(a,b){b=ga(String(b));return K(a,b)||O(a,b)}
function O(a,b){var c=(a.currentStyle||a.style)[b];if(c!="inherit")return c!==undefined?c:null;return(c=M(a))?O(c,b):null}
function pa(a){if(g(a.getBBox)=="function")return a.getBBox();var b;if((K(a,"display")||(a.currentStyle?a.currentStyle.display:null)||a.style.display)!="none")b=new B(a.offsetWidth,a.offsetHeight);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";var f;f=a.offsetWidth;a=a.offsetHeight;b.display=c;b.position=e;b.visibility=d;b=new B(f,a)}return b}
function P(a,b){function c(f){if(N(f,"display")=="none")return false;f=M(f);return!f||c(f)}function d(f){var h=pa(f);if(h.height>0&&h.width>0)return true;if(f.innerText||f.textContent)if(qa.test(f.innerText||f.textContent))return true;return y&&ja(f.childNodes,function(X){return L(X)&&d(X)})}if(!L(a))throw Error("Argument to isShown must be of type Element");if(L(a,"TITLE"))return(C(a)?C(a).parentWindow||C(a).defaultView:window)==ea;if(L(a,"OPTION")||L(a,"OPTGROUP")){var e=E(a,function(f){return L(f,
"SELECT")});return!!e&&P(e)}if(L(a,"MAP")){if(!a.name)return false;e=C(a);e=e.evaluate?ma('/descendant::*[@usemap = "#'+a.name+'"]',e):la(e,function(f){return L(f)&&oa(f,"usemap")=="#"+a.name});return!!e&&P(e)}if(L(a,"AREA")){e=E(a,function(f){return L(f,"MAP")});return!!e&&P(e)}if(L(a,"INPUT")&&a.type.toLowerCase()=="hidden")return false;if(N(a,"visibility")=="hidden")return false;if(!c(a))return false;if(!b&&Q(a)==0)return false;if(!d(a))return false;return true}
function ra(a){var b=[""];R(a,b);b=x(b,s);return s(b.join("\n"))}function R(a,b){if(L(a,"BR"))b.push("");else{var c=sa(a);c&&b[b.length-1]&&b.push("");ia(a.childNodes,function(d){if(d.nodeType==3){var e=M(d);if(e){P(e);if(e&&P(e)){d=d.nodeValue.replace(ta," ");e=b.pop();var f=e.length-1;if(f>=0&&e.indexOf(" ",f)==f&&d.lastIndexOf(" ",0)==0)d=d.substr(1);b.push(e+d)}}}else L(d)&&R(d,b)});c&&b[b.length-1]&&b.push("")}}function sa(a){a=N(a,"display");return a=="block"||a=="inline-block"}
var S="[\\s\\xa0"+String.fromCharCode(160)+"]+",ta=RegExp(S,"g"),qa=RegExp("^"+S+"$");function Q(a){var b=1,c=N(a,"opacity");if(c)b=Number(c);if(a=M(a))b*=Q(a);return b};function ua(){}
function T(a,b,c){switch(typeof b){case "string":va(a,b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==null){c.push("null");break}if(g(b)=="array"){var d=b.length;c.push("[");var e="";for(var f=0;f<d;f++){c.push(e);T(a,b[f],c);e=","}c.push("]");break}c.push("{");d="";for(e in b)if(Object.prototype.hasOwnProperty.call(b,e)){f=b[e];if(typeof f!="function"){c.push(d);va(a,e,c);c.push(":");T(a,
f,c);d=","}}c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var U={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},wa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function va(a,b,c){c.push('"',b.replace(wa,function(d){if(d in U)return U[d];var e=d.charCodeAt(0),f="\\u";if(e<16)f+="000";else if(e<256)f+="00";else if(e<4096)f+="0";return U[d]=f+e.toString(16)}),'"')};function V(a){switch(g(a)){case "string":case "number":case "boolean":return a;case "function":return a.toString();case "array":return x(a,V);case "object":a=a;if("tagName"in a&&"nodeType"in a&&a.nodeType==1){var b={};b.ELEMENT=xa(a);return b}if(i(a))return x(a,V);a=ca(a,function(c,d){return typeof d=="number"||j(d)});return m(a,V);default:return null}}
function W(a,b){if(g(a)=="array")return x(a,function(c){return W(c,b)});else if(aa(a))return"ELEMENT"in a?ya(a.ELEMENT,b):m(a,function(c){return W(c,b)});return a}function za(a){a=a||document;var b=a.$wdc_;if(!b){b=a.$wdc_={};b.g=ba()}return b}function xa(a){var b=za(a.ownerDocument),c=da(b,function(d){return d==a});if(!c){c=":wdc:"+b.g++;b[c]=a}return c}
function ya(a,b){a=decodeURIComponent(a);var c=b||document,d=za(c);if(!(a in d))throw new n(10,"Element does not exist in cache");var e=d[a];for(var f=e;f;){if(f==c.documentElement)return e;f=f.parentNode}delete d[a];throw new n(10,"Element is no longer attached to the DOM");};function Aa(a){var b=ra;a=[a];var c;try{if(j(b))b=new Function(b);var d=W(a),e=b.apply(null,d);c={status:0,value:V(e)}}catch(f){c={status:"code"in f?f.code:13,value:{message:f.message}}}b=[];T(new ua,c,b);return b.join("")}var Y="_".split("."),Z=this;!(Y[0]in Z)&&Z.execScript&&Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)if(!Y.length&&Aa!==undefined)Z[$]=Aa;else Z=Z[$]?Z[$]:Z[$]={};; return this._.apply(null,arguments);}.apply({navigator:typeof window!='undefined'?window.navigator:null}, arguments);}