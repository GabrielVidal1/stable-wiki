import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "../base";

const StableDiffusionNode = ({}: any) => {
  return (
    <BaseNode name="Stable Diffusion">
      <img src={require("/img/examples/sd.png").default} />
      <Handle
        type="target"
        position={Position.Left}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-16 !bg-teal-500"
      />
    </BaseNode>
  );
};

export default memo(StableDiffusionNode);
