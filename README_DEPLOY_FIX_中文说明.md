# Rana 博客部署修复说明

这版主要修复“线上打开变成 RSS/XML 页面”的相关问题。

## 我改了什么

1. 修复 `.github/workflows/hugo.yaml`：
   - 原文件里 `actions/checkout` 的 `with:` 缩进不对，`submodules` 和 `fetch-depth` 没有真正传给 checkout。
   - 删除了不适合当前项目的 `hugo mod get`。现在项目使用本地 `themes/reimu` 主题/子模块，不需要 Hugo Module 拉取。
   - 按 GitHub Pages + Hugo 的方式重新整理了 build/deploy 流程：checkout 子模块 → 安装 Dart Sass → 安装 Hugo Extended → build → 上传 `public` → deploy。

2. 同步 `hugo.toml` 和 `config.toml`：
   - 之前两个配置文件内容不一致，一个是 Reimu，一个残留了 PaperMod 风格配置，容易造成线上/本地配置不一致。
   - 现在两个文件保持一致，主题固定为 `reimu`。

3. 临时关闭 RSS 输出：
   - `hugo.toml` / `config.toml` 加入 `disableKinds = ['RSS']`。
   - `[outputs] home = ['HTML']`，不再生成首页 RSS。
   - 这样可以避免 GitHub Pages 或浏览器入口误打开 `index.xml`。

4. 加入 `.nojekyll`：
   - `static/.nojekyll` 会在 Hugo 构建时复制到 `public/.nojekyll`。
   - workflow 里也会 `touch public/.nojekyll`，更保险。

## 你接下来怎么用

把这个压缩包解压到本地项目后，在项目根目录执行：

```bash
git add .
git commit -m "fix GitHub Pages Hugo deploy"
git push
```

然后去 GitHub 仓库：

`Settings → Pages → Build and deployment → Source`

确认选择的是：

```text
GitHub Actions
```

不要选 `Deploy from a branch`，也不要手动把 `public/` 当源码仓库推，避免和 Hugo 自动构建互相打架。

## 重要提醒

如果你真正访问的是 RSS 地址，例如：

```text
https://ranaski0814.github.io/myblog/index.xml
```

浏览器显示 `This XML file does not appear to have any style information associated with it` 是 RSS/XML 的正常浏览器提示，不是博客坏了。

正常首页应该访问：

```text
https://ranaski0814.github.io/myblog/
```

如果以后你想恢复 RSS，把 `hugo.toml` 和 `config.toml` 里的：

```toml
disableKinds = ['RSS']

[outputs]
  home = ['HTML']
```

改回：

```toml
[outputs]
  home = ['HTML', 'RSS']
```

并删除 `disableKinds = ['RSS']` 即可。
