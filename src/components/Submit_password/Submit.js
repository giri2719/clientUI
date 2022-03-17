import React from "react";
import styles from "./styles.module.css";

export default function submit() {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container}>
            <h1>Create password</h1>
            <input
              type="password"
              placeholder="new password"
              name="password"
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="confirm password"
              name="password"
              required
              className={styles.input}
            />
          </form>
          <button type="button" className={styles.green_btn}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
