import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { AreasWeServe } from './AreasWeServe';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <AreasWeServe />
      <Footer />
    </div>
  );
};
