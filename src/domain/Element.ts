export class Element {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  isPositive(): boolean {
    return this.value > 0;
  }

  isNegative(): boolean {
    return this.value < 0;
  }
}
