import React, { useContext} from "react";
import MyLogo from "./MyLogo/MyLogo";
import NavMenu from "./NavMenu/NavMenu";
import SearchField from "./SearchField/SearchField";
import LoginHeaderButton from "./LoginHeaderButton/LoginHeaderButton";
import AccountHeaderButton from "./AccountHeaderButton/AccountHeaderButton";
import { AuthContext } from "../context";


const Header = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        <div className='header'>
            <div className='header_container'>
                <MyLogo />
                <NavMenu />
                <SearchField/>
                {isAuth ? <AccountHeaderButton/> : <LoginHeaderButton/>}                
            </div>
        </div>
    );
};

export default Header;
