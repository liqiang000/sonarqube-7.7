(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1029:function(e,t,n){"use strict";var r=n(823);t.a=function(e){return/^(\/|scm:)/.test(e)||!!Object(r.isWebUri)(e)}},1030:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c});var r=n(610),o=n(30);function a(e){return Object(o.getJSON)("/api/project_links/search",{projectKey:e}).then(function(e){return e.links},r.a)}function i(e){return Object(o.post)("/api/project_links/delete",{id:e}).catch(r.a)}function c(e){return Object(o.postJSON)("/api/project_links/create",e).then(function(e){return e.link},r.a)}},1891:function(e,t,n){"use strict";n.r(t);var r,o=n(592),a=n(609),i=n.n(a),c=n(604),l=n(620),s=n(594),u=n(17),p=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={name:"",url:""},t.handleSubmit=function(){return t.props.onSubmit(t.state.name,t.state.url).then(t.props.onClose)},t.handleNameChange=function(e){t.setState({name:e.currentTarget.value})},t.handleUrlChange=function(e){t.setState({url:e.currentTarget.value})},t}return p(t,e),t.prototype.render=function(){var e=this,t=Object(u.l)("project_links.create_new_project_link");return o.createElement(l.a,{header:t,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},function(n){var r=n.onCloseClick,a=n.onFormSubmit,i=n.submitting;return o.createElement("form",{onSubmit:a},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,t)),o.createElement("div",{className:"modal-body"},o.createElement("div",{className:"modal-field"},o.createElement("label",{htmlFor:"create-link-name"},Object(u.l)("project_links.name"),o.createElement("em",{className:"mandatory"},"*")),o.createElement("input",{autoFocus:!0,id:"create-link-name",maxLength:128,name:"name",onChange:e.handleNameChange,required:!0,type:"text",value:e.state.name})),o.createElement("div",{className:"modal-field"},o.createElement("label",{htmlFor:"create-link-url"},Object(u.l)("project_links.url"),o.createElement("em",{className:"mandatory"},"*")),o.createElement("input",{id:"create-link-url",maxLength:128,name:"url",onChange:e.handleUrlChange,required:!0,type:"text",value:e.state.url}))),o.createElement("footer",{className:"modal-foot"},o.createElement(c.a,{className:"spacer-right",loading:i}),o.createElement(s.h,{disabled:i,id:"create-link-confirm"},Object(u.l)("create")),o.createElement(s.g,{disabled:i,onClick:r},Object(u.l)("cancel"))))})},t}(o.PureComponent),f=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={creationModal:!1},t.handleCreateClick=function(){t.setState({creationModal:!0})},t.handleCreationModalClose=function(){t.mounted&&t.setState({creationModal:!1})},t}return f(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement("header",{className:"page-header"},o.createElement("h1",{className:"page-title"},Object(u.l)("project_links.page")),o.createElement("div",{className:"page-actions"},o.createElement(s.a,{id:"create-project-link",onClick:this.handleCreateClick},Object(u.l)("create"))),o.createElement("div",{className:"page-description"},Object(u.l)("project_links.page.description"))),this.state.creationModal&&o.createElement(m,{onClose:this.handleCreationModalClose,onSubmit:this.props.onCreate}))},t}(o.PureComponent),h=n(908),y=n(660),b=n(941),v=n(1029),O=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderNameForProvided=function(e){return o.createElement("div",{className:"display-inline-block text-top"},o.createElement("div",null,o.createElement("span",{className:"js-name"},Object(h.a)(e))),o.createElement("div",{className:"note little-spacer-top"},o.createElement("span",{className:"js-type"},"sonar.links."+e.type)))},t.renderName=function(e){return o.createElement("div",null,o.createElement(b.a,{className:"little-spacer-right",type:e.type}),Object(h.b)(e)?t.renderNameForProvided(e):o.createElement("div",{className:"display-inline-block text-top"},o.createElement("span",{className:"js-name"},e.name)))},t.renderDeleteButton=function(e){return Object(h.b)(e)?null:o.createElement(y.a,{confirmButtonText:Object(u.l)("delete"),confirmData:e.id,isDestructive:!0,modalBody:Object(u.m)("project_links.are_you_sure_to_delete_x_link",e.name),modalHeader:Object(u.l)("project_links.delete_project_link"),onConfirm:t.props.onDelete},function(e){var t=e.onClick;return o.createElement(s.a,{className:"button-red js-delete-button",onClick:t},Object(u.l)("delete"))})},t}return O(t,e),t.prototype.render=function(){var e=this.props.link;return o.createElement("tr",{"data-name":e.name},o.createElement("td",{className:"nowrap"},this.renderName(e)),o.createElement("td",{className:"nowrap js-url"},Object(v.a)(e.url)?o.createElement("a",{href:e.url,rel:"nofollow noreferrer noopener",target:"_blank"},e.url):e.url),o.createElement("td",{className:"thin nowrap"},this.renderDeleteButton(e)))},t}(o.PureComponent),j=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return j(t,e),t.prototype.renderHeader=function(){return o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{className:"nowrap"},Object(u.l)("project_links.name")),o.createElement("th",{className:"nowrap width-100"},Object(u.l)("project_links.url")),o.createElement("th",{className:"thin"}," ")))},t.prototype.render=function(){var e=this;if(!this.props.links.length)return o.createElement("div",{className:"note"},Object(u.l)("no_results"));var t=Object(h.c)(this.props.links).map(function(t){return o.createElement(_,{key:t.id,link:t,onDelete:e.props.onDelete})});return o.createElement("div",{className:"boxed-group boxed-group-inner"},o.createElement("table",{className:"data zebra",id:"project-links"},this.renderHeader(),o.createElement("tbody",null,t)))},t}(o.PureComponent),E=n(1030),g=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.fetchLinks=function(){t.setState({loading:!0}),Object(E.c)(t.props.component.key).then(function(e){t.mounted&&t.setState({links:e,loading:!1})},function(){t.mounted&&t.setState({loading:!1})})},t.handleCreateLink=function(e,n){return Object(E.a)({name:e,projectKey:t.props.component.key,url:n}).then(function(e){t.mounted&&t.setState(function(t){var n=t.links;return{links:(void 0===n?[]:n).concat([e])}})})},t.handleDeleteLink=function(e){return Object(E.b)(e).then(function(){t.mounted&&t.setState(function(t){var n=t.links;return{links:(void 0===n?[]:n).filter(function(t){return t.id!==e})}})})},t}return g(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchLinks()},t.prototype.componentDidUpdate=function(e){e.component.key!==this.props.component.key&&this.fetchLinks()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return o.createElement("div",{className:"page page-limited"},o.createElement(i.a,{title:Object(u.l)("project_links.page")}),o.createElement(d,{onCreate:this.handleCreateLink}),o.createElement(c.a,{loading:this.state.loading},this.state.links&&o.createElement(C,{links:this.state.links,onDelete:this.handleDeleteLink})))},t}(o.PureComponent);t.default=k},606:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(592),o=n(639),a=n(593),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e){return r.createElement(o,i({className:a("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:a("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}o.setAppElement("#content")},620:function(e,t,n){"use strict";var r,o=n(592),a=n(606),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return i(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,i=(e.onSubmit,l(e,["children","header","onClose","onSubmit"]));return o.createElement(a.a,c({contentLabel:n,onRequestClose:r},i),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(o.Component);t.a=s},640:function(e,t,n){"use strict";var r,o=n(592),a=n(620),i=n(604),c=n(594),l=n(17),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.handleSubmit=function(){var e=t.props.onConfirm(t.props.confirmData);return e?e.then(t.props.onClose,function(){}):void t.props.onClose()},t.renderModalContent=function(e){var n=e.onCloseClick,r=e.onFormSubmit,a=e.submitting,s=t.props,u=s.children,p=s.confirmButtonText,m=s.confirmDisable,f=s.header,d=s.headerDescription,h=s.isDestructive,y=s.cancelButtonText,b=void 0===y?Object(l.l)("cancel"):y;return o.createElement("form",{onSubmit:r},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,f),d),o.createElement("div",{className:"modal-body"},u),o.createElement("footer",{className:"modal-foot"},o.createElement(i.a,{className:"spacer-right",loading:a}),o.createElement(c.h,{autoFocus:!0,className:h?"button-red":void 0,disabled:a||m},p),o.createElement(c.g,{disabled:a,onClick:n},b)))},t}return s(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return o.createElement(a.a,u({onSubmit:this.handleSubmit},t),this.renderModalContent)},t}(o.PureComponent);t.a=p},660:function(e,t,n){"use strict";var r,o=n(592),a=n(640),i=n(661),c=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderConfirmModal=function(e){var n=e.onClose,r=t.props,i=(r.children,r.modalBody),c=r.modalHeader,u=r.modalHeaderDescription,p=s(r,["children","modalBody","modalHeader","modalHeaderDescription"]);return o.createElement(a.a,l({header:c,headerDescription:u,onClose:n},p),i)},t}return c(t,e),t.prototype.render=function(){return o.createElement(i.a,{modal:this.renderConfirmModal},this.props.children)},t}(o.PureComponent);t.a=u},661:function(e,t,n){"use strict";var r,o=n(592),a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={modal:!1},t.handleButtonClick=function(){t.setState({modal:!0})},t.handleFormSubmit=function(e){e&&e.preventDefault(),t.setState({modal:!0})},t.handleCloseModal=function(){t.mounted&&t.setState({modal:!1})},t}return a(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return o.createElement(o.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},t}(o.PureComponent);t.a=i},724:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(592),o=n(597);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,i=e.size;return r.createElement(o.a,{className:t,size:i},r.createElement("path",{d:"M12 9.25v2.5A2.25 2.25 0 0 1 9.75 14h-6.5A2.25 2.25 0 0 1 1 11.75v-6.5A2.25 2.25 0 0 1 3.25 3h5.5c.14 0 .25.11.25.25v.5c0 .14-.11.25-.25.25h-5.5C2.562 4 2 4.563 2 5.25v6.5c0 .688.563 1.25 1.25 1.25h6.5c.688 0 1.25-.563 1.25-1.25v-2.5c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zm3-6.75v4c0 .273-.227.5-.5.5a.497.497 0 0 1-.352-.148l-1.375-1.375L7.68 10.57a.27.27 0 0 1-.18.078.27.27 0 0 1-.18-.078l-.89-.89a.27.27 0 0 1-.078-.18.27.27 0 0 1 .078-.18l5.093-5.093-1.375-1.375A.497.497 0 0 1 10 2.5c0-.273.227-.5.5-.5h4c.273 0 .5.227.5.5z",style:{fill:a}}))}},806:function(e,t,n){var r=n(691)(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]});e.exports=r},823:function(e,t,n){(function(e){!function(e){"use strict";e.exports.is_uri=n,e.exports.is_http_uri=r,e.exports.is_https_uri=o,e.exports.is_web_uri=a,e.exports.isUri=n,e.exports.isHttpUri=r,e.exports.isHttpsUri=o,e.exports.isWebUri=a;var t=function(e){return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function n(e){if(e&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e)&&!/%[^0-9a-f]/i.test(e)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)){var n,r,o,a,i,c="",l="";if(c=(n=t(e))[1],r=n[2],o=n[3],a=n[4],i=n[5],c&&c.length&&o.length>=0){if(r&&r.length){if(0!==o.length&&!/^\//.test(o))return}else if(/^\/\//.test(o))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(c.toLowerCase()))return l+=c+":",r&&r.length&&(l+="//"+r),l+=o,a&&a.length&&(l+="?"+a),i&&i.length&&(l+="#"+i),l}}}function r(e,r){if(n(e)){var o,a,i,c,l="",s="",u="",p="";if(l=(o=t(e))[1],s=o[2],a=o[3],i=o[4],c=o[5],l){if(r){if("https"!=l.toLowerCase())return}else if("http"!=l.toLowerCase())return;if(s)return/:(\d+)$/.test(s)&&(u=s.match(/:(\d+)$/)[0],s=s.replace(/:\d+$/,"")),p+=l+":",p+="//"+s,u&&(p+=u),p+=a,i&&i.length&&(p+="?"+i),c&&c.length&&(p+="#"+c),p}}}function o(e){return r(e,!0)}function a(e){return r(e)||o(e)}}(e)}).call(this,n(92)(e))},908:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return p});var r=n(608),o=n.n(r),a=n(806),i=n.n(a),c=n(17),l=["homepage","ci","issue","scm","scm_dev"];function s(e){return l.includes(e.type)}function u(e){var t=i()(e,s),n=t[0],r=t[1];return o()(n,function(e){return l.indexOf(e.type)}).concat(o()(r,function(e){return e.name.toLowerCase()}))}function p(e){return s(e)?Object(c.l)("project_links",e.type):e.name}},941:function(e,t,n){"use strict";var r=n(592),o=n(597);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,i=e.size;return r.createElement(o.a,{className:t,size:i},r.createElement("path",{d:"M13.5 9.5c1.003.033 1.466 1.952 0 2h-2.618L9.685 9.107 8 14.162 6.096 8.45l-.832 3.05-2.829-.002c-.984-.097-1.369-1.951.065-1.998h1.236l2.168-7.95L8 7.838l1.315-3.945L12.118 9.5H13.5z",style:{fill:a}}))}function i(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,i=e.size;return r.createElement(o.a,{className:t,size:i},r.createElement("path",{d:"M13.002 8.848v4.168a.56.56 0 0 1-.556.555H9.11v-3.334H6.89v3.334H3.554a.56.56 0 0 1-.556-.555V8.848c0-.018.01-.035.01-.052L8 4.68l4.993 4.116c.009.017.009.034.009.052zm1.936-.6l-.538.643a.289.289 0 0 1-.183.096h-.026a.273.273 0 0 1-.182-.061L8 3.916l-6.009 5.01a.297.297 0 0 1-.208.06.289.289 0 0 1-.183-.095l-.538-.642a.285.285 0 0 1 .035-.391L7.34 2.656a1.07 1.07 0 0 1 1.32 0l2.119 1.772V2.735c0-.157.121-.278.278-.278h1.667c.156 0 .278.121.278.278v3.542l1.901 1.58c.113.096.13.279.035.392z",style:{fill:a}}))}function c(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,i=e.size;return r.createElement(o.a,{className:t,size:i},r.createElement("path",{d:"M13.805 9.25c0 .016 0 .04-.008.055C13.133 12.07 10.852 14 7.969 14c-1.524 0-3-.602-4.11-1.656l-1.007 1.008a.497.497 0 0 1-.352.148.504.504 0 0 1-.5-.5V9.5c0-.273.227-.5.5-.5H6c.273 0 .5.227.5.5a.497.497 0 0 1-.148.352l-1.07 1.07a3.988 3.988 0 0 0 6.125-.828c.187-.305.28-.602.413-.914.04-.11.117-.18.235-.18h1.5c.14 0 .25.117.25.25zM14 3v3.5c0 .273-.227.5-.5.5H10a.504.504 0 0 1-.5-.5c0-.133.055-.258.148-.352l1.079-1.078A4.019 4.019 0 0 0 8 4c-1.39 0-2.68.719-3.406 1.906-.188.305-.282.602-.414.914-.04.11-.117.18-.235.18H2.391a.252.252 0 0 1-.25-.25v-.055C2.812 3.922 5.117 2 8 2c1.531 0 3.023.61 4.133 1.656l1.015-1.008A.497.497 0 0 1 13.5 2.5c.273 0 .5.227.5.5z",style:{fill:a}}))}function l(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,i=e.size;return r.createElement(o.a,{className:t,size:i},r.createElement("path",{d:"M12.557 4.545c.241.247.443.743.443 1.098v7.714c0 .355-.28.643-.625.643h-8.75A.634.634 0 0 1 3 13.357V2.643C3 2.288 3.28 2 3.625 2h5.833c.345 0 .827.208 1.068.455l2.031 2.09zM9.667 2.91v2.518h2.448a.86.86 0 0 0-.144-.275L9.934 3.058a.823.823 0 0 0-.267-.147zm2.5 10.232V6.286H9.458a.634.634 0 0 1-.625-.643V2.857h-5v10.286h8.334z",style:{fill:a}}))}var s=n(724);n.d(t,"a",function(){return m});var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function m(e){var t=e.type,n=p(e,["type"]);switch(t){case"issue":return r.createElement(a,u({},n));case"homepage":return r.createElement(i,u({},n));case"ci":return r.createElement(c,u({},n));case"scm":return r.createElement(l,u({},n));default:return r.createElement(s.a,u({},n))}}}}]);
//# sourceMappingURL=298.1553004420962.chunk.js.map