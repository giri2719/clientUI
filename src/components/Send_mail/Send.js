import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Send() {
  const [data, setData] = useState({ username: "" });
  const [newData, setNew] = useState({ username: "", password: "" });
  const [temp, setTemp] = useState("");
  const [show, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [code, setCode] = useState(0);

  const helloHandeler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleTemp = (e) => {
    const { name, value } = e.target;
    setTemp(value);
  };

  const handlePassword = (e) => {
    const { name, value } = e.target;
    if (temp === value) {
      setNew({ ...newData, username: data.username, [name]: value });
    } else {
      setError("confirm password not matched");
    }
  };

  const PasswordSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put("https://ag-giri.herokuapp.com/users/9", newData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => setError("server busy"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://ag-giri.herokuapp.com/users/forget", data)
      .then((res) => {
        setError(res.data.msg);
        setCode(res.data.code);
        setData("");
        setLoading(false);
      })
      .catch((error) => setError(error.response.data.msg));
  };

  return (
    <>
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            {show ? (
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Enter your email</h1>
                <input
                  type="email"
                  placeholder="Email"
                  name="username"
                  onChange={handleChange}
                  value={data.username}
                  required
                  className={styles.input}
                />
                {error && <div className={styles.error_msg}>{error}</div>}
                <button type="submit" className={styles.green_btn}>
                  Send
                </button>
              </form>
            ) : (
              <form className={styles.form_container} onSubmit={PasswordSubmit}>
                <h1>Create password</h1>
                <input
                  type="password"
                  placeholder="new password"
                  name="newpassword"
                  value={temp}
                  onChange={handleTemp}
                  required
                  className={styles.input}
                />
                <input
                  type="password"
                  placeholder="confirm password"
                  name="password"
                  onChange={handlePassword}
                  required
                  className={styles.input}
                />
                <Link to="/login">
                  <button type="button" className={styles.green_btn}>
                    Submit
                  </button>
                </Link>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
