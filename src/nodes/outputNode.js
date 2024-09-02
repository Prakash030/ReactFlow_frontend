// outputNode.js

import { BaseNode } from "../component/BaseNode";
import { Position } from "reactflow";
import { MdOutput } from "react-icons/md";
import { useState } from "react";

export const OutputNode = (props) => {
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const content = (state, handleChange) => (
    <>
      <label className={!isHoveredCard ? "node-label" : "node-label-hover"}>
        Name:
        <div className={'input-container'}>
          <input
            onMouseEnter={() => setIsHoveredCard(true)}
            onMouseLeave={() => setIsHoveredCard(false)}
            type="text"
            value={state?.outputName || props.id.replace('customOutput-', 'output_')}
            onChange={(e) => handleChange(e, 'outputName')}
          />
        </div>
      </label>
      <label className={!isHoveredCard ? "node-label" : "node-label-hover"}>
        Type:
        <div className={'input-container'}>
          <select value={state?.outputType || 'Text'}
            onChange={(e) => handleChange(e, 'outputType')}
            onMouseEnter={() => setIsHoveredCard(true)}
            onMouseLeave={() => setIsHoveredCard(false)}
            style={{ width: "170px" }}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </label>
    </>
  );

  const handles = [
    { id: `${props.id}-value`, type: 'target', position: Position.Left }
  ];

  return <BaseNode {...props} type="Output" content={content} handles={handles} onDelete={props.onDelete} icon={<MdOutput size={15} />} />;
};
