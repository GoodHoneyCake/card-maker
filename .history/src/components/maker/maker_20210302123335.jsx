import React from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const Maker = (props) => {
  return (
    <section className={styles.maker}>
      <Header />
      <Footer />
    </section>
  );
};

export default Maker;
