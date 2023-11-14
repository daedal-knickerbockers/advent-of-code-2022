import fs from "fs";
import path from "path";

const inputPath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(inputPath, "utf8");
const elves = input.split("\n\n");
const caloryCounts: number[] = elves.map((elf) =>
    elf.split("\n")
        .map((calories) => Number.parseInt(calories, 10))
        .reduce((previous, current) => previous + current, 0)
);
const sortedCaloryCounts = caloryCounts.sort((a, b) => b - a);
const maxCaloryCount = sortedCaloryCounts[0];
console.log(`MaxCaloryCount: ${maxCaloryCount}`);

const topThreeCaloryCounts = sortedCaloryCounts.slice(0, 3).reduce((previous, current) => previous + current, 0);
console.log(`TopThreeCaloryCounts: ${topThreeCaloryCounts}`);