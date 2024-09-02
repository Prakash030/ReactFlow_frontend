  // Adjust the position of the handles and distribute them equally on the left side of the node

import { Position } from "reactflow";
export function adjustPositions(handles) {
    const leftNodes = handles?.filter(handle => handle?.position === Position.Left);
    if (leftNodes?.length === 1) {
      const node = leftNodes[0];
      node.style = { ...node.style, top: '50%' };
    } else if (leftNodes?.length > 1) {
      const totalLeftNodes = leftNodes.length;
      leftNodes.forEach((node, index) => {
        node.style = { ...node.style, top: `${(index + 1) * (100 / (totalLeftNodes + 1))}%` };
      });
    }    
       
    return handles;
  }