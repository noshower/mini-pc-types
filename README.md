# mini-pc-types

阿里 PC 端小程序 TypeScript 声明文件。

因为[mini-types](https://github.com/ant-mini-program/mini-types)的类型不符合我们开发 PC 端小程序，所以参考`mini-types`定义了一套 pc 端 TypeScript 声明文件。

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
