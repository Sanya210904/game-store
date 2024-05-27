import { ReactNode, FC } from 'react';
import classes from './Modal.module.scss';
import Portal from '../Portal/Portal';

interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const Modal: FC<IModalProps> = (props) => {
  const { children, isOpen, onClose } = props;

  return (
    <Portal>
      <div className={isOpen ? classes.openModal : classes.modal}>
        <div className={classes.overlay}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
