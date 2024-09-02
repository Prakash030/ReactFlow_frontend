import { PipelineToolbar } from './utils/toolbar';
import { PipelineUI } from './component/ReactflowUI';
import { SubmitButton } from './component/SubmitButton';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
