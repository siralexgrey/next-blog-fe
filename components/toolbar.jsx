import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Toolbar.module.css";

const Toolbar = () => {
  const router = useRouter();
  return (
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => window.location.href = 'https://twitter.com/_ZQuest_'}>Twitter</div>
            <div onClick={() => window.location.href = 'https://github.com/siralexgrey'}>Github</div>
        </div>
    );
};

export default Toolbar;
