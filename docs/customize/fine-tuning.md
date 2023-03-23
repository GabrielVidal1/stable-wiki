---
sidebar_position: 0
---

# Fine tuning

To fine-tune a model, you start with a pre-trained checkpoint or diffuser and then continue training it on your own dataset or with your own prompts. This allows you to customize the model to better fit your specific needs. Checkpoints are saved models that can be loaded to continue training or to generate images. Diffusers, on the other hand, are used for guiding the diffusion process during image generation.

Fine-tuning can be done on a variety of pre-trained models, including the base models such as 1.4, 1.5, 2.0, 2.1, as well as custom models. Fine-tuning can be useful for training a model to recognize a specific subject or style, or for improving the performance of a model on a specific task.

A diffuser, checkpoint (ckpt), and safetensor are all related to the process of training and using neural network models, but they serve different purposes:

A diffuser is a term used in the Stable Diffusion framework to refer to a specific type of image generation model. Diffusers are trained using a diffusion process that gradually adds noise to an image, allowing the model to generate increasingly complex images over time. Diffusers are a key component of the Stable Diffusion framework and are used to generate high-quality images based on textual prompts.

A checkpoint (ckpt) is a file that contains the trained parameters (weights) of a neural network model at a particular point in the training process. Checkpoints are typically used for saving the progress of a training session so that it can be resumed later, or for transferring a pre-trained model to another computer or environment. Checkpoints can also be used to fine-tune a pre-trained model on a new dataset or task.

A safetensor is a file format used to store the trained parameters (weights) of a neural network model in a way that is optimized for fast and efficient loading and processing. Safetensors are similar to checkpoints in that they store the model parameters, but they are specifically designed for use with the TensorFlow machine learning library. Safetensors can be used to save and load pre-trained models in TensorFlow, and can also be used for fine-tuning or transfer learning.

In summary, diffusers are a type of image generation model used in the Stable Diffusion framework, while checkpoints and safetensors are file formats used to store and load the trained parameters of a neural network model. Checkpoints and safetensors are often used for fine-tuning or transfer learning, while diffusers are used for generating high-quality images based on textual prompts.

