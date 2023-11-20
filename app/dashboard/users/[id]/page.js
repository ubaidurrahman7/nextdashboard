import styles from "@/app/ui/dashboard/users/userpage.module.css";
import Image from "next/image";

const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="user" fill />
        </div>
        Trent Boult
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>UserName</label>
          <input type="text" name="username" placeholder="Trent Boult" />
          <label>Email</label>
          <input type="email" name="email" placeholder="TrentBoult@gmail.com" />
          <label>Password</label>
          <input type="password" name="passowrd" placeholder="" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder="12345" />
          <label>Address</label>
          <input type="text" name="address" placeholder="Newzealand" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={true}>Yes</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={true}>Yes</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
