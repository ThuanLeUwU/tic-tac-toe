import React from "react";
import Cell from "./Cell";

type BoardProps = {
  cells: string[];
  onClick: (index: number) => void;
};

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
