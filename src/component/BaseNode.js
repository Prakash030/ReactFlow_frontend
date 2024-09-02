// Abstracts all the four types of nodes and handles all the flexibility and working of each node

import { useState, useEffect } from 'react';
import { Handle, Position, useUpdateNodeInternals} from 'reactflow';
import { IoIosCloseCircleOutline, IoIosCloseCircle } from "react-icons/io";
import { adjustPositions } from '../utils/adjustedNodePosition';
import { extractVariables } from '../utils/extractVariables';

export const BaseNode = ({ id, data, type, handles, content, icon }) => {
  const [state, setState] = useState(data);
  const [isHoveredButton, setIsHoveredButton] = useState(false);
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const [dynamicHandles, setDynamicHandles] = useState([]);

  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    if (type === 'Text') {
      const matches = extractVariables(state?.text);
      const updatedHandles = matches.map((key, index) => ({
        id: `${id}-${key}`,
        type: 'target',
        position: Position.Left,
        name: key
      }));
      setDynamicHandles([
        { id: `${id}-output`, type: 'source', position: Position.Right },
        ...updatedHandles
      ]);

    } else {
      setDynamicHandles([]);
    }
  }, [state, type, id]);


  const handleChange = (e, field) => {
    setState((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };


  useEffect(() => {
    updateNodeInternals(id);
  }, [dynamicHandles, id, updateNodeInternals]);

  const adjustedHandles = type==="Text"? adjustPositions(dynamicHandles): adjustPositions(handles);
  const onDelete = data.onDelete;

  return (
    <div
      onMouseEnter={() => setIsHoveredCard(true)}
      onMouseLeave={() => setIsHoveredCard(false)}
      className={!isHoveredCard ? 'node' : 'node-hover color'}
      style={{ position: 'relative' }}
    >
      <div>
        <span className={isHoveredCard ? 'node-head flex' : 'node-head flex-hover'}>
          <div style={{ marginRight: 2 }}>
            {icon}
          </div>
          <div>
            {type}
          </div>
        </span>
      </div>
      <div style = {{position: "relative"}} >{content(state, handleChange)}</div>
      {adjustedHandles.map((handle, index) => (
          <>
          <div >
          <Handle
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={handle.style}
          />
          </div>
          <div style={{
            position: "absolute",
            top: `calc(${handle?.style?.top} - 15px)`,
            left: `${handle.position==="left"? "-40px": 0}`,
            fontSize: 10,
            fontWeight: 500
          }}>
            {handle?.name}
          </div>
        
        </>
      ))}
      <button
        onClick={() => onDelete(id)}
        onMouseEnter={() => setIsHoveredButton(true)}
        onMouseLeave={() => setIsHoveredButton(false)}
        style={{
          position: 'absolute',
          top: 5,
          right: 1,
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'center',
          lineHeight: '20px',
        }}
      >
        {isHoveredButton ? <IoIosCloseCircle size={18} color='red' /> : <IoIosCloseCircleOutline color='black' size={18} />}
      </button>
    </div>
  );
};
