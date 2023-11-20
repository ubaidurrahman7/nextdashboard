import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total User</span>
        <span className={styles.number}>10,243</span>
        <span className={styles.details}>
          <span className={styles.positive}>12% </span> more than previous week
        </span>
      </div>
    </div>
  );
};
export default Card;
