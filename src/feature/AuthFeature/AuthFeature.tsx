import React, { FC, useState, useContext } from 'react';
import { Input } from '../../ui';
import cls from './AuthFeature.module.scss';
import { DialogModal } from '../../components';
import ModalContext from '../../providers/ModalProvider';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { handleLogin, handleRegister } from './store/userSlice';

type AuthFeatureProps = {};

const AuthFeature: FC<AuthFeatureProps> = (props) => {
  //@ts-ignore
  const { isOpenModal, handleCloseModal, authType } = useContext(ModalContext);
  const dispatch = useAppDispatch();

  const [error, setError] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const clearFields = () => {
    setUsername('');
    setEmail('');
    setConfirmEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmitButton = () => {
    if (authType === 'login') {
      const serverData = {
        username,
        password,
      };

      dispatch(handleLogin(serverData))
        .then(() => clearFields())
        .then(() => handleCloseModal());
      console.log(serverData);
    }
    if (authType === 'register') {
      const serverData = {
        username,
        password,
        confirm_password: confirmPassword,
      };
      dispatch(handleRegister(serverData))
        .then(() => clearFields())
        .then(() => handleCloseModal());
      console.log(serverData);
    }
  };

  return (
    <DialogModal
      onClose={handleCloseModal}
      onSubmit={handleSubmitButton}
      isOpen={isOpenModal}
    >
      {authType === 'register' ? (
        <div className={cls.block}>
          <Input
            onChange={setUsername}
            title="Create an OGS username"
            type="username"
          />
          <Input onChange={setEmail} title="Your email address" type="email" />
          <Input
            onChange={setConfirmEmail}
            title="Repeat email address"
            type="email"
          />
          <Input
            onChange={setPassword}
            title="Repeat password"
            type="password"
          />
          <Input
            onChange={setConfirmPassword}
            title="Choose a password"
            type="password"
          />
        </div>
      ) : (
        <div className={cls.block}>
          <Input onChange={setUsername} title="OGS username" type="username" />
          <Input onChange={setPassword} title="Password" type="password" />
        </div>
      )}
    </DialogModal>
  );
};

export default AuthFeature;
