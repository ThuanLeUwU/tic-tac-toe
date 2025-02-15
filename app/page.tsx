"use client";
import Board from "@/components/Board";
import Modal from "@/components/Modal";
import { howToWin } from "@/utils/howToWin";
import { useEffect, useState } from "react";

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState({ X: 0, O: 0, Draw: 0 });

  const winner = howToWin(board);
  const isDraw = board.every((cell) => cell !== null) && !winner;

  const handleClick = (idx: number) => {
    const updateBoard = [...board];
    if (updateBoard[idx] || winner) return;
    updateBoard[idx] = xTurn ? "X" : "O";
    setBoard(updateBoard);
    setXTurn(!xTurn);
  };

  useEffect(() => {
    if (winner) {
      setScore((prevScore) => ({
        ...prevScore,
        [winner as "X" | "O"]: prevScore[winner as "X" | "O"] + 1,
      }));
      setIsModalOpen(true);
    } else if (isDraw) {
      setIsModalOpen(true);
      setScore((prevScore) => ({
        ...prevScore,
        Draw: prevScore.Draw + 1,
      }));
    }
  }, [winner, isDraw]);

  useEffect(() => {
    if (winner || isDraw) {
      setIsModalOpen(true);
    }
  }, [winner, isDraw]);
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  };
  return (
    <>
      {winner || isDraw ? (
        <Modal
          isOpen={isModalOpen}
          message={winner ? `🎉 Winner: ${winner}!` : "🤝 Draw!"}
          onClose={resetGame}
        />
      ) : null}
      <div className="flex flex-col text-center">
        <div className="text-2xl font-bold">
          <p>Score</p>
          <p className="text-blue-600">
            X: {score.X} - Draw: {score.Draw} - O: {score.O}
          </p>
        </div>
        <p className="text-5xl font-bold mb-4">Turn: {xTurn ? "X" : "O"}</p>
        <Board cells={board} onClick={handleClick}></Board>
      </div>
    </>
  );
}
