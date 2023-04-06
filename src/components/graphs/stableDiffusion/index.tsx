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

const defaultViewPort = {
  x: -30,
  y: 103,
  zoom: 0.88,
};

const StableDiffusionExample = () => {
  const [example, setExample] = React.useState(examples[0]);

  const nodeTypes = useMemo(
    () => ({
      prompt: Prompt,
    }),
    []
  );

  const defaultEdges = useMemo(
    () => [
      { id: "prompt", source: "prompt", target: "sd", color: "red" },
      { id: "image", source: "sd", target: "img" },
    ],
    []
  );

  const defaultNodes = useMemo(() => {
    const selectFieldProps: RawPromptProps["data"] = {
      name: "Prompt",
      datatype: "text",
      props: {
        name: "Prompt",
        onChange: (value) => {
          const example = examples.find((e) => e.prompt === value.target.value);
          setExample(example);
        },
        value: example.prompt,
        options: examples.map((e) => e.prompt),
      },
      prompt: example.prompt,
    };

    return [
      {
        id: "prompt",
        type: "prompt",
        data: selectFieldProps,
        position: { x: 100, y: 50 },
      },
      {
        id: "sd",
        type: "stableDiffusion",
        data: { name: "Node A", job: "qsd" },
        position: { x: 400, y: 10 },
      },
      {
        id: "img",
        type: "imageOut",
        data: { img: example.image },
        position: { x: 700, y: 0 },
      },
    ];
  }, [example]);

  return (
    <Flow
      defaultViewport={defaultViewPort}
      nodeTypes={nodeTypes}
      nodes={defaultNodes}
      edges={defaultEdges}
    />
  );
};

export default memo(StableDiffusionExample);
