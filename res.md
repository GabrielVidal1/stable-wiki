# Introduction
Diffusion-based generative models (Rombach et al., 2022; Stable Diffusion, 2022; OpenAI, 2022) like Stable Diffusion (Stable Diffusion, 2022) and DALL-E (OpenAI, 2022) have captured global attention for their impressive image creation abilities, from AI developers, designers, to policymakers.

The integration of `SD` in Lensa AI [@lensa2023prisma], a photo editing application that transforms selfies into different styles of artwork like anime and fantasy, led to a surge of 5.8 million downloads in the first week of December 2022 [@ceci2023lensa]. However,

The popularity and progress of generative AI models have sparked ethical and social concerns~([@sung2022lensa], [@brusseau2022acceleration], [@choudhary2022stable], [@dixit2023meet]), such as accusations of artistic style theft by developers of AI image generators~([@choudhary2022stable], [@dixit2023meet]).

Policymakers are also discussing ways to combat malicious data generation and revise copyright policies [@eshoo2022; @engler2023early; @ryanmosley2023an; @2023copyright].

There is an urgent need for individuals from many different fields to understand how generative AI models function and communicate effectively with AI researchers and developers [@dixit2023meet; @hendrix2023generative].

**Key challenges in designing learning tools for SD.**

At the high level, SD iteratively refines *noise* into a high-resolution image's vector representation, guided by a text prompt. Internally, the prompt is tokenized and encoded into vector representations by the *Text Encoder* of the *CLIP* neural network (@radford2021learning). With text representations' guidance,