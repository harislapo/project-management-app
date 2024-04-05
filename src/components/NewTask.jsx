import { useState } from 'react';

export default function NewTask({ onAdd }) {
  const [taskInput, setTaskInput] = useState('');

  function handleChange(event) {
    setTaskInput(event.target.value);
  }

  function handleSubmitTask() {
    if (taskInput.trim() === '') return;
    onAdd(taskInput);
    setTaskInput('');
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        value={taskInput}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button onClick={handleSubmitTask} className="text-stone-950">
        Add Task
      </button>
    </div>
  );
}
