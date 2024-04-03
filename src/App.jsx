import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProject from './components/NoProject';
import { useState } from 'react';

function App() {
  const [projectsState, setProjectsState] = useState({
    projects: [],
    // undefined - not adding new project or selecting an existing one.
    selectedProjectId: undefined,
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        // Copy previous state.
        ...prevState,
        // null - a signal that we are adding a new project.
        selectedProjectId: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
