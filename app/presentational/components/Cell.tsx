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
      className="cell tw-flex tw-items-center tw-justify-center"
      onClick={onClick}>
      {value !== Cells.Empty && (
        <span
          className={classNames("tw-font-bold tw-text-center", {
            "tw-text-blue-600 tw-text-[8vw] md:tw-text-[5vw]":
              value === Cells.X, // X màu xanh
            "tw-text-red-600 tw-text-[8vw] md:tw-text-[5vw]": value === Cells.O, // O màu đỏ
          })}>
          {value}
        </span>
      )}
    </div>
  );
};

export default Cell;
