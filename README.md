# ReactFlow Application

This project is a frontend and backend application designed for specific purpose. The application allows users to create, manage, and analyze nodes and edges in a pipeline, integrating a React frontend with a FastAPI backend.

## Live Demo
You can view the live application at: [[Your Live URL Here]](https://react-flow-frontend.vercel.app/)

## Project Overview
The project consists of four main parts, which are detailed below:

### Part 1: Node Abstraction
In the `frontend/src/nodes` directory, I have created an abstraction for different types of nodes (inputs, outputs, LLMs, and text). This abstraction allows for the rapid creation of new nodes by minimizing the duplication of code.

### Part 2: Styling
The application was styled to have an appealing and unified design. I applied consistent styles across all components, ensuring that the user interface is both functional and visually engaging. I utilized modern React libraries and CSS frameworks to achieve this.

### Part 3: Text Node Logic
I enhanced the functionality of the Text node by implementing dynamic resizing based on the user's input. As the user types more text, the node's width and height adjust to improve visibility. Additionally, I added logic to detect JavaScript variable names enclosed in double curly brackets (e.g., `{{ input }}`). When a valid variable is entered, a new Handle is created on the left side of the Text node, corresponding to the variable.

### Part 4: Backend Integration
I integrated the frontend with a FastAPI backend. When the user submits a pipeline via the `frontend/src/submit.js` component, the nodes and edges are sent to the `/pipelines/parse` endpoint in the backend. The backend calculates the number of nodes and edges and checks whether the pipeline forms a directed acyclic graph (DAG). The frontend then displays this information in an alert, providing the user with the number of nodes, edges, and whether the pipeline is a DAG.
