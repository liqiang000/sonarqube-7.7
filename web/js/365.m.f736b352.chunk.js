(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1669:function(e,t,a){"use strict";a.r(t);var n=a(354),l=a(371),r=a.n(l),i=a(360),s=a(0),o=a(461);function c(e){return n.createElement("div",{className:"quality-profile-not-found"},n.createElement("div",{className:"note spacer-bottom"},n.createElement(i.IndexLink,{className:"text-muted",to:Object(o.e)(e.organization)},Object(s.l)("quality_profiles.page"))),n.createElement("div",null,Object(s.l)("quality_profiles.not_found")))}var p=a(652),m=a(1012),u=a(970),d=a(643);class g extends n.PureComponent{renderUpdateDate(){const e=this.props.profile;let t=n.createElement("span",null,Object(s.l)("quality_profiles.updated_")," ",n.createElement(u.a,{date:e.rulesUpdatedAt}));return Object(o.f)(e)&&(t=n.createElement("span",{className:"badge badge-normal-size badge-focus"},t)),n.createElement("li",{className:"small spacer-right"},t)}renderUsageDate(){const e=this.props.profile;let t=n.createElement("span",null,Object(s.l)("quality_profiles.used_")," ",n.createElement(u.a,{date:e.lastUsed}));return e.lastUsed||(t=n.createElement("span",{className:"badge badge-normal-size badge-focus"},t)),n.createElement("li",{className:"small big-spacer-right"},t)}render(){const e=this.props,t=e.organization,a=e.profile;return n.createElement("header",{className:"page-header quality-profile-header"},n.createElement("div",{className:"note spacer-bottom"},n.createElement(i.IndexLink,{className:"text-muted",to:Object(o.e)(t)},Object(s.l)("quality_profiles.page"))," / ",n.createElement(i.Link,{className:"text-muted",to:Object(o.d)(a.language,t)},a.languageName)),n.createElement("h1",{className:"page-title"},n.createElement(p.a,{className:"link-base-color",language:a.language,name:a.name,organization:t},n.createElement("span",null,a.name)),a.isBuiltIn&&n.createElement(d.a,{className:"spacer-left",tooltip:!1})),n.createElement("div",{className:"pull-right"},n.createElement("ul",{className:"list-inline",style:{lineHeight:"24px"}},this.renderUpdateDate(),this.renderUsageDate(),n.createElement("li",null,n.createElement(i.Link,{className:"button",to:Object(o.a)(a.name,a.language,t)},Object(s.l)("changelog"))),n.createElement("li",null,n.createElement(m.a,{className:"pull-left",organization:t,profile:a,updateProfiles:this.props.updateProfiles})))),a.isBuiltIn&&n.createElement("div",{className:"page-description"},Object(s.l)("quality_profiles.built_in.description.1"),n.createElement("br",null),Object(s.l)("quality_profiles.built_in.description.2")))}}a.d(t,"default",function(){return b});var f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&(a[n[l]]=e[n[l]])}return a};class b extends n.PureComponent{componentDidMount(){const e=this.props,t=e.location,a=e.profiles,n=e.router;if(t.query.key){const e=a.find(e=>e.key===t.query.key);e&&n.replace({pathname:t.pathname,query:{language:e.language,name:e.name}})}}render(){const e=this.props,t=e.organization,a=e.profiles,l=e.location,i=f(e,["organization","profiles","location"]),s=l.query,o=s.key,p=s.language,m=s.name;if(o){return a.find(e=>e.key===l.query.key)?null:n.createElement(c,{organization:t})}const u=a.find(e=>e.language===p&&e.name===m);if(!u)return n.createElement(c,{organization:t});const d=n.cloneElement(this.props.children,Object.assign({organization:t,profile:u,profiles:a},i));return n.createElement("div",{id:"quality-profile"},n.createElement(r.a,{title:u.name}),n.createElement(g,{organization:t,profile:u,updateProfiles:this.props.updateProfiles}),d)}}}}]);
//# sourceMappingURL=365.m.f736b352.chunk.js.map