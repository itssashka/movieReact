import React, { useEffect, useState } from "react";
import st from "./RegForm.module.css";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import EyeBtn from "../UI/EyeBtn/EyeBtn";
import { Link, useNavigate } from "react-router-dom";
import User from "../../utils/User";
import useForm from "../../hooks/useForm";

const RegForm = () => {
    const navigate = useNavigate();
    const [passVisible, setPassVisible] = useState({
        pass1: false,
        pass2: false,
    });
    const [userData, setUserData] = useState({
        email: "",
        username: "",
        password: "",
        password2: "",
    });
    const {errors, handleSubmit} = useForm(userData, onReg);
    const [emailError, setEmailError] = useState(false);

    function onReg (){
        console.log('Регистрация прошла');
        const user = new User(userData.email, userData.password, userData.username);
        if(Object.keys(user.checkUser(userData.email)).length === 0) {
            user.addUser();
            setEmailError(false);
            navigate(`/reg/success`);
        } else {
            setEmailError(true);
        }
        
    };


    return (
        <form className={[st.form]} onSubmit={handleSubmit} noValidate>
            <h1 style={{ fontWeight: "800", marginBottom: "20px" }}>
                Регистрация
            </h1>
            <MyInput
                type="text"
                fieldName="Email"
                value={userData.email}
                onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                }
            />
            {errors.email && <div className={st.error}>{errors.email}</div>}
            <MyInput
                type="text"
                fieldName="Username"
                value={userData.username}
                onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                }
            />
            {errors.username && <div className={st.error}>{errors.username}</div>}
            <MyInput
                type={passVisible.password ? "text" : "password"}
                fieldName={"Password"}
                value={userData.password}
                onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                }
            >
                <EyeBtn
                    isVisible={passVisible.password}
                    setVisible={() =>
                        setPassVisible({
                            ...passVisible,
                            password: !passVisible.password,
                        })
                    }
                />
            </MyInput>
            <MyInput
                type={passVisible.password2 ? "text" : "password"}
                fieldName={"Password 2"}
                value={userData.password2}
                onChange={(e) =>
                    setUserData({ ...userData, password2: e.target.value })
                }
            >
                <EyeBtn
                    isVisible={passVisible.password2}
                    setVisible={() =>
                        setPassVisible({
                            ...passVisible,
                            password2: !passVisible.password2,
                        })
                    }
                />
            </MyInput>
            {errors.password && <div className={st.error}>{errors.password}</div>}
            {emailError && <div className={st.error}>Пользователь с таким email уже существует</div>}
            <MyButton type="submit">
                Войти
            </MyButton>
            <Link className={st.login} to="/login">
                <p>Уже есть аккаунт</p>
            </Link>
        </form>
    );
};

export default RegForm;
