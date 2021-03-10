module.exports = {
    roots: ['<rootDir>/components/'],
    coverageDirectory: '<rootDir>/coverage/',
    setupFilesAfterEnv: ['jest-extended'],
    preset: 'ts-jest',
    testMatch: [`<rootDir>/components/**/*.spec.tsx`],
};
