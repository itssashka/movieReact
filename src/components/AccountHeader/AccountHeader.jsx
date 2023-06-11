import React, { useContext } from "react";
import st from "./AccountHeader.module.css";
import MyButton from "../UI/MyButton/MyButton";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

const AccountHeader = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const onExit = () => {
        setIsAuth(false);
        navigate('/top250');
    }

    return (
        <div className={st.container}>
            <div className={st.user_info_header}>
                <h1>Информация о пользователе</h1>
                <MyButton
                    style={{ backgroundColor: "#E74C3C", width: "150px" }}
                    onClick={onExit}
                >
                    Выйти
                </MyButton>
            </div>
            <div className={st.user_info}>
                <div className={st.user_info_item}>
                    <p className={st.item_header}>Имя пользователя</p>
                    <p>solid</p>
                </div>
                <div className={st.user_info_item}>
                    <p className={st.item_header}>Почта</p>
                    <p>solid@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default AccountHeader;
