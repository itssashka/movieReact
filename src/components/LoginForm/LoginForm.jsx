import React, { useContext, useState } from "react";
import st from "./LoginForm.module.css";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import EyeBtn from "../UI/EyeBtn/EyeBtn";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import User from "../../utils/User";
import { AuthContext } from "../../context";

const LoginForm = () => {
    const navigate = useNavigate();
    const [passVisible, setPassVisible] = useState(false);
    const [userData, setUserData] = useState({email: '', password: ''})
    const {errors, handleSubmit} = useForm(userData, onLogin);
    const [userError, setUserError] = useState(false);
    const {setIsAuth} = useContext(AuthContext);
    
    function onLogin(){
        const user = new User();
        if((Object.keys(user.checkUser(userData.email)).length !== 0) && checkPass(user.checkUser(userData.email))){
            setUserError(false);
            user.LoginUser(userData.email);
            setIsAuth(true);
            navigate(`/top250`);
        } else {
            setUserError(true);
        }        
    }

    function checkPass(user){
        return user.userPass === userData.password;
    }
       

    return (
        <form action="#" className={st.form} noValidate onSubmit={handleSubmit} >
            <h1 style={{ fontWeight: "800", marginBottom: "20px" }}>
                Авторизация
            </h1>
            <MyInput
                type="text"
                fieldName="Email"
                value={userData.email}
                onChange={(e)=>setUserData({...userData, email: e.target.value})}
            />
            {errors.email && <div className={st.error}>{errors.email}</div>}
            <MyInput
                type={passVisible ? "text" : "password"}
                fieldName={"Password"}
                value={userData.password}
                onChange={(e)=>setUserData({...userData, password: e.target.value})}
            >
            <EyeBtn isVisible={passVisible} setVisible={()=>setPassVisible(!passVisible)}/>
                
            </MyInput>
            {errors.password && <div className={st.error}>{errors.password}</div>} 
            {userError && <div className={st.error}>Неправильный логин или пароль</div>}
            <MyButton>Войти</MyButton>
            <Link className={st.reg} to="/reg"><p>Зарегистрироваться</p></Link>
        </form>
    );
};

export default LoginForm;
