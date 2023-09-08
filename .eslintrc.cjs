module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended', // 开启eslint的推荐规则
    'plugin:vue/vue3-recommended', // 开启vue3的推荐规则
    'plugin:@typescript-eslint/recommended', // 开启typescript的推荐规则
    'plugin:prettier/recommended', // 解决 eslint 和prettier的冲突，放在 extends的最后
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-explicit-any': 0, // 暂时关闭any校验
  },
}
