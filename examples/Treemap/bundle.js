var example=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=187)}({0:function(e,t){e.exports=React},1:function(e,t){e.exports=ReactHighcharts},10:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}var a=n(2);function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?Object(a.a)(e):t}n.d(t,"a",function(){return u})},11:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",function(){return o})},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r},c=n(13);function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._handleRefMount=function(e){r._domNode=e},i(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.PureComponent),o(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,r=e.children;return u.default.createElement(n,{ref:this._handleRefMount,className:t},r)}}]),t}();l.propTypes={async:c.PropTypes.bool,className:c.PropTypes.string,children:c.PropTypes.any,component:c.PropTypes.node},l.defaultProps={component:"code"},t.default=l},13:function(e,t,n){e.exports=n(14)()},14:function(e,t,n){"use strict";var r=n(15);function o(){}e.exports=function(){function e(e,t,n,o,a,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},15:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},187:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),u=n.n(a),c=n(7),i=n(8),l=n(10),s=n(9),f=n(11),p=n(3),m=n.n(p),y=n(1),h=n(5),d={minColor:"#FFFFFF",maxColor:m.a.getOptions().colors[0]},b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={treemapData:[{name:"A",value:6,colorValue:1},{name:"B",value:6,colorValue:2},{name:"C",value:4,colorValue:3},{name:"D",value:3,colorValue:4},{name:"E",value:2,colorValue:5},{name:"F",value:2,colorValue:6},{name:"G",value:1,colorValue:7}]},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.treemapData;return o.a.createElement("div",{className:"app"},o.a.createElement(y.HighchartsChart,{colorAxis:d},o.a.createElement(y.Title,null,"Highcharts Treemap"),o.a.createElement(y.Legend,null),o.a.createElement(y.XAxis,null),o.a.createElement(y.YAxis,null,o.a.createElement(y.TreemapSeries,{name:"Tree",data:e,layoutAlgorithm:"squarified"}))),o.a.createElement(h.a,{name:"Treemap"},"\nconst colorAxis = {\n  minColor: '#FFFFFF',\n  maxColor: Highcharts.getOptions().colors[0]\n};\n\nclass App extends Component {\n\n  constructor (props) {\n    super(props);\n\n    this.state = {\n      treemapData: [\n        { name: 'A', value: 6, colorValue: 1 },\n        { name: 'B', value: 6, colorValue: 2 },\n        { name: 'C', value: 4, colorValue: 3 },\n        { name: 'D', value: 3, colorValue: 4 },\n        { name: 'E', value: 2, colorValue: 5 },\n        { name: 'F', value: 2, colorValue: 6 },\n        { name: 'G', value: 1, colorValue: 7 }\n      ]\n    };\n  }\n\n  render () {\n    const treemapData = this.state.treemapData;\n\n    return (\n      <div className=\"app\">\n        <HighchartsChart colorAxis={colorAxis}>\n          <Title>Treemap</Title>\n\n          <Legend />\n\n          <XAxis />\n\n          <YAxis>\n            <TreemapSeries name=\"Tree\" data={treemapData} layoutAlgorithm=\"squarified\" />\n          </YAxis>\n        </HighchartsChart>\n      </div>\n    );\n  }\n}\n\nexport default withHighcharts(App, Highcharts);"))}}]),t}(r.Component),v=Object(y.withHighcharts)(b,m.a);u.a.render(o.a.createElement(v,null),document.getElementById("root"))},2:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return r})},3:function(e,t){e.exports=Highcharts},4:function(e,t){e.exports=ReactDOM},5:function(e,t,n){"use strict";var r=n(6);t.a=function(e){var t=e.name,n=e.children;return React.createElement("div",null,React.createElement("pre",null,React.createElement(r.PrismCode,{className:"language-jsx"},n)),React.createElement("a",{href:"https://github.com/whawker/react-jsx-highcharts/blob/gh-pages/examples/".concat(t,"/App.js"),className:"btn btn-link"},"See full example code"))}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return o(r).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},7:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},8:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",function(){return o})},9:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return r})}});