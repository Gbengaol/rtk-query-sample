import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_NAMES } from '../../helpers/routeNames';
import styles from './Sidebar.module.css';
import { AnimatePresence, motion } from 'framer-motion';

interface SidebarProps {
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar }) => {
  return (
    <AnimatePresence>
      {showSidebar && (
        <motion.div
          className={styles.sidebar}
        >
          <ul>
            <li>
              <NavLink className="mr-2" to={ROUTE_NAMES.DASHBOARD}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="mr-2" to={ROUTE_NAMES.USERS}>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink className="mr-2" to={ROUTE_NAMES.SETTINGS}>
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink className="mr-2" to={ROUTE_NAMES.DOCS}>
                Docs
              </NavLink>
            </li>
            <li>
              <NavLink className="mr-2" to={'/'}>
                Logout
              </NavLink>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Sidebar;
