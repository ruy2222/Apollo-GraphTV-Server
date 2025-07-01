export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: 'tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^\.\/index.js$': '<rootDir>/src/index.ts',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
