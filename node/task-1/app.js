const arg = process.argv.slice(2);
const S = (arg) => Math.PI * 2 * arg;
console.log(`${S(arg).toFixed(2)}`);