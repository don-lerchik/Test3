import { Element } from "./Element";

export class Row {
  elements: Element[];

  constructor(elements: number[]) {
    this.elements = elements.map(value => new Element(value));
  }

  findMinPositive(): number | string {
    const positives = this.elements.filter(element => element.isPositive());
    return positives.length ? Math.min(...positives.map(element => element.value)) : 'No positive number';
  }

  countChangesRequired(): number {
    let posCount = 0, negCount = 0, changesRequired = 0;

    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i].isPositive()) {
        posCount++;
        negCount = 0;
      } else if (this.elements[i].isNegative()) {
        negCount++;
        posCount = 0;
      } else {
        posCount = 0;
        negCount = 0;
      }

      if (posCount === 3 || negCount === 3) {
        changesRequired++;
        posCount = 0;
        negCount = 0;

        if (i < this.elements.length - 1 && this.elements[i + 1].isPositive()) {
          posCount = 1;
        } else if (i < this.elements.length - 1 && this.elements[i + 1].isNegative()) {
          negCount = 1;
        }
      }
    }

    return changesRequired;
  }
}
