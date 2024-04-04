import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProject from './components/NoProject';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    projects: [],
    // undefined - not adding new project or selecting an existing one.
    selectedProjectId: undefined,
  });

  // Function for setting the currently selected project.
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  // Function to signal that we have started with adding a new project.
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

  // Function for adding entered data into the projects state.
  function handleSubmitProject(projectData) {
    // Get the guaranteed latest snapshot of the projects state.
    setProjectsState((prevState) => {
      // Generate a dummy random ID, not bulletproof but good enough.
      const projectId = Math.floor(Math.random() * 58315318);
      // Create a new object.
      const newProject = {
        // Spread the data we got from the NewProject component (title: title, description:description, date:date).
        ...projectData,
        id: projectId,
      };

      // Return a new state with the old projects array copied and a new project added to it.
      return {
        ...prevState,
        // Revert to undefined to signal that we're finished adding a new project.
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // Cancel the creation of a new project.
  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  // Find an id of the selected project and forward it to the SelectedProject
  // to update the DOM with its details.
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onSubmit={handleSubmitProject} onCancel={handleCancel} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
