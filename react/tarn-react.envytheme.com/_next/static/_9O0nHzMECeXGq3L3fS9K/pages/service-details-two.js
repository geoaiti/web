(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"087e":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service-details-two",function(){return a("LylM")}])},"2lVX":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("YFqc"),r=a.n(i),s=l.a.createElement;t.a=function(){return s("div",{className:"services-details-info"},s("ul",{className:"services-list"},s("li",null,s(r.a,{href:"/service-details"},s("a",{className:"active"},"AI & ML Development"))),s("li",null,s(r.a,{href:"/service-details"},s("a",null,"Data Analytics"))),s("li",null,s(r.a,{href:"/service-details"},s("a",null,"Data Science"))),s("li",null,s(r.a,{href:"/service-details"},s("a",null,"Artificial Intelligence"))),s("li",null,s(r.a,{href:"/service-details"},s("a",null,"Data Visualization")))),s("div",{className:"download-file"},s("h3",null,"Brochures"),s("ul",null,s("li",null,s(r.a,{href:"#"},s("a",null,"PDF Download ",s("i",{className:"bx bxs-file-pdf"})))),s("li",null,s(r.a,{href:"#"},s("a",null,"Services Details.txt ",s("i",{className:"bx bxs-file-txt"})))))),s("div",{className:"services-contact-info"},s("h3",null,"Contact Info"),s("ul",null,s("li",null,s("div",{className:"icon"},s("i",{className:"bx bx-user-pin"})),s("span",null,"Phone:"),s("a",{href:"tel:+21453545413",target:"_blank"},"+2145 354 5413")),s("li",null,s("div",{className:"icon"},s("i",{className:"bx bx-map"})),s("span",null,"Location:"),"New York, USA"),s("li",null,s("div",{className:"icon"},s("i",{className:"bx bx-envelope"})),s("span",null,"Email:"),s("a",{href:"mailto:hello@tarn.com"},"hello@tarn.com")))))}},"2qu3":function(e,t,a){"use strict";var n=a("lSNA"),l=a("lwsE"),i=a("W8MJ");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,l=function(){};return{s:l,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){s=!0,i=e},f:function(){try{r||null==a.return||a.return()}finally{if(s)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.__esModule=!0,t.default=void 0;var u,d=(u=a("q1tI"))&&u.__esModule?u:{default:u},m=a("8L3h"),f=a("jwwS");var p=[],v=[],g=!1;function h(e){var t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then((function(e){return a.loading=!1,a.loaded=e,e})).catch((function(e){throw a.loading=!1,a.error=e,e})),a}function b(e){var t={loading:!1,loaded:{},error:null},a=[];try{Object.keys(e).forEach((function(n){var l=h(e[n]);l.loading?t.loading=!0:(t.loaded[n]=l.loaded,t.error=l.error),a.push(l.promise),l.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(a).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function N(e,t){var a=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),n=null;function l(){if(!n){var t=new w(e,a);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!g&&"function"===typeof a.webpack){var i=a.webpack();v.push((function(e){var t,a=o(i);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return l()}}catch(r){a.e(r)}finally{a.f()}}))}var r=function(e,t){l();var i=d.default.useContext(f.LoadableContext),r=(0,m.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),i&&Array.isArray(a.modules)&&a.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return r.loading||r.error?d.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:n.retry}):r.loaded?a.render(r.loaded,e):null}),[e,r])};return r.preload=function(){return l()},r.displayName="LoadableComponent",d.default.forwardRef(r)}var w=function(){function e(t,a){l(this,e),this._loadFn=t,this._opts=a,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,a=this._opts;t.loading&&("number"===typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),a.delay)),"number"===typeof a.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),a.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return N(h,e)}function O(e,t){for(var a=[];e.length;){var n=e.pop();a.push(n(t))}return Promise.all(a).then((function(){if(e.length)return O(e,t)}))}_.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return N(b,e)},_.preloadAll=function(){return new Promise((function(e,t){O(p).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var a=function(){return g=!0,t()};O(v,e).then(a,a)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var P=_;t.default=P},Ix5F:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("YFqc"),r=a.n(i),s=l.a.createElement;t.a=function(e){var t=e.pageTitle,a=e.homePageUrl,n=e.homePageText,l=e.activePageText;return s("div",{className:"page-title-area"},s("div",{className:"container"},s("div",{className:"page-title-content"},s("h2",null,t),s("ul",null,s("li",null,s(r.a,{href:a},s("a",null,n))),s("li",null,l)))),s("div",{className:"shape-img1"},s("img",{src:"/img/shape/shape1.svg",alt:"image"})),s("div",{className:"shape-img2"},s("img",{src:"/img/shape/shape2.png",alt:"image"})),s("div",{className:"shape-img3"},s("img",{src:"/img/shape/shape3.png",alt:"image"})))}},LylM:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),i=a("SxW8"),r=a("Ix5F"),s=a("wx14"),o=a("ODXe"),c=(a("YFqc"),a("2lVX")),u=a("a6RD"),d=a.n(u),m=l.a.createElement,f=d()((function(){return a.e(5).then(a.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),p={loop:!0,nav:!0,items:1,dots:!1,autoplayHoverPause:!0,autoplay:!0,animateOut:"fadeOut",animateIn:"fadeIn",navText:["<i class='flaticon-left-1'></i>","<i class='flaticon-right-1'></i>"]},v=function(){var e=l.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return l.a.useEffect((function(){n(!0)}),[]),m("section",{className:"services-details-area ptb-100"},m("div",{className:"container"},m("div",{className:"row"},m("div",{className:"col-lg-8 col-md-12"},a?m(f,Object(s.a)({className:"services-details-image-slides owl-carousel owl-theme"},p),m("div",{className:"single-item"},m("img",{src:"/img/services/services-details2.jpg",alt:"image"})),m("div",{className:"single-item"},m("img",{src:"/img/services/services-details1.jpg",alt:"image"}))):"",m("div",{className:"services-details-desc"},m("span",{className:"sub-title"},"AI & ML Development"),m("h3",null,"About this Services"),m("p",null,"Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python."),m("div",{className:"row align-items-center"},m("div",{className:"col-lg-6 col-md-6"},m("div",{className:"image"},m("img",{src:"/img/projects/project2.jpg",alt:"image"}))),m("div",{className:"col-lg-6 col-md-6"},m("div",{className:"content"},m("h3",null,"Important Facts"),m("ul",null,m("li",null,"The Field of Data Science"),m("li",null,"The Problem"),m("li",null,"The Solution"),m("li",null,"The Skills"),m("li",null,"Statistics"),m("li",null,"Mathematics"))))),m("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \u2018Content here, content here\u2019, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."),m("h3",null,"Application Areas"),m("div",{className:"row"},m("div",{className:"col-lg-4 col-sm-6 col-md-6"},m("div",{className:"single-industries-serve-box"},m("div",{className:"icon"},m("i",{className:"flaticon-factory"})),"Manufacturing")),m("div",{className:"col-lg-4 col-sm-6 col-md-6"},m("div",{className:"single-industries-serve-box"},m("div",{className:"icon"},m("i",{className:"flaticon-hospital"})),"Healthcare")),m("div",{className:"col-lg-4 col-sm-6 col-md-6"},m("div",{className:"single-industries-serve-box"},m("div",{className:"icon"},m("i",{className:"flaticon-tracking"})),"Automobile")),m("div",{className:"col-lg-4 col-sm-6 col-md-6"},m("div",{className:"single-industries-serve-box"},m("div",{className:"icon"},m("i",{className:"flaticon-investment"})),"Banking")),m("div",{className:"col-lg-4 col-sm-6 col-md-6"},m("div",{className:"single-industries-serve-box"},m("div",{className:"icon"},m("i",{className:"flaticon-house"})),"Real Estate")),m("div",{className:"col-lg-4 col-sm-6 col-md-6"},m("div",{className:"single-industries-serve-box"},m("div",{className:"icon"},m("i",{className:"flaticon-order"})),"Logistics"))),m("h3",null,"Technologies That We Use"),m("ul",{className:"technologies-features"},m("li",null,m("span",null,"JavaScript")),m("li",null,m("span",null,"Python")),m("li",null,m("span",null,"Java")),m("li",null,m("span",null,"C/CPP")),m("li",null,m("span",null,"PHP")),m("li",null,m("span",null,"Swift")),m("li",null,m("span",null,"C# (C- Sharp)")),m("li",null,m("span",null,"Ruby")),m("li",null,m("span",null,"SQL"))),m("div",{className:"charts-image"},m("img",{src:"/img/services/charts.jpg",alt:"image"})))),m("div",{className:"col-lg-4 col-md-12"},m(c.a,null)))))},g=a("eF84"),h=a("mdYk"),b=l.a.createElement;t.default=function(){return b(l.a.Fragment,null,b(i.a,null),b(r.a,{pageTitle:"Service Details",homePageText:"Home",homePageUrl:"/",activePageText:"Service Details"}),b(v,null),b(g.a,null),b(h.a,null))}},a6RD:function(e,t,a){"use strict";var n=a("lSNA");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.__esModule=!0,t.noSSR=u,t.default=function(e,t){var a=s.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i(i({},n),e));if(n=i(i({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,a){return e.render(a,t)}),e.modules)){a=s.default.Map;var l={},r=e.modules();Object.keys(r).forEach((function(e){var t=r[e];"function"!==typeof t.then?l[e]=t:l[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=l}n.loadableGenerated&&delete(n=i(i({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(a,n);delete n.ssr}return a(n)};var r=o(a("q1tI")),s=o(a("2qu3"));function o(e){return e&&e.__esModule?e:{default:e}}var c=!1;function u(e,t){if(delete t.webpack,delete t.modules,!c)return e(t);var a=t.loading;return function(){return r.default.createElement(a,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}},eF84:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("YFqc"),r=a.n(i),s=l.a.createElement;t.a=function(){return s("section",{className:"services-area pt-100 pb-70 bg-f1f8fb"},s("div",{className:"container"},s("div",{className:"section-title"},s("h2",null,"More Services You Might Like")),s("div",{className:"row"},s("div",{className:"col-lg-4 col-md-6 col-sm-6"},s("div",{className:"single-services-box "},s("div",{className:"icon"},s("img",{src:"/img/services/service-icon1.png",alt:"image"})),s("h3",null,s(r.a,{href:"/service-details"},s("a",null,"Data Analytics"))),s("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."),s(r.a,{href:"/service-details"},s("a",{className:"read-more-btn"},"Read More ",s("i",{className:"flaticon-right"}))))),s("div",{className:"col-lg-4 col-md-6 col-sm-6"},s("div",{className:"single-services-box"},s("div",{className:"icon"},s("img",{src:"/img/services/service-icon2.png",alt:"image"})),s("h3",null,s(r.a,{href:"/service-details"},s("a",null,"AI & ML Development"))),s("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."),s(r.a,{href:"/service-details"},s("a",{className:"read-more-btn"},"Read More ",s("i",{className:"flaticon-right"}))))),s("div",{className:"col-lg-4 col-md-6 col-sm-6"},s("div",{className:"single-services-box"},s("div",{className:"icon"},s("img",{src:"/img/services/service-icon3.png",alt:"image"})),s("h3",null,s(r.a,{href:"/service-details"},s("a",null,"Data Science"))),s("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."),s(r.a,{href:"/service-details"},s("a",{className:"read-more-btn"},"Read More ",s("i",{className:"flaticon-right"}))))))))}},jwwS:function(e,t,a){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var l=((n=a("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=l},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))}},[["087e",0,2,1,3,4]]]);