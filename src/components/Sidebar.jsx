import Button from './Button';

export default function Sidebar({ onAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-blue-300 text-stone-900 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-700">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddProject}>Add Project</Button>
      </div>
    </aside>
  );
}
