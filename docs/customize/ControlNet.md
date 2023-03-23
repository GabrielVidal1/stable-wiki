---
sidebar_position: 5
---

# ControlNet

ControlNet is a neural network structure to control diffusion models by adding extra conditions.

It copys the weights of neural network blocks into a "locked" copy and a "trainable" copy.

The "trainable" one learns your condition. The "locked" one preserves your model.

Thanks to this, training with small dataset of image pairs will not destroy the production-ready diffusion models.

The "zero convolution" is 1×1 convolution with both weight and bias initialized as zeros.

Before training, all zero convolutions output zeros, and ControlNet will not cause any distortion.

No layer is trained from scratch. You are still fine-tuning. Your original model is safe.

This allows training on small-scale or even personal devices.

This is also friendly to merge/replacement/offsetting of models/weights/blocks/layers.



Repo: https://github.com/lllyasviel/ControlNet

## technical doc

https://huggingface.co/docs/diffusers/main/en/api/pipelines/stable_diffusion/controlnet

## Demo

https://huggingface.co/spaces/RamAnanth1/ControlNet