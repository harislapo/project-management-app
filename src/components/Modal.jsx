import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

// Wrap the component in forwardRef
const Modal = forwardRef(({ children, buttonText }, ref) => {
  // Initialize useRef and connect it to the dialog.
  const dialogRef = useRef();

  // Expose custom method to be called from outside.
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    // Using dialog and a form it, because clicking on a button in a form
    // with a method=dialog closes it by default.
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className='mt-4 text-center'>
        <Button>{buttonText}</Button>
      </form>
    </dialog>,
    // Have modal to show in index.html
    document.getElementById('modal-root')
  );
});

export default Modal;
