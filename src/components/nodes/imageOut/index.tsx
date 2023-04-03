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
      <div className="aspect-square ">
        <img src={require("@site/static/img/examples/cat.jpeg").default} />
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-16 !bg-teal-500"
      />
    </BaseNode>
  );
};

export default memo(ImageOut);
