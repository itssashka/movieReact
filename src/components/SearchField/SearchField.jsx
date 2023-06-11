import React, { useEffect, useState } from "react";
import st from "./SearchField.module.css";
import SearchSVG from "./SearchSVG";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const SearchField = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        setSearchValue('')
    }, [])

    const onSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${searchValue}`)
    }

    

    return (
        <div className={st.search_box}>
            <form className={st.search_form} onSubmit={onSearch}>
                <input type="text" placeholder="Поиск" className={st.form_input} value={searchValue} onChange={e=>setSearchValue(e.target.value)}/>
                <button type="submit" className={st.search_submit}>
                    <SearchSVG name="submitSVG" />
                </button>
            </form>
        </div>
    );
};

export default SearchField;
