"use strict";(self.webpackChunkstable_wiki=self.webpackChunkstable_wiki||[]).push([[75],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=r,h=p["".concat(c,".").concat(m)]||p[m]||f[m]||n;return o?a.createElement(h,i(i({ref:t},u),{},{components:o})):a.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2649:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=o(7462),r=(o(7294),o(3905));const n={sidebar_position:2},i="Dreambooth",s={unversionedId:"customize/dreambooth",id:"customize/dreambooth",title:"Dreambooth",description:'Dreambooth is a tool that allows you to fine-tune a Stable Diffusion checkpoint based on a single keyword that represents all of your images, for example, "mycat." This approach does not require you to caption each individual image, which can save time and effort. To use Dreambooth, you need to prepare at least 20 images in a square format of 512x512 or 768x768 and fine-tune the Stable Diffusion checkpoint on them. This process requires a significant amount of VRAM, typically above 15GB, and will produce a file ranging from 2GB to 5GB. Accumulative stacking is also possible in Dreambooth, which involves consecutive training while maintaining the structure of the models. However, this technique is challenging to execute. Overall, Dreambooth can be a useful tool for fine-tuning a Stable Diffusion checkpoint to a specific set of images using a single keyword.',source:"@site/docs/customize/dreambooth.md",sourceDirName:"customize",slug:"/customize/dreambooth",permalink:"/stable-wiki/docs/customize/dreambooth",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Textual inversion",permalink:"/stable-wiki/docs/customize/textual-inversion"},next:{title:"Hypernetworks",permalink:"/stable-wiki/docs/customize/hypernetworks"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dreambooth"},"Dreambooth"),(0,r.kt)("p",null,'Dreambooth is a tool that allows you to fine-tune a Stable Diffusion checkpoint based on a single keyword that represents all of your images, for example, "mycat." This approach does not require you to caption each individual image, which can save time and effort. To use Dreambooth, you need to prepare at least 20 images in a square format of 512x512 or 768x768 and fine-tune the Stable Diffusion checkpoint on them. This process requires a significant amount of VRAM, typically above 15GB, and will produce a file ranging from 2GB to 5GB. Accumulative stacking is also possible in Dreambooth, which involves consecutive training while maintaining the structure of the models. However, this technique is challenging to execute. Overall, Dreambooth can be a useful tool for fine-tuning a Stable Diffusion checkpoint to a specific set of images using a single keyword.'),(0,r.kt)("p",null,"PAPER: ",(0,r.kt)("a",{parentName:"p",href:"https://dreambooth.github.io/"},"https://dreambooth.github.io/")," TUTORIAL: ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7m__xadX0z0"},"https://www.youtube.com/watch?v=7m__xadX0z0")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Bdl-jWR3Ukc"},"https://www.youtube.com/watch?v=Bdl-jWR3Ukc")," COLAB: ",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast-DreamBooth.ipynb"},"https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast-DreamBooth.ipynb")))}f.isMDXComponent=!0}}]);