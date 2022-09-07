import { Outlet } from 'react-router-dom';
import styles from './index.module.css';
import Sidebar from '../../components/Sidebar/Sidebar.component';
import Header from '../../components/Header/Header.component';
import { useLayoutEffect, useState } from 'react';

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  useLayoutEffect(() => {
    window.addEventListener("resize",  () => {
      // Setting Sidebar Dynamically based on window screen width
      setShowSidebar(!(window.innerWidth < 992));
    });
    setShowSidebar(!(window.innerWidth < 992));
    
    return () => window.removeEventListener(("resize"), () => null)
  }, []);

  return (
    <div className={`${styles.alignModule} ${!showSidebar && styles['no-side']}`}>
      <Sidebar showSidebar={showSidebar} />
      <div className={styles.innerPages}>
        <Header toggleSidebar={toggleSidebar} />
        <div className={styles.children}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
