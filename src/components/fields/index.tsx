import React from "react";
import { Handle, Position } from "reactflow";

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
}

const BaseField = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-row items-center align-baseline relative px-4">
      <p className="w-1/2 m-0">{name}</p>

      <Handle
        id={name + "-source"}
        type="source"
        position={Position.Right}
        className="w-16  !bg-teal-500 absolute"
      />
      <Handle
        id={name + "-target"}
        type="target"
        position={Position.Left}
        className="w-16 !bg-teal-500"
      />
      {children}
    </div>
  );
};

export const TextField = ({ name, ...props }: TextFieldProps) => {
  return (
    <BaseField name={name}>
      <input
        className="w-1/2 p-1 border border-gray-300 rounded-md"
        {...props}
      />
    </BaseField>
  );
};

export interface SelectFieldProps
  extends React.HTMLAttributes<HTMLSelectElement> {
  name: string;
  options: string[];
}

export const SelectField = ({ name, options, ...props }: SelectFieldProps) => {
  return (
    <BaseField name={name}>
      <select
        {...props}
        className="w-1/2 p-1 border border-gray-300 rounded-md"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </BaseField>
  );
};
