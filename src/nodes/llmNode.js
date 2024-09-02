// llmNode.js

import { BaseNode } from "../component/BaseNode";
import { Position } from "reactflow";
import { SiOpenai } from "react-icons/si";

export const LLMNode = (props) => {
  const content = () => (
    <>
      <div>
        <span>This is an LLM.</span>
      </div>
    </>
  );

  const handles = [
    { id: `${props.id}-system`, type: 'target', position: Position.Left, name: 'System' },
    { id: `${props.id}-prompt`, type: 'target', position: Position.Left,name: 'Prompt' },
    { id: `${props.id}-response`, type: 'source', position: Position.Right}
  ];

  return <BaseNode {...props} type="LLM" content={content} handles={handles} onDelete={props.onDelete} icon={<SiOpenai size={15}/>}/>;
};
