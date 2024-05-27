import { createContext, FC, ReactNode, useState, useEffect } from 'react';

//@ts-ignore
const ModalContext = createContext();

interface IModalProvider {
  children: ReactNode;
}

export const ModalProvider: FC<IModalProvider> = ({ children }) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [authType, setAuthType] = useState<'register' | 'login'>('register');

  const handleOpenModal = (type: 'register' | 'login') => {
    setAuthType(type);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        authType,
        isOpenModal,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
