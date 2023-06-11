import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import { BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import User from "./utils/User";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (User.isLogin()) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
        setIsLoading(false);
    }, []);

    useEffect(()=>{
        console.log(isAuth);
        if(!isAuth && !isLoading){
            console.log('logout');
            const user = new User();
            user.logOutUser();
        }
    }, [isAuth])

    return (
        <div className="App">
            <AuthContext.Provider
                value={{
                    isAuth,
                    setIsAuth,
                    isLoading
                }}
            >
                <BrowserRouter>
                    <Header />
                    <AppRouter />
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
