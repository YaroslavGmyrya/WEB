"use client";
import React, { FormEvent, useState } from "react";
import styles from "./PromoBlock.module.css";
import CustomText from "../customColorText";
import CustomButton from "../customButton";

const PromoBlock = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const BlueText = CustomText("rgb(60, 159, 221)");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void>=> {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name); 
    formData.append("email", email);

    if (file) {
      formData.append("screenshot", file); 
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/UserPromoAPI/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const result = await response.json();
      console.log("Ответ от сервера:", result);
    } catch (error) {
      console.error("Ошибка отправки данных:", error);
    }
  };


  type User = {
    name: string;
    email: string;
  };

  const FetchUserData = async (user: User): Promise<void> => {
    try {
      const response = await fetch("http://127.0.0.1:8000/UserPromoAPI/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }

      const newUser: User = await response.json();
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
      throw error;
    }
  };


  return (
    <>
      <div className={styles.promo}>
        <div className={styles.headPromo}>
          <img src="promotion.svg" alt="Promotion"></img>
          <div className={styles.promoText}>Играй и выигрывай!</div>
        </div>

        <div className={styles.rules}>
          Играй в <BlueText>Cyberpunk 2077</BlueText> и получи возможность выиграть консоль
          <BlueText> Xbox Series X</BlueText> или <BlueText>Sony PlayStation 5</BlueText>!
          Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1
          февраля. Удачи!
        </div>

        <form onSubmit={handleSubmit} className={styles.promonBody}>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Как тебя зовут?"
              onChange={handleNameChange}
              value={name}
            ></input>

            <input
              className={styles.input}
              type="email"
              placeholder="Твой e-mail"
              onChange={handleEmailChange}
              value={email}
            ></input>

            <div className={styles.Screenshot}>
              <input
                style={{ opacity: "0%", width: "460px", height: "120px", position: "absolute" }}
                type="file"
                onChange={handleFileChange}
              ></input>
              <div className={styles.ScreenshotText}>
                <div style={{ fontSize: "18px" }}>Прикрепить скриншот</div>
                <div style={{ fontSize: "12px" }}>.png / .jpg / .pdf</div>
              </div>
            </div>

            <div className={styles.submitForm}>
              <CustomButton
                width={192}
                height={59}
                textColor="black"
                backgroundColor="rgba(248, 242, 0, 1)"
                font="Roboto"
                fontSize={18}
                fontWeight="700"
                type="submit"
              >
                Отправить
              </CustomButton>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                marginTop: "10px",
                height: "14px",
              }}
            >
              <div onClick={handleCheckboxChange} className={styles.checkbox}>
                {isChecked ? <img src="chekMark.svg" alt="Check Mark"></img> : ""}
              </div>

              <div style={{ color: "white", marginLeft: "10px" }}>
                Согласен на обработку персональных данных
              </div>
            </div>
          </div>

          <div className={styles.gameConsoles}>
            <img style={{ transform: "scale(0.95)" }} src="Consoles.png" alt="Consoles"></img>
          </div>
        </form>
      </div>
    </>
  );
};

export default PromoBlock;
