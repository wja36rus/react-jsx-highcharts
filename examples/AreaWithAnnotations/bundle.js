var example=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=175)}({0:function(e,t){e.exports=React},1:function(e,t){e.exports=ReactHighcharts},10:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}var a=n(2);function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?Object(a.a)(e):t}n.d(t,"a",(function(){return i}))},11:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r},c=n(13);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._handleRefMount=function(e){r._domNode=e},u(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,r=e.children;return i.default.createElement(n,{ref:this._handleRefMount,className:t},r)}}]),t}(a.PureComponent);s.propTypes={async:c.PropTypes.bool,className:c.PropTypes.string,children:c.PropTypes.any,component:c.PropTypes.node},s.defaultProps={component:"code"},t.default=s},13:function(e,t,n){e.exports=n(14)()},14:function(e,t,n){"use strict";var r=n(15);function o(){}e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},15:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},16:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},175:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(7),u=n(8),s=n(10),l=n(9),p=n(11),f=n(2),y=n(16),m=n(3),b=n.n(m),d=n(1),h=n(5),x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o))),Object(y.a)(Object(f.a)(Object(f.a)(n)),"data",[[1542578284819,1],[1542664684819,1.3],[1542751084819,1.5],[1542837484819,2.9],[1542923884819,1.9],[1543010284819,2.6],[1543096684819,1.6],[1543183084819,3],[1543269484819,4],[1543355884819,3.6],[1543442284819,4.5],[1543528684819,4.2],[1543615084819,4.5],[1543701484819,4.5],[1543787884819,4],[1543874284819,3.1],[1543960684819,2.7],[1544047084819,4],[1544133484819,2.7],[1544219884819,2.3],[1544306284819,2.3],[1544392684819,4.1],[1544479084819,7.7],[1544565484819,7.1],[1544651884819,5.6],[1544738284819,6.1],[1544824684819,5.8],[1544911084819,8.6],[1544997484819,7.2],[1545083884819,9],[1545170284819,10.9],[1545256684819,11.5],[1545343084819,11.6],[1545429484819,11.1],[1545515884819,12],[1545602284819,12.3],[1545688684819,10.7]]),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(d.HighchartsChart,{plotOptions:{area:{stacking:"normal"}}},o.a.createElement(d.Chart,null),o.a.createElement(d.Title,null,"Network usage"),o.a.createElement(d.Subtitle,null,"by protocol"),o.a.createElement(d.Legend,null),o.a.createElement(d.Tooltip,{valueSuffix:" k"}),o.a.createElement(d.XAxis,{id:"myXaxis",type:"datetime"},o.a.createElement(d.XAxis.Title,null,"Unique users")),o.a.createElement(d.YAxis,{id:"myYaxis"},o.a.createElement(d.AreaSeries,{name:"IPv4",data:this.data}),o.a.createElement(d.AreaSeries,{name:"IPv6",data:this.data})),o.a.createElement(d.Annotation,{labels:[{text:"App launch",point:{xAxis:"myXaxis",yAxis:"myYaxis",x:1545170284819,y:0}}]}),o.a.createElement(d.Annotation,{labels:[{text:"Network outage",point:{xAxis:"myXaxis",yAxis:"myYaxis",x:1543096684819,y:0}}]}),o.a.createElement(d.Annotation,{shapes:[{type:"path",stroke:"red",points:[{xAxis:"myXaxis",yAxis:"myYaxis",x:1543615084819,y:9},{xAxis:"myXaxis",yAxis:"myYaxis",x:1544479084819,y:15.4}]}]})),o.a.createElement(h.a,{name:"AreaWithAnnotations"},'\nrender() {\n  const plotOptions = {\n    area: {\n      stacking: \'normal\'\n    }\n  }\n\n  return (\n    <div className="app">\n      <HighchartsChart plotOptions={ plotOptions }>\n        <Chart  />\n\n        <Title>Network usage</Title>\n\n        <Subtitle>by protocol</Subtitle>\n\n        <Legend />\n\n        <Tooltip valueSuffix=" k"/>\n\n        <XAxis id="myXaxis" type="datetime">\n          <XAxis.Title>Unique users</XAxis.Title>\n        </XAxis>\n\n        <YAxis id="myYaxis">\n          <AreaSeries name="IPv4" data={this.data} />\n          <AreaSeries name="IPv6" data={this.data} />\n        </YAxis>\n\n        <Annotation\n          labels={ [{ text: "App launch", point: { xAxis: "myXaxis", yAxis: "myYaxis", x: 1545170284819, y: 0 } }] } />\n        <Annotation\n          labels={ [{ text: "Network outage", point: { xAxis: "myXaxis", yAxis: "myYaxis", x: 1543096684819, y: 0 } }] } />\n        <Annotation\n          shapes={ [\n            { type: "path", stroke: "red",\n            points: [\n              { xAxis: "myXaxis", yAxis: "myYaxis", x: 1543615084819, y: 9 },\n              { xAxis: "myXaxis", yAxis: "myYaxis", x: 1544479084819, y: 15.4 }\n            ]\n            }\n          ] } />\n\n      </HighchartsChart>\n\n    </div>\n  );\n}\ndata = [\n  [ 1542578284819, 1 ],\n  [ 1542664684819, 1.3 ],\n  [ 1542751084819, 1.5 ],\n  [ 1542837484819, 2.9 ],\n  [ 1542923884819, 1.9 ],\n  [ 1543010284819, 2.6 ],\n  [ 1543096684819, 1.6 ],\n  [ 1543183084819, 3 ],\n  [ 1543269484819, 4 ],\n  [ 1543355884819, 3.6 ],\n  [ 1543442284819, 4.5 ],\n  [ 1543528684819, 4.2 ],\n  [ 1543615084819, 4.5 ],\n  [ 1543701484819, 4.5 ],\n  [ 1543787884819, 4 ],\n  [ 1543874284819, 3.1 ],\n  [ 1543960684819, 2.7 ],\n  [ 1544047084819, 4 ],\n  [ 1544133484819, 2.7 ],\n  [ 1544219884819, 2.3 ],\n  [ 1544306284819, 2.3 ],\n  [ 1544392684819, 4.1 ],\n  [ 1544479084819, 7.7 ],\n  [ 1544565484819, 7.1 ],\n  [ 1544651884819, 5.6 ],\n  [ 1544738284819, 6.1 ],\n  [ 1544824684819, 5.8 ],\n  [ 1544911084819, 8.6 ],\n  [ 1544997484819, 7.2 ],\n  [ 1545083884819, 9 ],\n  [ 1545170284819, 10.9 ],\n  [ 1545256684819, 11.5 ],\n  [ 1545343084819, 11.6 ],\n  [ 1545429484819, 11.1 ],\n  [ 1545515884819, 12 ],\n  [ 1545602284819, 12.3 ],\n  [ 1545688684819, 10.7 ]\n]\n\n// Remember to inject Highcharts to exported component\nexport default withHighcharts(MyComponent, Highcharts);'))}}]),t}(r.Component),g=Object(d.withHighcharts)(x,b.a);i.a.render(o.a.createElement(g,null),document.getElementById("root"))},2:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},3:function(e,t){e.exports=Highcharts},4:function(e,t){e.exports=ReactDOM},5:function(e,t,n){"use strict";var r=n(6);t.a=function(e){var t=e.name,n=e.children;return React.createElement("div",null,React.createElement("pre",null,React.createElement(r.PrismCode,{className:"language-jsx"},n)),React.createElement("a",{href:"https://github.com/whawker/react-jsx-highcharts/blob/gh-pages/examples/".concat(t,"/App.js"),className:"btn btn-link"},"See full example code"))}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return o(r).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},7:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},8:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},9:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))}});