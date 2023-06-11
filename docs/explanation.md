---
bibliography:
  - reference.bib
title: "Diffusion Explainer: Visual Explanation for Text-to-image Stable
  Diffusion"
---

# Introduction {#sec:100:intro}

Diffusion-based generative models (@rombach2022high)
(@stability2022stable) (@openai2022dalle) like Stable
Diffusion (@stability2022stable) and DALL-E (@openai2022dalle) have
captured global attention for their impressive image creation abilities,
from AI developers, designers, to policymakers. The integration of
Stable Diffusion in Lensa AI (@lensa2023prisma), a photo editing
application that transforms selfies into different styles of artwork
like anime and fantasy, led to a surge of 5.8 million downloads in the
first week of December 2022 (@ceci2023lensa).

However, the popularity and progress of generative AI models have
sparked ethical and social concerns (@sung2022lensa)
(@brusseau2022acceleration) (@choudhary2022stable) (@dixit2023meet),
such as accusations of artistic style theft by developers of AI image
generators (@choudhary2022stable) (@dixit2023meet). Policymakers are
also discussing ways to combat malicious data generation and revise
copyright policies (@eshoo2022) (@engler2023early) (@ryanmosley2023an)
(@2023copyright). There is an urgent need for individuals from many
different fields to understand how generative AI models function and
communicate effectively with AI researchers and
developers (@dixit2023meet) (@hendrix2023generative).

**Key challenges in designing learning tools for Stable Diffusion .** At
the high level, Stable Diffusion iteratively refines _noise_ into a
high-resolution image's vector representation, guided by a text prompt.
Internally, the prompt is tokenized and encoded into vector
representations by the _Text Encoder_ of the _CLIP_ neural
network (@radford2021learning). With text representations' guidance,
Stable Diffusion improves the image quality and adherence to the prompt
by incrementally refining the image's vector representation using the
_UNet_ neural network (@ronneberger2015u) and the _Scheduler_
algorithm (@nichol2021improved) to predict and remove noise. The final
image representation is upscaled to a high-resolution
image (@kingma2013auto). The crux of learning about Stable Diffusion ,
therefore, originates from the complex interplay between the multiple
neural network subcomponents, their intricate operations, and the
iterative nature of image representation refinements. Such complex
interactions are challenging even for experts to
comprehend (@platen2022testing). While some articles (@alammar2022the)
and video lessons (@howard2023from) (@alammar2023ai) explain Stable
Diffusion , they presume knowledge of machine learning and focus on
model training and mathematical details.

**Contributions.** In this work, we contribute:

- **Diffusion Explainer, the first interactive visualization tool
  designed for non-experts** to learn how Stable Diffusion transforms
  a text prompt into a high-resolution image
  ([\[fig:teaser\]](#fig:teaser){reference-type="autoref"
  reference="fig:teaser"}), overcoming key design challenges in
  developing interactive learning tools for Stable Diffusion
  ([\[sec:300:designgoals\]](#sec:300:designgoals){reference-type="autoref"
  reference="sec:300:designgoals"}). Diffusion Explainer tightly
  integrates a visual overview of Stable Diffusion 's complex
  structure with detailed explanations of their underlying operations
  ([\[fig:text_expand\]](#fig:text_expand){reference-type="autoref"
  reference="fig:text_expand"},
  [\[fig:image_expand\]](#fig:image_expand){reference-type="autoref"
  reference="fig:image_expand"}) enabling users to fluidly transition
  between multiple abstraction levels through animations and
  interactive elements
  ([\[subsec:420:architecture\]](#subsec:420:architecture){reference-type="autoref"
  reference="subsec:420:architecture"}).

