"use strict";(self.webpackChunkstable_wiki=self.webpackChunkstable_wiki||[]).push([[9540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),p=a,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},27282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="Text encoder",s={unversionedId:"stable-diffusion/text-encoder",id:"stable-diffusion/text-encoder",title:"Text encoder",description:"Stable Diffusion is a latent diffusion model conditioned on the (non-pooled) text embeddings of a CLIP ViT-L/14 text encoder1. The text encoder is used to turn your prompt into a latent vector",source:"@site/docs/stable-diffusion/text-encoder.mdx",sourceDirName:"stable-diffusion",slug:"/stable-diffusion/text-encoder",permalink:"/docs/stable-diffusion/text-encoder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Diffuser",permalink:"/docs/stable-diffusion/diffuser"},next:{title:"Customization",permalink:"/docs/category/customization"}},l={},c=[{value:"CLIP",id:"clip",level:2},{value:"Transformers",id:"transformers",level:2}],u={toc:c},f="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text-encoder"},"Text encoder"),(0,a.kt)("p",null,"Stable Diffusion is a latent diffusion model conditioned on the (non-pooled) text embeddings of a CLIP ViT-L/14 text encoder1. The text encoder is used to turn your prompt into a latent vector\nIn the context of machine learning, a latent vector is a vector that represents a learned feature or representation of a data point that is not directly observable. For example, in the case of Stable Diffusion, the text encoder is used to turn your prompt into a latent vector that represents a learned feature or representation of the prompt that is not directly observable."),(0,a.kt)("h2",{id:"clip"},"CLIP"),(0,a.kt)("p",null,"CLIP (Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing for the task, similar to the zero-shot capabilities of GPT-2 and 31. CLIP is much more efficient and achieves the same accuracy roughly 10x faster2. Because they learn a wide range of visual concepts directly from natural language, CLIP models are significantly more flexible and general than existing ImageNet models\ncf ",(0,a.kt)("a",{parentName:"p",href:"https://openai.com/research/clip"},"https://openai.com/research/clip")),(0,a.kt)("h2",{id:"transformers"},"Transformers"),(0,a.kt)("p",null,"A transformer is a deep learning model that adopts the mechanism of self-attention, differentially weighting the significance of each part of the input data. It is used primarily in the fields of natural language processing (NLP) and computer vision (CV)\nTransformers are neural networks that learn context and understanding through sequential data analysis. The Transformer models use a modern and evolving mathematical techniques set, generally known as attention or self-attention. This set helps identify how distant data elements influence and depend on one another"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://research.runwayml.com/"},"https://research.runwayml.com/")))}d.isMDXComponent=!0}}]);