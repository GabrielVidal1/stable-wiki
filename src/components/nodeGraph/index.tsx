import React, { useCallback, useEffect } from "react";
import ReactFlow, {
  Background,
  Edge,
  Node,
  ReactFlowProps,
  ReactFlowProvider,
  useReactFlow,
  useViewport,
} from "reactflow";
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

const defaultConnectionLineStyle = { stroke: "white", strokeWidth: 2 };

interface FlowProps<GraphContextType = {}> extends ReactFlowProps {
  defaultNodes?: Node<any, string>[];
  defaultEdges?: Edge<any>[];
}

const defaultAnimationDuration = 800;

const Flow: React.FC<FlowProps> = ({ nodeTypes: nt, ...props }) => {
  const { setViewport, zoomIn, zoomOut } = useReactFlow();

  const viewport = useViewport();

  const handleTransform = useCallback(() => {
    setViewport(props.defaultViewport, { duration: defaultAnimationDuration });
  }, [setViewport]);

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

        <div className="controls flex gap-2">
          <button onClick={handleTransform}>Reset View</button>
          {/* <button
            onClick={() => {
              console.log(viewport);
            }}
          >
            Get Viewport
          </button> */}
        </div>
      </ReactFlow>
    </div>
  );
};

// wrapping with ReactFlowProvider is done outside of the component
function FlowWithProvider(props: FlowProps) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
