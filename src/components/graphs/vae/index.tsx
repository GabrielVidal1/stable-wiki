import React, { memo, useMemo } from "react";
import { Prompt, RawPromptProps } from "@site/src/components/nodes/dataIn";
import Flow from "../../nodeGraph";
import catExample from "@site/static/img/examples/cat.jpeg";
import dogExample from "@site/static/img/examples/dog.webp";
import fisheyedCapybaraExample from "@site/static/img/examples/fisheyed-capybara.jpeg";

const examples = [
  {
    prompt: "A picture of a cat",
    image: catExample,
  },
  {
    prompt: "A picture of a dog",
    image: dogExample,
  },
  {
    prompt: "fish eyed view of a capybara, photorealistic",
    image: fisheyedCapybaraExample,
  },
];

const defaultViewPort = { x: -30, y: 123, zoom: 0.8 };

const VaeExample = () => {
  const [example, setExample] = React.useState(examples[0]);

  const nodeTypes = useMemo(
    () => ({
      prompt: Prompt,
    }),
    []
  );

  const defaultEdges = useMemo(
    () => [
      { id: "imagein", source: "imageIn", target: "sd", color: "red" },
      { id: "image", source: "sd", target: "img" },
    ],
    []
  );

  const nextExample = () => {
    const index = examples.findIndex((e) => e.prompt === example.prompt);
    const nextIndex = (index + 1) % examples.length;
    setExample(examples[nextIndex]);
  };

  const defaultNodes = useMemo(() => {
    return [
      {
        id: "imageIn",
        type: "image",
        data: {
          name: "Input Image",
          img: example.image,
          handle: { type: "source", position: "right" },
          children: (
            <button
              onClick={nextExample}
              className="mx-6 mb-2 p-2 bg-white rounded-full"
            >
              Next example
            </button>
          ),
        },
        position: { x: 100, y: 0 },
      },
      {
        id: "sd",
        type: "vae",
        data: { img: example.image },
        position: { x: 400, y: 0 },
      },
      {
        id: "img",
        type: "image",
        data: {
          name: "Output Image",
          img: example.image,
        },
        position: { x: 800, y: 0 },
      },
    ];
  }, [example]);

  return (
    <Flow
      defaultViewport={defaultViewPort}
      nodeTypes={nodeTypes}
      nodes={defaultNodes}
      edges={defaultEdges}
    ></Flow>
  );
};

export default memo(VaeExample);
