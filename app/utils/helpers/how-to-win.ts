import { Cells } from "@/app/constants/cell";
import { WINNING_COMBO } from "@/app/constants/combo";
import { PLAYERS } from "@/app/constants/player";
import { Scores } from "@/app/constants/score";

export function howToWin(cells: Cells[]): Scores | null {
  for (const combo of WINNING_COMBO) {
    const [a, b, c] = combo;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      const result = Object.values(PLAYERS).find(
        ({ cell }) => cell === cells[a]
      );
      if (result) {
        return result.score;
      }
    }
  }
  if (cells.every((cell) => cell !== Cells.Empty)) {
    return Scores.Draw;
  }
  return null;
}
