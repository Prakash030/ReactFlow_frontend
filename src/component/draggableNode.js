// draggableNode.js

import { Tooltip } from "@nextui-org/tooltip";
import React, { useState } from "react";

export const DraggableNode = ({ type, label, icon, content }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDragEnd = (event) => {
    event.target.style.cursor = 'grab';
    setIsDragging(false);
  };

  const handleMouseEnter = () => {
    setIsDragging(true);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
        minWidth: '80px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        border: isDragging ? '1px solid #E555C7' : '1px solid gray',
        borderRadius: '8px',
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'column',

      }}
      draggable
    >
      <Tooltip content={content} style={{
        borderRadius: '8px',
        border: '1px solid black',
        backgroundColor: '#F2F1F1',
        padding: '8px',
      }}>
        <div style={{
          color: isDragging ? '#E555C7' : 'gray',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          padding: '8px',
        }}
        >
          <div>{icon}</div>
          <div>{label}</div>

        </div>
      </Tooltip>
    </div>
  );
};
