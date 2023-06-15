import { useEffect, useState } from "react";

export default function usePagination(data = [], dataToShow, isLoading) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentData, setCurrentData] = useState([])

    useEffect(()=>{
        if(!isLoading) {
            setTotalPages(Math.ceil(data.length/dataToShow));
            const startIndex = ((currentPage - 1) * dataToShow);
            const endIndex = (startIndex + dataToShow);
            setCurrentData(data.slice(startIndex, endIndex)) 
        }
        
    }, [data, currentPage, isLoading])

    const changePage = (page) => {
        setCurrentPage(page);
    }

    const nextPage = () => {
        setCurrentPage(currentPage+1);
    }

    const prevPage = () => {
        setCurrentPage(currentPage-1);
    }

    console.log(currentData);
    
    return {
        currentData,
        nextPage,
        changePage,
        prevPage,
        totalPages,
        currentPage
    }
}