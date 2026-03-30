import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Soluções Tecnológicas para seu Negócio
          </h1>
          <p className={styles.subtitle}>
            Criamos sites com chatbots inteligentes, sistemas web robustos e aplicações mobile que transformam sua presença digital
          </p>
          <div className={styles.buttons}>
            <button className={styles.btnPrimary}>
              Começar Agora
            </button>
            <button className={styles.btnSecondary}>
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}