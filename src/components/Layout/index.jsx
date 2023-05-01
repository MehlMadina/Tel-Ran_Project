import React from 'react';
import NavMenu from '../NavMenu';
import Footer from '../Footer';
import s from './style.module.css';
import { Outlet } from 'react-router-dom';

export default function Layout() {

  return (
    <div>
        <NavMenu />
        <main className={s.main_content}>
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}
