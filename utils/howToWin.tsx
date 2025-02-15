import { useEffect, useState } from "react";

export function howToWin(cells: any) {
  const [won, setWon] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const WINNING_COMBO = [
    //Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    checkWinner();
  }, [cells]);

  const checkWinner = () => {
    for (let combo of WINNING_COMBO) {
      const [a, b, c] = combo;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        setWinner(cells[a]);
        return;
      }
    }
    setWinner(null);
  };

  return winner;
}
