import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <main className={styles.wrapLayout}>
      <div className={styles.container}>
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
