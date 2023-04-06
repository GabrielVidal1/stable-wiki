import React from "react";
import { TextField } from "../../fields";

interface BaseNodeProps {
  name: string;
  children: React.ReactNode;
  styles?: any;
}

const BaseNode: React.FC<BaseNodeProps> = ({ name, children, styles }) => {
  return (
    <div
      className="py-2 bg-white justify-center shadow-lg rounded-xl flex flex-col gap-2"
      style={{ width: "200px", ...styles }}
    >
      <h3 className="m-0 px-4 text-center">{name}</h3>
      {children}
    </div>
  );
};

export default BaseNode;
