import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const el = document.getElementById('modal-root');
  return createPortal(children, el);
};

export default Portal;
