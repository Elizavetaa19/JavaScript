import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        onPageChange(page);
    };

    return (
        <div className="pagination">
            <button 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1}
                className="pagination-button"
            >
                Назад
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button 
                    key={index + 1} 
                    onClick={() => handlePageChange(index + 1)} 
                    className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                >
                    {index + 1}
                </button>
            ))}
            <button 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className="pagination-button"
            >
                Вперед
            </button>
        </div>
    );
};

export default Pagination;
