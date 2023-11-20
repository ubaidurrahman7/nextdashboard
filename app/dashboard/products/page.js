import Link from "next/link";
import styles from "../../ui/dashboard/products/products.module.css";
import Image from "next/image";
import Search from "../search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="search for a Products" />
        <Link href="/dashboard/products/add">
          <button className={styles.button}>Add User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tHead}>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt="user image"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                John Doe
              </div>
            </td>
            <td>Desc</td>
            <td>$955</td>
            <td>13.10.2023</td>
            <td>91</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href="">
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Products;
