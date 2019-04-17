module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ["prettier", "prettier/standard", "plugin:vue/recommended"],
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};
