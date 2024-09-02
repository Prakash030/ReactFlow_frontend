// inputNode.js

import { BaseNode } from "../component/BaseNode";
import { Position } from "reactflow";
import { MdInput } from "react-icons/md";
import { useState } from "react"


export const InputNode = (props) => {
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
          value={state?.inputName || props.id.replace('customInput-', 'input_')}
          onChange={(e) => handleChange(e, 'inputName')}
          />
          </div>
      </label>
      <label className={!isHoveredCard ? "node-label" : "node-label-hover"}>
        Type:
        <div className={'input-container'}>
        <select value={state?.inputType || 'Text'} onMouseEnter={() => setIsHoveredCard(true)}
          onMouseLeave={() => setIsHoveredCard(false)} onChange={(e) => handleChange(e, 'inputType')}
          style={{width: "170px"}}
          >
          <option value="Text">Text</option>
          <option value="File" >File</option>
        </select>
        </div>
      </label>
    </>
  );



  const handles = [
    { id: `${props.id}-value`, type: 'source', position: Position.Right }
  ];

  return <BaseNode {...props} type="Input" content={content} handles={handles} icon={<MdInput size={15} />} />;
};
