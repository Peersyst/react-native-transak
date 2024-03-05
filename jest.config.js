module.exports = {
  preset: "ts-jest",
  moduleDirectories: ["<rootDir>", "node_modules"],
  collectCoverageFrom: ["src/**/*.(ts|js|tsx|jsx)"],
  coverageThreshold: {
    global: {
      branches: 0,
      statements: 0,
    },
  },
};
