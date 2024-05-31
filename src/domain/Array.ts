import { Row } from "./Row";

export class Array2D {
  rows: Row[];

  constructor(rows: number[][]) {
    this.rows = rows.map(row => new Row(row));
  }

  findMinValueInfo(): { minVal: number, minRowIdx: number } {
    let minVal = Infinity;
    let minRowIdx = -1;
    this.rows.forEach((row, rowIndex) => {
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
