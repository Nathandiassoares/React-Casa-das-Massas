import Styles from './paginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import StylesTema from 'styles/Tema.module.scss';
import React from 'react';

export default function PaginaPadrao({ children }: {children?: React.ReactNode} ) {
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={StylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}