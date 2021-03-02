import React from "react";
import styles from "./maker.module.css";

const Maker = (props) => {
  return (
    <section className={styles.maker}>
      <Header />
      <Footer />
    </section>
  );
};

export default Maker;
