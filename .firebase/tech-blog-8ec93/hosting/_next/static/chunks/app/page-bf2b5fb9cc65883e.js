(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931,617],{3094:function(e,r,t){Promise.resolve().then(t.bind(t,9560))},3606:function(e,r,t){"use strict";var l=t(7437);t(2265);var s=t(2710),n=t(1531);r.default=e=>{let{title:r,date:t,url:a,thumbnail:c,content:d}=e;return console.log("ArticleCard URL:",a),console.log("content",d),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"p-4 border rounded-lg shadow-lg","data-testid":"article-card",children:[(0,l.jsx)("a",{href:a,rel:"noopener noreferrer",children:(0,l.jsx)("img",{src:c,alt:r,className:"w-full h-40 object-cover rounded-t-lg"})}),(0,l.jsxs)("div",{className:"p-4",children:[(0,l.jsx)("h2",{className:"text-xl font-bold",children:r}),(0,l.jsx)("div",{className:"text-gray-600",children:(0,l.jsx)(s.U,{rehypePlugins:[n.Z],children:d})}),(0,l.jsx)("p",{className:"text-gray-600",children:t})]})]})})}},9560:function(e,r,t){"use strict";var l=t(7437),s=t(2265),n=t(3606);r.default=e=>{let{apiEndpoint:r}=e,[t,a]=s.useState([]);return(0,s.useEffect)(()=>{fetch(r).then(e=>e.json()).then(e=>{console.log("Fetched articles:",e),a(e)}).catch(e=>console.error("Error fetching articles:",e))},[]),(0,l.jsx)("div",{"data-testid":"article-card",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map((e,r)=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.default,{title:e.title,date:e.date,url:e.url,thumbnail:e.thumbnail,content:e.content},r),(0,l.jsx)("a",{"data-testid":"read-more",href:e.url,className:"text-blue-500 hover:underline",rel:"noopener noreferrer",children:"Read more"})]}))})}}},function(e){e.O(0,[484,971,23,744],function(){return e(e.s=3094)}),_N_E=e.O()}]);