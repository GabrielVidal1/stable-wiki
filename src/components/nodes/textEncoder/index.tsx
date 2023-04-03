import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "../base";

interface TextEncoderNodeProps {
  type: "encoder" | "decoder";
}

const TextEncoderNode = ({ emoji, job, name }: any) => {
  return (
    <BaseNode name={name}>
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

export default memo(TextEncoderNode);
