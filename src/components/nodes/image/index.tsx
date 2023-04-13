import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "../base";

interface ImageOutProps {
  data: {
    img: string;
    name: string;

    handle?: {
      type: "target" | "source";
      position: Position;
    };
    children?: React.ReactNode;
  };
}

const Image: React.FC<ImageOutProps> = ({
  data: { img, name, handle, children },
}) => {
  return (
    <BaseNode name={name ?? "Image"}>
      <Handle
        type={handle?.type ?? "target"}
        position={handle?.position ?? Position.Left}
        className="w-16 !bg-teal-500"
      />
      <div className="aspect-square mx-4 h-fit">
        <img src={img} className="rounded" />
      </div>
      {children}
    </BaseNode>
  );
};

export default memo(Image);
