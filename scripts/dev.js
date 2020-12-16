const spawn = require("cross-spawn");
const alias = require("./alias");

let target = process.argv[2];
target = alias[target] || target;

spawn("yarn", ["lerna", "run", "dev", "--scope", target, "--stream"], {
  stdio: "inherit",
});
