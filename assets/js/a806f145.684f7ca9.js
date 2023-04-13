"use strict";(self.webpackChunkstable_wiki=self.webpackChunkstable_wiki||[]).push([[5914],{83821:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(87462),n=a(67294),o=a(11570),s=a(83599),r=(a(99869),a(2736));const l=e=>{let{emoji:t,job:a,name:i}=e;return n.createElement(r.Z,{name:i},n.createElement(o.HH,{type:"target",position:o.Ly.Left,className:"w-16 !bg-teal-500"}),n.createElement(o.HH,{type:"source",position:o.Ly.Right,className:"w-16 !bg-teal-500"}))},d=e=>{let{data:{img:t,name:a,handle:i,children:s}}=e;return n.createElement(r.Z,{name:a??"Image"},n.createElement(o.HH,{type:i?.type??"target",position:i?.position??o.Ly.Left,className:"w-16 !bg-teal-500"}),n.createElement("div",{className:"aspect-square mx-4 h-fit"},n.createElement("img",{src:t,className:"rounded"})),s)},c=e=>{let{}=e;return n.createElement(r.Z,{name:"Stable Diffusion"},n.createElement("img",{src:a(13026).Z}),n.createElement(o.HH,{type:"target",position:o.Ly.Left,className:"w-16 !bg-teal-500"}),n.createElement(o.HH,{type:"source",position:o.Ly.Right,className:"w-16 !bg-teal-500"}))},m=e=>{let{data:{img:t}}=e;return n.createElement(r.Z,{name:"VAE",styles:{width:"300px"}},n.createElement(o.HH,{type:"target",position:o.Ly.Left,className:"w-16 !bg-teal-500"}),n.createElement(o.HH,{type:"source",position:o.Ly.Right,className:"w-16 !bg-teal-500"}),n.createElement("div",{className:"pt-1 mx-4 h-fit relative"},n.createElement("img",{src:a(5048).Z}),n.createElement("div",{style:{left:"115px",top:"41px"},className:" absolute w-10 h-10 shadow-lg rounded-sm  bg-blue-500 border-blue-500 border-solid border"},n.createElement("img",{src:t,className:"m-0 mix-blend-color-dodge "}))))},u={textEncoder:(0,n.memo)(l),image:(0,n.memo)(d),stableDiffusion:(0,n.memo)(c),vae:(0,n.memo)(m)},p={animated:!0,style:{stroke:"white",animated:!1}},f={stroke:"white",strokeWidth:2},h=e=>{let{nodeTypes:t,children:a,...r}=e;const{setViewport:l,zoomIn:d,zoomOut:c}=(0,o._K)(),m=(0,o.Sj)(),h=(0,n.useCallback)((()=>{l(r.defaultViewport,{duration:800})}),[l]);return n.createElement("div",{style:{height:"400px"}},n.createElement(o.x$,(0,i.Z)({},r,{style:{backgroundColor:"#D3D2E5"},defaultEdgeOptions:p,nodeTypes:{...u,...t},connectionLineStyle:f}),n.createElement(s.A,null),n.createElement("div",{className:"controls flex gap-2"},n.createElement("button",{onClick:h},"Reset View"),a,n.createElement("button",{onClick:()=>{console.log(m)}},"Get Viewport"))))};const g=function(e){return n.createElement(o.tV,null,n.createElement(h,e))}},2736:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(67294);const n=e=>{let{name:t,children:a,styles:n}=e;return i.createElement("div",{className:"py-2 bg-white justify-center shadow-lg rounded-xl flex flex-col gap-2",style:{width:"200px",...n}},i.createElement("h3",{className:"m-0 px-4 text-center"},t),a)}},43153:(e,t,a)=>{a.d(t,{N:()=>c});var i=a(87462),n=a(67294),o=a(11570);const s=e=>{let{name:t,children:a}=e;return n.createElement("div",{className:"flex flex-row items-center align-baseline relative px-4"},n.createElement("p",{className:"w-1/2 m-0"},t),n.createElement(o.HH,{id:t+"-source",type:"source",position:o.Ly.Right,className:"w-16  !bg-teal-500 absolute"}),n.createElement(o.HH,{id:t+"-target",type:"target",position:o.Ly.Left,className:"w-16 !bg-teal-500"}),a)},r=e=>{let{name:t,options:a,...o}=e;return n.createElement(s,{name:t},n.createElement("select",(0,i.Z)({},o,{className:"w-1/2 p-1 border border-gray-300 rounded-md"}),a.map((e=>n.createElement("option",{key:e,value:e,className:"text-ellipsis"},e)))))};var l=a(2736);const d=e=>{let{data:{name:t,datatype:a,props:o,prompt:s}}=e;return n.createElement(l.Z,{name:"Data"},n.createElement(r,(0,i.Z)({},o,{name:"Select"})),n.createElement("div",{className:"text-sm mx-2 p-2 border-2 border-gray-200 border-solid"},s))},c=(0,n.memo)(d)},51649:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>k,frontMatter:()=>h,metadata:()=>b,toc:()=>E});var i=a(87462),n=a(67294),o=a(3905),s=a(43153),r=a(83821),l=a(61110),d=a(39047),c=a(57464);const m=[{prompt:"A picture of a cat",image:l.Z},{prompt:"A picture of a dog",image:d.Z},{prompt:"fish eyed view of a capybara, photorealistic",image:c.Z}],u={x:-30,y:123,zoom:.8},p=()=>{const[e,t]=n.useState(m[0]),a=(0,n.useMemo)((()=>({prompt:s.N})),[]),i=(0,n.useMemo)((()=>[{id:"imagein",source:"imageIn",target:"sd",color:"red"},{id:"image",source:"sd",target:"img"}]),[]),o=()=>{const a=(m.findIndex((t=>t.prompt===e.prompt))+1)%m.length;t(m[a])},l=(0,n.useMemo)((()=>[{id:"imageIn",type:"image",data:{name:"Input Image",img:e.image,handle:{type:"source",position:"right"},children:n.createElement("button",{onClick:o,className:"mx-6 mb-2 p-2 bg-white rounded-full"},"Next example")},position:{x:100,y:0}},{id:"sd",type:"vae",data:{img:e.image},position:{x:400,y:0}},{id:"img",type:"image",data:{name:"Output Image",img:e.image},position:{x:800,y:0}}]),[e]);return n.createElement(r.Z,{defaultViewport:u,nodeTypes:a,nodes:l,edges:i})},f=(0,n.memo)(p),h={},g="VAE",b={unversionedId:"stable-diffusion/VAE",id:"stable-diffusion/VAE",title:"VAE",description:"The simplest explanation is that it makes an image small",source:"@site/docs/stable-diffusion/VAE.mdx",sourceDirName:"stable-diffusion",slug:"/stable-diffusion/VAE",permalink:"/docs/stable-diffusion/VAE",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stable diffusion",permalink:"/docs/stable-diffusion/"},next:{title:"Diffuser",permalink:"/docs/stable-diffusion/diffuser"}},y={},E=[{value:"VAE (Variational Autoencoder) in Stable Diffusion",id:"vae-variational-autoencoder-in-stable-diffusion",level:2},{value:"Original Autoencoder in Stable Diffusion",id:"original-autoencoder-in-stable-diffusion",level:3},{value:"EMA VAE in Stable Diffusion",id:"ema-vae-in-stable-diffusion",level:3},{value:"MSE VAE in Stable Diffusion",id:"mse-vae-in-stable-diffusion",level:3},{value:"VQGAN",id:"vqgan",level:3}],v={toc:E},w="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(w,(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vae"},"VAE"),(0,o.kt)(f,{mdxType:"VaeExample"}),(0,o.kt)("br",null),(0,o.kt)("admonition",{title:"What is a VAE?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The simplest explanation is that it makes an image small\nthen makes it bigger again.")),(0,o.kt)("p",null,"A Variational Autoencoder (VAE) is an artificial neural network architecture that belongs to the families of probabilistic graphical models and variational Bayesian methods. It is a type of neural network that learns to reproduce its input, and also map data to latent space. VAEs use probability modeling in a neural network system to provide the kinds of equilibrium that autoencoders are typically used to produce. The neural network components are typically referred to as the encoder and decoder for the first and second component respectively. VAE's are part of the neural network model that encodes and decodes the images to and from the smaller latent space, so that computation can be faster. Any models you use, be it v1, v2 or custom, already comes with a default VAE"),(0,o.kt)("h2",{id:"vae-variational-autoencoder-in-stable-diffusion"},"VAE (Variational Autoencoder) in Stable Diffusion"),(0,o.kt)("p",null,"In Stable Diffusion, the VAE (or encoder-decoder) component is responsible for compressing the input images into a smaller, latent space, which helps to reduce the VRAM requirements for the diffusion process. In practice, it is important to use a decoder that can effectively reconstruct the original image from the latent space representation."),(0,o.kt)("p",null,"While the default VAE models included with Stable Diffusion are suitable for many applications, there are other fine-tuned models available that may better meet specific needs. For example, the Hugging Face model repository includes a range of fine-tuned VAE models that may be useful for certain tasks."),(0,o.kt)("p",null,"When selecting a VAE model, it is important to consider factors such as dataset size, resolution, and other hyperparameters that may impact performance. Ultimately, the choice of VAE model will depend on the specific needs and requirements of the project at hand."),(0,o.kt)("h3",{id:"original-autoencoder-in-stable-diffusion"},"Original Autoencoder in Stable Diffusion"),(0,o.kt)("p",null,"The original autoencoder included in Stable Diffusion is the default encoder-decoder used in the model. While it is generally effective at compressing images into a latent space for the diffusion process, it may not perform as well on certain types of images, particularly human faces."),(0,o.kt)("p",null,"Over time, several fine-tuned autoencoder models have been developed and made available to the community. These models often perform better than the original autoencoder for specific tasks and image types."),(0,o.kt)("p",null,"When selecting an autoencoder model for a specific application, it is important to consider factors such as image resolution, dataset size, and other hyperparameters that may impact performance. Ultimately, the choice of the autoencoder model will depend on the specific needs and requirements of the project at hand."),(0,o.kt)("h3",{id:"ema-vae-in-stable-diffusion"},"EMA VAE in Stable Diffusion"),(0,o.kt)("p",null,"The EMA (Exponential Moving Average) VAE is a fine-tuned encoder-decoder included in Stable Diffusion that is specifically designed to perform well on human faces. This model uses an exponential moving average of the encoder weights during training, which helps to stabilize the training process and improve overall performance."),(0,o.kt)("p",null,"Compared to the original autoencoder included with Stable Diffusion, the EMA VAE generally produces better results on images of human faces. However, it is important to consider other factors such as image resolution, dataset size, and other hyperparameters when selecting a VAE model for a specific application."),(0,o.kt)("p",null,"Overall, the EMA VAE is a valuable addition to the range of encoder-decoder models available in Stable Diffusion, particularly for applications that require high-quality image generation of human faces."),(0,o.kt)("h3",{id:"mse-vae-in-stable-diffusion"},"MSE VAE in Stable Diffusion"),(0,o.kt)("p",null,"The MSE (Mean Squared Error) VAE is another fine-tuned encoder-decoder included in Stable Diffusion that is designed to perform well on images of human faces. This model uses MSE as the reconstruction loss during training, which can help to improve the quality of the reconstructed images."),(0,o.kt)("p",null,"Compared to the original autoencoder and other VAE models included with Stable Diffusion, the MSE VAE generally produces better results on images of human faces. However, as with any model selection, it is important to consider other factors such as image resolution, dataset size, and other hyperparameters."),(0,o.kt)("p",null,"Overall, the MSE VAE is a useful option for applications that require high-quality image generation of human faces, particularly when used in combination with other techniques such as diffusion and CLIP-guidance."),(0,o.kt)("h3",{id:"vqgan"},"VQGAN"),(0,o.kt)("p",null,"VQGAN is short for Vector Quantized Generative Adversarial Network and is utilized for high-resolution images; and is a type of neural network architecture that combines convolutional neural networks with Transformers. VQGAN employs the same two-stage structure by learning an intermediary representation before feeding it to a transformer. However, instead of downsampling the image, VQGAN uses a codebook to represent visual parts.\n",(0,o.kt)("a",{parentName:"p",href:"https://compvis.github.io/taming-transformers/"},"https://compvis.github.io/taming-transformers/")))}k.isMDXComponent=!0},61110:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/cat-de78e4ddbbd4617f6d0f100a380a4304.jpeg"},39047:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/dog-0d6c5609f864c4d4926e3e3ab1025ba5.webp"},57464:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/fisheyed-capybara-25bfc0beba70c4516da70b6cb49a7025.jpeg"},13026:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/sd-fd2a87325289a0c2371f70e915eeb3f4.png"},5048:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/vae_bg-21dd8f8783995263120a9e48135f959b.png"}}]);