import React, { FC, useState, useContext } from 'react';
import { Input } from '../../ui';
import cls from './AuthFeature.module.scss';
import { DialogModal } from '../../components';
import ModalContext from '../../providers/ModalProvider';

type AuthFeatureProps = {};

const AuthFeature: FC<AuthFeatureProps> = (props) => {
  //@ts-ignore
  const { isOpenModal, handleCloseModal, authType } = useContext(ModalContext);

  const [error, setError] = useState('');

  const handleSubmitButton = () => {
    if (authType === 'login') {

    }
    if (authType === 'register') {
      
    }
    console.log('sent');
  };

  return (
    <DialogModal
      onClose={handleCloseModal}
      onSubmit={handleSubmitButton}
      isOpen={isOpenModal}
    >
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </DialogModal>
  );
};

export default AuthFeature;
