import Layout from "@/component/layout";
import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

const Product = async () => {
  const data = await fetch(`https://next-admin-murex.vercel.app/api/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const products = await data.json();

  return (
    <div className={styles.container}>
      <Link className={styles.pro} href={"/product/newProduct"}>
        Yeni ürün ekle
      </Link>

      {products.map((product) => {
        <h2>ürünler</h2>;
        return (
          <div key={product._id} className={styles.details}>
            <div className={styles.details}>
              <h3>{product.name}</h3>
              <Link href={`/product/editProduct/${product._id}`}>düzenle</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
