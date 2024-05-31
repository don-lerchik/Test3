import {Array2D} from "../domain/Array";

export class MinValueFinder implements MinValueFinder {
  findMinValueInfo(array: Array2D): { minVal: number, minRowIdx: number } {
    let minVal = Infinity;
    let minRowIdx = -1;
    array.rows.forEach((row, rowIndex) => {
      row.elements.forEach(element => {
        if (element.value < minVal) {
          minVal = element.value;
          minRowIdx = rowIndex;
        }
      });
    });
    return { minVal, minRowIdx };
  }
}
