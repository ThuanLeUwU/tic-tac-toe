import React from "react";
import "./../app/globals.css";

interface CellProps {
  value: string; // Ensures only valid values
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <div
      className={`cell ${
        value === "X" ? "text-blue-600" : value === "O" ? "text-red-600" : ""
      }`}
      onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
