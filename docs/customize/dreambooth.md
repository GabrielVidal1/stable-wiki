---
sidebar_position: 2
---

# Dreambooth

Dreambooth is a tool that allows you to fine-tune a Stable Diffusion checkpoint based on a single keyword that represents all of your images, for example, "mycat." This approach does not require you to caption each individual image, which can save time and effort. To use Dreambooth, you need to prepare at least 20 images in a square format of 512x512 or 768x768 and fine-tune the Stable Diffusion checkpoint on them. This process requires a significant amount of VRAM, typically above 15GB, and will produce a file ranging from 2GB to 5GB. Accumulative stacking is also possible in Dreambooth, which involves consecutive training while maintaining the structure of the models. However, this technique is challenging to execute. Overall, Dreambooth can be a useful tool for fine-tuning a Stable Diffusion checkpoint to a specific set of images using a single keyword.

## More resources

PAPER: https://dreambooth.github.io/

TUTORIAL: https://www.youtube.com/watch?v=7m__xadX0z0

YT Video: https://www.youtube.com/watch?v=Bdl-jWR3Ukc

COLAB: https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast-DreamBooth.ipynb
