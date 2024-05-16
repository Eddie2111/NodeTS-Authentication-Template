import { v4 } from "uuid";

function idGenerate(): string {
  return v4();
}
function randomInt(): number {
  const min = Math.ceil(1000000);
  const max = Math.floor(9999999);
  return Math.floor(Math.random() * (max - min)) + min;
}

export { idGenerate, randomInt };
