---
sidebar_position: 1
---

# Textual inversion

Textual Inversion
Textual inversion is a technique in which a new keyword is created to represent data that is already known to the model, without changing its weights. It can be particularly useful for creating images of characters or people. Textual inversion can be used in conjunction with almost any other option and can help achieve more consistent results when training models. It is not simply a compilation of prompts, but rather a way to push the output toward a desired outcome. By mixing and matching different techniques, interesting and unique results can be achieved.

Textual inversion is trained on a model so although it will often work with compatible models this is not always the case.

https://github.com/rinongal/textual_inversion COLAB: https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/stable_diffusion_textual_inversion_library_navigator.ipynb

Train New Embedding Tutorial: https://youtu.be/7OnZ_I5dYgw

Negative Embedding
A negative embedding is an embedding used as a negative prompt to avoid certain unwanted aspects in generated images. These embeddings are typically created by generating images using only negative prompts. They can be used to group or condense a long negative prompt into a single word or phrase. Negative embeddings are useful in improving the consistency and quality of generated images, particularly in avoiding undesirable artistic aspects.

