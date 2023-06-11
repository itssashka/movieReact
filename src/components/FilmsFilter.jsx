import React from "react";
import MySelect from "./UI/MySelect/MySelect";
import MyButton from "./UI/MyButton/MyButton";

const FilmsFilter = () => {
    return (
        <div style={{width: '100%'}}>
            <div className="block_filter">
                <div>
                    <div>Страны</div>
                    <MySelect />
                </div>
                <div>
                    <div>Жанры</div>
                    <MySelect />
                </div>
                <div>
                    <div>Годы</div>
                    <MySelect />
                </div>
                <MyButton style={{width: `100%`}}>Показать результат</MyButton>
            </div>
        </div>
    );
};

export default FilmsFilter;
