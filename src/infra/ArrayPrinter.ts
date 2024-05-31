import { PrintableArray } from "../domain/Interfaces";
import { Array2D } from "../domain/Array";
import { Row } from "../domain/Row";

export class ArrayPrinter implements PrintableArray {
  static printRow(row: Row, isMinRow: boolean, minPosVal: number | string, changesRequired: number): void {
    const rowString = row.elements.map(element => element.value.toString().padStart(4, ' ')).join(' ');
    const prefix = isMinRow ? '*' : ' ';
    console.log(`${prefix} ${rowString} | Min Pos: ${minPosVal} | Changes: ${changesRequired}`);
  }

  printArray(array: Array2D, minRowIdx: number): void {
    array.rows.forEach((row, rowIndex) => {
      const minPosVal = row.findMinPositive();
      const changesRequired = row.countChangesRequired();
      ArrayPrinter.printRow(row, rowIndex === minRowIdx, minPosVal, changesRequired);
    });
  }
}
