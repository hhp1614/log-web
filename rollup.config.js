import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'src/main.ts', // 入口文件
  output: [
    {
      file: pkg.main, // 输出文件名称
      format: 'cjs', // 输出模块格式
      sourcemap: false // 是否输出 sourcemap
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: false
    },
    {
      file: pkg.web,
      format: 'umd',
      name: pkg.webName, // umd 模块名称，相当于一个命名空间，会自动挂载到 window 下面
      sourcemap: false,
      plugins: [terser()]
    }
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext'
        }
      },
      useTsconfigDeclarationDir: true // 使用 tsconfig 中的声明文件目录配置
    })
  ]
};
