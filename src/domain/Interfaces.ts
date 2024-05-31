import type {Array2D} from "./Array";

export interface PrintableArray {
  printArray(array: Array2D, minRowIdx: number): void;
}

export interface ArrayGenerator {
  generate(rows: number, cols: number, min: number, max: number): Array2D;
}

export interface MinValueFinder {
  findMinValueInfo(array: Array2D): { minVal: number, minRowIdx: number };
}
