# mini-pc-types

[![npm package](https://img.shields.io/npm/v/mini-pc-types.svg?style=flat-square)](https://www.npmjs.com/package/mini-pc-types)
[![GitHub stars](https://img.shields.io/github/stars/noshower/mini-pc-types.svg)](https://github.com/noshower/mini-pc-types/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/noshower/mini-pc-types.svg)](https://github.com/noshower/mini-pc-types/network/members)
[![NPM downloads](https://img.shields.io/npm/dm/mini-pc-types.svg?style=flat-square)](https://www.npmjs.com/package/mini-pc-types)
[![GitHub issues](https://img.shields.io/github/issues/noshower/mini-pc-types.svg)](https://github.com/noshower/mini-pc-types/issues)

阿里 PC 端小程序 TypeScript 声明文件。

因为对于开发 pc 端小程序，[mini-types](https://github.com/ant-mini-program/mini-types)中存在一些多余的 API,或缺少一些 qn 的 API 类型，所以需要一套 PC 端的 typescript 类型

**mini-pc-types**只包含 PC 端小程序需要的 TypeScript 的类型

[淘宝 PC 端 API 文档](https://miniapp.open.taobao.com/docV3.htm?docId=117557&docType=1&source=search)

## 安装

```
npm install mini-pc-types --save
```

## 使用

在 `tsconfig.json` 文件中指定 `types` 配置。

```json
{
  "compilerOptions": {
    "types": ["mini-pc-types"]
  }
}
```

## 贡献

如果你有好的意见或建议，欢迎提 [issue](https://github.com/noshower/mini-pc-types/issues)。
