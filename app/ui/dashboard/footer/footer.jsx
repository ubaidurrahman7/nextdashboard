import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Ubaid Dev</div>
      <div className={styles.text}>© All rights reserved.</div>
      <div className={styles.text}>Made with ❤, Ubaid</div>
    </div>
  );
};

export default Footer;
