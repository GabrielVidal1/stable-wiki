---
sidebar_position: 4
---

# LoRA

LORA, or Low-Rank Adaptation, is a technique for training a model to a specific subject or style. LORA is advantageous over Dreambooth in that it only requires 6GB of VRAM to run and produces two small files of 6MB, making it less hardware-intensive. However, it is less flexible than Dreambooth and primarily focuses on faces. LORA can be thought of as injecting a part of a model and teaching it new concepts, making it a powerful tool for fine-tuning generated images without altering the underlying model architecture. One of the primary benefits of LORA is that it has a lower hardware requirement to train, although it can be more complex to train than other techniques. It also does not water down the model in the same way that merging models does.

Training LORA requires following a specific set of instructions, which can be found in various tutorials available online. It is important to consider the weight of the LORA during training, with a recommended weight range of 0.5 to 0.7.

LORA is not solely used in Stable Diffusion and is used in other machine learning projects as well. Additionally, DIM-Networks can be used in conjunction with LORA to further enhance training.

https://github.com/cloneofsimo/lora DEMO - Broken?: https://huggingface.co/spaces/ysharma/Low-rank-Adaptation

Training LORA Tutorial: https://www.reddit.com/r/StableDiffusion/comments/111mhsl/lora_training_guide_version_20_i_added_multiple/?utm_source=share&utm_medium=web2x&context=3

