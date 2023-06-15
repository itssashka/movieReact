import React, { useEffect, useState } from "react";
import st from "./AccountHeaderButton.module.css";
import User from "../../utils/User";
import { Link } from "react-router-dom";

const AccountHeaderButton = () => {
    const [userName, setUserName] = useState();

    useEffect(()=>{
        const currentuser = User.currentUser();
        setUserName(currentuser[0])
    }, [])

    return <Link to="/account" className={st.square}><p>{userName}</p></Link>;
};

export default AccountHeaderButton;
