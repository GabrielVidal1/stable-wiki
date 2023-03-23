
# Text encoder

Stable Diffusion is a latent diffusion model conditioned on the (non-pooled) text embeddings of a CLIP ViT-L/14 text encoder1. The text encoder is used to turn your prompt into a latent vector
In the context of machine learning, a latent vector is a vector that represents a learned feature or representation of a data point that is not directly observable. For example, in the case of Stable Diffusion, the text encoder is used to turn your prompt into a latent vector that represents a learned feature or representation of the prompt that is not directly observable.

## CLIP

CLIP (Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing for the task, similar to the zero-shot capabilities of GPT-2 and 31. CLIP is much more efficient and achieves the same accuracy roughly 10x faster2. Because they learn a wide range of visual concepts directly from natural language, CLIP models are significantly more flexible and general than existing ImageNet models
cf https://openai.com/research/clip

## Transformers

A transformer is a deep learning model that adopts the mechanism of self-attention, differentially weighting the significance of each part of the input data. It is used primarily in the fields of natural language processing (NLP) and computer vision (CV)
Transformers are neural networks that learn context and understanding through sequential data analysis. The Transformer models use a modern and evolving mathematical techniques set, generally known as attention or self-attention. This set helps identify how distant data elements influence and depend on one another


https://research.runwayml.com/
