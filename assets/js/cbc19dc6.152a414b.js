"use strict";(self.webpackChunkstable_wiki=self.webpackChunkstable_wiki||[]).push([[12],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=o,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[f]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:0},a="Fine tuning",s={unversionedId:"customize/fine-tuning",id:"customize/fine-tuning",title:"Fine tuning",description:"To fine-tune a model, you start with a pre-trained checkpoint or diffuser and then continue training it on your own dataset or with your own prompts. This allows you to customize the model to better fit your specific needs. Checkpoints are saved models that can be loaded to continue training or to generate images. Diffusers, on the other hand, are used for guiding the diffusion process during image generation.",source:"@site/docs/customize/fine-tuning.md",sourceDirName:"customize",slug:"/customize/fine-tuning",permalink:"/docs/customize/fine-tuning",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Customization",permalink:"/docs/category/customization"},next:{title:"Textual inversion",permalink:"/docs/customize/textual-inversion"}},u={},l=[],c={toc:l},f="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fine-tuning"},"Fine tuning"),(0,o.kt)("p",null,"To fine-tune a model, you start with a pre-trained checkpoint or diffuser and then continue training it on your own dataset or with your own prompts. This allows you to customize the model to better fit your specific needs. Checkpoints are saved models that can be loaded to continue training or to generate images. Diffusers, on the other hand, are used for guiding the diffusion process during image generation."),(0,o.kt)("p",null,"Fine-tuning can be done on a variety of pre-trained models, including the base models such as 1.4, 1.5, 2.0, 2.1, as well as custom models. Fine-tuning can be useful for training a model to recognize a specific subject or style, or for improving the performance of a model on a specific task."),(0,o.kt)("p",null,"A diffuser, checkpoint (ckpt), and safetensor are all related to the process of training and using neural network models, but they serve different purposes:"),(0,o.kt)("p",null,"A diffuser is a term used in the Stable Diffusion framework to refer to a specific type of image generation model. Diffusers are trained using a diffusion process that gradually adds noise to an image, allowing the model to generate increasingly complex images over time. Diffusers are a key component of the Stable Diffusion framework and are used to generate high-quality images based on textual prompts."),(0,o.kt)("p",null,"A checkpoint (ckpt) is a file that contains the trained parameters (weights) of a neural network model at a particular point in the training process. Checkpoints are typically used for saving the progress of a training session so that it can be resumed later, or for transferring a pre-trained model to another computer or environment. Checkpoints can also be used to fine-tune a pre-trained model on a new dataset or task."),(0,o.kt)("p",null,"A safetensor is a file format used to store the trained parameters (weights) of a neural network model in a way that is optimized for fast and efficient loading and processing. Safetensors are similar to checkpoints in that they store the model parameters, but they are specifically designed for use with the TensorFlow machine learning library. Safetensors can be used to save and load pre-trained models in TensorFlow, and can also be used for fine-tuning or transfer learning."),(0,o.kt)("p",null,"In summary, diffusers are a type of image generation model used in the Stable Diffusion framework, while checkpoints and safetensors are file formats used to store and load the trained parameters of a neural network model. Checkpoints and safetensors are often used for fine-tuning or transfer learning, while diffusers are used for generating high-quality images based on textual prompts."))}d.isMDXComponent=!0}}]);