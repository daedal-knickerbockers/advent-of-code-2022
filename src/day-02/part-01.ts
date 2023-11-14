import path from "path";
import fs from "fs";

const inputPath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(inputPath, "utf8");

// A = Rock
// B = Paper
// C = Scissors
// X = Rock
// Y = Paper
// Z = Scissors

const shapeScores = {
    X: 1,
    Y: 2,
    Z: 3,
};
const wins = ["AY", "BZ", "CX"];
const losses = ["AZ", "BX", "CY"];

const strategyGuideScore = input.split("\n")
                    .map((strategy) => strategy.split(" ").join(""))
                    .reduce((previous, current) => {
                        let score = shapeScores[current.charAt(1)];
                        if (wins.includes(current)) {
                            score += 6;
                        } else if (losses.includes(current)) {
                            score += 0;
                        } else {
                            score += 3;
                        } 
                        return previous + score;
                    }, 0);
console.log(`StrategyGuideScore: ${strategyGuideScore}`);