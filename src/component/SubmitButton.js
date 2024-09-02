// Submit button to have get the required details about the pipeline from the python server

import { useStore } from '../utils/store';
import React, { useState } from "react";
import { Modal } from 'antd';

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));
    const [result, setResult] = useState(null)
    const [modal2Open, setModal2Open] = useState(false);


    const handleSubmit = async () => {
        try {
            const response = await fetch('https://reactflow-backend-b913.onrender.com/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok === 'true') {
                throw new Error('No network response');
            }

            const result = await response.json();
            setResult(result)
            setModal2Open(true)
            console.log('Pipeline parsed successfully:', result);
        } catch (error) {
            console.error('Error parsing pipeline:', error);
        }
    };

    return (
        <><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "12px" }} className='btn'>
            <button type="button" onClick={handleSubmit} style={{
                padding: "10px"
            }} className='submit-btn'>Submit</button>
        </div>

            <Modal
                title="Response from the server"
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
                okButtonProps={{ className: 'custom-ok-button' }}
            >
                <p style={{ fontWeight: "bold" }}>Result for your Workflow made:</p>
                <p>Number of Nodes: <span className='result'>{result?.num_nodes}</span></p>
                <p>Number of Edges: <span className='result'>{result?.num_edges}</span></p>
                <p>Is DAG: <span className='result'>{result?.is_dag ? "True" : "False"}</span></p>
                <p>Thank you for this opportunity.</p>
            </Modal>
            {/* </div> */}

        </>
    );
}



