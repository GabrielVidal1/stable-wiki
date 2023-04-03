import React from "react";
import ReactFlow, { Background, Edge, Node, ReactFlowProps } from "reactflow";
import "reactflow/dist/style.css";
import TextEncoderNode from "../nodes/textEncoder";
import imageOut from "../nodes/imageOut";
import StableDiffusionNode from "../nodes/stableDiffusion";

const defaultNodeTypes = {
  textEncoder: TextEncoderNode,
  imageOut: imageOut,
  stableDiffusion: StableDiffusionNode,
};

const defaultEdgeOptions = {
  animated: true,
  style: {
    stroke: "white",
    animated: false,
  },
};

const defaultConnectionLineStyle = { stroke: "white" };

interface FlowProps<GraphContextType = {}> extends ReactFlowProps {
  defaultNodes?: Node<any, string>[];
  defaultEdges?: Edge<any>[];
}

const Flow: React.FC<FlowProps> = ({ nodeTypes: nt, ...props }) => {
  return (
    <div style={{ height: "400px" }}>
      <ReactFlow
        {...props}
        style={{
          backgroundColor: "#D3D2E5",
        }}
        defaultEdgeOptions={defaultEdgeOptions}
        nodeTypes={{ ...defaultNodeTypes, ...nt }}
        connectionLineStyle={defaultConnectionLineStyle}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Flow;
