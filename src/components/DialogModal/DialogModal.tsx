import React, { FC, ReactNode } from 'react';
import { Button, Modal } from '../../ui';
import cls from './DialogModal.module.scss';

type DialogModalProps = {
  onClose: () => void;
  onSubmit: () => void;
  isOpen: boolean;
  children: ReactNode;
  title: string;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
};

const DialogModal: FC<DialogModalProps> = (props) => {
  const {
    onClose,
    onSubmit,
    isOpen,
    children,
    title,
    submitButtonLabel = 'Submit',
    cancelButtonLabel = 'Cancel',
  } = props;

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className={cls.formContainer}>
        <h2 className={cls.modalTitle}>{title}</h2>
        {children}
        <div className={cls.modalButtonBlock}>
          <Button
            onClick={onSubmit}
            buttonLabel={submitButtonLabel}
            buttonStyle="normalGreen"
          />
          <Button
            onClick={onClose}
            buttonLabel={cancelButtonLabel}
            buttonStyle="normalPink"
          />
        </div>
      </div>
    </Modal>
  );
};

export default DialogModal;
