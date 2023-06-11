import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";
import { AuthContext } from "../context";
import Loader3 from "./UI/Loader3/Loader3";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader3 />;
    }

    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    path={route.path}
                    element={<route.component />}
                    key={route.path}
                />
            ))}
            <Route path="*" element={<Navigate to="/top250" replace />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    path={route.path}
                    element={<route.component />}
                    key={route.path}
                />
            ))}
            <Route path="*" element={<Navigate to="/top250" replace />} />
        </Routes>
    );
};

export default AppRouter;
