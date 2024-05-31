import { RandomArrayGenerator } from "./infra/RandomArrayGenerator"
import { ArrayPrinter } from "./infra/ArrayPrinter";
import { MinValueFinder } from "./infra/MinValueFinder";
import { ProcessArrayUseCase } from "./app/ProcessArrayUseCase";

const arrayProcessorBuilder = new ProcessArrayUseCase(
  new RandomArrayGenerator(),
  new ArrayPrinter(),
  new MinValueFinder()
);

arrayProcessorBuilder.execute(10, 10, -100, 100);