- **Novel interactive visualization design** that enables users to
  discover the impacts of prompts on image generation. It compares how
  image representations evolve differently over refinement timesteps
  when guided by two related text prompts
  ([\[fig:comparison\]](#fig:comparison){reference-type="autoref"
  reference="fig:comparison"}), revealing how the keyword differences
  in prompts affect evolution trajectories that start from the same
  initial random noise. Since prompt engineering for Stable Diffusion
  has far been highly heuristic (@liu2022design)
  (@oppenlaender2022taxonomy), Diffusion Explainer provides a new way
  for people to gain a better understanding of the impacts of text
  prompts on the complex image generation process
  ([\[subsec:430:comparison\]](#subsec:430:comparison){reference-type="autoref"
  reference="subsec:430:comparison"}).

- **An open-sourced, web-based implementation** that broadens the
  public's education access to modern generative AI techniques without
  requiring any installation, advanced computational resources, or
  coding skills. We develop Diffusion Explainer as a web-based tool
  that runs locally in users' browsers, allowing large number of
  concurrent users to easily learn about Stable Diffusion directly on
  their laptops and tablets
  ([\[subsec:410:overview\]](#subsec:410:overview){reference-type="autoref"
  reference="subsec:410:overview"}). Diffusion Explainer is
  open-sourced[^1] and available at the following public demo link:
  <https://poloclub.github.io/diffusion-explainer/>. A video demo is
  available at <https://youtu.be/Zg4gxdIWDds>.

# Related Works {#sec:200:related}

**Interactive Visualizations for Explaining Deep Learning.** Several
web-based visualization tools, such as CNN
Explainer (@wangCNNExplainerLearning2020), GAN Lab (@kahng2018ganlab),
and Adversarial-Playground (@norton2017adversarial), have been developed
to help people understand deep learning. Google's Machine Learning Crash
Course (@google2022machine) employs Tensorflow
Playground (@smilkov2017direct), which provides interactive
visualizations for training simple neural networks. Moreover, various
deep learning concepts are explained by many machine learning
researchers and practitioners in their web articles (@goh2017momentum)
(@agnihotri2020exploring) (@sanchez2021gentle) and blog
posts (@olah2023colah) through the use of interactive visualizations.
Inspired by the success of these previous works, we present Diffusion
Explainer, an interactive visualization tool that explains text-to-image
Stable Diffusion.

**Explanations for Stable Diffusion.** Online articles that explain
Stable Diffusion  (@bogaard2022an) (@alammar2022the) (@hosni2022getting)
(@andrew2023how) (@andrew2023absolute) often assume that the audience
has knowledge about machine learning and use jargon and mathematical
equations that can be daunting for non-experts (@alammar2022the)
(@hosni2022getting) (@andrew2023how). Tutorials in the form of Google
Colab notebooks (@patil2022stable) (@whitaker2022grokking) primarily
focus on code implementation, while blog posts for
beginners (@bogaard2022an) (@andrew2023absolute) mostly address
deployment and prompt engineering. To help users quickly understand how
Stable Diffusion generates an image, Diffusion Explainer provides
easy-to-understand explanations of its complex architecture and
operations, integrating multiple abstraction levels through fluid
animations and interactive elements.

# Design Goals {#sec:300:designgoals}

By reviewing literature and online resources, we have identified four
design goals ([\[goal:summary\]](#goal:summary){reference-type="ref"
reference="goal:summary"}-[\[goal:webbased\]](#goal:webbased){reference-type="ref"
reference="goal:webbased"}) aimed at addressing the challenges people
may face while learning about Stable Diffusion :

