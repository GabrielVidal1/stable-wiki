import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { SelectField, SelectFieldProps, TextField } from "../../fields";
import BaseNode from "../base";

type DataType = "text" | "image";

const colors: Record<DataType, { color: string }> = {
  image: {
    color: "bg-orange-500",
  },
  text: {
    color: "bg-gray-500",
  },
};

interface DataInputProps {
  name: string;
  datatype: DataType;
  fields: React.ReactNode[];
}

const DataInput = ({ data: { name, datatype, fields } }: any) => {
  return (
    <BaseNode name={name}>
      {/* <Handle
        type="source"
        position={Position.Right}
        className="w-16 !bg-teal-500"
      /> */}
      {fields}
    </BaseNode>
  );
};

export type RawPromptProps = {
  data: {
    name: string;
    datatype: DataType;
    props: SelectFieldProps;
    prompt: string;
  };
};

export const RawPrompt: React.FC<RawPromptProps> = ({
  data: { name, datatype, props, prompt },
}) => {
  return (
    <BaseNode name="Data">
      {/* <TextField name="Prompt" /> */}
      <SelectField {...props} name="Select" />
      <div className="text-sm mx-2 p-2 border-2 border-gray-200 border-solid">
        {prompt}
      </div>
    </BaseNode>
  );
};

export const Prompt = memo(RawPrompt);
