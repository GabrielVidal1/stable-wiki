"use strict";(self.webpackChunkstable_wiki=self.webpackChunkstable_wiki||[]).push([[9414],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),f=o,y=h["".concat(l,".").concat(f)]||h[f]||u[f]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:3},a="Hypernetworks",s={unversionedId:"customize/hypernetworks",id:"customize/hypernetworks",title:"Hypernetworks",description:"Hypernetworks are a machine learning technique that allows for the training of a model without altering its weights. This technique involves the use of a separate small network, known as a hypernetwork, to modify the generated images after they have been created. This approach can be useful for fine-tuning generated images without changing the underlying model architecture.",source:"@site/docs/customize/hypernetworks.md",sourceDirName:"customize",slug:"/customize/hypernetworks",permalink:"/docs/customize/hypernetworks",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dreambooth",permalink:"/docs/customize/dreambooth"},next:{title:"LoRA",permalink:"/docs/customize/LoRA"}},l={},c=[{value:"How Hypernetworks Work",id:"how-hypernetworks-work",level:2},{value:"Benefits of Hypernetworks",id:"benefits-of-hypernetworks",level:2},{value:"Limitations of Hypernetworks",id:"limitations-of-hypernetworks",level:2}],p={toc:c},h="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hypernetworks"},"Hypernetworks"),(0,o.kt)("p",null,"Hypernetworks are a machine learning technique that allows for the training of a model without altering its weights. This technique involves the use of a separate small network, known as a hypernetwork, to modify the generated images after they have been created. This approach can be useful for fine-tuning generated images without changing the underlying model architecture."),(0,o.kt)("h2",{id:"how-hypernetworks-work"},"How Hypernetworks Work"),(0,o.kt)("p",null,"Hypernetworks are typically applied to various points within a larger neural network. This allows them to steer results in a particular direction, such as imitating the art style of a specific artist, even if the artist is not recognized by the original model. Hypernetworks work by finding key areas of importance in the image, such as hair and eyes, and then patching these areas in secondary latent space."),(0,o.kt)("h2",{id:"benefits-of-hypernetworks"},"Benefits of Hypernetworks"),(0,o.kt)("p",null,"One of the main benefits of hypernetworks is that they can be used to fine-tune generated images without changing the underlying model architecture. This can be useful in situations where changing the model architecture is not feasible or desirable. Additionally, hypernetworks are known for their lower hardware requirements compared to other training methods."),(0,o.kt)("h2",{id:"limitations-of-hypernetworks"},"Limitations of Hypernetworks"),(0,o.kt)("p",null,"Despite their benefits, hypernetworks can be difficult to train effectively. Many users have voiced that hypernetworks work best with styles rather than faces or characters. This means that hypernetworks may not be suitable for all types of image-generation tasks."),(0,o.kt)("p",null,"Tutorial: ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=1mEggRgRgfg"},"https://www.youtube.com/watch?v=1mEggRgRgfg")))}u.isMDXComponent=!0}}]);