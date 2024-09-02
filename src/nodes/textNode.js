// textNode.js

import { BaseNode } from "../component/BaseNode";
import { Position } from "reactflow";
import { MdOutlineTextSnippet } from "react-icons/md";
import { useState, useRef} from "react";


export const TextNode = (props) => {


  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const textareaRef = useRef(null);
  
  const content = (state, handleChange) => (
    <label className={!isHoveredCard ? "node-label" : "node-label-hover"}>
      Text:
      <div className={'input-container'}>
        <textarea
        ref={textareaRef}
          // style={textareaStyle}
          rows={"4"} cols="25"
          onMouseEnter={() => setIsHoveredCard(true)}
          onMouseLeave={() => setIsHoveredCard(false)}
          value={state?.text}
          onChange={(e) => {handleChange(e, 'text')
            adjustTextareaRows()
          }}
        />
      </div>
    </label>)
  

  const handles = [
    { id: `${props.id}-output`, type: 'source', position: Position.Right },
  ]

  const adjustTextareaRows = () => {
    if (textareaRef.current) {
      const textarea = textareaRef?.current;
      textarea.style.height = "auto";
      textarea.style.height = `${Math.max(4, textarea?.scrollHeight)}px`;
    }
  };


  return <BaseNode {...props} type="Text" content={content} handles={handles} onDelete={props.onDelete} icon={<MdOutlineTextSnippet size={15} />} />;
};
