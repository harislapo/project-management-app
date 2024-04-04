import { useRef } from 'react';
import Input from './Input';

export default function NewProject({ onSubmit }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;
    // Pass entered data to the parent component.
    onSubmit({ title, description, date });
  }

  return (
    <div className="w-[35rem] mt-16">
      <div>
        <Input type="text" ref={titleRef} label="Title" />
        <Input ref={descriptionRef} label="Description" textarea />
        <Input type="date" ref={dateRef} label="Due Date" />
      </div>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-red-700">Cancel</button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-blue-300 text-stone-100 hover:bg-blue-400"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
    </div>
  );
}
