import { addProduct } from "@/app/lib/actions";
import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="category" id="category">
          <option for="category" value="general">
            Chose a Category
          </option>
          <option for="category" value="kitchen">
            kitchen
          </option>
          <option for="category" value="phone">
            Phone
          </option>
          <option for="category" value="computer">
            Computer
          </option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          name="desc"
          id="desc"
          rows="10"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
