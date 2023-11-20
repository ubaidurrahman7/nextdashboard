import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            How to create a admin dashboard in Nextjs 14
          </h3>
          <span className={styles.subTitle}> takes 6 hour to build</span>
          <p className={styles.desc}>
            Lorem Ipsum placeholder text for use in your layouts, plugins for
            your favorite writing
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            How to create a admin dashboard in Nextjs 14
          </h3>
          <span className={styles.subTitle}> takes 6 hour to build</span>
          <p className={styles.desc}>
            {" "}
            Lorem Ipsum placeholder text for use in your graphic, print and web
            layouts, and
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            How to create a admin dashboard in Nextjs 14
          </h3>
          <span className={styles.subTitle}> takes 6 hour to build</span>
          <p className={styles.desc}>
            {" "}
            Lorem Ipsum placeholder text for use in your graphic, print and web
            layouts, and
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};
export default Rightbar;
