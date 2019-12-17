var example=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=177)}({0:function(e,t){e.exports=React},1:function(e,t){e.exports=ReactHighcharts},10:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}var a=n(2);function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?Object(a.a)(e):t}n.d(t,"a",(function(){return i}))},11:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r},c=n(13);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._handleRefMount=function(e){r._domNode=e},u(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,r=e.children;return i.default.createElement(n,{ref:this._handleRefMount,className:t},r)}}]),t}(a.PureComponent);l.propTypes={async:c.PropTypes.bool,className:c.PropTypes.string,children:c.PropTypes.any,component:c.PropTypes.node},l.defaultProps={component:"code"},t.default=l},13:function(e,t,n){e.exports=n(14)()},14:function(e,t,n){"use strict";var r=n(15);function o(){}e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},15:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},177:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(7),u=n(8),l=n(10),s=n(9),f=n(11),p=n(3),m=n.n(p),y=n(1),h=n(5),d=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(y.HighchartsChart,null,o.a.createElement(y.Chart,null),o.a.createElement(y.Title,null,"Combination chart"),o.a.createElement(y.Legend,null),o.a.createElement(y.XAxis,{categories:["Apples","Oranges","Pears","Bananas","Plums"]}),o.a.createElement(y.YAxis,null,o.a.createElement(y.ColumnSeries,{name:"Jane",data:[3,2,1,3,4]}),o.a.createElement(y.ColumnSeries,{name:"John",data:[2,3,5,7,6]}),o.a.createElement(y.ColumnSeries,{name:"Joe",data:[4,3,3,9,0]}),o.a.createElement(y.SplineSeries,{name:"Average",data:[3,2.67,3,6.33,3.33]}),o.a.createElement(y.PieSeries,{name:"Total consumption",data:[{name:"Jane",y:13},{name:"John",y:23},{name:"Joe",y:19}],center:[100,80],size:100,showInLegend:!1}))),o.a.createElement(h.a,{name:"Combo"},"\nconst pieData = [{\n  name: 'Jane',\n  y: 13\n}, {\n  name: 'John',\n  y: 23\n}, {\n  name: 'Joe',\n  y: 19\n}];\n\nreturn (\n  <HighchartsChart>\n    <Chart />\n\n    <Title>Combination chart</Title>\n\n    <Legend />\n\n    <XAxis categories={['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']} />\n\n    <YAxis>\n      <ColumnSeries name=\"Jane\" data={[3, 2, 1, 3, 4]} />\n      <ColumnSeries name=\"John\" data={[2, 3, 5, 7, 6]} />\n      <ColumnSeries name=\"Joe\" data={[4, 3, 3, 9, 0]} />\n      <SplineSeries name=\"Average\" data={[3, 2.67, 3, 6.33, 3.33]} />\n      <PieSeries name=\"Total consumption\" data={pieData} center={[100, 80]} size={100} showInLegend={false} />\n    </YAxis>\n  </HighchartsChart>\n);\n\n// Remember to inject Highcharts to component\nexport default withHighcharts(MyComponent, Highcharts);"))}}]),t}(r.Component),b=Object(y.withHighcharts)(d,m.a);i.a.render(o.a.createElement(b,null),document.getElementById("root"))},2:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},3:function(e,t){e.exports=Highcharts},4:function(e,t){e.exports=ReactDOM},5:function(e,t,n){"use strict";var r=n(6);t.a=function(e){var t=e.name,n=e.children;return React.createElement("div",null,React.createElement("pre",null,React.createElement(r.PrismCode,{className:"language-jsx"},n)),React.createElement("a",{href:"https://github.com/whawker/react-jsx-highcharts/blob/gh-pages/examples/".concat(t,"/App.js"),className:"btn btn-link"},"See full example code"))}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return o(r).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},7:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},8:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},9:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))}});