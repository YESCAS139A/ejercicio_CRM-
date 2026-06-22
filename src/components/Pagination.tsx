type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange}: PaginationProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-140">
      <button onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 text-xs font-medium border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:curspr-not-allowed transition-colors"
        >
          Anterior
      </button>

      <span className="text-xs text-gray-600">
        Pagina <b className="text-gray-900">{currentPage}</b> de {totalPages}
      </span>
      <button
      onClick={() => onPageChange(currentPage + 1 )}
      disabled={currentPage === totalPages}
      className="px-3 py-1 text-xs font-medium border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:curspr-not-allowed transition-colors"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination
