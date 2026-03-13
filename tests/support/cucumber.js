module.exports = {
  default: {
    require: ["tests/support/hooks.ts", "tests/step-definitions/*.ts"],
    requireModule: ["ts-node/register"],
    paths: ["tests/features/*.feature"],
    format: ["progress"]
  }
};