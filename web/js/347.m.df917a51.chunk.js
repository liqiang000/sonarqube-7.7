(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{1675:function(e,t,a){"use strict";a.r(t);var i=a(354),n=a(874),s=a(473),o=a.n(s),r=a(540),l=a(366),c=a(1014),p=a(1015),m=a(447);a(939);var h=Object(r.a)(class extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0,referencedRepositories:{}},this.fetchRuleDetails=(()=>{this.setState({loading:!0}),Promise.all([Object(m.e)({organization:this.props.organizationKey}),Object(m.c)({key:this.props.ruleKey,organization:this.props.organizationKey})]).then(([{repositories:e},{rule:t}])=>{this.mounted&&(this.setState({loading:!1,referencedRepositories:o()(e,"key"),ruleDetails:t}),this.props.onLoad({name:t.name}))},()=>{this.mounted&&this.setState({loading:!1})})}),this.noOp=(()=>{})}componentDidMount(){this.mounted=!0,this.fetchRuleDetails()}componentDidUpdate(e){e.ruleKey===this.props.ruleKey&&e.organizationKey===this.props.organizationKey||this.fetchRuleDetails()}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.organizationKey,t=this.props.appState.organizationsEnabled?e:void 0;return i.createElement(l.a,{loading:this.state.loading},this.state.ruleDetails&&i.createElement(i.Fragment,null,i.createElement(c.a,{canWrite:!1,hideSimilarRulesFilter:!0,onFilterChange:this.noOp,onTagsChange:this.noOp,organization:t,referencedRepositories:this.state.referencedRepositories,ruleDetails:this.state.ruleDetails}),i.createElement(p.a,{canWrite:!1,onChange:this.noOp,organization:t,ruleDetails:this.state.ruleDetails})))}}),u=a(877);a.d(t,"default",function(){return d});class d extends i.PureComponent{constructor(){super(...arguments),this.handleClose=(()=>{this.props.onClose(this.props.rule.key)}),this.handleLoaded=(e=>{this.props.onLoad({key:this.props.rule.key,name:e.name})})}render(){const e=this.props.rule;return i.createElement("div",{className:"workspace-viewer"},i.createElement(n.a,{maximized:this.props.maximized,onClose:this.handleClose,onCollapse:this.props.onCollapse,onMaximize:this.props.onMaximize,onMinimize:this.props.onMinimize,onResize:this.props.onResize},i.createElement(u.a,{rule:e})),i.createElement("div",{className:"workspace-viewer-container",style:{height:this.props.height}},i.createElement(h,{onLoad:this.handleLoaded,organizationKey:e.organization,ruleKey:e.key})))}}},874:function(e,t,a){"use strict";var i=a(354),n=a(724),s=a(0),o=a(356),r=a(393),l=a(359);function c({className:e,fill:t="currentColor",size:a}){return i.createElement(l.a,{className:e,size:a},i.createElement("path",{d:"M8 8.509v3.56c0 .138-.05.257-.151.357-.1.101-.22.151-.358.151a.489.489 0 0 1-.357-.15l-1.145-1.145-2.638 2.639a.251.251 0 0 1-.366 0l-.906-.906a.251.251 0 0 1 0-.366l2.639-2.638-1.144-1.145a.489.489 0 0 1-.151-.357c0-.138.05-.257.15-.358.101-.1.22-.151.358-.151h3.56c.138 0 .257.05.358.151.1.1.151.22.151.358zm6-5.34c0 .068-.026.129-.08.182l-2.638 2.638 1.144 1.145c.101.1.151.22.151.357 0 .138-.05.257-.15.358-.101.1-.22.151-.358.151h-3.56a.489.489 0 0 1-.358-.151A.489.489 0 0 1 8 7.491v-3.56c0-.138.05-.257.151-.357.1-.101.22-.151.358-.151.137 0 .257.05.357.15l1.145 1.145 2.638-2.639a.251.251 0 0 1 .366 0l.906.906c.053.053.079.114.079.183z",style:{fill:t}}))}function p({className:e,fill:t="currentColor",size:a}){return i.createElement(l.a,{className:e,size:a},i.createElement("path",{d:"M7.898 9.25a.247.247 0 0 1-.078.18l-2.593 2.593 1.125 1.125a.48.48 0 0 1 .148.352.48.48 0 0 1-.148.352A.48.48 0 0 1 6 14H2.5a.48.48 0 0 1-.352-.148A.48.48 0 0 1 2 13.5V10a.48.48 0 0 1 .148-.352A.48.48 0 0 1 2.5 9.5a.48.48 0 0 1 .352.148l1.125 1.125L6.57 8.18a.247.247 0 0 1 .36 0l.89.89a.247.247 0 0 1 .078.18zM14 2.5V6a.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148.48.48 0 0 1-.352-.148l-1.125-1.125L9.43 7.82a.247.247 0 0 1-.36 0l-.89-.89a.247.247 0 0 1 0-.36l2.593-2.593-1.125-1.125A.48.48 0 0 1 9.5 2.5a.48.48 0 0 1 .148-.352A.48.48 0 0 1 10 2h3.5a.48.48 0 0 1 .352.148A.48.48 0 0 1 14 2.5z",style:{fill:t}}))}function m({className:e,fill:t="currentColor",size:a}){return i.createElement(l.a,{className:e,size:a},i.createElement("path",{d:"M14 12.1v1.267c0 .176-.08.325-.239.448a.918.918 0 0 1-.58.185H2.819a.918.918 0 0 1-.58-.185C2.08 13.692 2 13.543 2 13.367V12.1c0-.176.08-.326.239-.449a.918.918 0 0 1 .58-.185h10.363c.227 0 .42.062.58.185.158.123.238.273.238.449z",style:{fill:t}}))}a.d(t,"a",function(){return h});class h extends i.PureComponent{constructor(){super(...arguments),this.handleDrag=((e,t)=>{this.props.onResize(t.deltaY)})}render(){return i.createElement("header",{className:"workspace-viewer-header"},i.createElement("h6",{className:"workspace-viewer-name"},this.props.children),i.createElement(n.DraggableCore,{offsetParent:document.body,onDrag:this.handleDrag},i.createElement("div",{className:"workspace-viewer-resize js-resize"})),i.createElement("div",{className:"workspace-viewer-actions"},i.createElement(u,{icon:m,onClick:this.props.onCollapse,tooltip:"workspace.minimize"}),this.props.maximized?i.createElement(u,{icon:c,onClick:this.props.onMinimize,tooltip:"workspace.normal_size"}):i.createElement(u,{icon:p,onClick:this.props.onMaximize,tooltip:"workspace.full_window"}),i.createElement(u,{icon:r.a,onClick:this.props.onClose,tooltip:"workspace.close"})))}}function u({icon:e,onClick:t,tooltip:a}){return i.createElement(o.b,{className:"workspace-header-icon",color:"#fff",onClick:t,tooltip:Object(s.l)(a)},i.createElement(e,{fill:void 0}))}},877:function(e,t,a){"use strict";var i=a(354),n=a(359);function s({className:e,fill:t="currentColor",size:a}){return i.createElement(n.a,{className:e,size:a},i.createElement("path",{d:"M10.042 5.083a.3.3 0 0 1-.292.292.3.3 0 0 1-.292-.292c0-.629-.975-.875-1.458-.875a.3.3 0 0 1-.292-.291A.3.3 0 0 1 8 3.625c.848 0 2.042.447 2.042 1.458zm1.458 0c0-1.823-1.85-2.916-3.5-2.916S4.5 3.26 4.5 5.083c0 .584.237 1.194.62 1.641.173.2.373.392.556.602.647.774 1.194 1.686 1.285 2.716h2.078c.091-1.03.638-1.942 1.285-2.716.183-.21.383-.402.556-.602.383-.447.62-1.057.62-1.64zm1.167 0c0 .94-.31 1.75-.94 2.443-.628.693-1.457 1.668-1.53 2.643a.876.876 0 0 1 .428.748.852.852 0 0 1-.228.583.852.852 0 0 1 .228.583c0 .301-.155.575-.41.739a.89.89 0 0 1 .118.428c0 .592-.465.875-.993.875A1.479 1.479 0 0 1 8 15a1.479 1.479 0 0 1-1.34-.875c-.528 0-.993-.283-.993-.875 0-.146.045-.3.118-.428a.876.876 0 0 1-.41-.739c0-.218.082-.428.228-.583a.852.852 0 0 1-.228-.583c0-.301.164-.593.428-.748-.073-.975-.902-1.95-1.53-2.643a3.507 3.507 0 0 1-.94-2.443C3.333 2.604 5.694 1 8 1c2.306 0 4.667 1.604 4.667 4.083z",style:{fill:t}}))}var o=a(361);function r({limited:e,rule:t}){const a=t.name,n=void 0===a?"—":a;return i.createElement(i.Fragment,null,i.createElement(s,{className:"little-spacer-right",fill:o.blue}),e?i.createElement("span",{className:"text-limited"},n):n)}a.d(t,"a",function(){return r})}}]);
//# sourceMappingURL=347.m.df917a51.chunk.js.map