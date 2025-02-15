import React from "react";
import { Cells } from "@/app/constants/cell";
import classNames from "classnames";

type CellProps = {
  value: string;
  onClick: () => void;
};

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <div
      className={`cell ${classNames({
        "tw-text-blue-600": value === Cells.X,
        "tw-text-red-600": value === Cells.O,
      })}`}
      onClick={onClick}>
      {value === Cells.Empty ? null : value}
    </div>
  );
};

export default Cell;
