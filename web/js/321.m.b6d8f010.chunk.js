(window.webpackJsonp=window.webpackJsonp||[]).push([[321,21,328,359],{1591:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var s=n(354),a=n(904);function o(){return s.createElement(a.default,{params:{pluginKey:"governance",extensionKey:"portfolios"}})}},379:function(e,t,n){var s=n(390),a=1/0,o=1.7976931348623157e308;e.exports=function(e){return e?(e=s(e))===a||e===-a?(e<0?-1:1)*o:e==e?e:0:0===e?e:0}},414:function(e,t){var n=Math.max,s=Math.min;e.exports=function(e,t,a){return e>=s(t,a)&&e<n(t,a)}},428:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var s=n(354),a=n(499),o=n(361),i=n(463);function r({children:e}){return s.createElement("div",{className:"global-container"},s.createElement("div",{className:"page-wrapper",id:"container"},s.createElement(i.a,{className:"navbar-global",height:o.globalNavHeightRaw}),e),s.createElement(a.a,null))}},434:function(e,t,n){var s=n(414),a=n(379),o=n(390);e.exports=function(e,t,n){return t=a(t),void 0===n?(n=t,t=0):n=a(n),e=o(e),s(e,t,n)}},445:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var s=n(354),a=n(371),o=n(360),i=n(428),r=n(0);function c({withContainer:e=!0}){const t=e?i.default:s.Fragment;return s.createElement(t,null,s.createElement(a.Helmet,{defaultTitle:Object(r.l)("404_not_found"),defer:!1}),s.createElement("div",{className:"page-wrapper-simple",id:"bd"},s.createElement("div",{className:"page-simple",id:"nonav"},s.createElement("h2",{className:"big-spacer-bottom"},Object(r.l)("page_not_found")),s.createElement("p",{className:"spacer-bottom"},Object(r.l)("address_mistyped_or_page_moved")),s.createElement("p",null,s.createElement(o.Link,{to:"/"},Object(r.l)("go_back_to_homepage"))))))}},519:function(e,t,n){"use strict";var s=n(354),a=n(371),o=n.n(a),i=n(360),r=n(349),c=n(364),l=n(583),u=n(0),p=n(421),m=n(416),d=n(367);const h={onFail:m.a};t.a=Object(r.injectIntl)(Object(i.withRouter)(Object(c.connect)(function(e){return{currentUser:Object(d.getCurrentUser)(e)}},h)(class extends s.PureComponent{constructor(){super(...arguments),this.state={},this.handleStart=(e=>{const t=Object(p.default)(),n=e(Object.assign({store:t,el:this.container,currentUser:this.props.currentUser,intl:this.props.intl,location:this.props.location,router:this.props.router},this.props.options));s.isValidElement(n)?this.setState({extensionElement:n}):this.stop=n}),this.handleFailure=(()=>{this.props.onFail(Object(u.l)("page_extension_failed"))})}componentDidMount(){this.startExtension()}componentDidUpdate(e){e.extension!==this.props.extension?(this.stopExtension(),this.startExtension()):e.location!==this.props.location&&this.startExtension()}componentWillUnmount(){this.stopExtension()}startExtension(){const e=this.props.extension;Object(l.a)(e.key).then(this.handleStart,this.handleFailure)}stopExtension(){this.stop&&(this.stop(),this.stop=void 0)}render(){return s.createElement("div",null,s.createElement(o.a,{title:this.props.extension.name}),this.state.extensionElement?this.state.extensionElement:s.createElement("div",{ref:e=>this.container=e}))}})))},904:function(e,t,n){"use strict";n.r(t);var s=n(354),a=n(364),o=n(519),i=n(445),r=n(367);t.default=Object(a.connect)(e=>({globalPages:Object(r.getAppState)(e).globalPages}))(function(e){const t=e.params,n=t.extensionKey,a=t.pluginKey,r=(e.globalPages||[]).find(e=>e.key===`${a}/${n}`);return r?s.createElement(o.a,{extension:r}):s.createElement(i.default,{withContainer:!1})})}}]);
//# sourceMappingURL=321.m.b6d8f010.chunk.js.map