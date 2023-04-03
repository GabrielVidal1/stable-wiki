"use strict";(self.webpackChunkstable_wiki=self.webpackChunkstable_wiki||[]).push([[8075],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=a,h=p["".concat(c,".").concat(m)]||p[m]||f[m]||n;return o?r.createElement(h,i(i({ref:t},u),{},{components:o})):r.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},32649:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=o(87462),a=(o(67294),o(3905));const n={sidebar_position:2},i="Dreambooth",s={unversionedId:"customize/dreambooth",id:"customize/dreambooth",title:"Dreambooth",description:'Dreambooth is a tool that allows you to fine-tune a Stable Diffusion checkpoint based on a single keyword that represents all of your images, for example, "mycat." This approach does not require you to caption each individual image, which can save time and effort. To use Dreambooth, you need to prepare at least 20 images in a square format of 512x512 or 768x768 and fine-tune the Stable Diffusion checkpoint on them. This process requires a significant amount of VRAM, typically above 15GB, and will produce a file ranging from 2GB to 5GB. Accumulative stacking is also possible in Dreambooth, which involves consecutive training while maintaining the structure of the models. However, this technique is challenging to execute. Overall, Dreambooth can be a useful tool for fine-tuning a Stable Diffusion checkpoint to a specific set of images using a single keyword.',source:"@site/docs/customize/dreambooth.md",sourceDirName:"customize",slug:"/customize/dreambooth",permalink:"/docs/customize/dreambooth",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Textual inversion",permalink:"/docs/customize/textual-inversion"},next:{title:"Hypernetworks",permalink:"/docs/customize/hypernetworks"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dreambooth"},"Dreambooth"),(0,a.kt)("p",null,'Dreambooth is a tool that allows you to fine-tune a Stable Diffusion checkpoint based on a single keyword that represents all of your images, for example, "mycat." This approach does not require you to caption each individual image, which can save time and effort. To use Dreambooth, you need to prepare at least 20 images in a square format of 512x512 or 768x768 and fine-tune the Stable Diffusion checkpoint on them. This process requires a significant amount of VRAM, typically above 15GB, and will produce a file ranging from 2GB to 5GB. Accumulative stacking is also possible in Dreambooth, which involves consecutive training while maintaining the structure of the models. However, this technique is challenging to execute. Overall, Dreambooth can be a useful tool for fine-tuning a Stable Diffusion checkpoint to a specific set of images using a single keyword.'),(0,a.kt)("p",null,"PAPER: ",(0,a.kt)("a",{parentName:"p",href:"https://dreambooth.github.io/"},"https://dreambooth.github.io/")," TUTORIAL: ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7m__xadX0z0"},"https://www.youtube.com/watch?v=7m__xadX0z0")," or ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Bdl-jWR3Ukc"},"https://www.youtube.com/watch?v=Bdl-jWR3Ukc")," COLAB: ",(0,a.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast-DreamBooth.ipynb"},"https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast-DreamBooth.ipynb")))}f.isMDXComponent=!0}}]);