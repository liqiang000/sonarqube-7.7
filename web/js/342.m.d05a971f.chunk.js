(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{1219:function(n,e,t){var i=t(1220);"string"==typeof i&&(i=[[n.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(358)(i,a);i.locals&&(n.exports=i.locals)},1220:function(n,e,t){(n.exports=t(357)(!1)).push([n.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.navbar-latest-notification {\n  flex: 0 1 240px;\n  text-align: right;\n  overflow: hidden;\n}\n\n.navbar-latest-notification-wrapper {\n  position: relative;\n  display: inline-block;\n  padding: 8px;\n  padding-left: 50px;\n  height: 28px;\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  vertical-align: middle;\n  font-size: 12px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #8a8c8f;\n  background-color: #000;\n  border-radius: 3px 0 0 3px;\n  cursor: pointer;\n}\n\n.navbar-latest-notification-wrapper:hover {\n  color: #cfd3d7;\n}\n\n.navbar-latest-notification-wrapper .badge-new {\n  position: absolute;\n  margin-right: 8px;\n  left: 4px;\n  top: 5px;\n}\n\n.navbar-latest-notification-wrapper .label {\n  display: block;\n  max-width: 330px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.navbar-latest-notification-dismiss .navbar-icon {\n  height: 28px;\n  background-color: #000;\n  border-radius: 0 3px 3px 0;\n  padding: 9px 8px !important;\n  margin-left: 1px;\n  margin-right: 8px;\n}\n\n.navbar-latest-notification-dismiss .navbar-icon:hover path {\n  fill: #cfd3d7 !important;\n}\n\n.notifications-sidebar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  background: #f9f9fb;\n}\n\n.notifications-sidebar-top {\n  position: relative;\n  padding: 16px;\n  border-bottom: 1px solid #e6e8ea;\n  background-color: #ffffff;\n}\n\n.notifications-sidebar-top h3 {\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.notifications-sidebar-top .close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  border: 0;\n  color: #8a8c8f;\n}\n\n.notifications-sidebar-content {\n  flex: 1 1;\n  overflow-y: auto;\n}\n\n.notifications-sidebar-footer {\n  padding-top: 8px;\n  border-top: 1px solid #e6e8ea;\n  flex: 0 0 40px;\n}\n\n.notifications-sidebar-slice h4 {\n  padding: 16px;\n  padding-bottom: 4px;\n  background-color: #f9f9fb;\n  font-weight: normal;\n  font-size: 12px;\n  text-align: right;\n  color: #8a8c8f;\n}\n\n.notifications-sidebar-slice .feature:last-of-type {\n  border-bottom: 1px solid #e6e8ea;\n}\n\n.notifications-sidebar-slice .feature {\n  padding: 16px;\n  background-color: #ffffff;\n  border-top: 1px solid #e6e8ea;\n  overflow: hidden;\n}\n\n.notifications-sidebar-slice.unread .feature {\n  background-color: #e6f6ff;\n  border-color: #cee4f2;\n}\n\n.notifications-sidebar-slice .learn-more {\n  clear: both;\n  float: right;\n  margin-top: 8px;\n}\n\n.notifications-sidebar-slice .categories li {\n  display: inline-block;\n  padding: 4px;\n  margin-right: 8px;\n  font-size: 9px;\n  line-height: 8px;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #fff;\n  border-radius: 3px;\n}\n",""])},1677:function(n,e,t){"use strict";t.r(e);var i=t(354),a=t(393),o=t(359),r=t(361);function s({className:n,fill:e="currentColor",hasUnread:t,size:a}){return i.createElement(o.a,{className:n,size:a},t?i.createElement(i.Fragment,null,i.createElement("path",{d:"M8 1a.875.875 0 0 0-.875.875v.57c-2.009.418-3.498 2.118-3.498 4.242 0 2.798-.987 3.652-1.516 4.22a.856.856 0 0 0-.236.593.875.875 0 0 0 .877.875h10.496a.875.875 0 0 0 .877-.875.854.854 0 0 0-.236-.594c-.497-.534-1.388-1.342-1.494-3.76a2.814 2.814 0 0 1-.768.108A2.814 2.814 0 0 1 8.814 4.44a2.814 2.814 0 0 1 .665-1.818 4.543 4.543 0 0 0-.604-.178v-.57A.875.875 0 0 0 8 1zM6.25 13.25a1.75 1.75 0 0 0 3.5 0h-3.5z",style:{fill:e}}),i.createElement("circle",{cx:"11.627",cy:"4.441",r:"2",style:{fill:r.blue}})):i.createElement("path",{d:"M8 15a1.75 1.75 0 0 0 1.75-1.75h-3.5c0 .967.784 1.75 1.75 1.75zm5.89-4.094c-.529-.567-1.517-1.421-1.517-4.218 0-2.125-1.49-3.826-3.499-4.243v-.57a.875.875 0 1 0-1.748 0v.57c-2.01.417-3.499 2.118-3.499 4.243 0 2.797-.988 3.65-1.517 4.218a.854.854 0 0 0-.235.594.876.876 0 0 0 .878.875h10.494a.876.876 0 0 0 .878-.875.853.853 0 0 0-.235-.594z",style:{fill:e}}))}var l=t(12),c=t(0);t(1219);t.d(e,"default",function(){return p});class p extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.checkHasUnread=(()=>{const n=this.props,e=n.notificationsLastReadDate,t=n.lastNews;return!e||Object(l.c)(Object(l.g)(t.publicationDate),e)>0}),this.handleClick=(n=>{n.preventDefault(),n.currentTarget.blur(),this.props.onClick()}),this.handleDismiss=(n=>{n.preventDefault(),n.stopPropagation(),this.props.setCurrentUserSetting({key:"notifications.readDate",value:Date.now().toString()})})}render(){const n=this.props,e=n.notificationsOptOut,t=n.lastNews,o=this.checkHasUnread(),l=Boolean(!e&&t&&o);return i.createElement(i.Fragment,null,l&&i.createElement(i.Fragment,null,i.createElement("li",{className:"navbar-latest-notification",onClick:this.props.onClick},i.createElement("div",{className:"navbar-latest-notification-wrapper"},i.createElement("span",{className:"badge badge-new"},Object(c.l)("new")),i.createElement("span",{className:"label"},t.notification))),i.createElement("li",{className:"navbar-latest-notification-dismiss"},i.createElement("a",{className:"navbar-icon",href:"#",onClick:this.handleDismiss},i.createElement(a.a,{fill:r.sonarcloudBlack500,size:10})))),i.createElement("li",null,i.createElement("a",{className:"navbar-icon",href:"#",onClick:this.handleClick},i.createElement(s,{hasUnread:o&&!e}))))}}}}]);
//# sourceMappingURL=342.m.d05a971f.chunk.js.map