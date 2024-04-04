import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onSubmit, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  // Initialize a reference and pass it as a prop so we can open dialog in Modal component. 
  const modal = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    // Validate input.
    if (
      title.trim() === '' ||
      description.trim() === '' ||
      date.trim() === ''
    ) {
      // Open modal if any of the inputs is invalid.
      modal.current.open();
      return;
    }

    // Pass entered data to the parent component.
    onSubmit({ title, description, date });
  }

  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-800 my-4 text-center">
          Invalid Input!
        </h2>
        <p className="text-stone-700 mb-4">
          Please enter a valid value for each input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input type="date" ref={dateRef} label="Due Date" />
        </div>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-red-400"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-sky-500 text-stone-100 hover:bg-sky-400"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}
