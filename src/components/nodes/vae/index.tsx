import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "../base";

export interface VaeNodeProps {
  data: { img?: string };
}

const VaeNode: React.FC<VaeNodeProps> = ({ data: { img } }) => {
  return (
    <BaseNode name="VAE" styles={{ width: "300px" }}>
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

      <div className="pt-1 mx-4 h-fit relative">
        <img src={require("/img/examples/vae_bg.png").default} />
        <div
          style={{
            left: "115px",
            top: "41px",
          }}
          className=" absolute w-10 h-10 shadow-lg rounded-sm  bg-blue-500 border-blue-500 border-solid border"
        >
          <img src={img} className="m-0 mix-blend-color-dodge " />
        </div>
      </div>
    </BaseNode>
  );
};

export default memo(VaeNode);
