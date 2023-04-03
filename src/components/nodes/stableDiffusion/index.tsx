import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "../base";

const StableDiffusionNode = ({}: any) => {
  return (
    <BaseNode
      name="Stable Diffusion"
      // styles={{
      //   height: "200px",
      //   backgroundImage: "url('/img/examples/sd.png')",
      //   backgroundSize: "cover",
      // }}
    >
      <img src={require("@site/static/img/examples/sd.png").default} />
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
