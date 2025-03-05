const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            fontWeight: currentPage === page ? "bold" : "normal",
            backgroundColor: currentPage === page ? "#007bff" : "#f0f0f0",
            color: currentPage === page ? "white" : "black",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};
