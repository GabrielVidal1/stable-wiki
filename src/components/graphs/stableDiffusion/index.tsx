import React, { memo } from "react";
import { Prompt } from "@site/src/components/nodes/dataIn";
import Flow from "../../nodeGraph";

export const defaultNodes = [
  {
    id: "prompt",
    type: "prompt",
    data: { name: "Prompt", datatype: "text", fields: ["text"] },
    position: { x: 100, y: 0 },
  },
  {
    id: "sd",
    type: "stableDiffusion",
    data: { name: "Node A", job: "qsd" },
    position: { x: 400, y: 0 },
  },
  {
    id: "img",
    type: "imageOut",
    data: { img: "sd" },
    position: { x: 700, y: 0 },
  },
];
const defaultEdges = [
  { id: "prompt", source: "prompt", target: "sd", color: "red" },
  { id: "image", source: "sd", target: "img" },
];

const StableDiffusionExample = () => {
  const nodeTypes = {
    prompt: Prompt,
  };

  return (
    <Flow
      nodeTypes={nodeTypes}
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
    />
  );
};

export default memo(StableDiffusionExample);
