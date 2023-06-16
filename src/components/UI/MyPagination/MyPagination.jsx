import React from "react";
import st from "./MyPagination.module.css";
import { useEffect } from "react";
import { useState } from "react";

const MyPagination = ({
    currentPage,
    totalPages,
    setPage,
    nextPage,
    prevPage,
}) => {
    const [pages, setPages] = useState([]);
    const svgs = {
        arrowLeft: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                className={st.arrow}
            >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
        ),
        arrowRight: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                className={st.arrow}
            >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
        ),
        start: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className={st.arrow}
            >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
            </svg>
        ),
        finish: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className={st.arrow}
            >
                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
            </svg>
        ),
    };

    useEffect(() => {
        const pagesArr = [];
        if (currentPage > 3 && currentPage < totalPages - 2 && totalPages > 5) {
            for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                pagesArr.push(i);
            }
        } else if (currentPage <= 3 && totalPages > 5) {
            for (let i = 1; i <= 5; i++) {
                pagesArr.push(i);
            }
        } else if (currentPage >= totalPages - 2 && totalPages > 5) {
            for (let i = totalPages - 4; i <= totalPages; i++) {
                pagesArr.push(i);
            }
        } else {
            for (let i = 1; i <= totalPages; i++) {
                pagesArr.push(i);
            }
        }

        setPages(pagesArr);
    }, [totalPages, currentPage]);

    return (
        <div className={st.pagination}>
            {currentPage > 2 && totalPages > 5 && (
                <div className={st.btn} onClick={() => setPage(1)}>
                    {svgs.start}
                </div>
            )}
            {currentPage !== 1 && (
                <div className={st.btn} onClick={prevPage}>
                    {svgs.arrowLeft}
                </div>
            )}
            {pages.map((page) => (
                <div
                    className={
                        st.btn +
                        `${page === currentPage ? " " + st.active : ""}`
                    }
                    key={page}
                    onClick={() => setPage(page)}
                >
                    {page}
                </div>
            ))}
            {currentPage !== totalPages && (
                <div className={st.btn} onClick={nextPage}>
                    {svgs.arrowRight}
                </div>
            )}
            {currentPage < totalPages - 1 && totalPages > 5 && (
                <div className={st.btn} onClick={() => setPage(totalPages)}>
                    {svgs.finish}
                </div>
            )}
        </div>
    );
};

export default MyPagination;
