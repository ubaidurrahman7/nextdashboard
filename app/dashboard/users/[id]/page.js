import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/userpage.module.css";
import Image from "next/image";

const UserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="user image" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id || ""} />
          <label>UserName</label>
          <input
            type="text"
            name="username"
            placeholder={user.username || "username"}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email || "email"}
          />
          <label>Password</label>
          <input type="password" name="passowrd" />
          <label>Phone</label>
          <input
            type="phone"
            name="phone"
            placeholder={user.phone || "phone"}
          />
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder={user.address || "address"}
          />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
