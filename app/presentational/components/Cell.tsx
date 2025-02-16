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
      className={classNames(
        "cell tw-flex tw-items-center tw-justify-center tw-border-4 tw-border-solid tw-transition-all",
        {
          "tw-border-blue-600 tw-pointer-events-none tw-bg-transparent":
            value === Cells.X,
          "tw-border-red-600 tw-pointer-events-none tw-bg-transparent":
            value === Cells.O,
          "hover:tw-border-gradient": value === Cells.Empty,
        }
      )}
      onClick={value === Cells.Empty ? onClick : undefined}>
      {value !== Cells.Empty && (
        <span
          className={classNames("tw-font-bold tw-text-center", {
            "tw-text-blue-600 tw-text-[10vw] md:tw-text-[5vw]":
              value === Cells.X,
            "tw-text-red-600 tw-text-[10vw] md:tw-text-[5vw]":
              value === Cells.O,
          })}>
          {value}
        </span>
      )}
    </div>
  );
};

export default Cell;
