import { ArrayGenerator } from "../domain/Interfaces";
import { Array2D } from "../domain/Array";

export class RandomArrayGenerator implements ArrayGenerator {
  static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generate(rows: number, cols: number, min: number, max: number): Array2D {
    return new Array2D(Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => RandomArrayGenerator.getRandomInt(min, max))
    ));
  }
}
