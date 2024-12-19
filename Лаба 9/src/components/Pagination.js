import React from 'react';
import './Pagination.css'; 

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="pagination">
            <button 
                className="pagination-button" 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                Назад
            </button>
            <span className="pagination-info">Страница {currentPage} из {totalPages}</span>
            <button 
                className="pagination-button" 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
            >
                Вперед
            </button>
        </div>
    );
};

export default Pagination;
