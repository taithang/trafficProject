import { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [radioValue, setRadioValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  async function fetchData(data) {
    const response = await fetch(
      "https://asia-east2-viphamgiaothong2019.cloudfunctions.net/national",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "X-Firebase-Appcheck":
            "eyJraWQiOiJYcEhKU0EiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxOjMxMzIwNTE1MTg3Mzp3ZWI6NjcyM2FhYTg1MGZjN2FiOWJkZDU4MCIsImF1ZCI6WyJwcm9qZWN0c1wvMzEzMjA1MTUxODczIiwicHJvamVjdHNcL3ZpcGhhbWdpYW90aG9uZzIwMTkiXSwicHJvdmlkZXIiOiJyZWNhcHRjaGFfdjMiLCJpc3MiOiJodHRwczpcL1wvZmlyZWJhc2VhcHBjaGVjay5nb29nbGVhcGlzLmNvbVwvMzEzMjA1MTUxODczIiwiZXhwIjoxNzA1MzExNTIzLCJpYXQiOjE3MDUzMDc5MjMsImp0aSI6ImhJcGhHc1o0aFJIWlpoZmc2RkJHX05DZERuaWxzRl9tMHEzeHpJV2hiVFEifQ.k-IvvOyay8H08nHET0WZIPAGskDQbo1-LyMx5bhYMQJaDgZrlz9tU51J3hvQmOlBDFMgy9nqfx2Cbp3ou6DWA-wNmZxgq7_DA5NUyXCojoZd6Uq8vwvkHwE3HR1Qj01qzIaS-flY-8A2bN0b_jfj_G1jTd2mjlpJ-jR6s84wFPraF2MMbFiYaxVoJyBRRqNZKyfNdMi1asULaS24okTs4UcPa_BH2QdZEGd_-Pq9bt36Un6Ak8eztRr1F-4xQGNXbCvE8dpk6ABPJJrX_aLbMBs4Cl7xf7ldPJ9-TDFxp8mFho0iyGcT_guBQJDy935pTRv4v2Bq9wysdTwUueiKvcr2bsrZO6JWejMwaX-uOShFGLi6hhgxwR3Gp6xVMJB1sk3tzjuf5zYlb0Rl3vwo-_5eeY1WPBrwd3kqsxsIH-GBoiVEJLjWCqmZtZXnE6rjGceTxLatPbVSNFysh5egS8pM71tbSjYMLQ2nN8yLYv_tfE3AzBkAv-t2BlXrOwxR",
        },
      }
    );
    console.log(response);
    const resData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    console.log(resData);
  }

  async function handleSubmit(radioValue, inputValue) {
    const data = {
      data: {
        BienKS: inputValue,
        Xe: radioValue,
      },
    };

    await fetchData(data);
  }

  return (
    <div>
      <h3>Loại phương tiện</h3>
      <div className={styles.form}>
        <div className={styles.radio}>
          <label htmlFor="oto">
            <input
              type="radio"
              name="myRadio"
              id="oto"
              value="1"
              onChange={(e) => setRadioValue(e.target.value)}
            />
            Ô tô
          </label>
          <label htmlFor="xemay">
            <input
              type="radio"
              name="myRadio"
              id="xemay"
              value="2"
              onChange={(e) => setRadioValue(e.target.value)}
            />
            Xe máy
          </label>
          <label htmlFor="xemaydien">
            <input
              type="radio"
              name="myRadio"
              id="xemaydien"
              value="3"
              onChange={(e) => setRadioValue(e.target.value)}
            />
            Xe máy điện
          </label>
        </div>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Biển số"
            className={styles.text}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button
          className={styles.submit}
          onClick={() => handleSubmit(radioValue, inputValue)}
        >
          Kiểm tra phạt nguội
        </button>
      </div>
    </div>
  );
}

export default Form;
