import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "../base";

interface ImageOutProps {
  img: string;
  name: string;
}

const ImageOut = ({ data: { img, name } }: { data: ImageOutProps }) => {
  return (
    <BaseNode name="Image">
      <Handle
        type="target"
        position={Position.Left}
        className="w-16 !bg-teal-500"
      />
      <div className="aspect-square mx-4 h-fit">
        <img src={img} className="rounded" />
      </div>
    </BaseNode>
  );
};

export default memo(ImageOut);
