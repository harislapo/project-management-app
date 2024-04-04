export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-sky-500 text-stone-100 hover:bg-sky-400"
      {...props}
    >
      {children}
    </button>
  );
}
