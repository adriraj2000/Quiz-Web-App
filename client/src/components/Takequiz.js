import React, { useState } from "react";
import styles from "../styles/Takequiz.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Takequiz() {
  let history = useHistory();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [code, setcode] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("/api/quiz/", { code, email, name }, config)
      .then((res) => {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("code", code);
        history.push({
          pathname: "/quiz",
          state: { res: res.data },
        });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className={styles.parent}>
      <div className={styles.takequiz}>
        <h1 className={styles.heading}>Take quiz</h1>
        <br />
        <form onSubmit={submithandler}>
          <label className={styles.labels} htmlFor="name">
            Name:
          </label>
          <input
            className={styles.inputs}
            onChange={(e) => setname(e.target.value)}
            id="name"
            name="name"
            type="text"
          />
          <br />
          <label className={styles.labels} htmlFor="email">
            Email:
            </label>
          <input
            className={styles.inputs}
            id="email"
            name="email"
            type="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label className={styles.labels} htmlFor="code">
            Code:
            </label>
          <input
            className={styles.inputs}
            onChange={(e) => setcode(e.target.value)}
            id="code"
            name="code"
            type="text"
          />
          <br />
          <button type="submit" className={styles.buttons}>
            Submit
            </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default Takequiz;