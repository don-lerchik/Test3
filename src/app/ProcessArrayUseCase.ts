import { ArrayGenerator, PrintableArray, MinValueFinder } from "../domain/Interfaces";

export class ProcessArrayUseCase {
  constructor(private arrayGenerator: ArrayGenerator, private arrayPrinter: PrintableArray, private minValueFinder: MinValueFinder) {}

  execute(rows: number, cols: number, min: number, max: number): void {
    const array = this.arrayGenerator.generate(rows, cols, min, max);
    const { minVal, minRowIdx } = this.minValueFinder.findMinValueInfo(array);
    this.arrayPrinter.printArray(array, minRowIdx);
  }
}
