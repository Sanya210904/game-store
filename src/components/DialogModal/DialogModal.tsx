import React, { FC, ReactNode } from 'react';
import { Modal } from '../../ui';
import cls from './DialogModal.module.scss';

type DialogModalProps = {
  onClose: () => void;
  onSubmit: () => void;
  isOpen: boolean;
  children: ReactNode;
};

const DialogModal: FC<DialogModalProps> = (props) => {
  const { onClose, onSubmit, isOpen, children } = props;

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className={cls.formContainer}>
        <h2 className={cls.modalTitle}>Sign up</h2>
        {children}
        <div className={cls.modalButtonBlock}>
          <button onClick={onClose}>Dismiss</button>
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </Modal>
  );
};

export default DialogModal;
