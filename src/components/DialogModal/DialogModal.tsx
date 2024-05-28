import React, { FC, ReactNode } from 'react';
import { Button, Modal } from '../../ui';
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
          <Button
            onClick={onSubmit}
            buttonLabel="Sign in"
            buttonStyle="normalGreen"
          />
          <Button
            onClick={onClose}
            buttonLabel="Cancel"
            buttonStyle="normalPink"
          />
        </div>
      </div>
    </Modal>
  );
};

export default DialogModal;
