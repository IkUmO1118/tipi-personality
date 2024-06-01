# Ten Item Personality Inventory

このアプリでは、「10項目性格インベントリ（Ten Item Personality Inventory, TIPI）」という心理学的研究に基づいた性格診断を行います。TIPIは、あなたの性格を短時間で簡単に評価するための信頼性の高い方法です。

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- ~~sessionStorageがなかった際(存在するurlに飛べたが、sessionStorageに予期したkeyが存在しなかった)、navigate('/home')に飛ばすなどの動作~~
- 画像読み込みの最適化(画像をpathを用いてrenderする　→ mapにてあらかじめpageを作成して、indexを用いて表示非表示を操作する)
- ~~ResultContainer.tsxのrefactoring~~
- 性格特性の組み合わせから得られる、傾向や向いている職、具体的な要素など
- ~~session(local)Storageが存在しても、再診断を行えるようにremoveする~~
- ~~localStorage (useGetLocalStorageKart)の整理~~
- Karteとdiagnosis-resultの整理(診断直後とそれ以降で名称が変更されるのは不自然)
- ~~名言apiの使用と適用~~
