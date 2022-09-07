import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return <div className={styles.header}>
    <button onClick={toggleSidebar}>Toggle Sidebar</button>
    <div>
      Hello World Header
    </div>
  </div>;
};
export default Header;
