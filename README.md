# React + TypeScript + Eslint 构建web端项目模板

使用React技术栈,Typescript辅助,Eslint校验构建一个工具类项目

## 过程

### 构建项目初始化

使用create-react-app脚手架构建,直接使用ts的模板
```
$ create-react-app react-ts-eslint-demo --typescript
$ # 或者
$ npx create react-app react-ts-eslint-demo --typescript
$ # 或者
$ yarn create react-app react-ts-eslint-demo --typescript
```

### Eslint 配置

具体相关配置参考链接[CSDN](https://blog.csdn.net/BePowerful/article/details/105765898)查看


Eslint是为了规范化代码, 首先需要再项目中安装eslint配置,由于开发中使用的是ts进行开发,因此还需要安装ts的解析器;
@typescript-eslint/parser: 将 TypeScript 转换为 ESTree，使 eslint 可以识别
@typescript-eslint/eslint-plugin: 只是一个可以打开或关闭的规则列表；

同时还需要安装standard和standard-react,表示eslint使用的规范标准,这里使用的是standard标准我们的代码

```
npm i eslint -D
npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
npm i eslint standard standard-react -D
```

自定义配置，添加配置文件 .eslintrc
```
module.exports = {
  parser: {}, // 解析器
  extends: [], // 继承的规则 [扩展]
  plugins: [], // 插件
  rules: {} // 规则
};
```
详细配置详情见.eslintrc文件

Visual Studio Code 集成 ESLint

最后，虽然默认配置（setting.json）已经很好，但默认只检测.js和 *.jsx文件，我们还需要配置typescripe，同时我们也希望有自动修复功能（有些是不可能自动修复）

user settings 与 workspace settings：user settings 里面是更通用的设置，workspace settings 是跟随项目存在，可以做到团队统一。

```
PS:
配置后,有一个小问题, import React from 'react' React 这里会报错,查询问题后大致是由于@typescript-eslint包自身的问题,待包自身修复,因为这边在eslint的规则中先将此规则屏蔽掉~("no-use-before-define": "off")
详细参考:https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
```


## 项目相关运行脚本

在项目的根目录下,运行一下脚本

### `yarn start` or `npm start`

运行项目,浏览器端访问[http://localhost:3000](http://localhost:3000)查看

### `yarn build` or `npm build`

打包命令

### `yarn eject` or `npm eject`

通过 npx create-react-app 安装以后，发现没有 webpack 相关的配置的目录，在读了 react 官方文档后，发现通过 yarn eject 可以弹出相关的配置，进行自定义配置。
默认下是不展示相关配置,需要我们执行这个命令将其暴露出来

### `yarn test` or `npm test`

这个命令还没有研究过 放上原英文吧 哈哈哈~
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
