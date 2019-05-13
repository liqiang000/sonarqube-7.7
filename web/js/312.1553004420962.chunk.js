(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{1118:function(e,t,n){"use strict";var o,r=n(592),a=n(627),i=n(963),c=n(604),s=n(602),u=n(594),l=n(652),f=n(852),p=n(17),d=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={deleting:!1,loading:!1},t.handleRevoke=function(){t.state.deleting?(t.setState({loading:!0}),Object(f.c)({login:t.props.login,name:t.props.token.name}).then(function(){return t.props.onRevokeToken(t.props.token)},function(){t.mounted&&t.setState({loading:!1,deleting:!1})})):t.setState({deleting:!0})},t}return d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.token,t=this.state.loading;return r.createElement("tr",null,r.createElement("td",null,r.createElement(s.a,{overlay:e.name},r.createElement("span",null,Object(l.d)(e.name)))),r.createElement("td",{className:"nowrap"},r.createElement(i.a,{date:e.lastConnectionDate})),r.createElement("td",{className:"thin nowrap text-right"},r.createElement(a.a,{date:e.createdAt,long:!0})),r.createElement("td",{className:"thin nowrap text-right"},r.createElement(c.a,{loading:t},r.createElement("i",{className:"spinner-placeholder"})),r.createElement(u.a,{className:"button-red input-small spacer-left",disabled:t,onClick:this.handleRevoke},this.state.deleting?Object(p.l)("users.tokens.sure"):Object(p.l)("users.tokens.revoke"))))},t}(r.PureComponent),h=n(745),y=n(612);function g(e){var t=e.token;return r.createElement("div",{className:"panel panel-white big-spacer-top"},r.createElement(y.a,{variant:"warning"},Object(p.m)("users.tokens.new_token_created",t.name)),r.createElement(h.a,{copyValue:t.token}),r.createElement("code",{className:"big-spacer-left text-success"},t.token))}var v=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={generating:!1,loading:!0,newTokenName:"",tokens:[]},t.fetchTokens=function(){t.setState({loading:!0}),Object(f.b)(t.props.login).then(function(e){t.mounted&&t.setState({loading:!1,tokens:e})},function(){t.mounted&&t.setState({loading:!1})})},t.updateTokensCount=function(){t.props.updateTokensCount&&t.props.updateTokensCount(t.props.login,t.state.tokens.length)},t.handleGenerateToken=function(e){e.preventDefault(),t.state.newTokenName.length>0&&(t.setState({generating:!0}),Object(f.a)({name:t.state.newTokenName,login:t.props.login}).then(function(e){t.mounted&&t.setState(function(t){var n=t.tokens.concat([{name:e.name,createdAt:e.createdAt}]);return{generating:!1,newToken:e,newTokenName:"",tokens:n}},t.updateTokensCount)},function(){t.mounted&&t.setState({generating:!1})}))},t.handleRevokeToken=function(e){t.setState(function(t){return{tokens:t.tokens.filter(function(t){return t.name!==e.name})}},t.updateTokensCount)},t.handleNewTokenChange=function(e){return t.setState({newTokenName:e.currentTarget.value})},t}return v(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchTokens()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderItems=function(){var e=this,t=this.state.tokens;return t.length<=0?r.createElement("tr",null,r.createElement("td",{className:"note",colSpan:3},Object(p.l)("users.no_tokens"))):t.map(function(t){return r.createElement(m,{key:t.name,login:e.props.login,onRevokeToken:e.handleRevokeToken,token:t})})},t.prototype.render=function(){var e=this.state,t=e.generating,n=e.loading,o=e.newToken,a=e.newTokenName,i=e.tokens,s=r.createElement("tr",null,r.createElement("td",null,r.createElement("i",{className:"spinner"})));return r.createElement(r.Fragment,null,r.createElement("h3",{className:"spacer-bottom"},Object(p.l)("users.generate_tokens")),r.createElement("form",{autoComplete:"off",className:"display-flex-center",id:"generate-token-form",onSubmit:this.handleGenerateToken},r.createElement("input",{className:"input-large spacer-right",maxLength:100,onChange:this.handleNewTokenChange,placeholder:Object(p.l)("users.enter_token_name"),required:!0,type:"text",value:a}),r.createElement(u.h,{className:"js-generate-token",disabled:t||a.length<=0},Object(p.l)("users.generate"))),o&&r.createElement(g,{token:o}),r.createElement("table",{className:"data zebra big-spacer-top "},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,Object(p.l)("name")),r.createElement("th",null,Object(p.l)("my_account.tokens_last_usage")),r.createElement("th",{className:"text-right"},Object(p.l)("created")),r.createElement("th",null))),r.createElement("tbody",null,r.createElement(c.a,{customSpinner:s,loading:n&&i.length<=0},this.renderItems()))))},t}(r.PureComponent);t.a=b},1906:function(e,t,n){"use strict";n.r(t);var o,r=n(592),a=n(609),i=n.n(a),c=n(601),s=n(701),u=n(594),l=n(17),f=n(612),p=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={success:!1},t.handleSuccessfulChange=function(){t.oldPassword.value="",t.password.value="",t.passwordConfirmation.value="",t.setState({success:!0,errors:void 0})},t.setErrors=function(e){t.setState({success:!1,errors:e})},t.handleChangePassword=function(e){e.preventDefault();var n=t.props.user,o=t.oldPassword.value,r=t.password.value;r!==t.passwordConfirmation.value?(t.password.focus(),t.setErrors([Object(l.l)("user.password_doesnt_match_confirmation")])):Object(s.a)({login:n.login,password:r,previousPassword:o}).then(t.handleSuccessfulChange,function(){})},t}return p(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.success,o=t.errors;return r.createElement("section",{className:"boxed-group"},r.createElement("h2",{className:"spacer-bottom"},Object(l.l)("my_profile.password.title")),r.createElement("form",{className:"boxed-group-inner",onSubmit:this.handleChangePassword},n&&r.createElement(f.a,{variant:"success"},Object(l.l)("my_profile.password.changed")),o&&o.map(function(e,t){return r.createElement(f.a,{key:t,variant:"error"},e)}),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"old_password"},Object(l.l)("my_profile.password.old"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoComplete:"off",id:"old_password",name:"old_password",ref:function(t){return e.oldPassword=t},required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"password"},Object(l.l)("my_profile.password.new"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoComplete:"off",id:"password",name:"password",ref:function(t){return e.password=t},required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"password_confirmation"},Object(l.l)("my_profile.password.confirm"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoComplete:"off",id:"password_confirmation",name:"password_confirmation",ref:function(t){return e.passwordConfirmation=t},required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement(u.h,{id:"change-password"},Object(l.l)("my_profile.password.submit")))))},t}(r.Component),m=n(682),h=n(1118);function y(e){var t=e.login;return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(l.l)("users.tokens")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("div",{className:"big-spacer-bottom big-spacer-right markdown"},r.createElement(m.a,{message:Object(l.l)("my_account.tokens_description")})),r.createElement(h.a,{login:t})))}var g=n(605);t.default=Object(c.connect)(function(e){return{user:Object(g.getCurrentUser)(e)}})(function(e){var t=e.user;return r.createElement("div",{className:"account-body account-container"},r.createElement(i.a,{title:Object(l.l)("my_account.security")}),r.createElement(y,{login:t.login}),t.local&&r.createElement(d,{user:t}))})},627:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var o=n(592),r=n(587),a=n(87),i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c={year:"numeric",month:"short",day:"2-digit"},s={year:"numeric",month:"long",day:"numeric"};function u(e){var t=e.children,n=e.date,u=e.long;return o.createElement(r.FormattedDate,i({value:Object(a.g)(n)},u?s:c),t)}},632:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var o=n(592),r=n(587),a=n(87),i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function s(e){var t=e.children,n=e.date;return o.createElement(r.FormattedDate,i({value:Object(a.g)(n)},c),t)}},642:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(592),r=n(587),a=n(87);function i(e){var t=e.children,n=e.date;return o.createElement(r.FormattedRelative,{value:Object(a.g)(n)},t)}},652:function(e,t,n){"use strict";function o(e,t){if(void 0===t&&(t=30),"string"!=typeof e)return"";var n=e.split("/");if(n.length<=2)return e;for(var o=n[0],r=n[n.length-1],a=n.slice(1,-1),i=!1;a.join().length>t&&a.length>0;)a.shift(),i=!0;return[o].concat(i?["..."]:[],a,[r]).join("/")}function r(e){if("string"==typeof e){var t=e.split("/").slice(0,-1);if(t.length>2){for(var n=t[0],o=t[t.length-1],r=t.slice(1,-1),a=!1;r.join().length>30&&r.length>0;)r.shift(),a=!0;return[n].concat(a?["..."]:[],r,[o]).join("/")+"/"}return t.join("/")+"/"}return null}function a(e){if("string"==typeof e){var t=e.split("/");return t[t.length-1]}return null}function i(e){var t=e.split("/");return{head:t.slice(0,-1).join("/"),tail:t[t.length-1]}}function c(e,t){return void 0===t&&(t=30),"string"==typeof e?e.length>t?e.substr(0,t)+"...":e:""}n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"e",function(){return i}),n.d(t,"d",function(){return c})},745:function(e,t,n){"use strict";var o,r=n(592),a=n(593),i=n(807),c=n(602),s=n(594),u=n(17),l=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={tooltipShown:!1},t.showTooltip=function(){t.mounted&&(t.setState({tooltipShown:!0}),setTimeout(function(){t.mounted&&t.setState({tooltipShown:!1})},1e3))},t}return l(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.copyButton&&(this.clipboard=new i(this.copyButton),this.clipboard.on("success",this.showTooltip))},t.prototype.componentDidUpdate=function(){this.clipboard&&this.clipboard.destroy(),this.copyButton&&(this.clipboard=new i(this.copyButton),this.clipboard.on("success",this.showTooltip))},t.prototype.componentWillUnmount=function(){this.mounted=!1,this.clipboard&&this.clipboard.destroy()},t.prototype.render=function(){var e=this;return r.createElement(c.a,{overlay:Object(u.l)("copied_action"),visible:this.state.tooltipShown},r.createElement(s.a,{className:a("js-copy-to-clipboard no-select",this.props.className),"data-clipboard-text":this.props.copyValue,innerRef:function(t){return e.copyButton=t}},Object(u.l)("copy")))},t}(r.PureComponent);t.a=f},807:function(e,t,n){
/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
var o;o=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var o,r,a;r=[e,n(7)],void 0===(a="function"==typeof(o=function(e,t){"use strict";var n,o=(n=t)&&n.__esModule?n:{default:n},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=i})?o.apply(t,r):o)||(e.exports=a)},function(e,t,n){var o=n(6),r=n(5);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(o.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}(e,t,n);if(o.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function r(){o.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var a=0,i=o.length;a<i;a++)o[a].fn!==t&&o[a].fn._!==t&&r.push(o[a]);return r.length?n[e]=r:delete n[e],this}},e.exports=n},function(e,t,n){var o,r,a;r=[e,n(0),n(2),n(1)],void 0===(a="function"==typeof(o=function(e,t,n,o){"use strict";var r=c(t),a=c(n),i=c(o);function c(e){return e&&e.__esModule?e:{default:e}}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.resolveOptions(n),o.listenClick(e),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===s(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,i.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return f("action",e)}},{key:"defaultTarget",value:function(e){var t=f("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return f("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),t}(a.default);function f(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}e.exports=l})?o.apply(t,r):o)||(e.exports=a)},function(e,t){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}e.exports=function(e,t){for(;e&&e.nodeType!==n;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){var o=n(4);function r(e,t,n,r,a){var i=function(e,t,n,r){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&r.call(e,n)}}.apply(this,arguments);return e.addEventListener(n,i,a),{destroy:function(){e.removeEventListener(n,i,a)}}}e.exports=function(e,t,n,o,a){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return r(e,t,n,o,a)}))}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(e),o.removeAllRanges(),o.addRange(r),t=o.toString()}return t}}])},e.exports=o()},852:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return c});var o=n(30),r=n(610);function a(e){return Object(o.getJSON)("/api/user_tokens/search",{login:e}).then(function(e){return e.userTokens},r.a)}function i(e){return Object(o.postJSON)("/api/user_tokens/generate",e).catch(r.a)}function c(e){return Object(o.post)("/api/user_tokens/revoke",e).catch(r.a)}},963:function(e,t,n){"use strict";var o,r=n(592),a=n(642),i=n(632),c=n(602),s=n(87),u=n(17),l=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e,t=this.props,n=t.children,o=t.date;return o?Object(s.b)(Date.now(),o)<1&&(e=Object(u.l)("less_than_1_hour_ago")):e=Object(u.l)("never"),e?n?n(e):e:r.createElement(c.a,{overlay:r.createElement(i.a,{date:o})},r.createElement("span",null,r.createElement(a.a,{date:o},n)))},t}(r.PureComponent);t.a=f}}]);
//# sourceMappingURL=312.1553004420962.chunk.js.map