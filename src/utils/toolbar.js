// toolbar.js

import { DraggableNode } from "../component/draggableNode";
import { MdInput, MdOutput, MdOutlineTextSnippet } from "react-icons/md";
import { SiOpenai } from "react-icons/si";

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }} >
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }} >
                <DraggableNode type='customInput' label='Input' icon={<MdInput size={25}/>} 
                content={
                    <>
                      <span
                      className='tooltip-title'
                      >Input Node</span>
                      <br />
                      <span className='tooltip-desc'>Create user input field for <br /> your pipeline.</span>
                    </>
                  }
                />
                <DraggableNode type='llm' label='LLM' icon={<SiOpenai size={25}/>}
                content={
                    <>
                      <span
                      className='tooltip-title'
                      >LLM Node</span>
                      <br />
                      <span className='tooltip-desc'>Use the LLM to generate text.</span>
                    </>
                  }
                />
                <DraggableNode type='customOutput' label='Output' icon={<MdOutput size={25}/>} 
                content={
                    <>
                      <span
                      className='tooltip-title'
                      >Output Node</span>
                      <br />
                      <span className='tooltip-desc'>A field for outputting data for <br /> your pipeline.</span>
                    </>
                  }
                />
                <DraggableNode type='text' label='Text' icon={<MdOutlineTextSnippet size={25}/>} 
                content={
                    <>
                      <span
                      className='tooltip-title'
                      >Text Node</span>
                      <br />
                      <span className='tooltip-desc'>Text field that allows for variables.</span>
                    </>
                  }
                />
            </div>
        </div>
    );
};
