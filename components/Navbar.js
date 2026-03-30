import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>🚀 Techweb Solutions</h1>
        </div>
        
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.active : ''}`}> 
          <li><a href="#services">Serviços</a></li>
          <li><a href="#prices">Preços</a></li>
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}