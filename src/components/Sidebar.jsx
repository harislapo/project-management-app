import Button from './Button';

export default function Sidebar({
  onAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-sky-900 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddProject}>Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let classes =
            'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-100 hover:bg-sky-800';

          if (project.id === selectedProjectId) {
            classes += ' bg-sky-800';
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={classes}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
