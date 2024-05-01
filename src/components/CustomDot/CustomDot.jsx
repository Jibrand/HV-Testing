const CustomDot = ({ onClick, index, active }) => {
  return (
    <button
      className={`dot ${active ? "active" : "inactive"}`}
      onClick={() => onClick()}
    >
      {/* Render the dot content based on index */}
    </button>
  );
};

export default CustomDot;
