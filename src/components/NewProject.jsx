import Input from './Input';

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-red-700">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-blue-300 text-stone-100 hover:bg-blue-400">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
