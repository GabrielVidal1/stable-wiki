---
sidebar_position: 2
---

# Image Variation

## Technology

The classic text-to-image Stable Diffusion model is trained to be conditioned on text inputs.

This version replaces the original text encoder with an image encoder. Instead of generating images based on text input, images are generated from an image. Some noise is added to generate variation after the encoder is put through the algorithm.

This approach produces similar looking images with different details and compositions. Unlike the [image-to-image](/dynamics/base-features/image-to-image.md) algorithm, the source image is first fully encoded. This means the generator does not use a single pixel sourced from the original image(@islamovic_2023).

### Stable unCLIP

[unCLIP](https://openai.com/dall-e-2/) is the approach behind OpenAI's [DALL·E 2](https://openai.com/dall-e-2/), 
trained to invert CLIP image embeddings. 
We finetuned SD 2.1 to accept a CLIP ViT-L/14 image embedding in addition to the text encodings.
This means that the model can be used to produce image variations, but can also be combined with a text-to-image
embedding prior to yield a full text-to-image model at 768x768 resolution.

We provide two models, trained on OpenAI CLIP-L and OpenCLIP-H image embeddings, respectively, 
available from [https://huggingface.co/stabilityai/stable-diffusion-2-1-unclip](https://huggingface.co/stabilityai/stable-diffusion-2-1-unclip/tree/main).
To use them, download from Hugging Face, and put and the weights into the `checkpoints` folder.

# Usage

## Demo

If you would like to try a demo of this model on the web, please visit https://clipdrop.co/stable-diffusion-reimagine

## Code

[How to use with diffusers library](https://github.com/Stability-AI/stablediffusion/blob/main/doc/UNCLIP.MD)
