import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { SelectField, TextField } from "../../fields";
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

const possiblePrompts = [
  "photo of a cat",
  "drawing of a dog",
  "sculpture of a bird",
];

export const RawPrompt = ({ data: { name, datatype, props } }: any) => {
  const [value, setValue] = React.useState(possiblePrompts[0]);

  return (
    <BaseNode name="Data">
      {/* <TextField name="Prompt" /> */}
      <SelectField
        {...props}
        defaultValue={value}
        onChange={(e) => {
          setValue((e.target as any).value);
        }}
        name="Select"
        options={possiblePrompts}
      />
      <div className="text-sm mx-2 p-2 border-2 border-gray-200 border-solid">
        {value}
      </div>
    </BaseNode>
  );
};

export const Prompt = memo(RawPrompt);
