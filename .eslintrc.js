module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "no-unused-vars": "error",
        "no-implicit-globals": "error",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    String: false,
                    Boolean: false,
                    Number: false,
                    Symbol: false,
                    "{}": false,
                    Object: false,
                    object: false,
                    Function: false,
                },
                extendDefaults: true,
            },
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};