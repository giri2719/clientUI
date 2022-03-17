import React, { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

export default function Send() {
  const [data, setData] = useState({ username: "" });
  const [show, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [code, setCode] = useState(0);
  const [temp, setTemp] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:40001/users/forget", data)
      .then((res) => {
        setTemp(data);
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
              <form className={styles.form_container}>
                <h1>Create password</h1>
                <input
                  type="password"
                  placeholder="new password"
                  name="newpassword"
                  value={""}
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
                <button type="submit" className={styles.green_btn}>
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {show ? (
                <>
                  <div className="text-center">
                    <div
                      className="spinner-border"
                      style={style}
                      role="status"
                    ></div>

                    <p>waiting...</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center">
                    <h2>{error}</h2>
                  </div>
                </>
              )}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
