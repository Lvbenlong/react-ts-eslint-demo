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

### `yarn test` or `npm test`

这个命令还没有研究过 放上原英文吧 哈哈哈~
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm build`

打包命令

### `yarn eject` or `npm eject`
这个命令还没有研究过 放上原英文吧 哈哈哈~
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

