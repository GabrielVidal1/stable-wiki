
# Diffuser

The diffuser is a neural network with a U-Net architecture

U-Net is used in Stable Diffusion to reduce the noise (denoises) in the image using the text prompt as a conditional. The U-Net model is used in the diffusion process to generate images. The network is based on the fully convolutional network and its architecture was modified and extended to work with fewer training images and to yield more precise segmentations.
In the case of image segmentation, the goal is to classify each pixel of an image into a specific class. For example, in medical imaging, the goal is to classify each pixel of an image into a specific organ or tissue type. U-Net is used to perform image segmentation by taking an image as input and outputting a segmentation map that classifies each pixel of the input image into a specific class
U-Net is designed to work with fewer training images by using data augmentation to use the available annotated samples more efficiently
The architecture of U-Net is also designed to yield more precise segmentations by using a contracting path to capture context and a symmetric expanding path that enables precise localization

## Diffusion Models

a simple explanation is that it uses noising and denoising to learn how to reconstruct images.
Diffusion models are a class of generative models used in machine learning to learn the latent structure of a dataset by modeling the way in which data points diffuse through the latent space1. They are Markov chains trained using variational inference1. The goal of diffusion models is to generate data similar to the data on which they are trained by destroying training data through the successive addition of Gaussian noise, and then learning to recover the data by reversing this noising process2.
Diffusion models have emerged as a powerful new family of deep generative models with record-breaking performance in many applications, including image synthesis, video generation, and molecule design

## Latent Diffusion Models

Latent diffusion models are machine learning models designed to learn the underlying structure of a dataset by mapping it to a lower-dimensional latent space. This latent space represents the data in which the relationships between different data points are more easily understood and analyzed1. Latent diffusion models use an auto-encoder to map between image space and latent space. The diffusion model works on the latent space, which makes it a lot easier to train2. Our latent diffusion models (LDMs) achieve a new state of the art for image inpainting and highly competitive performance on various tasks, including unconditional image generation, semantic scene synthesis, and super-resolution, while significantly reducing computational requirements compared to pixel-based DMs
