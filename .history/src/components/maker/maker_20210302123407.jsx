import React from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const Maker = (props) => {
  const onLogout = () => {};
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;
