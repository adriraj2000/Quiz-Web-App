
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import styles from '../styles/Dashboard.module.css';

const topics = [
    { id: 1, name: "<--select category-->" },
    { id: 9, name: "General Knowledge" },
    { id: 10, name: "Entertainment: Books" },
    { id: 11, name: "Entertainment: Film" },
    { id: 12, name: "Entertainment: Music" },
    { id: 13, name: "Entertainment: Musicals & Theatres" },
    { id: 14, name: "Entertainment: Television" },
    { id: 15, name: "Entertainment: Video Games" },
    { id: 16, name: "Entertainment: Board Games" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Science: Computers" },
    { id: 19, name: "Science: Mathematics" },
    { id: 20, name: "Mythology" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 24, name: "Politics" },
    { id: 25, name: "Art" },
    { id: 26, name: "Celebrities" },
    { id: 27, name: "Animals" },
    { id: 28, name: "Vehicles" },
    { id: 29, name: "Entertainment: Comics" },
    { id: 30, name: "Science: Gadgets" },
    { id: 31, name: "Entertainment: Japanese Anime & Manga" },
    { id: 32, name: "Entertainment: Cartoon & Animations" },
];

function Dashboard() {
    return (
        <React.Fragment>
            <div>
                <h1
                    className={styles.heading}
                    style={{ background: "white", fontSize: "2em", padding: "2%" }}
                >
                    Welcome
                </h1>
            </div>
            <button
                className={styles.buttons}
                style={{ float: "left", display: "block" }}
            >
                + Add Test
          </button>

            <br />
            <br />
            <br />

             
            <div className="quiz">
                <div className="quiz-row">
                    <div className="code">
                        <strong>Code</strong>
                    </div>
                    <div className="topic">
                        <strong>Topic</strong>
                    </div>
                    <div className="amount">
                        <strong>No. of Ques</strong>
                    </div>
                    <div className="time">
                        <strong>Time Duration (Mins)</strong>
                    </div>
                    <div className="expiry">
                        <strong>Expiry</strong>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </React.Fragment>
    );
}

export default Dashboard;
