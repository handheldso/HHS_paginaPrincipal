_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"addTrackers",(function(){return Z})),n.d(r,"initialize",(function(){return $})),n.d(r,"ga",(function(){return H})),n.d(r,"set",(function(){return X})),n.d(r,"send",(function(){return Q})),n.d(r,"pageview",(function(){return W})),n.d(r,"modalview",(function(){return Y})),n.d(r,"timing",(function(){return ee})),n.d(r,"event",(function(){return te})),n.d(r,"exception",(function(){return ne})),n.d(r,"plugin",(function(){return re})),n.d(r,"outboundLink",(function(){return oe})),n.d(r,"testModeAPI",(function(){return ae})),n.d(r,"default",(function(){return ie}));var o=n("q1tI"),a=n.n(o),i=n("17x9"),c=n.n(i);function u(e){console.warn("[react-ga]",e)}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w="_blank",j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,r,o=d(i);function i(){var e;g(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(m(e=o.call.apply(o,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,a=n.to,c=n.onClick,u=n.trackerNames,l={label:o},f=r!==w,s=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);f&&s?(t.preventDefault(),i.trackLink(l,(function(){window.location.href=a}),u)):i.trackLink(l,(function(){}),u),c&&c(t)})),e}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=s(s({},p(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return n===w&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,a.a.createElement("a",r)}}])&&b(t.prototype,n),r&&b(t,r),i}(o.Component);h(j,"trackLink",(function(){u("ga tracking not enabled")})),j.propTypes={eventLabel:c.a.string.isRequired,target:c.a.string,to:c.a.string,onClick:c.a.func,trackerNames:c.a.arrayOf(c.a.string)},j.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function k(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(u("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function P(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var A=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function S(e){return P(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(A)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var E=!1;function T(e){console.info("[react-ga]",e)}var N=[],D={calls:N,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];N.push([].concat(t))},resetCalls:function(){N.length=0}};function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e){return(q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z="undefined"===typeof window||"undefined"===typeof document,J=!1,R=!0,V=!1,F=!0,G=!0,K=function(){var e;return V?D.ga.apply(D,arguments):!z&&(window.ga?(e=window).ga.apply(e,arguments):u("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function M(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return(arguments.length>1?arguments[1]:void 0)&&(n=S(e)),t&&(n=k(n)),n}(e,R,G)}function B(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!F&&Array.isArray(e)||K.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){K.apply(void 0,L(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):u("ga command must be a string")}function U(e,t){e?t&&(t.debug&&!0===t.debug&&(J=!0),!1===t.titleCase&&(R=!1),!1===t.redactEmail&&(G=!1),t.useExistingGa)||(t&&t.gaOptions?K("create",e,t.gaOptions):K("create",e,"auto")):u("gaTrackingID is required in initialize()")}function Z(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===q(e)?U(e.trackingId,e):u("All configs must be an object")})):U(e,t),!0}function $(e,t){if(t&&!0===t.testMode)V=!0;else{if(z)return;t&&!0===t.standardImplementation||function(e){if(!E){E=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,a,i,c,u,l=e&&e.onerror;n=window,r=document,o="script",a=t,i="ga",n.GoogleAnalyticsObject=i,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),u=r.getElementsByTagName(o)[0],c.async=1,c.src=a,c.onerror=l,u.parentNode.insertBefore(c,u)}}(t)}F=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Z(e,t)}function H(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(K.apply(void 0,t),J&&(T("called ga('arguments');"),T("with arguments: ".concat(JSON.stringify(t))))),window.ga}function X(e,t){e?"object"===q(e)?(0===Object.keys(e).length&&u("empty `fieldsObject` given to .set()"),B(t,"set",e),J&&(T("called ga('set', fieldsObject);"),T("with fieldsObject: ".concat(JSON.stringify(e))))):u("Expected `fieldsObject` arg to be an Object"):u("`fieldsObject` is required in .set()")}function Q(e,t){B(t,"send",e),J&&(T("called ga('send', fieldObject);"),T("with fieldObject: ".concat(JSON.stringify(e))),T("with trackers: ".concat(JSON.stringify(t))))}function W(e,t,n){if(e){var r=P(e);if(""!==r){var o={};if(n&&(o.title=n),B(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),J){T("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),T("with path: ".concat(r).concat(a))}}else u("path cannot be an empty string in .pageview()")}else u("path is required in .pageview()")}function Y(e,t){if(e){var n,r="/"===(n=P(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);B(t,"send","pageview",o),J&&(T("called ga('send', 'pageview', path);"),T("with path: ".concat(o)))}else u("modalName cannot be an empty string or a single / in .modalview()")}else u("modalName is required in .modalview(modalName)")}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var i={hitType:"timing",timingCategory:M(t),timingVar:M(n),timingValue:r};o&&(i.timingLabel=M(o)),Q(i,a)}else u("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,c=x(e,["category","action","label","value","nonInteraction","transport"]),l=arguments.length>1?arguments[1]:void 0;if(t&&n){var f={hitType:"event",eventCategory:M(t),eventAction:M(n)};r&&(f.eventLabel=M(r)),"undefined"!==typeof o&&("number"!==typeof o?u("Expected `args.value` arg to be a Number."):f.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?u("`args.nonInteraction` must be a boolean."):f.nonInteraction=a),"undefined"!==typeof i&&("string"!==typeof i?u("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&u("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),f.transport=i)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){f[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){f[e]=c[e]})),Q(f,l)}else u("args.category AND args.action are required in event()")}function ne(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=M(n)),"undefined"!==typeof r&&("boolean"!==typeof r?u("`args.fatal` must be a boolean."):o.exFatal=r),Q(o,t)}var re={require:function(e,t,n){if(e){var r=P(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==q(t))return void u("Expected `options` arg to be an Object");0===Object.keys(t).length&&u("Empty `options` given to .require()"),H(o,r,t),J&&T("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else H(o,r),J&&T("called ga('require', '".concat(r,"');"))}else u("`name` cannot be an empty string in .require()")}else u("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];if(1===a.length?n=a[0]:(r=a[0],n=a[1]),"string"!==typeof e)u("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)u("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(t);n=n||null,r&&n?(H(c,r,n),J&&(T("called ga('".concat(c,"');")),T('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(H(c,n),J&&(T("called ga('".concat(c,"');")),T("with payload: ".concat(JSON.stringify(n))))):(H(c),J&&T("called ga('".concat(c,"');")))}}};function oe(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:M(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},Q(r,n)}else u("args.label is required in outboundLink()");else u("hitCallback function is required")}var ae=D,ie={initialize:$,ga:H,set:X,send:Q,pageview:W,modalview:Y,timing:ee,event:te,exception:ne,plugin:re,outboundLink:oe,testModeAPI:D};function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}j.origTrackLink=j.trackLink,j.trackLink=oe;var fe=j,se=ue(ue({},r),{},{OutboundLink:fe}),pe=(n("zPlV"),n("g4pe")),ge=n.n(pe),be=n("AeFk");t.default=function(e){var t=e.Component,n=e.pageProps;return Object(o.useEffect)((function(){se.initialize("UA-149258136-1"),se.pageview("/")}),[]),new Date,function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src="https://embed.tawk.to/60494e1f385de407571ed24a/1f0f5j7i9",e.charset="UTF-8",e.setAttribute("crossOrigin","*"),t.parentNode.insertBefore(e,t)}(),Object(be.a)(a.a.Fragment,null,Object(be.a)(ge.a,null,Object(be.a)("link",{rel:"shortcut icon",href:"/logo-copia.png"}),Object(be.a)("meta",{name:"google-site-verification",content:"uPeVjw4M8K7n7qTtHKDwKjewwEiSZ-In0dbeu7ZVveo"})),Object(be.a)(t,n))}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},zPlV:function(e,t,n){}},[[0,0,2,1,3]]]);