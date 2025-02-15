import React from "react";
import Cell from "./Cell";
import "./../app/globals.css";

interface BoardProps {
  cells: string[]; // Assuming cells contain "X", "O", or ""
  onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ cells, onClick }) => {
  return (
    <div className="board">
      {cells.map((item, idx) => (
        <Cell key={idx} value={item} onClick={() => onClick(idx)} />
      ))}
    </div>
  );
};

export default Board;
