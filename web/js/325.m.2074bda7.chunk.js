(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{1617:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n(354),s=n(869);function c(e){return a.createElement(s.a,Object.assign({setup:!1},e))}},404:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(354),s=n(349),c=n(12);function i({children:e,date:t}){return a.createElement(s.FormattedRelative,{value:Object(c.g)(t)},e)}},508:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"h",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return m}),n.d(t,"b",function(){return o}),n.d(t,"f",function(){return u}),n.d(t,"g",function(){return E});var a,s=n(4),c=n(372);function i(e){return Object(s.post)("/api/system/change_log_level",{level:e}).catch(c.a)}function r(){return Object(s.getJSON)("/api/system/info").catch(c.a)}function l(){return Object(s.getJSON)("/api/system/status")}function m(){return Object(s.getJSON)("/api/system/upgrades")}function o(){return Object(s.getJSON)("/api/system/db_migration_status")}function u(){return Object(s.postJSON)("/api/system/migrate_db")}!function(e){e.RED="RED",e.YELLOW="YELLOW",e.GREEN="GREEN"}(a||(a={}));const h=2e3;function d(){return new Promise(e=>(function e(t){setTimeout(()=>{l().then(n=>{"UP"===n.status?t():e(t)}).catch(()=>e(t))},h)})(e))}function E(){return Object(s.post)("/api/system/restart").catch(c.a).then(d)}},620:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(354),s=n(349),c=n(12);const i={hour:"numeric",minute:"numeric"},r={hour:"numeric",minute:"numeric",second:"numeric"};function l({children:e,date:t,long:n}){return a.createElement(s.FormattedTime,Object.assign({value:Object(c.g)(t)},n?r:i),e)}},869:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(354),s=n(355),c=n(371),i=n.n(c),r=n(508),l=n(404),m=n(620),o=n(356),u=n(0),h=n(432),d=n(362),E=n(13);n(870);class p extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.fetchStatus=(()=>{(this.props.setup?this.fetchMigrationState():this.fetchSystemStatus()).catch(()=>{this.mounted&&this.setState({message:void 0,startedAt:void 0,state:void 0,status:"OFFLINE"})})}),this.fetchSystemStatus=(()=>Object(r.d)().then(({status:e})=>{this.mounted&&(this.setState({status:e}),"STARTING"===e?(this.setState({wasStarting:!0}),this.scheduleRefresh()):"UP"===e?this.state.wasStarting&&this.loadPreviousPage():this.scheduleRefresh())})),this.fetchMigrationState=(()=>Object(r.b)().then(({message:e,startedAt:t,state:n})=>{this.mounted&&(this.setState({message:e,startedAt:t,state:n}),"MIGRATION_SUCCEEDED"===n?this.loadPreviousPage():"NO_MIGRATION"!==n&&this.scheduleRefresh())})),this.scheduleRefresh=(()=>{this.interval=window.setTimeout(this.fetchStatus,5e3)}),this.loadPreviousPage=(()=>{setInterval(()=>{window.location.href=Object(d.A)(this.props.location)},2500)}),this.handleMigrateClick=(()=>{Object(r.f)().then(({message:e,startedAt:t,state:n})=>{this.mounted&&this.setState({message:e,startedAt:t,state:n})},()=>{})})}componentDidMount(){this.mounted=!0,this.fetchStatus()}componentWillUnmount(){this.mounted=!1,this.interval&&window.clearInterval(this.interval)}render(){const e=this.state,t=e.state,n=e.status;return a.createElement(a.Fragment,null,a.createElement(i.a,{defaultTitle:Object(u.l)("maintenance.page")}),a.createElement("div",{className:"page-wrapper-simple",id:"bd"},a.createElement("div",{className:s("page-simple",{"panel-warning":"MIGRATION_REQUIRED"===t}),id:"nonav"},"OFFLINE"===n&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title text-danger"},a.createElement(h.a,{message:Object(u.l)("maintenance.is_offline")})),!Object(E.isSonarCloud)()&&a.createElement("p",{className:"maintenance-text"},Object(u.l)("maintenance.sonarqube_is_offline.text")),a.createElement("p",{className:"maintenance-text text-center"},a.createElement("a",{href:Object(d.b)()+"/"},Object(u.l)("maintenance.try_again")))),"UP"===n&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},a.createElement(h.a,{message:Object(u.l)("maintenance.is_up")})),a.createElement("p",{className:"maintenance-text text-center"},Object(u.l)("maintenance.all_systems_opetational")),a.createElement("p",{className:"maintenance-text text-center"},a.createElement("a",{href:Object(d.b)()+"/"},Object(u.l)("layout.home")))),"STARTING"===n&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},a.createElement(h.a,{message:Object(u.l)("maintenance.is_starting")})),a.createElement("p",{className:"maintenance-spinner"},a.createElement("i",{className:"spinner"}))),"DOWN"===n&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title text-danger"},a.createElement(h.a,{message:Object(u.l)("maintenance.is_down")})),a.createElement("p",{className:"maintenance-text"},Object(u.l)("maintenance.sonarqube_is_down.text")),a.createElement("p",{className:"maintenance-text text-center"},a.createElement("a",{href:Object(d.b)()+"/"},Object(u.l)("maintenance.try_again")))),("DB_MIGRATION_NEEDED"===n||"DB_MIGRATION_RUNNING"===n)&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},a.createElement(h.a,{message:Object(u.l)("maintenance.is_under_maintenance")})),!Object(E.isSonarCloud)()&&a.createElement(a.Fragment,null,a.createElement("p",{className:"maintenance-text",dangerouslySetInnerHTML:{__html:Object(u.l)("maintenance.sonarqube_is_under_maintenance.1")}}),a.createElement("p",{className:"maintenance-text",dangerouslySetInnerHTML:{__html:Object(u.l)("maintenance.sonarqube_is_under_maintenance.2")}}))),"NO_MIGRATION"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},Object(u.l)("maintenance.database_is_up_to_date")),a.createElement("p",{className:"maintenance-text text-center"},a.createElement("a",{href:Object(d.b)()+"/"},Object(u.l)("layout.home")))),"MIGRATION_REQUIRED"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},Object(u.l)("maintenance.upgrade_database")),a.createElement("p",{className:"maintenance-text"},Object(u.l)("maintenance.upgrade_database.1")),a.createElement("p",{className:"maintenance-text"},Object(u.l)("maintenance.upgrade_database.2")),a.createElement("p",{className:"maintenance-text"},Object(u.l)("maintenance.upgrade_database.3")),a.createElement("div",{className:"maintenance-spinner"},a.createElement(o.a,{id:"start-migration",onClick:this.handleMigrateClick},Object(u.l)("maintenance.upgrade")))),"NOT_SUPPORTED"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title text-danger"},Object(u.l)("maintenance.migration_not_supported")),a.createElement("p",null,Object(u.l)("maintenance.migration_not_supported.text"))),"MIGRATION_RUNNING"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title"},Object(u.l)("maintenance.database_migration")),this.state.message&&a.createElement("p",{className:"maintenance-text text-center"},this.state.message),this.state.startedAt&&a.createElement("p",{className:"maintenance-text text-center"},Object(u.l)("background_tasks.table.started")," ",a.createElement(l.a,{date:this.state.startedAt}),a.createElement("br",null),a.createElement("small",{className:"text-muted"},a.createElement(m.a,{date:this.state.startedAt,long:!0}))),a.createElement("p",{className:"maintenance-spinner"},a.createElement("i",{className:"spinner"}))),"MIGRATION_SUCCEEDED"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title text-success"},Object(u.l)("maintenance.database_is_up_to_date")),a.createElement("p",{className:"maintenance-text text-center"},a.createElement("a",{href:Object(d.b)()+"/"},Object(u.l)("layout.home")))),"MIGRATION_FAILED"===t&&a.createElement(a.Fragment,null,a.createElement("h1",{className:"maintenance-title text-danger"},Object(u.l)("maintenance.upgrade_failed")),a.createElement("p",{className:"maintenance-text"},Object(u.l)("maintenance.upgrade_failed.text"))))))}}},870:function(e,t,n){var a=n(871);"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(358)(a,s);a.locals&&(e.exports=a.locals)},871:function(e,t,n){(e.exports=n(357)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.maintenance-title {\n  margin-bottom: 40px;\n  line-height: 1.5;\n  font-size: 24px;\n  font-weight: 300;\n  text-align: center;\n}\n\n.maintenance-text {\n  margin-bottom: 16px;\n  line-height: 1.5;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.maintenance-spinner {\n  margin-top: 40px;\n  text-align: center;\n}\n",""])}}]);
//# sourceMappingURL=325.m.2074bda7.chunk.js.map