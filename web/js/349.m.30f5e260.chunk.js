(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{1610:function(s,e,n){"use strict";n.r(e),n.d(e,"default",function(){return r});var t=n(354),o=n(715),i=n(376);function r(s){return t.createElement(t.Fragment,null,t.createElement(o.a,{isFavorite:!1,location:s.location,organization:s.organization}),t.createElement(i.a,{suggestions:"organization_projects"}))}},376:function(s,e,n){"use strict";n.d(e,"a",function(){return i});var t=n(354),o=n(403);function i({suggestions:s}){return t.createElement(o.a.Consumer,null,({addSuggestions:e,removeSuggestions:n})=>t.createElement(r,{addSuggestions:e,removeSuggestions:n,suggestions:s}))}class r extends t.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(s){s.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(s.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}}}]);
//# sourceMappingURL=349.m.30f5e260.chunk.js.map