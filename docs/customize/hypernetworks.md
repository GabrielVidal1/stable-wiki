---
sidebar_position: 3
---

# Hypernetworks

Hypernetworks are a machine learning technique that allows for the training of a model without altering its weights. This technique involves the use of a separate small network, known as a hypernetwork, to modify the generated images after they have been created. This approach can be useful for fine-tuning generated images without changing the underlying model architecture.

## How Hypernetworks Work

Hypernetworks are typically applied to various points within a larger neural network. This allows them to steer results in a particular direction, such as imitating the art style of a specific artist, even if the artist is not recognized by the original model. Hypernetworks work by finding key areas of importance in the image, such as hair and eyes, and then patching these areas in secondary latent space.

## Benefits of Hypernetworks

One of the main benefits of hypernetworks is that they can be used to fine-tune generated images without changing the underlying model architecture. This can be useful in situations where changing the model architecture is not feasible or desirable. Additionally, hypernetworks are known for their lower hardware requirements compared to other training methods.

## Limitations of Hypernetworks

Despite their benefits, hypernetworks can be difficult to train effectively. Many users have voiced that hypernetworks work best with styles rather than faces or characters. This means that hypernetworks may not be suitable for all types of image-generation tasks.

Tutorial: https://www.youtube.com/watch?v=1mEggRgRgfg

