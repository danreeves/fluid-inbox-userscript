!function e(t,r,n){function o(i,c){if(!r[i]){if(!t[i]){var a="function"==typeof require&&require;if(!c&&a)return a(i,!0);if(u)return u(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var f=r[i]={exports:{}};t[i][0].call(f.exports,function(e){var r=t[i][1][e];return o(r||e)},f,f.exports,e,t,r,n)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";function n(e,t,r){var n;return function(){var o=this,u=arguments,i=function(){n=null,r||e.apply(o,u)},c=r&&!n;clearTimeout(n),n=setTimeout(i,t),c&&e.apply(o,u)}}r.__esModule=!0,r.default=n},{}],2:[function(e,t,r){"use strict";r.__esModule=!0;var n=window.fluid;r.default=n},{}],3:[function(e,t,r){"use strict";function n(){for(var e=0,t=0;t<localStorage.length;t++){var r=localStorage.key(t);r.indexOf("inbox:")>-1&&r!==a&&(e+=parseInt(localStorage.getItem(r),10)||0)}return e}function o(){var e=c.$$(l).length+n();localStorage.setItem(a,c.$$(l).length.toString()),i.default.dockBadge=e>0?e.toString():""}r.__esModule=!0;var u=e("./debounce"),i=e("./fluid"),c=e("./query"),a="inbox:"+document.title.replace("Inbox – ","").trim(),l=".ss",f=c.$("#Nr"),d=new MutationObserver(function(){u.default(o,1e3)()}),s={attributes:!0,childList:!0,characterData:!0};o(),d.observe(f,s)},{"./debounce":1,"./fluid":2,"./query":4}],4:[function(e,t,r){"use strict";r.__esModule=!0,r.$=document.querySelector.bind(document),r.$$=document.querySelectorAll.bind(document)},{}]},{},[3]);