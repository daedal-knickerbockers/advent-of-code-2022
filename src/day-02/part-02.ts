import path from "path";
import fs from "fs";

const inputPath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(inputPath, "utf8");

// A = Rock
// B = Paper
// C = Scissors
// X = Lose
// Y = Draw
// Z = Win

const shapeScores = {
    A: 1,
    B: 2,
    C: 3,
};
const wins = {
    A: "B",
    B: "C",
    C: "A",
}
const losses = {
    A: "C",
    B: "A",
    C: "B",
};

const strategyGuideScore = input.split("\n")
                    .reduce((previous, current) => {
                        const [opponentMove, outcome] = current.split(" ");
                        let myMove: string = opponentMove;
                        let score = 0;
                        if (outcome === "X") {
                            myMove = losses[opponentMove];
                        } else if (outcome === "Z") {
                            myMove = wins[opponentMove];
                            score += 6;
                        } else {
                            score += 3;
                        }

                        score += shapeScores[myMove];
                        
                        return previous + score;
                    }, 0);
console.log(`StrategyGuideScore: ${strategyGuideScore}`);