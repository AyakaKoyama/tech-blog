(()=>{var t={};t.id=548,t.ids=[548],t.modules={7849:t=>{"use strict";t.exports=require("next/dist/client/components/action-async-storage.external")},2934:t=>{"use strict";t.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:t=>{"use strict";t.exports=require("next/dist/client/components/request-async-storage.external")},4580:t=>{"use strict";t.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:t=>{"use strict";t.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:t=>{"use strict";t.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9411:t=>{"use strict";t.exports=require("node:path")},7742:t=>{"use strict";t.exports=require("node:process")},1041:t=>{"use strict";t.exports=require("node:url")},439:(t,e,r)=>{"use strict";r.r(e),r.d(e,{GlobalError:()=>s.a,__next_app__:()=>f,originalPathname:()=>p,pages:()=>l,routeModule:()=>d,tree:()=>c}),r(4393),r(2029),r(5866);var n=r(3191),i=r(8716),o=r(7922),s=r.n(o),a=r(5231),u={};for(let t in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(t)&&(u[t]=()=>a[t]);r.d(e,u);let c=["",{children:["blog",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4393)),"/home/ayaka_koyama/workspace/tech-blog/src/app/blog/[id]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"/home/ayaka_koyama/workspace/tech-blog/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],l=["/home/ayaka_koyama/workspace/tech-blog/src/app/blog/[id]/page.tsx"],p="/blog/[id]/page",f={require:r,loadChunk:()=>Promise.resolve()},d=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/blog/[id]/page",pathname:"/blog/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3915:(t,e,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},9636:(t,e,r)=>{Promise.resolve().then(r.bind(r,6113))},8701:()=>{},6113:(t,e,r)=>{"use strict";r.d(e,{default:()=>s});var n=r(326);r(7577);var i=r(8371),o=r(3593);let s=({title:t,date:e,url:r,thumbnail:s,content:a})=>n.jsx(n.Fragment,{children:n.jsx("div",{className:"mx-auto p-4 my-20 justify-center flex",children:(0,n.jsxs)("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden p-10 max-w-[1000px] w-full h-100 ","data-testid":"article-card",children:[n.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:n.jsx("img",{src:s,alt:t,className:"w-full h-96 object-cover rounded-t-lg"})}),(0,n.jsxs)("div",{className:"p-4",children:[n.jsx("h2",{className:"text-3xl font-bold mb-5",children:t}),n.jsx("div",{className:" text-2xl text-gray-600 mb-5",children:n.jsx(i.U,{rehypePlugins:[o.Z],children:a})}),n.jsx("div",{className:"text-right",children:n.jsx("p",{className:" text-xl text-gray-600",children:e})})]})]})})})},2579:(t,e,r)=>{var n=r(1509);t.exports=function(t,e){return new Promise(function(r,i){var o,s=e||{};function a(t){i(t||Error("Aborted"))}function u(t,e){if(t.bail){a(t);return}o.retry(t)?s.onRetry&&s.onRetry(t,e):i(o.mainError())}"randomize"in s||(s.randomize=!0),(o=n.operation(s)).attempt(function(e){var n;try{n=t(a,e)}catch(t){u(t,e);return}Promise.resolve(n).then(r).catch(function(t){u(t,e)})})})}},1509:(t,e,r)=>{t.exports=r(5656)},5656:(t,e,r)=>{var n=r(2511);e.operation=function(t){return new n(e.timeouts(t),{forever:t&&(t.forever||t.retries===1/0),unref:t&&t.unref,maxRetryTime:t&&t.maxRetryTime})},e.timeouts=function(t){if(t instanceof Array)return[].concat(t);var e={retries:10,factor:2,minTimeout:1e3,maxTimeout:1/0,randomize:!1};for(var r in t)e[r]=t[r];if(e.minTimeout>e.maxTimeout)throw Error("minTimeout is greater than maxTimeout");for(var n=[],i=0;i<e.retries;i++)n.push(this.createTimeout(i,e));return t&&t.forever&&!n.length&&n.push(this.createTimeout(i,e)),n.sort(function(t,e){return t-e}),n},e.createTimeout=function(t,e){return Math.min(Math.round((e.randomize?Math.random()+1:1)*Math.max(e.minTimeout,1)*Math.pow(e.factor,t)),e.maxTimeout)},e.wrap=function(t,r,n){if(r instanceof Array&&(n=r,r=null),!n)for(var i in n=[],t)"function"==typeof t[i]&&n.push(i);for(var o=0;o<n.length;o++){var s=n[o],a=t[s];t[s]=(function(n){var i=e.operation(r),o=Array.prototype.slice.call(arguments,1),s=o.pop();o.push(function(t){i.retry(t)||(t&&(arguments[0]=i.mainError()),s.apply(this,arguments))}),i.attempt(function(){n.apply(t,o)})}).bind(t,a),t[s].options=r}}},2511:t=>{function e(t,e){"boolean"==typeof e&&(e={forever:e}),this._originalTimeouts=JSON.parse(JSON.stringify(t)),this._timeouts=t,this._options=e||{},this._maxRetryTime=e&&e.maxRetryTime||1/0,this._fn=null,this._errors=[],this._attempts=1,this._operationTimeout=null,this._operationTimeoutCb=null,this._timeout=null,this._operationStart=null,this._timer=null,this._options.forever&&(this._cachedTimeouts=this._timeouts.slice(0))}t.exports=e,e.prototype.reset=function(){this._attempts=1,this._timeouts=this._originalTimeouts.slice(0)},e.prototype.stop=function(){this._timeout&&clearTimeout(this._timeout),this._timer&&clearTimeout(this._timer),this._timeouts=[],this._cachedTimeouts=null},e.prototype.retry=function(t){if(this._timeout&&clearTimeout(this._timeout),!t)return!1;var e=new Date().getTime();if(t&&e-this._operationStart>=this._maxRetryTime)return this._errors.push(t),this._errors.unshift(Error("RetryOperation timeout occurred")),!1;this._errors.push(t);var r=this._timeouts.shift();if(void 0===r){if(!this._cachedTimeouts)return!1;this._errors.splice(0,this._errors.length-1),r=this._cachedTimeouts.slice(-1)}var n=this;return this._timer=setTimeout(function(){n._attempts++,n._operationTimeoutCb&&(n._timeout=setTimeout(function(){n._operationTimeoutCb(n._attempts)},n._operationTimeout),n._options.unref&&n._timeout.unref()),n._fn(n._attempts)},r),this._options.unref&&this._timer.unref(),!0},e.prototype.attempt=function(t,e){this._fn=t,e&&(e.timeout&&(this._operationTimeout=e.timeout),e.cb&&(this._operationTimeoutCb=e.cb));var r=this;this._operationTimeoutCb&&(this._timeout=setTimeout(function(){r._operationTimeoutCb()},r._operationTimeout)),this._operationStart=new Date().getTime(),this._fn(this._attempts)},e.prototype.try=function(t){console.log("Using RetryOperation.try() is deprecated"),this.attempt(t)},e.prototype.start=function(t){console.log("Using RetryOperation.start() is deprecated"),this.attempt(t)},e.prototype.start=e.prototype.try,e.prototype.errors=function(){return this._errors},e.prototype.attempts=function(){return this._attempts},e.prototype.mainError=function(){if(0===this._errors.length)return null;for(var t={},e=null,r=0,n=0;n<this._errors.length;n++){var i=this._errors[n],o=i.message,s=(t[o]||0)+1;t[o]=s,s>=r&&(e=i,r=s)}return e}},4393:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>I,generateStaticParams:()=>T});var n=r(9510),i=r(8570);let o=(0,i.createProxy)(String.raw`/home/ayaka_koyama/workspace/tech-blog/src/app/components/ArticleCard.tsx`),{__esModule:s,$$typeof:a}=o;o.default;let u=(0,i.createProxy)(String.raw`/home/ayaka_koyama/workspace/tech-blog/src/app/components/ArticleCard.tsx#default`);var c=r(2579),l=r.n(c);function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e,r,n,i,o,s){try{var a=t[o](s),u=a.value}catch(t){r(t);return}a.done?e(u):Promise.resolve(u).then(n,i)}function d(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function s(t){f(o,n,i,s,a,"next",t)}function a(t){f(o,n,i,s,a,"throw",t)}s(void 0)})}}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){var n;n=r[e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n})}return t}function m(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):(function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r.push.apply(r,n)}return r})(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}),t}function y(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}}function v(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}var g=function(t){var e;return e=d(function(e,r){var n;return v(this,function(i){return[2,((n=new Headers(null==r?void 0:r.headers)).has("X-MICROCMS-API-KEY")||n.set("X-MICROCMS-API-KEY",t),fetch(e,m(h({},r),{headers:n})))]})}),function(t,r){return e.apply(this,arguments)}},_=function(t){return"string"==typeof t},x=function(t){if(!(null!==t&&"object"==typeof t))throw Error("queries is not object");return new URLSearchParams(Object.entries(t).reduce(function(t,e){var r=function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r,n,i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var o=[],s=!0,a=!1;try{for(i=i.call(t);!(s=(r=i.next()).done)&&(o.push(r.value),2!==o.length);s=!0);}catch(t){a=!0,n=t}finally{try{s||null==i.return||i.return()}finally{if(a)throw n}}return o}}(e,2)||b(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=r[0],i=r[1];return void 0!==i&&(t[n]=String(i)),t},{})).toString()};let w=function(t){var e,r,n,i,o,s,a,u,c,p,f=t.serviceDomain,b=t.apiKey,w=t.retry;if(!f||!b)throw Error("parameter is required (check serviceDomain and apiKey)");if(!_(f)||!_(b))throw Error("parameter is not string");var P="https://".concat(f,".").concat("microcms.io","/api/").concat("v1"),j=(e=d(function(t){var e,r,n,i,o,s,a,u,c;return v(this,function(p){switch(p.label){case 0:var f,y;return e=t.endpoint,r=t.contentId,i=void 0===(n=t.queries)?{}:n,o=t.requestInit,s=g(b),a=x(i),u="".concat(P,"/").concat(e).concat(r?"/".concat(r):"").concat(a?"?".concat(a):""),f=d(function(t){var e;return v(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,t.json()];case 1:return[2,null!=(e=r.sent().message)?e:null];case 2:return r.sent(),[2,null];case 3:return[2]}})}),c=function(t){return f.apply(this,arguments)},[4,l()((y=d(function(t){var e,r,n,i,a,l,p;return v(this,function(f){switch(f.label){case 0:return f.trys.push([0,6,,7]),[4,s(u,m(h({},o),{method:null!==(r=null==o?void 0:o.method)&&void 0!==r?r:"GET"}))];case 1:if(429===(e=f.sent()).status||!(e.status>=400)||!(e.status<500))return[3,3];return[4,c(e)];case 2:return n=f.sent(),[2,t(Error("fetch API response status: ".concat(e.status).concat(n?"\n  message is `".concat(n,"`"):"")))];case 3:if(e.ok)return[3,5];return[4,c(e)];case 4:return i=f.sent(),[2,Promise.reject(Error("fetch API response status: ".concat(e.status).concat(i?"\n  message is `".concat(i,"`"):"")))];case 5:return[2,(null==o?void 0:o.method)==="DELETE"?void 0:e.json()];case 6:if((a=f.sent()).data)throw a.data;if(null===(l=a.response)||void 0===l?void 0:l.data)throw a.response.data;return[2,Promise.reject(Error("Network Error.\n  Details: ".concat(null!==(p=a.message)&&void 0!==p?p:"")))];case 7:return[2]}})}),function(t){return y.apply(this,arguments)}),{retries:w?2:0,onRetry:function(t,e){console.log(t),console.log("Waiting for retry (".concat(e,"/",2,")"))},minTimeout:5e3})];case 1:return[2,p.sent()]}})}),function(t){return e.apply(this,arguments)});return{get:(r=d(function(t){var e,r,n,i,o,s;return v(this,function(a){switch(a.label){case 0:if(e=t.endpoint,r=t.contentId,i=void 0===(n=t.queries)?{}:n,o=t.customRequestInit,!e)return[3,2];return[4,j({endpoint:e,contentId:r,queries:i,requestInit:o})];case 1:return s=a.sent(),[3,3];case 2:s=Promise.reject(Error("endpoint is required")),a.label=3;case 3:return[2,s]}})}),function(t){return r.apply(this,arguments)}),getList:(n=d(function(t){var e,r,n,i,o;return v(this,function(s){switch(s.label){case 0:if(e=t.endpoint,n=void 0===(r=t.queries)?{}:r,i=t.customRequestInit,!e)return[3,2];return[4,j({endpoint:e,queries:n,requestInit:i})];case 1:return o=s.sent(),[3,3];case 2:o=Promise.reject(Error("endpoint is required")),s.label=3;case 3:return[2,o]}})}),function(t){return n.apply(this,arguments)}),getListDetail:(i=d(function(t){var e,r,n,i,o,s;return v(this,function(a){switch(a.label){case 0:if(e=t.endpoint,r=t.contentId,i=void 0===(n=t.queries)?{}:n,o=t.customRequestInit,!e)return[3,2];return[4,j({endpoint:e,contentId:r,queries:i,requestInit:o})];case 1:return s=a.sent(),[3,3];case 2:s=Promise.reject(Error("endpoint is required")),a.label=3;case 3:return[2,s]}})}),function(t){return i.apply(this,arguments)}),getObject:(o=d(function(t){var e,r,n,i,o;return v(this,function(s){switch(s.label){case 0:if(e=t.endpoint,n=void 0===(r=t.queries)?{}:r,i=t.customRequestInit,!e)return[3,2];return[4,j({endpoint:e,queries:n,requestInit:i})];case 1:return o=s.sent(),[3,3];case 2:o=Promise.reject(Error("endpoint is required")),s.label=3;case 3:return[2,o]}})}),function(t){return o.apply(this,arguments)}),getAllContentIds:(s=d(function(t){var e,r,n,i,o,s,a,u,c,l,p,f,d;return v(this,function(b){switch(b.label){case 0:return e=t.endpoint,r=t.alternateField,n=t.draftKey,i=t.filters,o=t.orders,s=t.customRequestInit,[4,j({endpoint:e,queries:m(h({},a={draftKey:n,filters:i,orders:o,limit:100,fields:null!=r?r:"id",depth:0}),{limit:0}),requestInit:s})];case 1:u=b.sent().totalCount,c=[],l=0,p=function(t){return new Promise(function(e){return setTimeout(e,t)})},f=function(t){return t.every(function(t){return"string"==typeof t})},b.label=2;case 2:if(!(c.length<u))return[3,7];return[4,j({endpoint:e,queries:m(h({},a),{offset:l}),requestInit:s})];case 3:if(d=b.sent().contents.map(function(t){return t[null!=r?r:"id"]}),!f(d))throw Error("The value of the field specified by `alternateField` is not a string.");if(c=y(c).concat(y(d)),l+=100,!(c.length<u))return[3,5];return[4,p(1e3)];case 4:b.sent(),b.label=5;case 5:b.label=6;case 6:return[3,2];case 7:return[2,c]}})}),function(t){return s.apply(this,arguments)}),getAllContents:(a=d(function(t){var e,r,n,i,o,s,a,u,c;return v(this,function(l){switch(l.label){case 0:return e=t.endpoint,n=void 0===(r=t.queries)?{}:r,i=t.customRequestInit,[4,j({endpoint:e,queries:m(h({},n),{limit:0}),requestInit:i})];case 1:o=l.sent().totalCount,s=[],a=0,u=function(t){return new Promise(function(e){return setTimeout(e,t)})},l.label=2;case 2:if(!(s.length<o))return[3,7];return[4,j({endpoint:e,queries:m(h({},n),{limit:100,offset:a}),requestInit:i})];case 3:if(c=l.sent().contents,s=s.concat(c),a+=100,!(s.length<o))return[3,5];return[4,u(1e3)];case 4:l.sent(),l.label=5;case 5:l.label=6;case 6:return[3,2];case 7:return[2,s]}})}),function(t){return a.apply(this,arguments)}),create:(u=d(function(t){var e,r,n,i,o,s,a,u;return v(this,function(c){return(e=t.endpoint,r=t.contentId,n=t.content,o=void 0!==(i=t.isDraft)&&i,s=t.customRequestInit,e)?(a=o?{status:"draft"}:{},u=m(h({},s),{method:r?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),[2,j({endpoint:e,contentId:r,queries:a,requestInit:u})]):[2,Promise.reject(Error("endpoint is required"))]})}),function(t){return u.apply(this,arguments)}),update:(c=d(function(t){var e,r,n,i;return v(this,function(o){return(e=t.endpoint,r=t.contentId,n=t.content,i=t.customRequestInit,e)?[2,j({endpoint:e,contentId:r,requestInit:m(h({},i),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})})]:[2,Promise.reject(Error("endpoint is required"))]})}),function(t){return c.apply(this,arguments)}),delete:(p=d(function(t){var e,r,n;return v(this,function(i){switch(i.label){case 0:if(e=t.endpoint,r=t.contentId,n=t.customRequestInit,!e)return[2,Promise.reject(Error("endpoint is required"))];if(!r)return[2,Promise.reject(Error("contentId is required"))];return[4,j({endpoint:e,contentId:r,requestInit:m(h({},n),{method:"DELETE",headers:{},body:void 0})})];case 1:return i.sent(),[2]}})}),function(t){return p.apply(this,arguments)})}}({serviceDomain:process.env.MICROCMS_API_URL??"",apiKey:process.env.MICROCMS_API_KEY??""});async function P(){return(await w.get({endpoint:"blogs"})).contents}async function j(t){return await w.get({endpoint:"blogs",contentId:t})}async function q(t){try{let e=await j(t);return console.log("Fetched blog:",e),e}catch(t){return console.error("Error fetching blog:",t),null}}async function T(){return(await P()).map(t=>({id:t.id,url:`/blog/${t.id}`}))}let I=async({params:t})=>{let e=await q(t.id);return e?n.jsx("div",{className:"p-4",children:n.jsx("section",{children:n.jsx(u,{title:e.title,date:e.updatedAt,url:e.url,thumbnail:e.eyecatch.url,content:e.content})})}):n.jsx("div",{children:"Blog not found"})}},2029:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>i});var n=r(9510);function i({children:t}){return n.jsx("html",{lang:"en",children:n.jsx("body",{children:t})})}r(8903)},8903:()=>{}};var e=require("../../../webpack-runtime.js");e.C(t);var r=t=>e(e.s=t),n=e.X(0,[819,768],()=>r(439));module.exports=n})();