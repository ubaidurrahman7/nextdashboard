import styles from "@/app/ui/dashboard/products/productpage.module.css";
import Image from "next/image";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="user" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Iphone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$142" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="14" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Golden" />
          <label>Size</label>
          <input type="number" name="size" placeholder="7" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label>Descritpion</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="description..."
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default ProductsPage;
