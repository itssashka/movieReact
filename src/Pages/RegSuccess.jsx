import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Loader3 from "../components/UI/Loader3/Loader3";

const RegSuccess = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false);
            navigate('/login');
        }, 2000)
    }, [])

    

    return (
        <div className="login_wrapper flex_column align_center">
            <h1>Регистрация прошла успешно!</h1>
            {isLoading && <Loader3/>}
        </div>
    );
};

export default RegSuccess;
