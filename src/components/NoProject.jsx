import Button from './Button';
import image from '../assets/no-projects.png';

export default function NoProject() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={image}
        alt="Empty list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">Please select or add one!</p>
      <p className="mt-8">
        <Button>Create a Project</Button>
      </p>
    </div>
  );
}
