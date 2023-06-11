---
sidebar_position: 10
project_page: https://prompt-plus.github.io/
paper: https://prompt-plus.github.io/files/PromptPlus.pdf
---

# [Prompt plus](https://prompt-plus.github.io/)

## What is prompt plus ?

Prompt-plus is a technique used in text-to-image models that allows for greater control over image synthesis by introducing an extended textual conditioning space. This space consists of multiple textual conditions, derived from per-layer prompts, each corresponding to a layer of the denoising U-net of the diffusion model. It provides greater disentangling and control over image synthesis and allows for personalization of text-to-image models.

## Abstract

> We introduce an Extended Textual Conditioning space in text-to-image models, referred to as P+. This space consists of multiple textual conditions, derived from per-layer prompts, each corresponding to a layer of the denoising U-net of the diffusion model. We show that the extended space provides greater disentangling and control over image synthesis. We further introduce Extended Textual Inversion (XTI), where the images are inverted into P+, and represented by per-layer tokens. We show that XTI is more expressive and precise, and converges faster than the original Textual Inversion (TI) space. The extended inversion method does not involve any noticeable trade-off between reconstruction and editability and induces more regular inversions. We conduct a series of extensive experiments to analyze and understand the properties of the new space, and to showcase the effectiveness of our method for personalizing text-to-image models. Furthermore, we utilize the unique properties of this space to achieve previously unattainable results in object-style mixing using text-to-image models.
