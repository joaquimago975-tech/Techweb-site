import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Techweb Solutions</h3>
            <p>Transformando negócios através da tecnologia e inovação digital.</p>
          </div>

          <div className={styles.section}>
            <h4>Serviços</h4>
            <ul>
              <li><a href="#services">Sites com Chatbots</a></li>
              <li><a href="#services">Sistemas Web</a></li>
              <li><a href="#services">Apps Nativos</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:joaquimago950@gmail.com">Email</a></li>
              <li><a href="tel:+244957993219">Telefone</a></li>
              <li><a href="https://facebook.com/techweb.solutions" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Techweb Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}