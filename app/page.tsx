"use client";
import Board from "@/app/presentational/components/Board";
import Modal from "@/app/presentational/components/Modal";
import { Cells } from "@/app/constants/cell";
import { Scores } from "@/app/constants/score";
import { howToWin } from "@/app/utils/helpers/how-to-win";
import { useEffect, useMemo, useState } from "react";

function getBoardInitValue(initValue: Cells | null) {
  return Array(9).fill(initValue);
}

export default function Home() {
  const [board, setBoard] = useState<Cells[]>(getBoardInitValue(Cells.Empty));
  const [xTurn, setXTurn] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [score, setScore] = useState<{ [key in Scores]: number }>({
    [Scores.X]: 0,
    [Scores.O]: 0,
    [Scores.Draw]: 0,
  });
  const winner = useMemo(() => howToWin(board), [board]);

  const handleClick = (idx: number) => {
    const updateBoard = [...board];
    if (updateBoard[idx] !== Cells.Empty || winner) return;
    updateBoard[idx] = xTurn ? Cells.X : Cells.O;
    setBoard(updateBoard);
    setXTurn(!xTurn);
  };
  const resetGame = () => {
    setBoard(getBoardInitValue(Cells.Empty));
    setXTurn(true);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!winner) return;
    setIsModalOpen(true);
    setScore((prevScore) => ({
      ...prevScore,
      [winner]: prevScore[winner] + 1,
    }));
  }, [winner]);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        message={
          !winner
            ? ""
            : winner === Scores.Draw
            ? "🤝 Draw!"
            : `🎉 Winner: ${winner}!`
        }
        onClose={resetGame}
      />
      <div className="tw-flex tw-flex-col tw-text-center">
        <div className="tw-text-2xl tw-font-bold tw-overflow-hidden tw-whitespace-nowrap">
          <p>Score</p>
          <p className="tw-text-blue-600">
            X: {score.X} - Draw: {score.Draw} - O: {score.O}
          </p>
        </div>
        <p className="tw-text-5xl tw-font-bold tw-mb-4 ">
          Turn: {xTurn ? Cells.X : Cells.O}
        </p>
        <Board cells={board} onClick={handleClick}></Board>
      </div>
    </>
  );
}