1.  []{#goal:summary label="goal:summary"} **Visual summary of Stable
    Diffusion .** Stable Diffusion is comprised of multiple model
    components, each with a complex structure (@rombach2022high)
    (@platen2022testing). Additionally, its incremental image
    generation, which refines noise into the vector representation of a
    high-resolution image, is a cyclic process that is uncommon in
    neural networks. Diffusion Explainer aims to provide an overview of
    the model architecture and data flow to help users quickly
    understand its overall structure
    ([\[subsec:420:architecture\]](#subsec:420:architecture){reference-type="autoref"
    reference="subsec:420:architecture"}).

2.  []{#goal:interactive label="goal:interactive"} **Interactive
    interface tightly integrating different levels of abstraction.** The
    image generation process of Stable Diffusion 's image generation
    involves a complex interplay between multiple neural network
    subcomponents (@radford2021learning) (@rombach2022high)
    ([\[fig:text_expand\]](#fig:text_expand){reference-type="autoref"
    reference="fig:text_expand"},
    [\[fig:image_expand\]](#fig:image_expand){reference-type="autoref"
    reference="fig:image_expand"}), their intricate operations, and
    iterative image representation refinements. Such complex
    interactions are challenging even for experts to
    comprehend (@platen2022testing). To effectively explain these
    low-level operations and help users conceptually connect them with a
    high-level overview, we design Diffusion Explainer to bridge
    multiple abstraction levels through fluid animations and interactive
    elements (@wangCNNExplainerLearning2020) (@kahng2018ganlab)
    ([\[subsubsec:421:text\]](#subsubsec:421:text){reference-type="autoref"
    reference="subsubsec:421:text"},
    [\[subsubsec:422:image\]](#subsubsec:422:image){reference-type="autoref"
    reference="subsubsec:422:image"}).

3.  []{#goal:refine label="goal:refine"} **Visualizing how keywords in
    text prompts affect image generation.** Stable Diffusion
    incrementally refines noise into the vector representation of a
    high-resolution image, while being guided by a text prompt. However,
    the refinement process, which involves multiple iterations of
    intricate vector computations, can be challenging to
    understand (@rombach2022high). Due to the lack of understanding
    about how text prompts impact the refinements, writing prompts has
    been highly heuristic (@liu2022design) (@oppenlaender2022taxonomy).
    We aim to visualize the refinement process for two text prompts that
    differ only in a few keywords to enable users to compare how image
    representations evolve differently when guided by each prompt.
    ([\[subsec:430:comparison\]](#subsec:430:comparison){reference-type="autoref"
    reference="subsec:430:comparison"}).

4.  []{#goal:webbased label="goal:webbased"} **Broadening access via
    web-based deployment.** As more and more individuals from different
    fields are now interested in understanding how generative AI models
    work (@dixit2023meet) (@engler2023early) (@ryanmosley2023an)
    (@2023copyright), we have developed Diffusion Explainer as a
    web-based tool that runs locally in users' web browsers without
    requiring any installation, specialized hardware, or coding
    skills (@rombach2022high). This allows users to learn about this
    latest AI technology on their laptops or tablets
    ([\[subsec:410:overview\]](#subsec:410:overview){reference-type="autoref"
    reference="subsec:410:overview"}).

# System Design and Implementation {#sec:400:design}

## Overview {#subsec:410:overview}

Diffusion Explainer is an interactive visualization tool that explains
how Stable Diffusion generates a high-resolution image from a text
prompt, selected from the _Prompt Selector_
([\[fig:teaser\]](#fig:teaser){reference-type="autoref"
reference="fig:teaser"}A). It incorporates an animation of random noise
gradually refined and a _Timestep Controller_
([\[fig:teaser\]](#fig:teaser){reference-type="autoref"
reference="fig:teaser"}D) that enables users to visit each refinement
timestep. Diffusion Explainer consists of two views: _Architecture View_
([\[subsec:420:architecture\]](#subsec:420:architecture){reference-type="autoref"
reference="subsec:420:architecture"}) and _Refinement Comparison View_
([\[subsec:430:comparison\]](#subsec:430:comparison){reference-type="autoref"
reference="subsec:430:comparison"}). The Architecture View provides an
overview of Stable Diffusion 's architecture
([\[goal:summary\]](#goal:summary){reference-type="ref"
reference="goal:summary"}), which can be expanded into details via user
interactions
([\[goal:interactive\]](#goal:interactive){reference-type="ref"
reference="goal:interactive"};
[\[fig:text_expand\]](#fig:text_expand){reference-type="autoref"
reference="fig:text*expand"},
[\[fig:image_expand\]](#fig:image_expand){reference-type="autoref"
reference="fig:image_expand"}). The Refinement Comparison View
visualizes the incremental image generation process for two related text
prompts to allow users to discover how prompts affect image generation
([\[goal:refine\]](#goal:refine){reference-type="ref"
reference="goal:refine"}). Diffusion Explainer is implemented using a
standard web technology stack (HTML, CSS, JavaScript) and the
D3.js (@bostock2011d3) visualization library
([\[goal:webbased\]](#goal:webbased){reference-type="ref"
reference="goal:webbased"}). Diffusion Explainer has 13 text prompts
based on the prompt template from *A Traveler's Guide to the Latent
Space* (@smith2022traveler). Most prompts include popular keywords
(e.g., \_detailed*, _trending on artstation_) identified from literature
and articles (@oppenlaender2022taxonomy) (@andrew2023stable)
(@pavlichenko2022best).

## Architecture View {#subsec:420:architecture}

The Architecture View provides an overview
([\[goal:summary\]](#goal:summary){reference-type="ref"
reference="goal:summary"};
[\[fig:teaser\]](#fig:teaser){reference-type="autoref"
reference="fig:teaser"}) of how the _Text Representation Generator_
([\[fig:teaser\]](#fig:teaser){reference-type="autoref"
reference="fig:teaser"}B) converts a text prompt into vector
representations that guides the _Image Representation Refiner_
([\[fig:teaser\]](#fig:teaser){reference-type="autoref"
reference="fig:teaser"}C) to incrementally refine noise into the vector
representation of a high-resolution image. Clicking on the generators
provides more details about their underlying operations
([\[goal:interactive\]](#goal:interactive){reference-type="ref"
reference="goal:interactive"};
[\[fig:text_expand\]](#fig:text_expand){reference-type="autoref"
reference="fig:text_expand"},
[\[fig:image_expand\]](#fig:image_expand){reference-type="autoref"
reference="fig:image_expand"}).

### Text Representation Generator {#subsubsec:421:text}

The _Text Representation Generator_
([\[fig:teaser\]](#fig:teaser){reference-type="autoref"
reference="fig:teaser"}B) converts text prompts into vector
representations. Clicking on it expands to the _Text Operation View_
([\[goal:interactive\]](#goal:interactive){reference-type="ref"
reference="goal:interactive"};
[\[fig:text_expand\]](#fig:text_expand){reference-type="autoref"
reference="fig:text*expand"}A), that explains how the Tokenizer splits
the prompt into tokens and how the Text Encoder encode the tokens into
vector representations. Clicking on the Text Encoder displays the
\_Text-image Linkage Explanation*
([\[goal:interactive\]](#goal:interactive){reference-type="ref"
reference="goal:interactive"};
[\[fig:text_expand\]](#fig:text_expand){reference-type="autoref"
reference="fig:text_expand"}B), which visually explains how Stable
Diffusion connects text and image by utilizing the
CLIP (@radford2021learning) text encoder to generate text
representations with image-related information.

### Image Representation Refiner {#subsubsec:422:image}

The _Image Representation Refiner_
([\[fig:teaser\]](#fig:teaser){reference-type="autoref"
reference="fig:teaser"}C) incrementally refines random noise into the
vector representation of a high-resolution image that adheres to the
input text prompt. Diffusion Explainer visualizes the image
representation of each refinement step in two ways: (1) decoding it as a
small image using linear operations (@turner2022decoding) and (2)
upscaling it to the Stable Diffusion 's output resolution
([\[fig:teaser\]](#fig:teaser){reference-type="autoref"
reference="fig:teaser"}E). Users expands the Image Representation
Refiner to access the _Image Operation View_
([\[goal:interactive\]](#goal:interactive){reference-type="ref"
reference="goal:interactive"};
[\[fig:image_expand\]](#fig:image_expand){reference-type="autoref"
reference="fig:image_expand"}A), which explains how the UNet neural
network (@ronneberger2015u) predicts the noise to be removed from the
image representation to improve its adherence to the prompt. The
predicted noise is weakened before removal.

The guidance scale hyperparameter, which controls the image's adherence
strength to the text prompt, is described at the bottom, and further
explained in the _Interactive Guidance Explanation_
([\[goal:interactive\]](#goal:interactive){reference-type="ref"
reference="goal:interactive"};
[\[fig:image_expand\]](#fig:image_expand){reference-type="autoref"
reference="fig:image_expand"}B) through a slider that allows users to
experiment with different values, to better understand how higher values
lead to stronger adherence of the generated image to the text prompt.

## Refinement Comparison View {#subsec:430:comparison}

::: figure\*
![image](figures/comparison.pdf){width="0.9\\linewidth"}
:::

The _Refinement Comparison View_ demonstrates how Stable Diffusion
generates different images based on two related text prompts, helping
users understand the impact of prompts on image generation
([\[goal:refine\]](#goal:refine){reference-type="ref"
reference="goal:refine"};
[\[fig:comparison\]](#fig:comparison){reference-type="autoref"
reference="fig:comparison"}). Each prompt in Diffusion Explainer is
paired with a prompt that differs only in a few keywords (e.g., "a cute
and adorable bunny\...\" vs. "a cute and adorable bunny\... _pixar
character_\"). We use UMAP (@mcinnes2018umap) to visualize the
incremental refinement of image representations for each paired prompts,
revealing how the keywords in prompts affect the evolution of image
representations from the same initial random noise
([\[goal:refine\]](#goal:refine){reference-type="ref"
reference="goal:refine"}).

# Usage Scenarios {#sec:500:scenario}

We present two usage scenarios for Diffusion Explainer, demonstrating
how it may enhance user learning of Stable Diffusion . The scenarios
highlight: (1) how practitioners can discover the impact of text prompts
on image generation
([\[subsec:520:scenario2\]](#subsec:520:scenario2){reference-type="autoref"
reference="subsec:520:scenario2"}); and (2) how non-experts can discern
challenges in attributing AI-generated images
([\[subsec:510:scenario1\]](#subsec:510:scenario1){reference-type="autoref"
reference="subsec:510:scenario1"}).

## Discovering Prompts' Impact on Image Generation {#subsec:520:scenario2}

Jenny is a graphic designer at a media company who wants to use
generative AI models to create images in specific artistic styles, but
she is uncertain how text prompts affect image generation. In
particular, she wants to experiment with different styles while
maintaining object composition consistency. Jenny activates the
_Refinement Comparison View_
([\[fig:comparison\]](#fig:comparison){reference-type="autoref"
reference="fig:comparison"}A), in Diffusion Explainer to compare two
related text prompts and images generated from each. Both prompts begin
with the phrase "a cute and adorable bunny", but only one includes "_in
the style of cute pixar character_". The bunnies in both images have the
same pose, but the _pixar_ version is more cartoony and has more vibrant
colors and textures, typical of characters in Pixar animations. Curious
about whether the pose preservation is a coincidence, Jenny adds the
same _pixar_ phrase to prompts for an elephant and a squirrel
([\[fig:comparison\]](#fig:comparison){reference-type="autoref"
reference="fig:comparison"}B) and notices that their poses are also
preserved. Intrigued by the effect of the _pixar_ phrase on image
generation, she examines the trajectories of the image representations
and discovers that adding the _pixar_ phrase leads to only slight
divergence.

::: wrapfigure
R0.26 ![image](./figures/scenario2.pdf){width="25%"}
:::

Jenny wonders if other phrases may also similarly modify only styles
while maintaining overall image compositions. To explore this, she asks
her colleagues about commonly used "modifiers" keywords. Some suggest
that repeating words such as "very very\..." could produce better images
by more reliably activating neural network regions associated with
subject terms." (@oppenlaender2022taxonomy) (@akshita2023what)
Intrigued, Jenny compares the prompts "_a very very very very very
beautiful cityscape_" (@oppenlaender2022taxonomy) and "_a beautiful
cityscape_." Surprisingly, the two prompts generate significantly
different images. To understand why, Jenny analyzes the image
representation trajectories and observes a detachment occurring at step
24, resulting in their final representations being much farther apart.
From this, she concludes that the pose preservation of the _pixar_
phrase is a unique characteristic attributable to its slight divergence
and decides to identify more such keywords.

## Discerning Challenges in Attributing AI Generations {#subsec:510:scenario1}

Troy is a government policymaker responsible for creating policies
related to AI-generated images in the entertainment and media
industries. Recently, he has received numerous concerns from artists
that their artwork has been exploited by AI models to create commercial
products without their consent (@amelion2023twitter). Troy is keen to
help these artists be compensated for their contributions. In his
research, he has learned about emergent tools that aim to help attribute
AI-generated images to human artists (@huber2023stable)
(@anton2023twitter), which could potentially address artists' concerns.
However, before proposing any policies, he needs to understand how and
if such attribution may work.

Troy starts by launching Diffusion Explainer on his laptop, arriving at
the Overview that describes how Stable Diffusion transforms a text
prompt into a high-resolution image
([\[fig:teaser\]](#fig:teaser){reference-type="autoref"
reference="fig:teaser"}). He realizes that the process of generating an
image is iterative and involves refining noise into a vector
representation of a high-resolution image that aligns with the text
prompt. Curious about how the text prompt is processed, he clicks on the
_Text Representation Generator_ to expand it to the _Text Operation
View_ ([\[fig:text_expand\]](#fig:text_expand){reference-type="autoref"
reference="fig:text*expand"}A). Here, he discovers that the prompt is
split into tokens and converted into vector representations. However, he
is still unsure about how text guides image generation, so he displays
the \_Text-image Linkage Explanation*
([\[fig:text_expand\]](#fig:text_expand){reference-type="autoref"
reference="fig:text_expand"}B). Here, he learns that the text
representations with image-related information act as a bridge between
text and images.

Troy proceeds to explore the incremental refinement process of image
representation by examining the _Image Operation View_
([\[fig:image_expand\]](#fig:image_expand){reference-type="autoref"
reference="fig:image*expand"}A). He discovers that each refinement step
involves noise prediction and removal; UNet, a neural network, predicts
the noise in the image representation of the step. He also learns about
the \_guidance scale*, a hyperparameter that adjusts how well the
generated image adheres to the text prompt. Intrigued by the guidance
scale, Troy accesses the _Interactive Guidance Explanation_
([\[fig:image_expand\]](#fig:image_expand){reference-type="autoref"
reference="fig:image_expand"}B). After experimenting with different
guidance scale values, he observes that a guidance scale value of 7
generates a realistic image that closely follows the text prompt. In
contrast, values of 1 and 20 result in images that are either difficult
to interpret or overly exaggerated.

Troy has now gained a good understanding of the image generation process
of Stable Diffusion , including the factors involved such as text
prompts, guidance scale, and the link between text and image. Based on
this understanding, he realizes that relying solely on image analysis,
without considering text prompts, will be insufficient in determining
how an artist's works have been used to create AI-generated images. Troy
is of the opinion that more research is necessary to reliably identify
attributions of AI-generated images.

# Conclusion {#sec:600:conclusion}

We introduce Diffusion Explainer, the first interactive web-based
visualization tool that explains how Stable Diffusion generates
high-resolution images from text prompts. Our tool tightly integrates a
visual overview of Stable Diffusion 's complex components with detailed
explanations of their underlying operations, enabling users to fluidly
transition between multiple levels of abstraction through animations and
interactive elements. Its novel interactive visualization design enables
users to discover the impacts of prompts on image generation. Diffusion
Explainer runs in modern web browsers and is open-sourced. We hope our
work will inspire further research and development of visualization
tools that helps enhance people's understanding of generative AI
technologies so they may be used responsibly.

[^1]: <https://github.com/poloclub/diffusion-explainer>
