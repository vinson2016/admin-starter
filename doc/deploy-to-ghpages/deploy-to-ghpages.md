在开源项目中, 经常需要一些站点提供预览服务, 可以部署在免费的 [heroku](https://www.heroku.com), 更简单的方式是使用 [Github Pages](https://pages.github.com/).

第一步: 安装 [gh-pages](https://github.com/tschaub/gh-pages) 工具包

```sh
cd admin-starter
npm i --save-dev gh-pages
```

第二步: 修改`package.json` 的 `homepage` 字段和 `scripts` 字段如下:

```text
{
    // ... 其他配置
    "homepage": "https://rmlzy.github.io/admin-starter",
    "scripts": {
        // ... 其他配置
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build" // 注意: 如果你的打包输出目录不是 build 的话请同步修改
    }
}
```

注意: homepage 字段的规则为: `https://[your-user-name].github.io/[your-repo-name]/`

第三步: 执行 `npm run build`, 会触发 `pre` 钩子先打包, 之后 gh-pages 工具会自动帮你把 `build` 文件夹提交到仓库的 `gh-pages` 分支.

访问 [https://rmlzy.github.io/admin-starter](https://rmlzy.github.io/admin-starter), 如果正常的话, 将会看到如下界面:

![](resources/4323FE5A386C8FAE20A46F8250FEA7B6.jpg)



