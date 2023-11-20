import Image from "next/image";
import styles from "./transactions.module.css";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=" user image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.10.2023</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=" user image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Brayen
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14.10.2023</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=" user image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jenifer
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.10.2023</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=" user image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jenifer
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.10.2023</td>
            <td>$50.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Transaction;
