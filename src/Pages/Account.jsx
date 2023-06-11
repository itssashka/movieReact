import React from "react";
import "../styles/account.css";
import AccountHeader from "../components/AccountHeader/AccountHeader";
import AccountFavorite from "../components/AccountFavorite/AccountFavorite";

const Account = () => {
    return (
        <div className="container flex_column account_container">
            <AccountHeader/>
            <AccountFavorite/>
        </div>
    );
};

export default Account;
